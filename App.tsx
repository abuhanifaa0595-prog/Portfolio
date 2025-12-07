import React, { useState, useEffect } from 'react';
import { Section } from './types';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import CustomCursor from './components/CustomCursor';
import { motion, useScroll, useSpring } from 'framer-motion';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<Section>(Section.HERO);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const scrollToSection = (section: Section) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = Object.values(Section);
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top >= -300 && rect.top <= 300) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-background min-h-screen text-primary selection:bg-white selection:text-black">
      <CustomCursor />
      
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-white origin-left z-[100]"
        style={{ scaleX }}
      />

      <Navbar activeSection={activeSection} scrollToSection={scrollToSection} />

      <main className="flex flex-col gap-0">
        <div id={Section.HERO}>
          <Hero scrollToSection={scrollToSection} />
        </div>
        
        <div id={Section.WORK}>
           <Projects />
        </div>

        <div id={Section.ABOUT}>
           <About />
        </div>

        <div id={Section.CONTACT}>
           <Contact />
        </div>

        <footer className="py-8 text-center text-zinc-600 text-sm border-t border-white/5">
          <p>© {new Date().getFullYear()} Hanifa. Built with React, Tailwind, and Motion.</p>
        </footer>
      </main>
    </div>
  );
};

export default App;