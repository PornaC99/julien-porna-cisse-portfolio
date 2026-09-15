import React, { useState } from 'react';
import { PROJECTS } from '../data/portfolioData';
import { ProjectMockup } from './ProjectMockup';
import { ProjectModal } from './ProjectModal';
import { Project } from '../types';
import { ArrowUpRight, FileText, Layers, ExternalLink } from 'lucide-react';

export const Projects: React.FC = () => {
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<Project | null>(null);

  return (
    <section
      id="projects"
      aria-label="Selected Projects"
      className="py-20 sm:py-28 border-b border-[#27292D]"
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-16 pb-6 border-b border-[#27292D]">
          <div>
            <div className="font-mono text-xs uppercase tracking-widest text-[#55D69B] mb-2 font-semibold">
              02 — WORK & PROJECTS
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#F2F1ED]">
              Selected Projects
            </h2>
          </div>
          <p className="font-mono text-xs text-[#9A9CA3] max-w-xs">
            Real products and web applications developed with practical purpose and verified links.
          </p>
        </div>

        {/* Alternating Large Editorial Project Showcases */}
        <div className="space-y-24">
          {PROJECTS.map((project, index) => {
            const isReversed = index % 2 === 1;

            return (
              <article
                key={project.id}
                id={`project-${project.id}`}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
              >
                
                {/* Project Visual / Mockup Column */}
                <div
                  className={`lg:col-span-7 ${
                    isReversed ? 'lg:order-2' : 'lg:order-1'
                  }`}
                >
                  <div className="relative group">
                    {/* Interactive Frame with Hover States */}
                    <div className="transform transition-all duration-300 ease-out group-hover:scale-[1.015] group-hover:border-[#55D69B]/40">
                      <ProjectMockup type={project.mockupType} title={project.title} />

                      {/* Clickable Overlay for Live Projects */}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noreferrer noopener"
                          aria-label={`Open Live Demo for ${project.title}`}
                          className="absolute inset-0 z-10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/60 backdrop-blur-[2px] rounded-lg"
                        >
                          <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#0B0C0E] border border-[#55D69B] text-[#55D69B] font-mono text-xs font-semibold shadow-xl transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                            <span>VIEW LIVE PROJECT</span>
                            <ArrowUpRight className="w-4 h-4" />
                          </span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                {/* Project Metadata & Description Column */}
                <div
                  className={`lg:col-span-5 flex flex-col justify-center ${
                    isReversed ? 'lg:order-1' : 'lg:order-2'
                  }`}
                >
                  {/* Meta Bar */}
                  <div className="flex items-center gap-3 font-mono text-xs text-[#9A9CA3] mb-3">
                    <span className="text-[#55D69B] font-semibold">{project.number}</span>
                    <span>/</span>
                    <span>{project.year}</span>
                    <span>/</span>
                    <span className="uppercase">{project.category}</span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-2xl sm:text-3xl font-bold text-[#F2F1ED] tracking-tight mb-2">
                    {project.title}
                  </h3>

                  {project.subtitle && (
                    <div className="text-sm font-mono text-[#55D69B] mb-2 font-medium">
                      {project.subtitle}
                    </div>
                  )}

                  {/* Status Badges */}
                  {project.status && (
                    <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-amber-500/10 border border-amber-500/30 text-amber-300 font-mono text-xs font-medium w-fit mb-4">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                      <span>{project.status}</span>
                    </div>
                  )}

                  {/* Description */}
                  <p className="text-sm sm:text-base text-[#9A9CA3] leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Role & Approach Details */}
                  <div className="space-y-2 mb-6 font-mono text-xs border-y border-[#27292D] py-3.5">
                    <div className="flex items-center justify-between">
                      <span className="text-[#9A9CA3]">ROLE</span>
                      <span className="text-[#F2F1ED] font-medium">{project.role}</span>
                    </div>
                    {project.approach && (
                      <div className="flex items-center justify-between">
                        <span className="text-[#9A9CA3]">APPROACH</span>
                        <span className="text-[#55D69B] font-medium">{project.approach}</span>
                      </div>
                    )}
                  </div>

                  {/* Technologies if verified */}
                  {project.technologies && project.technologies.length > 0 && (
                    <div className="mb-6">
                      <span className="block font-mono text-[11px] text-[#9A9CA3] uppercase tracking-wider mb-2">
                        {project.id === 'les-flocons-erp' ? 'CORE FUNCTIONAL MODULES' : 'TECHNOLOGIES'}
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 rounded bg-[#16181D] border border-[#27292D] text-xs font-mono text-[#F2F1ED]"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Action Buttons */}
                  <div className="flex flex-wrap items-center gap-3 pt-2">
                    {project.liveUrl && (
                      <a
                        id={`live-demo-${project.id}`}
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md text-xs font-mono font-medium text-[#0B0C0E] bg-[#55D69B] hover:bg-[#43bd84] transition-all shadow-sm active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#55D69B]"
                      >
                        <span>LIVE DEMO</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    )}

                    {project.caseStudy && (
                      <button
                        id={`case-study-${project.id}`}
                        onClick={() => setSelectedCaseStudy(project)}
                        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md text-xs font-mono font-medium text-[#F2F1ED] bg-[#16181D] border border-[#27292D] hover:bg-[#1F2228] hover:border-[#3C4049] transition-all active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#55D69B]"
                      >
                        <FileText className="w-3.5 h-3.5 text-[#55D69B]" />
                        <span>VIEW CASE STUDY</span>
                      </button>
                    )}

                    {!project.liveUrl && !project.caseStudy && (
                      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-[#131519] border border-[#27292D] text-xs font-mono text-[#9A9CA3]">
                        <Layers className="w-3.5 h-3.5 text-[#55D69B]" />
                        <span>Academic / Collaborative Milestone</span>
                      </div>
                    )}
                  </div>

                </div>

              </article>
            );
          })}
        </div>

      </div>

      {/* Case Study Modal */}
      <ProjectModal
        project={selectedCaseStudy}
        onClose={() => setSelectedCaseStudy(null)}
      />
    </section>
  );
};
