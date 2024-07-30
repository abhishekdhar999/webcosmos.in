import React, { useRef, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// Function to generate random stars for a sphere
const createRandomSphere = (radius, starsCount) => {
  const stars = [];
  for (let i = 0; i < starsCount; i++) {
    // Generate random spherical coordinates
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);
    const r = radius * Math.cbrt(Math.random()); // Uniform distribution within the sphere

    // Convert spherical coordinates to Cartesian coordinates
    const x = r * Math.sin(phi) * Math.cos(theta);
    const y = r * Math.sin(phi) * Math.sin(theta);
    const z = r * Math.cos(phi);

    stars.push(x, y, z);
  }
  return stars;
};

const StarSphere = () => {
  const sphereRef = useRef();
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);
  const [isMouseMoving, setIsMouseMoving] = useState(false);

  // Update the mouse position based on movement
  const handleMouseMove = (event) => {
    setMouseX(event.clientX);
    setMouseY(event.clientY);
    setIsMouseMoving(true);
  };

  // Reset mouse movement state after a short delay
  useEffect(() => {
    if (isMouseMoving) {
      const timeout = setTimeout(() => {
        setIsMouseMoving(false);
      }, 3000); // Adjust the timeout duration as needed
      return () => clearTimeout(timeout);
    }
  }, [isMouseMoving]);

  // Rotate based on mouse position and continuous rotation
  useFrame(() => {
    if (sphereRef.current) {
      const width = window.innerWidth;
      const height = window.innerHeight;

      // Calculate rotation based on mouse position
      const xRotation = (mouseY / height - 0.5) * Math.PI * 0.2;
      const yRotation = (mouseX / width - 0.5) * Math.PI * 0.2;

      // Apply combined rotation
      if (isMouseMoving) {
        sphereRef.current.rotation.x = xRotation;
        sphereRef.current.rotation.y = yRotation;
      } else {
        sphereRef.current.rotation.y += 0.001; // Adjust rotation speed as needed
      }
    }
  });

  useEffect(() => {
    // Add mouse move event listener
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      // Clean up event listener on unmount
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const outerRadius = 2.7; // Outer sphere radius
    const innerRadius = 1.4; // Inner sphere radius
    const outerStarsCount = 1500;
    const innerStarsCount = 2500;

    // Create outer sphere
    const outerStars = createRandomSphere(outerRadius, outerStarsCount);
    const outerGeometry = new THREE.BufferGeometry();
    outerGeometry.setAttribute('position', new THREE.Float32BufferAttribute(outerStars, 3));
    const outerMaterial = new THREE.PointsMaterial({ color: 0xffffff, size: 0.01 });
    const outerMesh = new THREE.Points(outerGeometry, outerMaterial);

    // Create inner sphere
    const innerStars = createRandomSphere(innerRadius, innerStarsCount);
    const innerGeometry = new THREE.BufferGeometry();
    innerGeometry.setAttribute('position', new THREE.Float32BufferAttribute(innerStars, 3));
    const innerMaterial = new THREE.PointsMaterial({ color: "#E0A800", size: 0.01 });
    const innerMesh = new THREE.Points(innerGeometry, innerMaterial);

    // Add both spheres to the group
    sphereRef.current.add(outerMesh);
    sphereRef.current.add(innerMesh);
  }, []);

  return (
    <group ref={sphereRef}></group>
  );
};

const Model = () => {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <directionalLight position={[2, 2, 5]} />
      <StarSphere />
    </Canvas>
  );
};

export default Model;
