import React from 'react';
import { Sliders, X, Sparkles, Volume2, VolumeX, RefreshCw, Palette, Box } from 'lucide-react';
import type { CustomizerSettings, CoreShape, ThemeColor } from '../../types/portfolio';
import { soundFX } from '../../utils/soundSynthesizer';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  settings: CustomizerSettings;
  onUpdateSettings: (newSettings: Partial<CustomizerSettings>) => void;
}

export const Customizer3DWidget: React.FC<Props> = ({
  isOpen,
  onClose,
  settings,
  onUpdateSettings
}) => {
  if (!isOpen) return null;

  const shapes: { id: CoreShape; label: string }[] = [
    { id: 'torusKnot', label: 'Torus Knot' },
    { id: 'icosahedron', label: 'Icosahedron' },
    { id: 'octahedron', label: 'Octahedron' },
    { id: 'ring', label: 'Cyber Ring' },
    { id: 'sphere', label: 'Sphere' }
  ];

  const themes: { id: ThemeColor; label: string; color: string }[] = [
    { id: 'cyberpunk', label: 'Cyberpunk Neon', color: 'from-cyan-400 to-purple-600' },
    { id: 'matrix', label: 'Matrix Emerald', color: 'from-emerald-400 to-green-600' },
    { id: 'sunset', label: 'Sunset Amber', color: 'from-orange-400 to-rose-600' },
    { id: 'cosmos', label: 'Deep Cosmos', color: 'from-indigo-400 to-pink-600' }
  ];

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-slate-950/70 backdrop-blur-md animate-fadeIn">
      
      {/* Backdrop Click */}
      <div className="flex-1" onClick={onClose} />

      {/* Slide-in Control Panel */}
      <div className="w-full max-w-md h-full glass-panel border-l border-purple-500/30 p-6 overflow-y-auto space-y-8 shadow-2xl">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-white/10">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-xl bg-purple-950 border border-purple-500/40 text-purple-400">
              <Sliders className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white flex items-center gap-1.5">
                3D World Sandbox
                <Sparkles className="w-4 h-4 text-pink-400" />
              </h3>
              <p className="text-xs text-gray-400 font-mono">Tweak 3D graphics in real time</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl glass-card text-gray-400 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* 1. Core Shape Picker */}
        <div className="space-y-3">
          <label className="text-xs font-mono uppercase tracking-wider text-cyan-300 flex items-center gap-2">
            <Box className="w-4 h-4 text-cyan-400" />
            <span>3D Core Geometry</span>
          </label>
          <div className="grid grid-cols-2 gap-2">
            {shapes.map((s) => (
              <button
                key={s.id}
                onClick={() => {
                  soundFX.playClick();
                  onUpdateSettings({ shape: s.id });
                }}
                onMouseEnter={() => soundFX.playHover()}
                className={`py-2.5 px-3 rounded-xl text-xs font-mono text-left transition-all ${
                  settings.shape === s.id
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-slate-950 font-bold shadow-md shadow-cyan-500/30'
                    : 'glass-card text-gray-300 hover:text-white hover:border-cyan-500/30'
                }`}
              >
                {s.label}
              </button>
            ))}
          </div>
        </div>

        {/* 2. Color Scheme Picker */}
        <div className="space-y-3">
          <label className="text-xs font-mono uppercase tracking-wider text-purple-300 flex items-center gap-2">
            <Palette className="w-4 h-4 text-purple-400" />
            <span>Color Theme</span>
          </label>
          <div className="grid grid-cols-2 gap-2">
            {themes.map((t) => (
              <button
                key={t.id}
                onClick={() => {
                  soundFX.playWarp();
                  onUpdateSettings({ theme: t.id });
                }}
                onMouseEnter={() => soundFX.playHover()}
                className={`py-2.5 px-3 rounded-xl text-xs font-mono flex items-center gap-2 transition-all ${
                  settings.theme === t.id
                    ? 'glass-card border-purple-400 text-white glow-purple'
                    : 'glass-card text-gray-400 hover:text-white'
                }`}
              >
                <span className={`w-3 h-3 rounded-full bg-gradient-to-r ${t.color}`} />
                <span>{t.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* 3. Wireframe Shader Toggle */}
        <div className="flex items-center justify-between p-4 rounded-xl glass-card border border-white/10">
          <div>
            <div className="text-sm font-bold text-white">Wireframe Cyber Mesh</div>
            <div className="text-xs text-gray-400">Toggle wireframe vertex shader</div>
          </div>
          <button
            onClick={() => {
              soundFX.playClick();
              onUpdateSettings({ wireframe: !settings.wireframe });
            }}
            className={`w-12 h-6 rounded-full transition-colors relative p-1 ${
              settings.wireframe ? 'bg-cyan-500' : 'bg-slate-800'
            }`}
          >
            <div
              className={`w-4 h-4 rounded-full bg-slate-950 transition-transform ${
                settings.wireframe ? 'translate-x-6' : 'translate-x-0'
              }`}
            />
          </button>
        </div>

        {/* 4. Rotation Speed Slider */}
        <div className="space-y-2">
          <div className="flex justify-between text-xs font-mono text-gray-300">
            <span>Rotation Speed</span>
            <span className="text-cyan-400 font-bold">{settings.rotationSpeed.toFixed(1)}x</span>
          </div>
          <input
            type="range"
            min="0.2"
            max="3"
            step="0.1"
            value={settings.rotationSpeed}
            onChange={(e) => onUpdateSettings({ rotationSpeed: parseFloat(e.target.value) })}
            className="w-full accent-cyan-400 bg-slate-900 h-2 rounded-lg cursor-pointer"
          />
        </div>

        {/* 5. Particle Density Slider */}
        <div className="space-y-2">
          <div className="flex justify-between text-xs font-mono text-gray-300">
            <span>Orbital Particles</span>
            <span className="text-purple-400 font-bold">{settings.particleDensity}</span>
          </div>
          <input
            type="range"
            min="500"
            max="3000"
            step="250"
            value={settings.particleDensity}
            onChange={(e) => onUpdateSettings({ particleDensity: parseInt(e.target.value) })}
            className="w-full accent-purple-400 bg-slate-900 h-2 rounded-lg cursor-pointer"
          />
        </div>

        {/* 6. Sound Effects Toggle */}
        <div className="flex items-center justify-between p-4 rounded-xl glass-card border border-white/10">
          <div className="flex items-center gap-2">
            {settings.soundEnabled ? (
              <Volume2 className="w-5 h-5 text-cyan-400" />
            ) : (
              <VolumeX className="w-5 h-5 text-gray-500" />
            )}
            <div>
              <div className="text-sm font-bold text-white">Audio Synthesizer FX</div>
              <div className="text-xs text-gray-400">Web Audio UI click & hover sounds</div>
            </div>
          </div>

          <button
            onClick={() => {
              const next = !settings.soundEnabled;
              onUpdateSettings({ soundEnabled: next });
              soundFX.setEnabled(next);
              if (next) soundFX.playClick();
            }}
            className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all ${
              settings.soundEnabled
                ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/30'
                : 'glass-card text-gray-400'
            }`}
          >
            {settings.soundEnabled ? 'ENABLED' : 'MUTED'}
          </button>
        </div>

        {/* Reset Defaults */}
        <button
          onClick={() => {
            soundFX.playClick();
            onUpdateSettings({
              shape: 'torusKnot',
              theme: 'cyberpunk',
              wireframe: false,
              particleDensity: 1500,
              rotationSpeed: 1,
              soundEnabled: true
            });
          }}
          className="w-full py-3 rounded-xl glass-card border border-white/10 text-xs font-mono text-gray-400 hover:text-white flex items-center justify-center gap-2"
        >
          <RefreshCw className="w-4 h-4" />
          <span>Reset 3D Settings to Default</span>
        </button>

      </div>
    </div>
  );
};
