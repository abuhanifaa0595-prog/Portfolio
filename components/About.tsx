import React from 'react';
import { motion } from 'framer-motion';
import { Palette, PenTool, Layers, Type } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section className="py-24 px-4 md:px-12 w-full max-w-7xl mx-auto bg-zinc-950/50">
       <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="font-display text-5xl md:text-7xl font-bold mb-4">About Me</h2>
        <div className="h-1 w-24 bg-white rounded-full" />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Large Block - Biography */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="md:col-span-2 p-8 md:p-12 bg-zinc-900/50 border border-white/5 rounded-3xl"
        >
          <h3 className="text-3xl font-display font-bold mb-6">Visual Storytelling</h3>
          <p className="text-zinc-400 text-lg leading-relaxed mb-6">
            I believe design is intelligence made visible. My approach combines strategic thinking with aesthetic excellence to create brands that stand out in a crowded market. With a background in fine arts and digital media, I bridge the gap between traditional craftsmanship and modern trends.
          </p>
          <div className="flex flex-wrap gap-2">
            {['Photoshop', 'Illustrator', 'InDesign', 'After Effects', 'Figma', 'Blender', 'Cinema 4D'].map(skill => (
              <span key={skill} className="px-4 py-2 bg-white/5 rounded-full text-sm text-zinc-300 border border-white/5">
                {skill}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Tall Block - Visual Element (Color Palette) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="md:col-span-1 md:row-span-2 p-8 bg-zinc-900 border border-white/5 rounded-3xl flex flex-col justify-between"
        >
          <div>
            <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mb-6 text-black">
                <Palette size={24} fill="currentColor" />
            </div>
            <h3 className="text-2xl font-bold mb-2">Color Theory</h3>
            <p className="text-zinc-400">
                Crafting palettes that evoke emotion and drive action.
            </p>
          </div>
          <div className="mt-8 relative h-48 w-full rounded-xl overflow-hidden flex flex-col">
              <motion.div initial={{ width: 0 }} whileInView={{ width: '100%' }} transition={{ duration: 0.8 }} className="h-1/4 bg-[#E11D48]" />
              <motion.div initial={{ width: 0 }} whileInView={{ width: '100%' }} transition={{ duration: 0.8, delay: 0.1 }} className="h-1/4 bg-[#EA580C]" />
              <motion.div initial={{ width: 0 }} whileInView={{ width: '100%' }} transition={{ duration: 0.8, delay: 0.2 }} className="h-1/4 bg-[#F59E0B]" />
              <motion.div initial={{ width: 0 }} whileInView={{ width: '100%' }} transition={{ duration: 0.8, delay: 0.3 }} className="h-1/4 bg-[#FCD34D]" />
          </div>
        </motion.div>

        {/* Small Block 1 - Print & Digital */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="p-8 bg-zinc-900/50 border border-white/5 rounded-3xl flex flex-col items-start"
        >
           <Layers className="text-zinc-400 mb-4" size={32} />
           <h4 className="text-xl font-bold">Print & Digital</h4>
           <p className="text-sm text-zinc-500 mt-2">Seamless experiences from paper to pixels.</p>
        </motion.div>

         {/* Small Block 2 - Typography */}
         <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="p-8 bg-zinc-900/50 border border-white/5 rounded-3xl flex flex-col items-start"
        >
           <Type className="text-zinc-400 mb-4" size={32} />
           <h4 className="text-xl font-bold">Typography</h4>
           <p className="text-sm text-zinc-500 mt-2">Obsessed with kerning, leading, and grid systems.</p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;