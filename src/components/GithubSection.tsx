import React from 'react';
import { Github, ArrowUpRight, GitBranch, Code } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const GithubSection: React.FC = () => {
  return (
    <section
      id="github-section"
      aria-label="Open Source & Code"
      className="py-16 sm:py-20 border-b border-[#27292D] bg-[#0B0C0E]"
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
        
        <div className="rounded-2xl border border-[#27292D] bg-[#121418] p-8 sm:p-12 relative overflow-hidden flex flex-col md:flex-row md:items-center justify-between gap-8">
          
          {/* Subtle background tech accent */}
          <div className="absolute right-0 top-0 translate-x-12 -translate-y-12 w-64 h-64 bg-[#55D69B]/5 rounded-full blur-3xl pointer-events-none" />

          {/* Left info */}
          <div className="max-w-xl space-y-3 z-10">
            <div className="font-mono text-xs uppercase tracking-widest text-[#55D69B] font-semibold flex items-center gap-2">
              <Github className="w-4 h-4 text-[#55D69B]" />
              <span>OPEN SOURCE &amp; CODE</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#F2F1ED]">
              I build, experiment, learn and document through code.
            </h2>

            <p className="text-sm sm:text-base text-[#9A9CA3] leading-relaxed">
              Explore my public repositories, coding experiments, and ongoing web projects directly on GitHub.
            </p>

            <div className="flex items-center gap-4 pt-1 font-mono text-xs text-[#9A9CA3]">
              <span className="flex items-center gap-1.5">
                <GitBranch className="w-3.5 h-3.5 text-[#55D69B]" />
                <span>@PornaC99</span>
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <Code className="w-3.5 h-3.5 text-[#55D69B]" />
                <span>Active Learner</span>
              </span>
            </div>
          </div>

          {/* Right Action */}
          <div className="z-10 shrink-0">
            <a
              id="github-section-profile-button"
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center justify-center gap-3 px-6 py-3.5 rounded-lg text-xs sm:text-sm font-mono font-semibold text-[#0B0C0E] bg-[#55D69B] hover:bg-[#45c388] transition-all shadow-md active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#55D69B] focus-visible:ring-offset-[#0B0C0E]"
            >
              <Github className="w-4 h-4" />
              <span>VIEW GITHUB PROFILE</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};
