import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float } from '@react-three/drei';
import { InteractiveCyberCore } from './InteractiveCyberCore';
import { ParticleNexus } from './ParticleNexus';
import type { CustomizerSettings } from '../../types/portfolio';
import { THEME_CONFIGS } from '../../data/portfolioData';

interface Props {
  settings: CustomizerSettings;
}

export const Hero3DCanvas: React.FC<Props> = ({ settings }) => {
  const theme = THEME_CONFIGS[settings.theme] || THEME_CONFIGS.cyberpunk;

  return (
    <div className="w-full h-full relative cursor-grab active:cursor-grabbing">
      <Canvas
        camera={{ position: [0, 0, 7], fov: 55 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.6} />
        <directionalLight position={[10, 10, 5]} intensity={1.5} color={theme.primary} />
        <pointLight position={[-10, -10, -5]} intensity={1} color={theme.secondary} />
        <spotLight position={[0, 15, 0]} intensity={0.8} color={theme.accent} angle={0.6} />

        <Suspense fallback={null}>
          <Float speed={2} rotationIntensity={0.5} floatIntensity={0.8}>
            <InteractiveCyberCore settings={settings} />
          </Float>
          <ParticleNexus settings={settings} />
        </Suspense>

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate={false}
          maxPolarAngle={Math.PI / 1.5}
          minPolarAngle={Math.PI / 3}
        />
      </Canvas>
    </div>
  );
};
