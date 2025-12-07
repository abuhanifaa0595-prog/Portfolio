import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { Section } from '../types';

interface HeroProps {
  scrollToSection: (section: Section) => void;
}

const Hero: React.FC<HeroProps> = ({ scrollToSection }) => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 100, opacity: 0, rotate: 5 },
    visible: {
      y: 0,
      opacity: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
      },
    },
  };

  return (
    <section className="relative h-screen w-full flex flex-col justify-center items-center overflow-hidden px-4">
      {/* Abstract Background Elements */}
      <motion.div 
        style={{ y: y1, opacity: 0.4 }}
        className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-rose-900/20 rounded-full blur-[120px] pointer-events-none"
      />
      <motion.div 
        style={{ y: y2, opacity: 0.3 }}
        className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-orange-900/20 rounded-full blur-[100px] pointer-events-none"
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="z-10 text-center flex flex-col items-center"
      >
        <motion.div variants={itemVariants} className="mb-4">
          <span className="inline-block px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs tracking-widest uppercase text-zinc-400">
            Available for commissions
          </span>
        </motion.div>

        <motion.h1 variants={itemVariants} className="font-display text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-white mb-6">
          <span className="block">Visual</span>
          <span className="block text-zinc-500">Designer</span>
        </motion.h1>

        <motion.p variants={itemVariants} className="max-w-md text-zinc-400 text-lg md:text-xl leading-relaxed mb-10">
          Crafting bold identities, editorial layouts, and immersive motion graphics for brands that dare to differ.
        </motion.p>

        <motion.button
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => scrollToSection(Section.WORK)}
          className="group flex items-center gap-2 bg-white text-black px-8 py-4 rounded-full font-medium text-lg"
        >
          View Portfolio
          <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
        </motion.button>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-10 hidden md:block"
      >
        <p className="text-zinc-600 text-sm transform -rotate-90 origin-bottom-left">SCROLL TO EXPLORE</p>
      </motion.div>
    </section>
  );
};

export default Hero;