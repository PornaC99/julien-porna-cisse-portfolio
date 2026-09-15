import React, { useState } from 'react';
import { ArrowDown, ArrowUpRight, Github, MapPin, GraduationCap, UploadCloud, FileDown, Check } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { downloadResumePdf } from '../utils/generateResume';

export const Hero: React.FC = () => {
  const [imageError, setImageError] = useState(false);
  const [customImage, setCustomImage] = useState<string | null>(null);
  const [isDownloadingResume, setIsDownloadingResume] = useState(false);

  const handleDownloadResume = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsDownloadingResume(true);
    try {
      downloadResumePdf();
    } catch (err) {
      console.error('PDF generation error, triggering direct download fallback:', err);
      const link = document.createElement('a');
      link.href = PERSONAL_INFO.resumeUrl;
      link.download = 'Julien_Porna_Cisse_Resume.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
    setTimeout(() => {
      setIsDownloadingResume(false);
    }, 2200);
  };

  const persistPortrait = async (file: File) => {
    try {
      await fetch('/api/upload-portrait', {
        method: 'POST',
        headers: { 'Content-Type': file.type || 'image/jpeg' },
        body: file,
      });
    } catch {
      // Ignore background persistence errors
    }
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setCustomImage(url);
      setImageError(false);
      persistPortrait(file);
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const file = e.dataTransfer.files?.[0];
    if (file && file.type.startsWith('image/')) {
      const url = URL.createObjectURL(file);
      setCustomImage(url);
      setImageError(false);
      persistPortrait(file);
    }
  };

  const photoSrc = customImage || PERSONAL_INFO.portraitUrl || "/images/julien-porna-cisse.jpg";

  return (
    <section
      id="home"
      aria-label="Introduction"
      className="relative pt-28 sm:pt-36 pb-16 sm:pb-24 border-b border-[#27292D]"
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Editorial Introduction */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Status Pill */}
            <div
              id="hero-status-pill"
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#121417] border border-[#27292D] text-xs font-mono text-[#F2F1ED] mb-6 animate-fadeIn"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#55D69B] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#55D69B]" />
              </span>
              <span className="tracking-wide text-[11px] sm:text-xs uppercase font-medium">
                {PERSONAL_INFO.status}
              </span>
            </div>

            {/* Technical Eyebrow */}
            <div
              id="hero-eyebrow"
              className="font-mono text-xs sm:text-sm tracking-wider uppercase text-[#9A9CA3] mb-3 flex items-center gap-2"
            >
              <span className="text-[#55D69B] font-semibold">//</span>
              <span>{PERSONAL_INFO.title} / FULL-STACK DEVELOPMENT</span>
            </div>

            {/* Main Heading */}
            <h1
              id="hero-main-heading"
              className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#F2F1ED] leading-[1.1] mb-6"
            >
              Hi, I&apos;m <span className="text-[#F2F1ED] underline decoration-[#55D69B]/40 decoration-2 underline-offset-8">Julien Porna Cissé</span>.
            </h1>

            {/* Supporting Statement */}
            <p
              id="hero-supporting-statement"
              className="text-base sm:text-lg text-[#9A9CA3] leading-relaxed max-w-2xl mb-4"
            >
              I build modern web applications and digital experiences with a focus on clean interfaces, practical functionality and continuous learning.
            </p>

            {/* Secondary Technical Line */}
            <p
              id="hero-secondary-line"
              className="font-mono text-xs sm:text-sm text-[#9A9CA3] border-l-2 border-[#55D69B] pl-3 py-0.5 mb-8"
            >
              Currently exploring AI-assisted development and Vibe Coding.
            </p>

            {/* CTAs */}
            <div id="hero-cta-group" className="flex flex-wrap items-center gap-3.5 w-full sm:w-auto">
              <a
                id="hero-cta-view-work"
                href="#projects"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium rounded-md text-[#0B0C0E] bg-[#55D69B] hover:bg-[#47c48b] transition-all duration-200 shadow-md shadow-[#55D69B]/10 active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#55D69B] focus-visible:ring-offset-[#0B0C0E]"
              >
                <span>VIEW MY WORK</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              {/* Download Resume Button for Recruiters */}
              <a
                id="hero-cta-download-resume"
                href={PERSONAL_INFO.resumeUrl}
                download="Julien_Porna_Cisse_Resume.pdf"
                onClick={handleDownloadResume}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-mono font-medium rounded-md text-[#F2F1ED] bg-[#16181C] border border-[#55D69B]/60 hover:bg-[#1E2322] hover:border-[#55D69B] hover:text-[#55D69B] transition-all duration-200 shadow-sm active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#55D69B] group"
                aria-label="Download Julien Porna Cissé Resume PDF"
              >
                {isDownloadingResume ? (
                  <>
                    <Check className="w-4 h-4 text-[#55D69B]" />
                    <span className="text-[#55D69B]">DOWNLOADING PDF...</span>
                  </>
                ) : (
                  <>
                    <FileDown className="w-4 h-4 text-[#55D69B] group-hover:-translate-y-0.5 transition-transform duration-200" />
                    <span>DOWNLOAD RESUME</span>
                  </>
                )}
              </a>

              <a
                id="hero-cta-github"
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer noopener"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-mono font-medium rounded-md text-[#9A9CA3] hover:text-[#F2F1ED] bg-[#121417] border border-[#27292D] hover:bg-[#1A1D23] hover:border-[#3E4249] transition-all duration-200 active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#55D69B]"
              >
                <Github className="w-4 h-4 text-[#9A9CA3]" />
                <span>GITHUB</span>
                <ArrowUpRight className="w-4 h-4 text-[#55D69B]" />
              </a>
            </div>

          </div>

          {/* Right Column: Editorial Photograph Frame */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-end">
            <div className="w-full max-w-sm sm:max-w-md">
              
              {/* Image Frame Container */}
              <div
                id="hero-portrait-frame"
                onDragOver={(e) => e.preventDefault()}
                onDrop={handleDrop}
                className="relative bg-[#14161A] border border-[#27292D] rounded-xl p-2.5 shadow-2xl transition-all duration-300 group"
              >
                {/* Technical Corner Accents */}
                <div className="absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2 border-[#55D69B]" />
                <div className="absolute -top-1 -right-1 w-3 h-3 border-t-2 border-r-2 border-[#55D69B]" />
                <div className="absolute -bottom-1 -left-1 w-3 h-3 border-b-2 border-l-2 border-[#55D69B]" />
                <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b-2 border-r-2 border-[#55D69B]" />

                {/* Photo Display */}
                <div className="relative aspect-[3/4] w-full overflow-hidden rounded-lg bg-[#0E1013] flex items-center justify-center">
                  {!imageError ? (
                    <img
                      src={photoSrc}
                      alt="Julien Porna Cissé — Web Developer"
                      onError={() => setImageError(true)}
                      className="w-full h-full object-cover object-top filter contrast-[1.03] transition-transform duration-500 group-hover:scale-[1.015]"
                      referrerPolicy="no-referrer"
                      loading="eager"
                    />
                  ) : (
                    /* Elegant Fallback if image is still loading / uploading */
                    <div className="flex flex-col items-center justify-center text-center p-6 h-full w-full bg-gradient-to-b from-[#14161A] to-[#0E1013]">
                      <div className="w-20 h-20 rounded-full bg-[#1A1D23] border border-[#27292D] flex items-center justify-center text-2xl font-mono font-bold text-[#55D69B] mb-4">
                        JC
                      </div>
                      <h2 className="text-base font-semibold text-[#F2F1ED] mb-1">Julien Porna Cissé</h2>
                      <p className="text-xs text-[#9A9CA3] font-mono mb-4">Professional Portrait</p>
                      <label className="cursor-pointer inline-flex items-center gap-2 px-3 py-1.5 text-xs font-mono bg-[#1E2127] border border-[#27292D] hover:border-[#55D69B] rounded text-[#F2F1ED] transition-colors">
                        <UploadCloud className="w-3.5 h-3.5 text-[#55D69B]" />
                        <span>Upload Portrait</span>
                        <input
                          type="file"
                          accept="image/*"
                          onChange={handleImageUpload}
                          className="hidden"
                        />
                      </label>
                    </div>
                  )}

                  {/* Subtle Authentic Vignette / Edge Light */}
                  <div className="pointer-events-none absolute inset-0 rounded-lg ring-1 ring-inset ring-white/5" />
                </div>
              </div>

              {/* Metadata Below Photograph */}
              <div
                id="hero-portrait-metadata"
                className="mt-4 grid grid-cols-2 gap-3 bg-[#111316] border border-[#27292D] rounded-lg p-3 font-mono text-xs"
              >
                <div className="flex items-start gap-2 border-r border-[#27292D] pr-3">
                  <MapPin className="w-3.5 h-3.5 text-[#55D69B] shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-[10px] uppercase tracking-wider text-[#9A9CA3]">BASED IN</span>
                    <span className="text-[#F2F1ED] font-medium">Greater Noida, India</span>
                  </div>
                </div>

                <div className="flex items-start gap-2 pl-1">
                  <GraduationCap className="w-3.5 h-3.5 text-[#55D69B] shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-[10px] uppercase tracking-wider text-[#9A9CA3]">STUDIES</span>
                    <span className="text-[#F2F1ED] font-medium">{PERSONAL_INFO.studies}</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
