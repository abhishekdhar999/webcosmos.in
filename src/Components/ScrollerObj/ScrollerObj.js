import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three-stdlib';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const ScrollerObj = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 1.25;
    controls.enableZoom = false;

    // GLTF Loader
    const loader = new GLTFLoader();
    let model;
    loader.load('nec_computer.glb', (gltf) => {
      model = gltf.scene;
      model.scale.set(1.4, 1.4, 1.4);
      model.rotation.set(1, 0.4, 0);
      scene.add(model);
    });

    // Handle window resize
    const onWindowResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', onWindowResize);

    // Scroll event
    const onScroll = () => {
      if (model) {
        const scrollY = window.scrollY;
        const rotationSpeed = 0.001;
        model.rotation.x = scrollY * rotationSpeed;
        model.rotation.y = scrollY * rotationSpeed;
      }
    };

    window.addEventListener('scroll', onScroll);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };

    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', onWindowResize);
      window.removeEventListener('scroll', onScroll);
      mountRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return <div className='bg-white relative top-[-100px] left-[-500px]' ref={mountRef} style={{ width: '200%', height: '100vh' }} />;
};

export default ScrollerObj;
