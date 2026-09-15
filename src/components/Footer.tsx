import React, { useState, useEffect } from 'react';
import { ArrowUpRight, ArrowUp } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const [currentTime, setCurrentTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      // Greater Noida, Uttar Pradesh, India is UTC+5:30 (Asia/Kolkata)
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      };
      setCurrentTime(new Intl.DateTimeFormat('en-GB', options).format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      id="main-footer"
      className="py-12 bg-[#08090B] text-[#9A9CA3] border-t border-[#1F2125]"
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 pb-8 border-b border-[#1C1E23]">
          {/* Identity */}
          <div>
            <div className="text-lg font-bold text-[#F2F1ED] tracking-tight">
              JULIEN PORNA CISSÉ
            </div>
            <div className="font-mono text-xs text-[#9A9CA3] mt-1">
              Web Developer · Greater Noida, India
            </div>
          </div>

          {/* Nav Links */}
          <div className="flex flex-wrap items-center gap-6 font-mono text-xs">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noreferrer noopener"
              className="text-[#F2F1ED] hover:text-[#55D69B] inline-flex items-center gap-1 transition-colors"
            >
              <span>GitHub</span>
              <ArrowUpRight className="w-3 h-3 text-[#55D69B]" />
            </a>

            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noreferrer noopener"
              className="text-[#F2F1ED] hover:text-[#55D69B] inline-flex items-center gap-1 transition-colors"
            >
              <span>LinkedIn</span>
              <ArrowUpRight className="w-3 h-3 text-[#55D69B]" />
            </a>

            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="text-[#F2F1ED] hover:text-[#55D69B] inline-flex items-center gap-1 transition-colors"
            >
              <span>Email</span>
              <ArrowUpRight className="w-3 h-3 text-[#55D69B]" />
            </a>
          </div>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            aria-label="Scroll to top of page"
            className="flex items-center gap-2 font-mono text-xs text-[#9A9CA3] hover:text-[#F2F1ED] p-2 rounded-lg bg-[#111317] border border-[#22242A] hover:border-[#383C45] transition-colors self-start md:self-auto"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#55D69B]" />
          </button>
        </div>

        {/* Bottom Bar with Time and Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 font-mono text-xs text-[#6B6E77]">
          <div>
            © 2026 Julien Porna Cissé. Handcrafted with React &amp; TypeScript.
          </div>

          <div className="flex items-center gap-2 text-[#9A9CA3]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#55D69B] animate-pulse" />
            <span>GREATER NOIDA (IST):</span>
            <span className="text-[#F2F1ED] font-medium">{currentTime || '18:00:00'}</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
