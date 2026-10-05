import React from 'react';
import { Briefcase, Calendar, GraduationCap } from 'lucide-react';
import { EXPERIENCE_DATA } from '../../data/portfolioData';
import { soundFX } from '../../utils/soundSynthesizer';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-24 relative bg-radial-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-card border border-cyan-500/30 text-cyan-300 text-xs font-mono uppercase tracking-wider">
            <Briefcase className="w-3.5 h-3.5 text-cyan-400" />
            <span>Career Journey</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white">
            Experience & <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Milestones</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
            A timeline of roles, engineering impact, and academic achievements.
          </p>
        </div>

        {/* Timeline Line & Items */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Glowing Line */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-purple-500 to-transparent -translate-x-1/2 opacity-50" />

          <div className="space-y-12">
            {EXPERIENCE_DATA.map((exp, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div
                  key={exp.id}
                  onMouseEnter={() => soundFX.playHover()}
                  className={`relative flex flex-col sm:flex-row items-center ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Dot Node */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-slate-950 border-2 border-cyan-400 flex items-center justify-center shadow-lg shadow-cyan-500/50 z-10">
                    {exp.type === 'Education' ? (
                      <GraduationCap className="w-4 h-4 text-purple-400" />
                    ) : (
                      <Briefcase className="w-4 h-4 text-cyan-400" />
                    )}
                  </div>

                  {/* Experience Card */}
                  <div className={`w-full sm:w-[calc(50%-2rem)] ml-12 sm:ml-0 ${isEven ? 'sm:mr-auto' : 'sm:ml-auto'}`}>
                    <div className="glass-card p-6 rounded-3xl border border-white/10 hover:border-cyan-400/40 transition-all space-y-4">
                      
                      <div className="flex items-center justify-between flex-wrap gap-2">
                        <span className="px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-300 text-xs font-mono flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5" />
                          {exp.period}
                        </span>
                        <span className="text-xs font-mono text-purple-300 bg-purple-950/50 px-2.5 py-0.5 rounded-md border border-purple-500/20">
                          {exp.type}
                        </span>
                      </div>

                      <div>
                        <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                        <p className="text-sm font-medium text-cyan-400 mt-0.5">{exp.company}</p>
                      </div>

                      <ul className="space-y-2 text-sm text-gray-300">
                        {exp.description.map((point, pIdx) => (
                          <li key={pIdx} className="flex items-start gap-2">
                            <span className="text-cyan-400 font-bold">•</span>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-1.5 pt-2 border-t border-white/10">
                        {exp.skills.map((skill, sIdx) => (
                          <span
                            key={sIdx}
                            className="px-2.5 py-0.5 rounded-lg bg-slate-900 border border-white/10 text-xs font-mono text-gray-400"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>

                    </div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
