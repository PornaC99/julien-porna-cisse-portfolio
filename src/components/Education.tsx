import React from 'react';
import { EDUCATION, CERTIFICATIONS, LEADERSHIP } from '../data/portfolioData';
import { GraduationCap, Award, Users, BookOpen, Calendar, MapPin } from 'lucide-react';

export const Education: React.FC = () => {
  const primaryEducation = EDUCATION.find((e) => e.isPrimary);
  const priorEducation = EDUCATION.filter((e) => !e.isPrimary);

  return (
    <section
      id="education"
      aria-label="Education & Background"
      className="py-20 sm:py-28 border-b border-[#27292D] bg-[#0E1013]"
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-16 pb-6 border-b border-[#27292D]">
          <div className="font-mono text-xs uppercase tracking-widest text-[#55D69B] mb-2 font-semibold">
            06 — BACKGROUND
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#F2F1ED] mb-3">
            Education &amp; Credentials
          </h2>
          <p className="text-sm sm:text-base text-[#9A9CA3] max-w-xl">
            Academic pathway in computer applications, foundational management studies, and specialized certifications.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Education Pathways */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Primary Degree Highlight */}
            {primaryEducation && (
              <div
                id="education-primary"
                className="bg-[#14161B] border-2 border-[#55D69B]/40 rounded-xl p-6 sm:p-8 relative overflow-hidden"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-[11px] uppercase tracking-wider text-[#55D69B] font-semibold flex items-center gap-1.5">
                    <GraduationCap className="w-4 h-4" />
                    <span>CURRENT DEGREE · UNDERGRADUATE</span>
                  </span>
                  <span className="font-mono text-xs text-[#9A9CA3] bg-[#1C1F26] px-2.5 py-1 rounded border border-[#27292D]">
                    {primaryEducation.period}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-[#F2F1ED] mb-1.5">
                  {primaryEducation.degree}
                </h3>

                <div className="text-sm font-medium text-[#F2F1ED]/90 mb-4 flex flex-wrap items-center gap-x-3 gap-y-1">
                  <span>{primaryEducation.institution}</span>
                  <span className="text-[#3A3E47]">·</span>
                  <span className="text-[#9A9CA3] flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-[#55D69B]" />
                    {primaryEducation.location}
                  </span>
                </div>

                {primaryEducation.details && (
                  <p className="text-sm text-[#9A9CA3] leading-relaxed mb-6">
                    {primaryEducation.details}
                  </p>
                )}

                <div className="pt-4 border-t border-[#20232A] flex flex-wrap items-center justify-between gap-4 font-mono text-xs">
                  <div>
                    <span className="text-[#9A9CA3] block text-[10px] uppercase">CUMULATIVE GPA</span>
                    <span className="text-[#55D69B] font-bold text-lg">{primaryEducation.gpa}</span>
                  </div>
                  <div>
                    <span className="text-[#9A9CA3] block text-[10px] uppercase">GRADUATION YEAR</span>
                    <span className="text-[#F2F1ED] font-semibold">2027</span>
                  </div>
                </div>
              </div>
            )}

            {/* Prior Education Timeline */}
            <div className="space-y-4">
              <h4 className="font-mono text-xs uppercase tracking-wider text-[#9A9CA3] font-semibold flex items-center gap-2">
                <BookOpen className="w-3.5 h-3.5 text-[#55D69B]" />
                <span>PREVIOUS ACADEMIC QUALIFICATIONS</span>
              </h4>

              <div className="border-l border-[#27292D] pl-5 space-y-4 font-mono text-xs">
                {priorEducation.map((item) => (
                  <div key={item.id} className="relative group">
                    <div className="absolute -left-[25px] top-1.5 w-2.5 h-2.5 rounded-full bg-[#1F2228] border border-[#3E424B]" />
                    <div className="bg-[#121418] border border-[#22252A] rounded-lg p-3.5">
                      <div className="flex items-center justify-between text-[#9A9CA3] mb-1">
                        <span className="text-[11px] text-[#55D69B]">{item.period}</span>
                        <span>{item.location}</span>
                      </div>
                      <div className="text-sm font-semibold text-[#F2F1ED] font-sans">
                        {item.degree}
                      </div>
                      <div className="text-xs text-[#9A9CA3] mt-0.5">
                        {item.institution}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Certifications & Leadership */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Certifications Section */}
            <div className="bg-[#131519] border border-[#27292D] rounded-xl p-6">
              <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-[#55D69B] font-semibold mb-4 pb-2 border-b border-[#24272E]">
                <Award className="w-4 h-4" />
                <span>CERTIFICATIONS</span>
              </div>

              <div className="space-y-3">
                {CERTIFICATIONS.map((cert, cIdx) => (
                  <div
                    key={cIdx}
                    className="bg-[#0E1013] border border-[#222429] rounded-lg p-3 hover:border-[#383C45] transition-colors"
                  >
                    <div className="text-sm font-semibold text-[#F2F1ED] leading-snug">
                      {cert.name}
                    </div>
                    <div className="flex items-center justify-between text-xs font-mono text-[#9A9CA3] mt-1.5">
                      <span>{cert.issuer}</span>
                      {cert.year && <span className="text-[#55D69B]">{cert.year}</span>}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Leadership & Campus Responsibility */}
            <div className="bg-[#131519] border border-[#27292D] rounded-xl p-6">
              <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-[#55D69B] font-semibold mb-4 pb-2 border-b border-[#24272E]">
                <Users className="w-4 h-4" />
                <span>LEADERSHIP &amp; TEAMWORK</span>
              </div>

              <div className="space-y-3">
                {LEADERSHIP.map((lead, lIdx) => (
                  <div
                    key={lIdx}
                    className="bg-[#0E1013] border border-[#222429] rounded-lg p-3 hover:border-[#383C45] transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-semibold text-[#F2F1ED]">
                        {lead.role}
                      </span>
                      <span className="text-xs font-mono text-[#55D69B]">
                        {lead.year}
                      </span>
                    </div>
                    <div className="text-xs font-mono text-[#9A9CA3] mt-1">
                      {lead.organization}
                    </div>
                  </div>
                ))}
              </div>

              <p className="text-[11px] text-[#9A9CA3] mt-4 pt-3 border-t border-[#202328] leading-relaxed">
                Demonstrated student governance, cross-cultural coordination, and initiative in university organizations.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
