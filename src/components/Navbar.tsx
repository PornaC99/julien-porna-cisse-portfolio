import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Github } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Workflow', href: '#workflow' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="main-nav-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0B0C0E]/90 backdrop-blur-md border-b border-[#27292D] py-3.5 shadow-lg shadow-black/20'
          : 'bg-transparent border-b border-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <a
          id="nav-logo"
          href="#home"
          onClick={(e) => handleNavClick(e, '#home')}
          className="group flex items-center gap-2 font-mono text-sm tracking-tight text-[#F2F1ED] hover:text-[#55D69B] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#55D69B] rounded px-1"
        >
          <span className="w-2 h-2 rounded-full bg-[#55D69B] inline-block transition-transform group-hover:scale-125" />
          <span className="font-semibold text-base">julien.cisse</span>
        </a>

        {/* Desktop Navigation */}
        <nav id="desktop-nav" aria-label="Main Navigation" className="hidden md:flex items-center gap-1 lg:gap-2">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                id={`nav-link-${link.name.toLowerCase()}`}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`px-3 py-1.5 text-xs lg:text-sm font-medium rounded-md transition-colors relative focus:outline-none focus-visible:ring-2 focus-visible:ring-[#55D69B] ${
                  isActive
                    ? 'text-[#F2F1ED] bg-[#1A1C20]'
                    : 'text-[#9A9CA3] hover:text-[#F2F1ED] hover:bg-[#14161A]'
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute bottom-0 left-3 right-3 h-[1.5px] bg-[#55D69B] rounded-full" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Right Action: GitHub Link */}
        <div className="hidden md:flex items-center gap-3">
          <a
            id="nav-github-link"
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noreferrer noopener"
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono font-medium text-[#F2F1ED] bg-[#17191D] border border-[#27292D] rounded-md hover:border-[#55D69B]/50 hover:bg-[#1E2126] transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#55D69B]"
          >
            <Github className="w-3.5 h-3.5 text-[#9A9CA3]" />
            <span>GitHub</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#55D69B]" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-2">
          <a
            id="nav-mobile-github"
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="GitHub Profile"
            className="p-2 text-[#9A9CA3] hover:text-[#F2F1ED] border border-[#27292D] rounded-md bg-[#17191D]"
          >
            <Github className="w-4 h-4" />
          </a>
          <button
            id="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
            aria-expanded={mobileMenuOpen}
            className="p-2 text-[#9A9CA3] hover:text-[#F2F1ED] border border-[#27292D] rounded-md bg-[#17191D] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#55D69B]"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu-drawer"
          className="md:hidden bg-[#0F1114] border-b border-[#27292D] px-5 py-4 mt-2 space-y-1 shadow-2xl"
        >
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                id={`mobile-nav-link-${link.name.toLowerCase()}`}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`block px-3 py-2.5 text-sm font-medium rounded-md transition-colors ${
                  isActive
                    ? 'text-[#55D69B] bg-[#17191D] font-semibold'
                    : 'text-[#9A9CA3] hover:text-[#F2F1ED] hover:bg-[#14161A]'
                }`}
              >
                {link.name}
              </a>
            );
          })}
          <div className="pt-3 border-t border-[#27292D] flex flex-col gap-2">
            <a
              id="mobile-nav-github-button"
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noreferrer noopener"
              className="flex items-center justify-center gap-2 py-2.5 text-xs font-mono text-[#F2F1ED] bg-[#17191D] border border-[#27292D] rounded-md hover:bg-[#202329]"
            >
              <Github className="w-4 h-4" />
              <span>View GitHub Profile ↗</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
