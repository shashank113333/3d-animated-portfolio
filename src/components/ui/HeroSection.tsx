import React from 'react';
import { ArrowRight, Download, Sparkles, Move3d } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { Hero3DCanvas } from '../3d/Hero3DCanvas';
import type { CustomizerSettings } from '../../types/portfolio';
import { soundFX } from '../../utils/soundSynthesizer';
import { GithubIcon, LinkedinIcon, TwitterIcon } from './SocialIcons';

interface Props {
  settings: CustomizerSettings;
  onOpenCustomizer: () => void;
}

export const HeroSection: React.FC<Props> = ({ settings, onOpenCustomizer }) => {
  return (
    <section className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden bg-radial-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column: Text & CTAs */}
        <div className="lg:col-span-7 z-10 space-y-6 text-left">
          
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-card border border-emerald-500/30 text-emerald-400 text-xs font-mono tracking-wide shadow-lg shadow-emerald-950/20">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span>{PERSONAL_INFO.status}</span>
          </div>

          {/* Main Headline */}
          <div className="space-y-3">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-tight">
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500 bg-clip-text text-transparent glow-text-cyan">
                {PERSONAL_INFO.name}
              </span>
            </h1>
            <p className="text-xl sm:text-2xl font-medium text-cyan-300/90 font-mono">
              {PERSONAL_INFO.title}
            </p>
          </div>

          {/* Tagline / Subtext */}
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl leading-relaxed">
            {PERSONAL_INFO.tagline}
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <a
              href="#projects"
              onMouseEnter={() => soundFX.playHover()}
              onClick={() => soundFX.playClick()}
              className="px-6 py-3.5 rounded-2xl bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-slate-950 font-bold text-base shadow-xl shadow-cyan-500/30 hover:shadow-cyan-400/50 hover:scale-105 transition-all flex items-center gap-2 group"
            >
              <span>Explore 3D Work</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>

            <button
              onClick={() => {
                soundFX.playWarp();
                onOpenCustomizer();
              }}
              onMouseEnter={() => soundFX.playHover()}
              className="px-6 py-3.5 rounded-2xl glass-card border border-purple-500/40 text-purple-300 hover:text-white hover:border-purple-400 hover:glow-purple transition-all font-semibold text-base flex items-center gap-2.5"
            >
              <Sparkles className="w-5 h-5 text-pink-400" />
              <span>Customize 3D World</span>
            </button>
          </div>

          {/* Social Links & Resume */}
          <div className="flex items-center gap-5 pt-6 border-t border-white/10">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noreferrer"
              onMouseEnter={() => soundFX.playHover()}
              className="p-3 rounded-xl glass-card text-gray-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-all"
            >
              <GithubIcon className="w-5 h-5" />
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noreferrer"
              onMouseEnter={() => soundFX.playHover()}
              className="p-3 rounded-xl glass-card text-gray-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-all"
            >
              <LinkedinIcon className="w-5 h-5" />
            </a>
            <a
              href={PERSONAL_INFO.twitter}
              target="_blank"
              rel="noreferrer"
              onMouseEnter={() => soundFX.playHover()}
              className="p-3 rounded-xl glass-card text-gray-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-all"
            >
              <TwitterIcon className="w-5 h-5" />
            </a>

            <a
              href="#about"
              onMouseEnter={() => soundFX.playHover()}
              onClick={() => soundFX.playClick()}
              className="flex items-center gap-2 text-xs font-mono text-cyan-400 hover:text-cyan-300 ml-auto"
            >
              <Download className="w-4 h-4" />
              <span>Resume PDF</span>
            </a>
          </div>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
            {PERSONAL_INFO.stats.map((stat, idx) => (
              <div key={idx} className="glass-card p-3 rounded-xl border border-white/5 text-center">
                <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-xs text-gray-400 mt-0.5">{stat.label}</div>
              </div>
            ))}
          </div>

        </div>

        {/* Right Column: 3D Interactive Canvas */}
        <div className="lg:col-span-5 h-[420px] sm:h-[500px] w-full relative z-0 flex items-center justify-center">
          
          {/* Orbit Instruction Badge */}
          <div className="absolute top-2 right-2 z-20 pointer-events-none flex items-center gap-2 px-3 py-1.5 rounded-lg glass-card border border-cyan-500/30 text-cyan-300 text-xs font-mono">
            <Move3d className="w-4 h-4 text-cyan-400 animate-pulse" />
            <span>Drag to rotate 3D core</span>
          </div>

          {/* Three.js R3F Canvas */}
          <Hero3DCanvas settings={settings} />
        </div>

      </div>
    </section>
  );
};
