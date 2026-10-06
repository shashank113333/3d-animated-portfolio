import React from 'react';
import { ArrowUp, Terminal, Heart, Mail } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { soundFX } from '../../utils/soundSynthesizer';
import { GithubIcon, LinkedinIcon, InstagramIcon } from './SocialIcons';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    soundFX.playWarp();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <footer className="py-12 border-t border-white/10 glass-panel relative z-10 overflow-hidden">
      {/* Glow background accent */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 relative z-10">
        
        {/* Main Footer Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/5">
          
          {/* Brand Logo & Tagline */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 via-purple-600 to-pink-500 p-[2px] shadow-lg shadow-cyan-500/30">
              <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                <Terminal className="w-5 h-5 text-cyan-400" />
              </div>
            </div>
            <div>
              <span className="font-extrabold text-xl tracking-widest bg-gradient-to-r from-cyan-400 via-purple-300 to-pink-400 bg-clip-text text-transparent">
                SV
              </span>
              <p className="text-xs text-gray-400 font-mono">Shashank Vishwakarma • Associate Software Engineer</p>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="flex flex-wrap justify-center gap-6 text-sm font-medium text-gray-400">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onMouseEnter={() => soundFX.playHover()}
                onClick={() => soundFX.playClick()}
                className="hover:text-cyan-400 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noreferrer"
              title="GitHub Profile"
              onMouseEnter={() => soundFX.playHover()}
              className="p-2.5 rounded-xl glass-card text-gray-400 hover:text-cyan-400 hover:border-cyan-500/40 hover:scale-110 transition-all"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noreferrer"
              title="LinkedIn Profile"
              onMouseEnter={() => soundFX.playHover()}
              className="p-2.5 rounded-xl glass-card text-gray-400 hover:text-cyan-400 hover:border-cyan-500/40 hover:scale-110 transition-all"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              title="Send Direct Email"
              onMouseEnter={() => soundFX.playHover()}
              className="p-2.5 rounded-xl glass-card text-gray-400 hover:text-cyan-400 hover:border-cyan-500/40 hover:scale-110 transition-all"
            >
              <Mail className="w-4 h-4" />
            </a>

            <a
              href={PERSONAL_INFO.instagram || "https://instagram.com"}
              target="_blank"
              rel="noreferrer"
              title="Instagram Profile"
              onMouseEnter={() => soundFX.playHover()}
              className="p-2.5 rounded-xl glass-card text-gray-400 hover:text-pink-400 hover:border-pink-500/40 hover:scale-110 transition-all"
            >
              <InstagramIcon className="w-4 h-4" />
            </a>
          </div>

        </div>

        {/* Bottom Row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-gray-400">
          <div>
            © {new Date().getFullYear()} <span className="text-gray-200 font-bold">SHASHANK VISHWAKARMA</span>. All rights reserved.
          </div>

          <div className="flex items-center gap-1.5 text-gray-400">
            <span>Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-pink-500 fill-pink-500 animate-pulse" />
            <span>using Three.js, React & Tailwind CSS</span>
          </div>

          <button
            onClick={scrollToTop}
            onMouseEnter={() => soundFX.playHover()}
            className="p-2.5 px-4 rounded-xl glass-card text-gray-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-all flex items-center gap-2"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
};
