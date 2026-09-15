import React from 'react';
import { CURRENTLY_ITEMS } from '../data/portfolioData';
import { Activity } from 'lucide-react';

export const Currently: React.FC = () => {
  return (
    <section
      id="currently-section"
      aria-label="Current Activities"
      className="py-12 border-b border-[#27292D] bg-[#0E1013]"
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-2.5">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#55D69B] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#55D69B]" />
            </span>
            <span className="font-mono text-xs uppercase tracking-widest text-[#9A9CA3] font-semibold">
              CURRENT FOCUS
            </span>
          </div>
          <div className="flex items-center gap-2 text-xs font-mono text-[#9A9CA3]">
            <Activity className="w-3.5 h-3.5 text-[#55D69B]" />
            <span>Updated actively for 2026</span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {CURRENTLY_ITEMS.map((item, idx) => (
            <div
              key={item.label}
              id={`currently-item-${idx}`}
              className="bg-[#131519] border border-[#27292D] rounded-lg p-4 hover:border-[#383B42] transition-colors"
            >
              <div className="font-mono text-[11px] font-semibold uppercase tracking-wider text-[#55D69B] mb-1.5 flex items-center justify-between">
                <span>{item.label}</span>
                <span className="text-[#3A3E45]">0{idx + 1}</span>
              </div>
              <h3 className="text-sm font-semibold text-[#F2F1ED] mb-1 leading-snug">
                {item.value}
              </h3>
              <p className="text-xs text-[#9A9CA3] leading-relaxed">
                {item.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
