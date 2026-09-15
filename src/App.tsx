import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Currently } from './components/Currently';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { HowIBuild } from './components/HowIBuild';
import { CodeMoment } from './components/CodeMoment';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';
import { GithubSection } from './components/GithubSection';
import { Education } from './components/Education';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('home');

  useEffect(() => {
    const sections = ['home', 'about', 'projects', 'workflow', 'experience', 'skills', 'education', 'contact'];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i]);
        if (element) {
          const top = element.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#0B0C0E] text-[#F2F1ED] font-sans selection:bg-[#55D69B]/20 selection:text-[#55D69B]">
      {/* Navigation */}
      <Navbar activeSection={activeSection} />

      {/* Main Content Sections */}
      <main id="main-content">
        <Hero />
        <Currently />
        <About />
        <Projects />
        <HowIBuild />
        <CodeMoment />
        <Experience />
        <Skills />
        <GithubSection />
        <Education />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
