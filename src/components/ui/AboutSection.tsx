import React from 'react';
import { User, Code, Cpu, Globe, Award, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { soundFX } from '../../utils/soundSynthesizer';

export const AboutSection: React.FC = () => {
  const highlights = [
    {
      icon: Code,
      title: "Full-Stack Web Engineering",
      desc: "Architecting end-to-end web applications with React, Next.js, Node.js, and TypeScript.",
      color: "from-cyan-500 to-blue-600"
    },
    {
      icon: Cpu,
      title: "3D & WebGL Graphics",
      desc: "Creating high-fps interactive 3D worlds, custom shaders, and particle systems using R3F & Three.js.",
      color: "from-purple-500 to-pink-600"
    },
    {
      icon: Globe,
      title: "Performance & Scalability",
      desc: "Optimizing 3D assets, bundle sizes, Lighthouse metrics, and cloud infrastructure.",
      color: "from-emerald-500 to-teal-600"
    }
  ];

  return (
    <section id="about" className="py-24 relative bg-cyber-grid border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-card border border-purple-500/30 text-purple-300 text-xs font-mono uppercase tracking-wider">
            <User className="w-3.5 h-3.5 text-purple-400" />
            <span>About Me</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white">
            Engineering the <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Future of 3D Web</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
            Combining graphics programming with modern full-stack web development to build memorable digital products.
          </p>
        </div>

        {/* Grid Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Cyber Profile Card */}
          <div className="lg:col-span-5 glass-card p-8 rounded-3xl border border-cyan-500/20 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-3xl group-hover:bg-cyan-500/20 transition-all" />
            
            <div className="flex items-center gap-5 mb-6">
              {/* Glowing Profile Image Frame */}
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-cyan-500 via-purple-600 to-pink-500 p-[2px] shadow-lg shadow-cyan-500/40 group-hover:scale-105 transition-transform duration-300 relative flex-shrink-0">
                <img
                  src="/shashank.jpg"
                  alt={PERSONAL_INFO.name}
                  className="w-full h-full object-cover rounded-[14px]"
                />
                <span className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-400 border-2 border-slate-950 rounded-full" title="Active & Available" />
              </div>

              <div>
                <h3 className="text-xl font-bold text-white">{PERSONAL_INFO.name}</h3>
                <p className="text-sm font-mono text-cyan-400">{PERSONAL_INFO.location}</p>
                <span className="inline-block mt-1 text-xs font-mono text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/30">
                  Associate Software Engineer
                </span>
              </div>
            </div>

            <p className="text-gray-300 leading-relaxed text-sm sm:text-base mb-6">
              {PERSONAL_INFO.about}
            </p>

            <div className="p-4 rounded-xl bg-slate-900/60 border border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-purple-400" />
                <span className="text-xs font-mono text-gray-300">Code Quality & Performance First</span>
              </div>
              <Sparkles className="w-4 h-4 text-cyan-400 animate-spin" style={{ animationDuration: '6s' }} />
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="lg:col-span-7 space-y-4">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                onMouseEnter={() => soundFX.playHover()}
                className="glass-card p-6 rounded-2xl border border-white/10 flex items-start gap-5 hover:border-cyan-400/40 transition-all group"
              >
                <div className={`p-3.5 rounded-2xl bg-gradient-to-br ${item.color} text-slate-950 shadow-md group-hover:scale-110 transition-transform`}>
                  <item.icon className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-sm text-gray-400 mt-1 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
