import React, { useState } from 'react';
import { WORKFLOW_STEPS } from '../data/portfolioData';
import { Check, Compass, Cpu, Wrench, RefreshCw, Rocket } from 'lucide-react';

export const HowIBuild: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const stepIcons = [Compass, Cpu, Wrench, RefreshCw, Rocket];

  return (
    <section
      id="workflow"
      aria-label="How I Build"
      className="py-20 sm:py-28 border-b border-[#27292D] bg-[#0D0F12]"
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-14 pb-6 border-b border-[#27292D]">
          <div className="font-mono text-xs uppercase tracking-widest text-[#55D69B] mb-2 font-semibold">
            03 — WORKFLOW
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#F2F1ED] mb-3">
            How I Build
          </h2>
          <p className="text-sm sm:text-base text-[#9A9CA3] max-w-xl">
            A disciplined, iterative engineering cycle that moves from clear problem definitions to deployed, reliable web applications.
          </p>
        </div>

        {/* Desktop Horizontal Workflow */}
        <div className="hidden lg:block mb-12">
          <div className="grid grid-cols-5 gap-4 relative">
            
            {/* Connecting line */}
            <div className="absolute top-6 left-12 right-12 h-[1px] bg-[#27292D] -z-0" />

            {WORKFLOW_STEPS.map((step, idx) => {
              const Icon = stepIcons[idx] || Compass;
              const isSelected = activeStep === idx;

              return (
                <div
                  key={step.number}
                  onClick={() => setActiveStep(idx)}
                  className={`cursor-pointer group flex flex-col p-4 rounded-xl border transition-all duration-200 z-10 ${
                    isSelected
                      ? 'bg-[#14171C] border-[#55D69B]/60 shadow-lg shadow-black/40'
                      : 'bg-[#111317] border-[#27292D] hover:border-[#3A3E45]'
                  }`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`w-9 h-9 rounded-lg flex items-center justify-center border font-mono text-xs transition-colors ${
                        isSelected
                          ? 'bg-[#55D69B] text-[#0B0C0E] border-[#55D69B] font-bold'
                          : 'bg-[#181B20] text-[#9A9CA3] border-[#27292D] group-hover:text-[#F2F1ED]'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="font-mono text-xs text-[#9A9CA3] group-hover:text-[#55D69B]">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="font-bold text-sm text-[#F2F1ED] mb-1.5 tracking-wide">
                    {step.title}
                  </h3>

                  <p className="text-xs text-[#9A9CA3] leading-relaxed mb-4 flex-1">
                    {step.description}
                  </p>

                  <div className="space-y-1.5 pt-3 border-t border-[#202329]">
                    {step.details.map((detail, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-1.5 text-[11px] text-[#9A9CA3]">
                        <span className="text-[#55D69B] mt-0.5">•</span>
                        <span className="leading-tight">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile Vertical Timeline */}
        <div className="lg:hidden space-y-4 mb-12">
          {WORKFLOW_STEPS.map((step, idx) => {
            const Icon = stepIcons[idx] || Compass;

            return (
              <div
                key={step.number}
                className="bg-[#121418] border border-[#27292D] rounded-xl p-5"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-md bg-[#181B20] border border-[#27292D] flex items-center justify-center text-[#55D69B]">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-mono text-[10px] text-[#55D69B] uppercase block">
                      STEP {step.number}
                    </span>
                    <h3 className="font-bold text-base text-[#F2F1ED]">
                      {step.title}
                    </h3>
                  </div>
                </div>

                <p className="text-sm text-[#9A9CA3] mb-4">
                  {step.description}
                </p>

                <div className="space-y-1.5 pt-3 border-t border-[#1F2228]">
                  {step.details.map((detail, dIdx) => (
                    <div key={dIdx} className="flex items-start gap-2 text-xs text-[#9A9CA3]">
                      <Check className="w-3.5 h-3.5 text-[#55D69B] shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Workflow Philosophy Banner */}
        <div className="p-6 rounded-xl bg-[#121417] border border-[#27292D] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-[#55D69B] shrink-0" />
            <blockquote className="font-mono text-xs sm:text-sm text-[#F2F1ED] italic">
              &ldquo;AI-assisted development is part of my workflow — not a replacement for understanding the code.&rdquo;
            </blockquote>
          </div>
          <span className="font-mono text-[11px] text-[#9A9CA3] shrink-0 uppercase tracking-wider">
            Julien Porna Cissé
          </span>
        </div>

      </div>
    </section>
  );
};
