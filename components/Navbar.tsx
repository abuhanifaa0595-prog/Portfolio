import React from 'react';
import { motion } from 'framer-motion';
import { Section } from '../types';

interface NavbarProps {
  activeSection: Section;
  scrollToSection: (section: Section) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection, scrollToSection }) => {
  const navItems = [
    { id: Section.HERO, label: 'Home' },
    { id: Section.WORK, label: 'Work' },
    { id: Section.ABOUT, label: 'About' },
    { id: Section.CONTACT, label: 'Contact' },
  ];

  return (
    <motion.nav 
      initial={{ y: -100, x: "-50%", opacity: 0 }}
      animate={{ y: 0, x: "-50%", opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-6 left-1/2 z-50"
    >
      <div className="flex items-center gap-1 bg-zinc-900/40 backdrop-blur-xl border border-white/10 rounded-full px-2 py-2 shadow-2xl ring-1 ring-black/5">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className={`relative px-5 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
              activeSection === item.id ? 'text-black hover:text-black' : 'text-zinc-400 hover:text-white'
            }`}
          >
            {activeSection === item.id && (
              <motion.div
                layoutId="active-pill"
                className="absolute inset-0 bg-white rounded-full shadow-lg"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
            <span className="relative z-10">{item.label}</span>
          </button>
        ))}
      </div>
    </motion.nav>
  );
};

export default Navbar;