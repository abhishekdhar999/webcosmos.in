"use client";

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const Blob = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;

    // Scene
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(75, mount.clientWidth / mount.clientHeight, 0.1, 1000);
    camera.position.z = 50;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    mount.appendChild(renderer.domElement);

    // Blob Shader
    const vertexShader = `
      uniform float uTime;
      varying vec3 vNormal;
      void main() {
        vNormal = normalize(normalMatrix * normal);
        vec3 newPosition = position + normal * sin(position.y * 4.0 + position.x * 4.0 + position.z * 4.0 + uTime) * 1.0;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
      }
    `;

    const fragmentShader = `
      varying vec3 vNormal;
      void main() {
        vec3 color = vec3(0.5 + 0.5 * sin(vNormal.x), 0.5 + 0.5 * sin(vNormal.y), 0.5 + 0.5 * sin(vNormal.z));
        gl_FragColor = vec4(color, 1.0);
      }
    `;

    const blobGeometry = new THREE.SphereGeometry(22, 28, 48);
    const blobMaterial = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms: {
        uTime: { value: 0.0 }
      },
      wireframe: true
    });

    const blob = new THREE.Mesh(blobGeometry, blobMaterial);
    scene.add(blob);

    // Mouse interaction
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    const onMouseMove = (event) => {
      // Calculate mouse position in normalized device coordinates
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

      // Update raycaster
      raycaster.setFromCamera(mouse, camera);

      // Check for intersections
      const intersects = raycaster.intersectObjects([blob]);

      if (intersects.length > 0) {
        // Rotate blob around its center based on mouse movement
        const intersectionPoint = intersects[0].point;
        blob.rotation.x = Math.atan2(intersectionPoint.z, intersectionPoint.y) * 0.5;
        blob.rotation.y = Math.atan2(intersectionPoint.z, intersectionPoint.y) * 0.5;
        blob.rotation.z = -Math.atan2(intersectionPoint.x, intersectionPoint.y) * 0.5;
      }
    };

    window.addEventListener('mousemove', onMouseMove);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      blobMaterial.uniforms.uTime.value += 0.05;
      renderer.render(scene, camera);
    };
    animate();

    // Handle window resize
    const handleResize = () => {
      const width = mount.clientWidth;
      const height = mount.clientHeight;
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };

    window.addEventListener('resize', handleResize);

    // Clean up
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', onMouseMove);
      mount.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} style={{ width: '100%', height: '100vh' }} />;
};

export default Blob;
