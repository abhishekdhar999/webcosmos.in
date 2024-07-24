// components/Card.js
import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { Html, Plane } from '@react-three/drei';

const CardThreeD = ({ image, title, position }) => {
  const cardRef = useRef();

  useFrame(() => {
    if (cardRef.current) {
      cardRef.current.rotation.y += 0.01; // Rotate the card slowly
    }
  });

  return (
    <group ref={cardRef} position={position}>
      <Plane args={[3, 4]} rotation={[0, Math.PI, 0]}>
        <meshBasicMaterial attach="material" side={THREE.DoubleSide}>
          <primitive attach="map" object={new THREE.TextureLoader().load(image)} />
        </meshBasicMaterial>
      </Plane>
      <Html position={[0, -2.5, 0]} center>
        <div style={{ color: 'white', textAlign: 'center' }}>
          <h2>{title}</h2>
        </div>
      </Html>
    </group>
  );
};

export default CardThreeD;
