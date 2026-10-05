import React from 'react';
import { ArrowUp, Terminal, Heart } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { soundFX } from '../../utils/soundSynthesizer';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    soundFX.playWarp();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 border-t border-white/10 glass-panel relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        
        {/* Brand */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-500 to-purple-600 p-[1px]">
            <div className="w-full h-full bg-slate-950 rounded-[7px] flex items-center justify-center">
              <Terminal className="w-4 h-4 text-cyan-400" />
            </div>
          </div>
          <span className="text-sm font-bold text-white">
            {PERSONAL_INFO.name} <span className="text-xs text-gray-500 font-mono">© {new Date().getFullYear()}</span>
          </span>
        </div>

        {/* Subtitle / Built With */}
        <div className="text-xs text-gray-400 font-mono flex items-center gap-1.5">
          <span>Crafted with</span>
          <Heart className="w-3.5 h-3.5 text-pink-500 fill-pink-500" />
          <span>using Three.js, React & Tailwind CSS</span>
        </div>

        {/* Back to Top */}
        <button
          onClick={scrollToTop}
          onMouseEnter={() => soundFX.playHover()}
          className="p-3 rounded-xl glass-card text-gray-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-all flex items-center gap-2 text-xs font-mono"
        >
          <span>Back to Top</span>
          <ArrowUp className="w-4 h-4" />
        </button>

      </div>
    </footer>
  );
};
