import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Points, Color } from 'three';
import type { CustomizerSettings } from '../../types/portfolio';
import { THEME_CONFIGS } from '../../data/portfolioData';

interface Props {
  settings: CustomizerSettings;
}

export const ParticleNexus: React.FC<Props> = ({ settings }) => {
  const pointsRef = useRef<Points>(null);
  const theme = THEME_CONFIGS[settings.theme] || THEME_CONFIGS.cyberpunk;
  const count = settings.particleDensity;

  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const cols = new Float32Array(count * 3);

    const color1 = new Color(theme.primary);
    const color2 = new Color(theme.secondary);

    for (let i = 0; i < count; i++) {
      const radius = 3.5 + Math.random() * 8.5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);

      pos[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = radius * Math.cos(phi);

      const mix = Math.random();
      const mixedColor = color1.clone().lerp(color2, mix);

      cols[i * 3] = mixedColor.r;
      cols[i * 3 + 1] = mixedColor.g;
      cols[i * 3 + 2] = mixedColor.b;
    }

    return [pos, cols];
  }, [count, theme]);

  useFrame((_, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta * 0.05 * settings.rotationSpeed;
      pointsRef.current.rotation.x += delta * 0.02 * settings.rotationSpeed;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
        <bufferAttribute
          attach="attributes-color"
          args={[colors, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        vertexColors
        transparent
        opacity={0.75}
        sizeAttenuation
      />
    </points>
  );
};
