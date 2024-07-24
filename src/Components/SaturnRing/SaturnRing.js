// "use client";

// import React, { useEffect, useRef } from 'react';
// import * as THREE from 'three';
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

// const SaturnRing = ({ center }) => {
//   const mountRef = useRef(null);

//   useEffect(() => {
//     const mount = mountRef.current;
//     const scene = new THREE.Scene();
//     const camera = new THREE.PerspectiveCamera(75, mount.clientWidth / mount.clientHeight, 0.1, 1000);
//     camera.position.z = 50;

//     const renderer = new THREE.WebGLRenderer({ alpha: true });
//     renderer.setSize(mount.clientWidth, mount.clientHeight);
//     mount.appendChild(renderer.domElement);

//     const ambientLight = new THREE.AmbientLight(0x404040);
//     scene.add(ambientLight);

//     const pointLight = new THREE.PointLight(0xffffff, 1, 1000);
//     pointLight.position.set(70, 60, 90);
//     scene.add(pointLight);

//     const loader = new GLTFLoader();
//     const models = [];
//     const ringRadius = 20; // Adjust radius of the ring
//     const objectCount = 20; // Adjust the number of objects in the ring
//     const tilt = 0.35; // Adjust the tilt angle of the ring
//     const angleStep = (2 * Math.PI) / objectCount;

//     loader.load('nec_computer.glb', (gltf) => {
//       for (let i = 0; i < objectCount; i++) {
//         const model = gltf.scene.clone();
//         const angle = i * angleStep;
//         const x = Math.cos(angle) * ringRadius;
//         const y = tilt * ringRadius * Math.sin(angle); // Tilted y position
//         const z = Math.sin(angle) * ringRadius;
//         model.position.set(x, y, z);
//         model.traverse((child) => {
//           if (child.isMesh) {
//             child.material.color.setHex(0xff0000);  // Set color to red
//           }
//         });
//         models.push(model);
//         scene.add(model);
//       }
//     });

//     const animate = () => {
//       requestAnimationFrame(animate);
//       models.forEach((model, index) => {
//         const angle = performance.now() / 1000 + index * Math.PI * 2 / objectCount;
//         const x = Math.cos(angle) * ringRadius;
//         const y = tilt * ringRadius * Math.sin(angle); // Tilted y position
//         const z = Math.sin(angle) * ringRadius;
//         model.position.set(x, y, z);
//         model.rotation.y = angle; // Rotate around the y-axis
//       });
//       renderer.render(scene, camera);
//     };
//     animate();

//     const handleResize = () => {
//       const width = mount.clientWidth;
//       const height = mount.clientHeight;
//       renderer.setSize(width, height);
//       camera.aspect = width / height;
//       camera.updateProjectionMatrix();
//     };

//     window.addEventListener('resize', handleResize);

//     return () => {
//       window.removeEventListener('resize', handleResize);
//       mount.removeChild(renderer.domElement);
//     };
//   }, [center]);

//   return <div ref={mountRef} style={{ width: '100%', height: '100vh' }} />;
// };

// export default SaturnRing;
