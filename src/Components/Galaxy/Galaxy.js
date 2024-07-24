"use client";

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const Galaxy = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;

    // Scene
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(75, mount.clientWidth / mount.clientHeight, 0.1, 1000);
    camera.position.z = 100;

    // Renderer
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    mount.appendChild(renderer.domElement);

    // Star Geometry
    const starGeometry = new THREE.BufferGeometry();
    const starMaterial = new THREE.PointsMaterial({ color: 0xffffff });

    const starVertices = [];
    for (let i = 0; i < 10000; i++) {
      const x = THREE.MathUtils.randFloatSpread(1000);
      const y = THREE.MathUtils.randFloatSpread(5000);
      const z = THREE.MathUtils.randFloatSpread(2000);

      starVertices.push(x, y, z);
    }

    starGeometry.setAttribute('position', new THREE.Float32BufferAttribute(starVertices, 3));

    const stars = new THREE.Points(starGeometry, starMaterial);
    scene.add(stars);

    
    // Add some light
    const ambientLight = new THREE.AmbientLight(0x404040); // Soft white light
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xffffff, 1, 1000);
    pointLight.position.set(90, 90, 90);
    scene.add(pointLight);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      stars.rotation.x += 0.001;
      stars.rotation.y += 0.001;

    //   stones.forEach(stone => {
    //     stone.rotation.x += 0.01;
    //     stone.rotation.y += 0.01;
    //   });

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
      mount.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} style={{ width: '100%', height: '100vh' }} />;
};

export default Galaxy;


// import React, { useEffect, useRef } from 'react';
// import * as THREE from 'three';

// const Galaxy = () => {
//   const mountRef = useRef(null);

//   useEffect(() => {
//     // Scene setup
//     const scene = new THREE.Scene();
//     const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
//     camera.position.z = 200;

//     const renderer = new THREE.WebGLRenderer({ alpha: true });
//     renderer.setSize(window.innerWidth, window.innerHeight);
//     mountRef.current.appendChild(renderer.domElement);

//     // Add stars
//     const starGeometry = new THREE.BufferGeometry();
//     const starMaterial = new THREE.PointsMaterial({ color: 0xffffff });

//     const starVertices = [];
//     for (let i = 0; i < 10000; i++) {
//       const x = THREE.MathUtils.randFloatSpread(1000);
//       const y = THREE.MathUtils.randFloatSpread(5000);
//       const z = THREE.MathUtils.randFloatSpread(2000);

//       starVertices.push(x, y, z);
//     }

//     starGeometry.setAttribute('position', new THREE.Float32BufferAttribute(starVertices, 3));
//     const stars = new THREE.Points(starGeometry, starMaterial);
//     scene.add(stars);

//     // Load cubemap for reflection
//     const cubeTextureLoader = new THREE.CubeTextureLoader();
//     const cubemap = cubeTextureLoader.setPath('/path/to/cubemap/').load([
//       'px.jpg', 'nx.jpg',
//       'py.jpg', 'ny.jpg',
//       'pz.jpg', 'nz.jpg'
//     ]);

//     // Torus creation
//     const createTorus = (x, y, z) => {
//       const geometry = new THREE.TorusGeometry(10, 3, 16, 100);
//       const material
