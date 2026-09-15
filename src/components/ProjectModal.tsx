import React, { useEffect } from 'react';
import { X, ArrowUpRight, CheckCircle2, ShieldCheck, Code, Globe } from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project || !project.caseStudy) return null;

  return (
    <div
      id="project-case-study-modal"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl bg-[#111317] border border-[#27292D] rounded-xl shadow-2xl p-6 sm:p-8 my-8 text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between pb-6 border-b border-[#27292D]">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-[#55D69B] uppercase mb-1">
              <span>CASE STUDY</span>
              <span>//</span>
              <span>{project.number}</span>
              <span>·</span>
              <span>{project.year}</span>
            </div>
            <h2 id="modal-project-title" className="text-2xl sm:text-3xl font-bold text-[#F2F1ED]">
              {project.title}
            </h2>
            <div className="text-xs sm:text-sm font-mono text-[#9A9CA3] mt-1">
              {project.category} · Role: {project.role}
            </div>
          </div>
          <button
            id="close-modal-button"
            onClick={onClose}
            aria-label="Close Case Study"
            className="p-2 text-[#9A9CA3] hover:text-[#F2F1ED] rounded-lg bg-[#16181D] border border-[#27292D] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#55D69B]"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Development Approach Badge */}
        {project.approach && (
          <div className="my-5 p-3 rounded-lg bg-[#16181E] border border-[#27292D] flex items-center gap-2 text-xs font-mono text-[#F2F1ED]">
            <Code className="w-4 h-4 text-[#55D69B] shrink-0" />
            <span>Development Approach: <strong className="text-[#55D69B]">{project.approach}</strong></span>
          </div>
        )}

        {/* Case Study Grid */}
        <div className="space-y-6 mt-6">
          
          {/* The Problem */}
          <div className="space-y-2">
            <h3 className="font-mono text-xs uppercase tracking-wider text-[#55D69B] font-semibold flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#55D69B]" />
              THE PROBLEM
            </h3>
            <p className="text-sm sm:text-base text-[#9A9CA3] leading-relaxed pl-3.5 border-l border-[#27292D]">
              {project.caseStudy.problem}
            </p>
          </div>

          {/* The Approach */}
          <div className="space-y-2">
            <h3 className="font-mono text-xs uppercase tracking-wider text-[#55D69B] font-semibold flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#55D69B]" />
              THE APPROACH
            </h3>
            <p className="text-sm sm:text-base text-[#9A9CA3] leading-relaxed pl-3.5 border-l border-[#27292D]">
              {project.caseStudy.approach}
            </p>
          </div>

          {/* The Result */}
          <div className="space-y-2">
            <h3 className="font-mono text-xs uppercase tracking-wider text-[#55D69B] font-semibold flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#55D69B]" />
              THE RESULT
            </h3>
            <p className="text-sm sm:text-base text-[#9A9CA3] leading-relaxed pl-3.5 border-l border-[#27292D]">
              {project.caseStudy.result}
            </p>
          </div>

          {/* Technical Notes */}
          <div className="space-y-2">
            <h3 className="font-mono text-xs uppercase tracking-wider text-[#55D69B] font-semibold flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#55D69B]" />
              TECHNICAL NOTES
            </h3>
            <p className="text-sm sm:text-base text-[#9A9CA3] leading-relaxed pl-3.5 border-l border-[#27292D]">
              {project.caseStudy.technicalNotes}
            </p>
          </div>

        </div>

        {/* Footer & Direct Action */}
        <div className="mt-8 pt-6 border-t border-[#27292D] flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs font-mono text-[#9A9CA3]">
            <ShieldCheck className="w-4 h-4 text-[#55D69B]" />
            <span>Verified production deliverable</span>
          </div>

          <div className="flex items-center gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-mono font-medium rounded-md text-[#0B0C0E] bg-[#55D69B] hover:bg-[#45c388] transition-colors"
              >
                <Globe className="w-3.5 h-3.5" />
                <span>OPEN LIVE DEMO</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            )}
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-mono text-[#F2F1ED] bg-[#16181D] border border-[#27292D] hover:bg-[#1E2127] rounded-md transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
