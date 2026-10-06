import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Sliders, Menu, X, Sparkles, Terminal } from 'lucide-react';
import { soundFX } from '../../utils/soundSynthesizer';
import type { CustomizerSettings } from '../../types/portfolio';

interface Props {
  settings: CustomizerSettings;
  onUpdateSettings: (newSettings: Partial<CustomizerSettings>) => void;
  onOpenCustomizer: () => void;
}

export const Navbar: React.FC<Props> = ({
  settings,
  onUpdateSettings,
  onOpenCustomizer
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleSound = () => {
    const nextState = !settings.soundEnabled;
    onUpdateSettings({ soundEnabled: nextState });
    soundFX.setEnabled(nextState);
    if (nextState) soundFX.playClick();
  };

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled ? 'py-3 glass-panel border-b border-cyan-500/20 shadow-lg shadow-cyan-950/30' : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#"
          onMouseEnter={() => soundFX.playHover()}
          onClick={() => soundFX.playClick()}
          className="flex items-center gap-2 group"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 via-purple-600 to-pink-500 p-[2px] shadow-lg shadow-cyan-500/30 group-hover:scale-105 transition-transform duration-300">
            <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
              <Terminal className="w-5 h-5 text-cyan-400 group-hover:rotate-12 transition-transform duration-300" />
            </div>
          </div>
          <span className="font-extrabold text-2xl tracking-widest bg-gradient-to-r from-cyan-400 via-purple-300 to-pink-400 bg-clip-text text-transparent">
            SV
          </span>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-8 glass-card px-6 py-2 rounded-full border border-white/10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onMouseEnter={() => soundFX.playHover()}
              onClick={() => soundFX.playClick()}
              className="text-sm font-medium text-gray-300 hover:text-cyan-400 transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-cyan-400 hover:after:w-full after:transition-all after:duration-300"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Controls & Actions */}
        <div className="hidden md:flex items-center gap-3">
          {/* Sound FX Toggle */}
          <button
            onClick={toggleSound}
            onMouseEnter={() => soundFX.playHover()}
            title={settings.soundEnabled ? "Mute Sound Effects" : "Enable Sound Effects"}
            className="p-2.5 rounded-xl glass-card text-gray-300 hover:text-cyan-400 hover:border-cyan-500/40 transition-all"
          >
            {settings.soundEnabled ? (
              <Volume2 className="w-4 h-4 text-cyan-400 animate-pulse" />
            ) : (
              <VolumeX className="w-4 h-4 text-gray-500" />
            )}
          </button>

          {/* 3D Customizer Drawer Trigger */}
          <button
            onClick={() => {
              soundFX.playWarp();
              onOpenCustomizer();
            }}
            onMouseEnter={() => soundFX.playHover()}
            className="flex items-center gap-2 px-3.5 py-2 rounded-xl glass-card border border-purple-500/30 text-purple-300 hover:text-white hover:border-purple-400/60 hover:glow-purple transition-all text-sm font-medium group"
          >
            <Sliders className="w-4 h-4 text-purple-400 group-hover:rotate-45 transition-transform" />
            <span>3D Sandbox</span>
            <Sparkles className="w-3.5 h-3.5 text-pink-400 animate-spin" style={{ animationDuration: '4s' }} />
          </button>

          {/* Hire Me CTA */}
          <a
            href="#contact"
            onMouseEnter={() => soundFX.playHover()}
            onClick={() => soundFX.playClick()}
            className="px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-slate-950 font-semibold text-sm shadow-lg shadow-cyan-500/25 hover:shadow-cyan-400/40 hover:scale-105 transition-all duration-300"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-xl glass-card text-gray-300 hover:text-cyan-400"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-panel border-b border-cyan-500/20 px-4 py-6 mt-3 space-y-4 animate-fadeIn">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => {
                soundFX.playClick();
                setMobileMenuOpen(false);
              }}
              className="block text-gray-200 hover:text-cyan-400 text-base font-medium py-2 border-b border-white/5"
            >
              {link.name}
            </a>
          ))}

          <div className="flex items-center justify-between pt-2">
            <button
              onClick={toggleSound}
              className="flex items-center gap-2 text-sm text-gray-300"
            >
              {settings.soundEnabled ? <Volume2 className="w-4 h-4 text-cyan-400" /> : <VolumeX className="w-4 h-4" />}
              <span>Sound FX: {settings.soundEnabled ? 'ON' : 'OFF'}</span>
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCustomizer();
              }}
              className="px-3.5 py-2 rounded-xl glass-card text-purple-300 text-sm font-medium flex items-center gap-2"
            >
              <Sliders className="w-4 h-4" />
              <span>3D Sandbox</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
