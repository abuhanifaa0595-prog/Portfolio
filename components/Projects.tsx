import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Project } from '../types';

const projects: Project[] = [
  {
    id: '1',
    title: 'Lumina',
    category: 'Brand Identity',
    description: 'Complete visual identity rebrand for a modern luxury lighting company, including logo, typography, and guidelines.',
    image: 'https://picsum.photos/seed/lumina/800/600',
    link: '#',
  },
  {
    id: '2',
    title: 'Vogue Sans',
    category: 'Typography',
    description: 'A custom display typeface designed specifically for high-end fashion editorials and large scale print.',
    image: 'https://picsum.photos/seed/vogue/800/600',
    link: '#',
  },
  {
    id: '3',
    title: 'EcoFlow',
    category: 'Packaging',
    description: 'Sustainable packaging design system for a new line of organic skincare products using biodegradable materials.',
    image: 'https://picsum.photos/seed/ecoflow/800/600',
    link: '#',
  },
  {
    id: '4',
    title: 'Nexus Event',
    category: 'Motion Graphics',
    description: 'Abstract 3D motion graphics and kinetic typography for a global tech conference opener.',
    image: 'https://picsum.photos/seed/nexus/800/600',
    link: '#',
  }
];

const Projects: React.FC = () => {
  return (
    <section className="py-24 px-4 md:px-12 w-full max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6"
      >
        <div>
          <h2 className="font-display text-5xl md:text-7xl font-bold mb-4">Selected Works</h2>
          <div className="h-1 w-24 bg-white rounded-full" />
        </div>
        <p className="text-zinc-500 max-w-sm text-right hidden md:block pb-2">
            A curation of my most recent projects across branding, digital, and print.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: index * 0.1, duration: 0.8, type: "spring", bounce: 0.2 }}
            className="group relative cursor-none" // Using cursor-none here assuming CustomCursor is active
          >
            <div className="relative overflow-hidden rounded-2xl aspect-[4/3] bg-zinc-900 border border-white/5 mb-6">
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500 z-10" />
              <motion.img
                src={project.image}
                alt={project.title}
                className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-700 ease-out"
                whileHover={{ scale: 1.05 }}
              />
              
              {/* Floating Button */}
              <div className="absolute top-4 right-4 z-20 pointer-events-none">
                 <div className="p-3 bg-white/10 backdrop-blur-md rounded-full text-white opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-out flex items-center justify-center">
                    <ArrowUpRight size={24} />
                 </div>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex justify-between items-start">
                <h3 className="text-3xl font-display font-medium text-white group-hover:text-zinc-200 transition-colors">{project.title}</h3>
                <span className="text-xs font-mono py-1 px-3 border border-white/20 rounded-full text-zinc-400 uppercase tracking-wider group-hover:border-white/40 transition-colors">
                  {project.category}
                </span>
              </div>
              <p className="text-zinc-400 text-lg leading-relaxed group-hover:text-zinc-300 transition-colors">{project.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;