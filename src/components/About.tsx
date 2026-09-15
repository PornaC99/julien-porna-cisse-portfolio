import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { BookOpen, Award, Clock, MapPin } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section
      id="about"
      aria-label="About Julien Porna Cissé"
      className="py-20 sm:py-28 border-b border-[#27292D]"
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="font-mono text-xs uppercase tracking-widest text-[#55D69B] mb-2 font-semibold">
            01 — ABOUT
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#F2F1ED]">
            About
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Main Narrative Column */}
          <div className="lg:col-span-8 space-y-6 text-base sm:text-lg text-[#9A9CA3] leading-relaxed">
            <p className="text-[#F2F1ED] font-medium text-lg sm:text-xl leading-relaxed">
              I&apos;m a Bachelor of Computer Applications student with practical experience building websites and web-based applications.
            </p>

            <p>
              My background started with frontend development using HTML, CSS and JavaScript, and I am progressively expanding toward full-stack development and database-driven applications.
            </p>

            <p>
              I also explore AI-assisted development and Vibe Coding as part of my workflow for rapid prototyping, iteration, debugging and product development.
            </p>

            <div className="pt-2">
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-lg bg-[#14161A] border border-[#27292D] text-xs font-mono text-[#F2F1ED]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#55D69B]" />
                <span>CORE PHILOSOPHY: DEVELOPER FIRST · AI-ASSISTED WORKFLOW SECOND</span>
              </div>
            </div>
          </div>

          {/* Quick Context Card */}
          <div className="lg:col-span-4 bg-[#121417] border border-[#27292D] rounded-xl p-6">
            <h3 className="font-mono text-xs uppercase tracking-wider text-[#9A9CA3] mb-4 pb-2 border-b border-[#27292D]">
              PROFILE SNAPSHOT
            </h3>
            <div className="space-y-4 text-sm font-mono">
              <div>
                <span className="text-[#55D69B] text-xs block">ROLE</span>
                <span className="text-[#F2F1ED] font-medium">Web Developer</span>
              </div>
              <div>
                <span className="text-[#55D69B] text-xs block">ACADEMIC STATUS</span>
                <span className="text-[#F2F1ED] font-medium">BCA Student (2024–2027)</span>
              </div>
              <div>
                <span className="text-[#55D69B] text-xs block">WORKING LANGUAGES</span>
                <span className="text-[#F2F1ED] font-medium">French (Native) · English</span>
              </div>
              <div>
                <span className="text-[#55D69B] text-xs block">DESIRED POSITION</span>
                <span className="text-[#F2F1ED] font-medium">Web Development Internship</span>
              </div>
            </div>
          </div>

        </div>

        {/* Information Grid */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          
          <div
            id="about-card-bca"
            className="bg-[#121417] border border-[#27292D] rounded-xl p-5 hover:border-[#383B42] transition-colors"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="font-mono text-xs uppercase tracking-wider text-[#9A9CA3]">
                BCA
              </span>
              <BookOpen className="w-4 h-4 text-[#55D69B]" />
            </div>
            <div className="text-base font-semibold text-[#F2F1ED] mb-1">
              Noida International University
            </div>
            <div className="text-xs font-mono text-[#9A9CA3]">
              Greater Noida, India
            </div>
          </div>

          <div
            id="about-card-gpa"
            className="bg-[#121417] border border-[#27292D] rounded-xl p-5 hover:border-[#383B42] transition-colors"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="font-mono text-xs uppercase tracking-wider text-[#9A9CA3]">
                GPA
              </span>
              <Award className="w-4 h-4 text-[#55D69B]" />
            </div>
            <div className="text-2xl font-bold font-mono text-[#F2F1ED] mb-1">
              {PERSONAL_INFO.gpa}
            </div>
            <div className="text-xs font-mono text-[#9A9CA3]">
              Academic distinction
            </div>
          </div>

          <div
            id="about-card-exp"
            className="bg-[#121417] border border-[#27292D] rounded-xl p-5 hover:border-[#383B42] transition-colors"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="font-mono text-xs uppercase tracking-wider text-[#9A9CA3]">
                EXPERIENCE
              </span>
              <Clock className="w-4 h-4 text-[#55D69B]" />
            </div>
            <div className="text-2xl font-bold font-mono text-[#F2F1ED] mb-1">
              {PERSONAL_INFO.experienceYears}
            </div>
            <div className="text-xs font-mono text-[#9A9CA3]">
              Web Development Trainer & Support
            </div>
          </div>

          <div
            id="about-card-loc"
            className="bg-[#121417] border border-[#27292D] rounded-xl p-5 hover:border-[#383B42] transition-colors"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="font-mono text-xs uppercase tracking-wider text-[#9A9CA3]">
                LOCATION
              </span>
              <MapPin className="w-4 h-4 text-[#55D69B]" />
            </div>
            <div className="text-base font-semibold text-[#F2F1ED] mb-1">
              Greater Noida, India
            </div>
            <div className="text-xs font-mono text-[#9A9CA3]">
              Uttar Pradesh · Open to Relocate / Remote
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
