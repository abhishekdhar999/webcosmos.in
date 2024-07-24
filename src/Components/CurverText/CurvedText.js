// import React, { useRef, useEffect } from 'react';
// import { Canvas, useFrame } from '@react-three/fiber';
// import { OrbitControls } from '@react-three/drei';
// import * as THREE from 'three';
// import { FontLoader } from 'three/examples/jsm/loaders/FontLoader';
// import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry';

// const CurvedText = () => {
//   const textRef = useRef();
//   const fontUrl = 'Futura Md BT Medium 4001721388824.json'; // Make sure this path is correct

//   useEffect(() => {
//     const loader = new FontLoader();
//     loader.load(fontUrl, (font) => {
//       const textGeometry = new TextGeometry('scdsc', {
//         font: font,
//         size: 10,
//         height: 1,
//       });

//       textGeometry.computeBoundingBox();
//       const centerOffset = -0.5 * (textGeometry.boundingBox.max.x - textGeometry.boundingBox.min.x);

//       textGeometry.translate(centerOffset, 0, 0);

//       const textMesh = new THREE.Mesh(
//         textGeometry,
//         new THREE.MeshBasicMaterial({ color: 0xffffff })
//       );

//       textRef.current.add(textMesh);
//     });
//   }, []);

//   return <group ref={textRef} />;
// };

// const Scene = () => {
//   return (
//     <Canvas>
//       <ambientLight />
//       <pointLight position={[10, 10, 10]} />
//       <CurvedText />
//       <OrbitControls />
//     </Canvas>
//   );
// };

// export default Scene;
