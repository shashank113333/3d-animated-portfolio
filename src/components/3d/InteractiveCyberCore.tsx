import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Mesh } from 'three';
import type { CustomizerSettings } from '../../types/portfolio';
import { THEME_CONFIGS } from '../../data/portfolioData';

interface Props {
  settings: CustomizerSettings;
}

export const InteractiveCyberCore: React.FC<Props> = ({ settings }) => {
  const meshRef = useRef<Mesh>(null);
  const outerRingRef = useRef<Mesh>(null);
  const theme = THEME_CONFIGS[settings.theme] || THEME_CONFIGS.cyberpunk;

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.4 * settings.rotationSpeed;
      meshRef.current.rotation.y += delta * 0.6 * settings.rotationSpeed;
      
      // Subtle float oscillation
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 1.5) * 0.15;
    }

    if (outerRingRef.current) {
      outerRingRef.current.rotation.x -= delta * 0.2 * settings.rotationSpeed;
      outerRingRef.current.rotation.z += delta * 0.3 * settings.rotationSpeed;
      outerRingRef.current.position.y = Math.sin(state.clock.elapsedTime * 1.5) * 0.15;
    }
  });

  const renderGeometry = () => {
    switch (settings.shape) {
      case 'icosahedron':
        return <icosahedronGeometry args={[1.6, 2]} />;
      case 'octahedron':
        return <octahedronGeometry args={[1.8, 0]} />;
      case 'ring':
        return <torusGeometry args={[1.5, 0.4, 16, 100]} />;
      case 'sphere':
        return <sphereGeometry args={[1.6, 32, 32]} />;
      case 'torusKnot':
      default:
        return <torusKnotGeometry args={[1.3, 0.38, 128, 32]} />;
    }
  };

  return (
    <group>
      {/* Outer Rotating Cyber Ring */}
      <mesh ref={outerRingRef}>
        <torusGeometry args={[2.4, 0.04, 16, 100]} />
        <meshStandardMaterial
          color={theme.secondary}
          emissive={theme.secondary}
          emissiveIntensity={0.8}
          wireframe
        />
      </mesh>

      {/* Main 3D Interactive Core */}
      <mesh ref={meshRef} scale={1.1}>
        {renderGeometry()}
        <meshStandardMaterial
          color={theme.primary}
          emissive={theme.primary}
          emissiveIntensity={settings.wireframe ? 0.9 : 0.4}
          roughness={0.15}
          metalness={0.85}
          wireframe={settings.wireframe}
        />
      </mesh>

      {/* Inner Glowing Orb */}
      <mesh scale={0.75}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshBasicMaterial
          color={theme.accent}
          transparent
          opacity={0.35}
        />
      </mesh>
    </group>
  );
};
