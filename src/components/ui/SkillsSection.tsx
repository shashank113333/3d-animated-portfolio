import React, { useState } from 'react';
import { Cpu, Atom, Code2, Palette, Boxes, Sparkles, Server, Terminal, Network, Database, Container, GitBranch, Cloud } from 'lucide-react';
import { SKILLS_DATA } from '../../data/portfolioData';
import { soundFX } from '../../utils/soundSynthesizer';

const iconMap: Record<string, React.FC<{ className?: string }>> = {
  Atom,
  Code2,
  Palette,
  Boxes,
  Sparkles,
  Box: Boxes,
  Server,
  Terminal,
  Network,
  Database,
  Container,
  GitBranch,
  Cloud
};

export const SkillsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Frontend', 'Backend', '3D / Design', 'DevOps & Tools'];

  const filteredSkills = activeCategory === 'All'
    ? SKILLS_DATA
    : SKILLS_DATA.filter((s) => s.category === activeCategory);

  return (
    <section id="skills" className="py-24 relative bg-radial-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-card border border-cyan-500/30 text-cyan-300 text-xs font-mono uppercase tracking-wider">
            <Cpu className="w-3.5 h-3.5 text-cyan-400" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white">
            Skills & <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Tech Stack</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
            Battle-tested frameworks, graphics libraries, and infrastructure tools I work with daily.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                soundFX.playClick();
                setActiveCategory(cat);
              }}
              onMouseEnter={() => soundFX.playHover()}
              className={`px-5 py-2.5 rounded-xl font-medium text-sm transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-slate-950 font-bold shadow-lg shadow-cyan-500/25 scale-105'
                  : 'glass-card text-gray-300 hover:text-white hover:border-cyan-500/40'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, idx) => {
            const IconComponent = iconMap[skill.iconName] || Code2;
            return (
              <div
                key={idx}
                onMouseEnter={() => soundFX.playHover()}
                className="glass-card p-6 rounded-2xl border border-white/10 hover:border-cyan-400/40 transition-all group"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div
                      className="p-2.5 rounded-xl bg-slate-900 border border-white/10 group-hover:scale-110 transition-transform"
                      style={{ color: skill.color }}
                    >
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-white text-base group-hover:text-cyan-300 transition-colors">
                        {skill.name}
                      </h3>
                      <span className="text-xs font-mono text-gray-400">{skill.category}</span>
                    </div>
                  </div>
                  <span className="text-sm font-mono font-bold text-cyan-400">
                    {skill.level}%
                  </span>
                </div>

                {/* Progress Bar */}
                <div className="w-full h-2.5 rounded-full bg-slate-900 overflow-hidden p-0.5 border border-white/5">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 transition-all duration-700 ease-out glow-cyan"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
