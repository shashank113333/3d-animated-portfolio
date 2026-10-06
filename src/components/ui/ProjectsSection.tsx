import React, { useState } from 'react';
import { FolderGit2, ExternalLink, Star, Download, Activity, X } from 'lucide-react';
import { PROJECTS_DATA } from '../../data/portfolioData';
import type { Project } from '../../types/portfolio';
import { soundFX } from '../../utils/soundSynthesizer';
import { GithubIcon } from './SocialIcons';

export const ProjectsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = ['All', 'Full Stack', 'Frontend', 'Backend', 'AI & ML', '3D WebGL', 'Mobile / Apps'];

  const filteredProjects = activeCategory === 'All'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-24 relative bg-cyber-grid border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-card border border-purple-500/30 text-purple-300 text-xs font-mono uppercase tracking-wider">
            <FolderGit2 className="w-3.5 h-3.5 text-purple-400" />
            <span>Featured Portfolio</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white">
            Selected <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">3D & Web Projects</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
            Interactive WebGL experiences, full-stack applications, and cutting-edge software solutions.
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

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onMouseEnter={() => soundFX.playHover()}
              onClick={() => {
                soundFX.playClick();
                setSelectedProject(project);
              }}
              className="glass-card rounded-3xl overflow-hidden border border-white/10 hover:border-cyan-400/50 transition-all duration-300 flex flex-col cursor-pointer group hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-950/50"
            >
              {/* Project Image Preview */}
              <div className="h-52 w-full relative overflow-hidden bg-slate-900">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80" />

                <span className="absolute top-3 right-3 px-3 py-1 rounded-full glass-panel border border-cyan-500/30 text-cyan-300 text-xs font-mono font-medium">
                  {project.category}
                </span>
              </div>

              {/* Card Content */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-300 mt-2 line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-0.5 rounded-lg bg-slate-900/80 border border-white/10 text-xs font-mono text-gray-300"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* Card Footer Actions */}
                <div className="flex items-center justify-between pt-3 border-t border-white/10">
                  <div className="flex items-center gap-3">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      onMouseEnter={() => soundFX.playHover()}
                      className="p-2 rounded-lg glass-card text-gray-400 hover:text-cyan-400"
                    >
                      <GithubIcon className="w-4 h-4" />
                    </a>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      onMouseEnter={() => soundFX.playHover()}
                      className="p-2 rounded-lg glass-card text-gray-400 hover:text-cyan-400"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>

                  <span className="text-xs text-cyan-400 font-mono font-semibold group-hover:underline">
                    View Details →
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 glass-panel bg-slate-950/80 backdrop-blur-xl animate-fadeIn">
          <div className="glass-card max-w-2xl w-full rounded-3xl p-6 border border-cyan-500/40 relative max-h-[90vh] overflow-y-auto space-y-6">
            
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 p-2 rounded-xl glass-card text-gray-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              className="w-full h-56 object-cover rounded-2xl border border-white/10"
            />

            <div className="space-y-2">
              <span className="text-xs font-mono px-3 py-1 rounded-full bg-cyan-950 border border-cyan-500/40 text-cyan-400">
                {selectedProject.category}
              </span>
              <h3 className="text-2xl font-bold text-white pt-1">{selectedProject.title}</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                {selectedProject.fullDetails || selectedProject.description}
              </p>
            </div>

            {/* Metrics */}
            {selectedProject.stats && (
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-4 rounded-xl bg-slate-900/80 border border-white/10 font-mono text-xs text-center">
                {selectedProject.stats.stars && (
                  <div className="flex flex-col items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-400" />
                    <span className="text-gray-300">{selectedProject.stats.stars} Stars</span>
                  </div>
                )}
                {selectedProject.stats.downloads && (
                  <div className="flex flex-col items-center gap-1">
                    <Download className="w-4 h-4 text-emerald-400" />
                    <span className="text-gray-300">{selectedProject.stats.downloads}</span>
                  </div>
                )}
                {selectedProject.stats.metrics && (
                  <div className="flex flex-col items-center gap-1 col-span-2 sm:col-span-1">
                    <Activity className="w-4 h-4 text-cyan-400" />
                    <span className="text-gray-300">{selectedProject.stats.metrics}</span>
                  </div>
                )}
              </div>
            )}

            {/* Modal Links */}
            <div className="flex items-center gap-4 pt-2">
              <a
                href={selectedProject.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="flex-1 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 font-bold text-slate-950 text-center text-sm flex items-center justify-center gap-2 hover:scale-102 transition-transform"
              >
                <span>Live Demo Preview</span>
                <ExternalLink className="w-4 h-4" />
              </a>

              <a
                href={selectedProject.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="py-3 px-5 rounded-xl glass-card text-gray-300 hover:text-white font-medium text-sm flex items-center gap-2"
              >
                <GithubIcon className="w-4 h-4" />
                <span>Source Code</span>
              </a>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
