import React from 'react';
import { ArrowUp, Terminal, Mail } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { soundFX } from '../../utils/soundSynthesizer';
import { GithubIcon, LinkedinIcon, InstagramIcon } from './SocialIcons';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    soundFX.playWarp();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-6 border-t border-white/10 glass-panel relative z-10 overflow-hidden">
      {/* Glow background accent */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-24 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4 relative z-10">
        
        {/* Left: Brand Logo & Copyright */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 via-purple-600 to-pink-500 p-[2px] shadow-lg shadow-cyan-500/30">
            <div className="w-full h-full bg-slate-950 rounded-[9px] flex items-center justify-center">
              <Terminal className="w-4 h-4 text-cyan-400" />
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-extrabold text-lg tracking-widest bg-gradient-to-r from-cyan-400 via-purple-300 to-pink-400 bg-clip-text text-transparent">
              SV
            </span>
            <span className="text-gray-500 text-xs font-mono">|</span>
            <span className="text-xs text-gray-300 font-mono">
              © {new Date().getFullYear()} <span className="font-semibold text-white">SHASHANK VISHWAKARMA</span>. All rights reserved.
            </span>
          </div>
        </div>

        {/* Right: Social Links & Back to Top */}
        <div className="flex items-center gap-3">
          {/* Social Icons */}
          <div className="flex items-center gap-2">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noreferrer"
              title="GitHub Profile"
              onMouseEnter={() => soundFX.playHover()}
              className="p-2 rounded-xl glass-card text-gray-400 hover:text-cyan-400 hover:border-cyan-500/40 hover:scale-105 transition-all"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noreferrer"
              title="LinkedIn Profile"
              onMouseEnter={() => soundFX.playHover()}
              className="p-2 rounded-xl glass-card text-gray-400 hover:text-cyan-400 hover:border-cyan-500/40 hover:scale-105 transition-all"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              title="Send Direct Email"
              onMouseEnter={() => soundFX.playHover()}
              className="p-2 rounded-xl glass-card text-gray-400 hover:text-cyan-400 hover:border-cyan-500/40 hover:scale-105 transition-all"
            >
              <Mail className="w-4 h-4" />
            </a>

            <a
              href={PERSONAL_INFO.instagram || "https://instagram.com"}
              target="_blank"
              rel="noreferrer"
              title="Instagram Profile"
              onMouseEnter={() => soundFX.playHover()}
              className="p-2 rounded-xl glass-card text-gray-400 hover:text-pink-400 hover:border-pink-500/40 hover:scale-105 transition-all"
            >
              <InstagramIcon className="w-4 h-4" />
            </a>
          </div>

          <div className="h-4 w-[1px] bg-white/10 mx-1 hidden sm:block" />

          {/* Back to Top Button */}
          <button
            onClick={scrollToTop}
            onMouseEnter={() => soundFX.playHover()}
            className="p-2 px-3.5 rounded-xl glass-card text-gray-300 hover:text-cyan-400 hover:border-cyan-500/40 transition-all flex items-center gap-1.5 text-xs font-mono"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
