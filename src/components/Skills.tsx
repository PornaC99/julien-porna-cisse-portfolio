import React, { useState } from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { Code2, Sparkles, Database, Terminal, Wrench, Palette, Info } from 'lucide-react';

export const Skills: React.FC = () => {
  const [hoveredSkill, setHoveredSkill] = useState<{
    name: string;
    description: string;
    category: string;
  } | null>({
    name: 'JavaScript',
    description: 'Interactive interfaces, DOM manipulation, and modern application logic.',
    category: 'FRONTEND',
  });

  const categoryIcons: Record<string, React.ReactNode> = {
    FRONTEND: <Code2 className="w-4 h-4 text-[#55D69B]" />,
    PROGRAMMING: <Terminal className="w-4 h-4 text-[#55D69B]" />,
    DATABASE: <Database className="w-4 h-4 text-[#55D69B]" />,
    TOOLS: <Wrench className="w-4 h-4 text-[#55D69B]" />,
    'AI-ASSISTED DEVELOPMENT': <Sparkles className="w-4 h-4 text-[#55D69B]" />,
    DESIGN: <Palette className="w-4 h-4 text-[#55D69B]" />,
  };

  return (
    <section
      id="skills"
      aria-label="Technical Stack"
      className="py-20 sm:py-28 border-b border-[#27292D] bg-[#0E1013]"
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-16 pb-6 border-b border-[#27292D]">
          <div>
            <div className="font-mono text-xs uppercase tracking-widest text-[#55D69B] mb-2 font-semibold">
              05 — STACK
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#F2F1ED]">
              Skills &amp; Technologies
            </h2>
          </div>
          <p className="font-mono text-xs text-[#9A9CA3] max-w-xs">
            Disciplined technical foundations and modern AI-assisted workflows. Zero fabricated percentage bars.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Skill Categories */}
          <div className="lg:col-span-8 space-y-8">
            {SKILL_CATEGORIES.map((cat) => (
              <div key={cat.category} className="space-y-3">
                <div className="flex items-center gap-2 font-mono text-xs text-[#9A9CA3] uppercase tracking-wider font-semibold">
                  {categoryIcons[cat.category] || <Code2 className="w-4 h-4" />}
                  <span>{cat.category}</span>
                </div>

                <div className="flex flex-wrap gap-2.5">
                  {cat.skills.map((skill) => {
                    const isHovered = hoveredSkill?.name === skill.name;

                    return (
                      <button
                        key={skill.name}
                        onMouseEnter={() =>
                          setHoveredSkill({
                            name: skill.name,
                            description: skill.description,
                            category: cat.category,
                          })
                        }
                        onFocus={() =>
                          setHoveredSkill({
                            name: skill.name,
                            description: skill.description,
                            category: cat.category,
                          })
                        }
                        onClick={() =>
                          setHoveredSkill({
                            name: skill.name,
                            description: skill.description,
                            category: cat.category,
                          })
                        }
                        className={`group px-3.5 py-2 rounded-lg border font-mono text-xs transition-all duration-200 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#55D69B] ${
                          isHovered
                            ? 'bg-[#181B21] border-[#55D69B] text-[#55D69B] shadow-sm shadow-[#55D69B]/10'
                            : 'bg-[#131519] border-[#27292D] text-[#F2F1ED] hover:border-[#3E434D] hover:bg-[#16181E]'
                        }`}
                      >
                        <span className="flex items-center gap-2">
                          <span
                            className={`w-1.5 h-1.5 rounded-full transition-colors ${
                              isHovered ? 'bg-[#55D69B]' : 'bg-[#3A3E47]'
                            }`}
                          />
                          <span>{skill.name}</span>
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Live Context Inspector / Hover Card */}
          <div className="lg:col-span-4">
            <div className="sticky top-28 bg-[#131519] border border-[#27292D] rounded-xl p-6 shadow-xl">
              <div className="flex items-center justify-between pb-3 border-b border-[#24272E] mb-4">
                <span className="font-mono text-[11px] text-[#9A9CA3] uppercase tracking-wider flex items-center gap-1.5">
                  <Info className="w-3.5 h-3.5 text-[#55D69B]" />
                  <span>SKILL INSPECTOR</span>
                </span>
                <span className="text-[10px] font-mono text-[#55D69B] bg-[#55D69B]/10 px-2 py-0.5 rounded">
                  Hover or Tap
                </span>
              </div>

              {hoveredSkill ? (
                <div className="space-y-3">
                  <div className="font-mono text-[11px] text-[#9A9CA3]">
                    CATEGORY: <strong className="text-[#F2F1ED]">{hoveredSkill.category}</strong>
                  </div>
                  <h3 className="text-xl font-bold text-[#F2F1ED] font-mono">
                    {hoveredSkill.name}
                  </h3>
                  <div className="p-3.5 rounded-lg bg-[#0E1013] border border-[#22252B] text-sm text-[#F2F1ED] leading-relaxed">
                    {hoveredSkill.description}
                  </div>
                </div>
              ) : (
                <div className="py-8 text-center text-xs font-mono text-[#9A9CA3]">
                  Hover over or select any technology to view practical role context.
                </div>
              )}

              <div className="mt-6 pt-4 border-t border-[#22252B] text-[11px] font-mono text-[#9A9CA3] flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#55D69B]" />
                <span>Verified technical experience only</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
