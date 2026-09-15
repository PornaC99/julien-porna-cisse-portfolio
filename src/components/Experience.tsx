import React from 'react';
import { EXPERIENCES } from '../data/portfolioData';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

export const Experience: React.FC = () => {
  return (
    <section
      id="experience"
      aria-label="Professional Experience"
      className="py-20 sm:py-28 border-b border-[#27292D]"
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-16 pb-6 border-b border-[#27292D]">
          <div className="font-mono text-xs uppercase tracking-widest text-[#55D69B] mb-2 font-semibold">
            04 — EXPERIENCE
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#F2F1ED] mb-3">
            Work Experience
          </h2>
          <p className="text-sm sm:text-base text-[#9A9CA3] max-w-xl">
            Practical background in web development, technical training, student instruction and data workflows.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative border-l border-[#27292D] ml-4 sm:ml-6 space-y-12 pl-6 sm:pl-10">
          
          {EXPERIENCES.map((exp) => {
            const isSecondary = exp.isSecondary;

            return (
              <div
                key={exp.id}
                id={`experience-${exp.id}`}
                className={`relative group ${isSecondary ? 'opacity-85' : 'opacity-100'}`}
              >
                {/* Timeline Node Dot */}
                <div
                  className={`absolute -left-[31px] sm:-left-[47px] top-1.5 w-4 h-4 rounded-full border-2 transition-colors ${
                    isSecondary
                      ? 'bg-[#181B20] border-[#3D424D]'
                      : 'bg-[#0B0C0E] border-[#55D69B]'
                  }`}
                >
                  {!isSecondary && (
                    <div className="w-1.5 h-1.5 rounded-full bg-[#55D69B] m-auto mt-0.5" />
                  )}
                </div>

                {/* Experience Card */}
                <div
                  className={`rounded-xl border p-6 sm:p-8 transition-colors ${
                    isSecondary
                      ? 'bg-[#111316] border-[#222428]'
                      : 'bg-[#14161B] border-[#27292D] hover:border-[#3A3F49]'
                  }`}
                >
                  {/* Top Bar */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                    <div>
                      <span className="font-mono text-xs text-[#55D69B] uppercase font-semibold">
                        {exp.company}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-bold text-[#F2F1ED] mt-0.5">
                        {exp.role}
                      </h3>
                    </div>

                    <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-[#9A9CA3]">
                      <div className="flex items-center gap-1.5 bg-[#1B1E24] px-2.5 py-1 rounded border border-[#27292D]">
                        <Calendar className="w-3.5 h-3.5 text-[#55D69B]" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-[#9A9CA3]" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Responsibilities list */}
                  <div className="mt-6 space-y-2.5">
                    {exp.responsibilities.map((resp, rIdx) => (
                      <div key={rIdx} className="flex items-start gap-3 text-sm text-[#9A9CA3]">
                        <span className="text-[#55D69B] text-base leading-none mt-0.5">›</span>
                        <span className="leading-relaxed">{resp}</span>
                      </div>
                    ))}
                  </div>

                  {/* Key Highlights Badge for Trainer */}
                  {!isSecondary && (
                    <div className="mt-6 pt-4 border-t border-[#20232A] flex flex-wrap gap-2">
                      <span className="text-[11px] font-mono px-2.5 py-1 rounded bg-[#1B1E24] border border-[#27292D] text-[#F2F1ED]">
                        HTML &amp; CSS Training
                      </span>
                      <span className="text-[11px] font-mono px-2.5 py-1 rounded bg-[#1B1E24] border border-[#27292D] text-[#F2F1ED]">
                        JavaScript Fundamentals
                      </span>
                      <span className="text-[11px] font-mono px-2.5 py-1 rounded bg-[#1B1E24] border border-[#27292D] text-[#F2F1ED]">
                        30+ Students Mentored
                      </span>
                      <span className="text-[11px] font-mono px-2.5 py-1 rounded bg-[#1B1E24] border border-[#27292D] text-[#55D69B]">
                        Technical Support &amp; Debugging
                      </span>
                    </div>
                  )}

                </div>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
};
