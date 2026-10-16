import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export interface SunProps {
  showGlow: boolean;
  sunScale?: number;
}

export const Sun: React.FC<SunProps> = ({ showGlow, sunScale = 2.8 }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const coronaRef = useRef<THREE.Mesh>(null);

  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.15;
    }
    if (coronaRef.current) {
      coronaRef.current.rotation.z -= delta * 0.08;
    }
  });

  return (
    <group>
      <pointLight intensity={3.2} distance={500} decay={0.2} color="#fff7ed" />
      <ambientLight intensity={0.28} />
      <mesh ref={meshRef}>
        <sphereGeometry args={[sunScale, 48, 48]} />
        <meshBasicMaterial color="#fbbf24" />
      </mesh>
      {showGlow && (
        <mesh ref={coronaRef} scale={[1.45, 1.45, 1.45]}>
          <sphereGeometry args={[sunScale, 32, 32]} />
          <meshBasicMaterial
            color="#f97316"
            transparent
            opacity={0.25}
            blending={THREE.AdditiveBlending}
            depthWrite={false}
          />
        </mesh>
      )}
    </group>
  );
};
