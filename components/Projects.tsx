import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Image as ImageIcon } from 'lucide-react';
import { Project } from '../types';

const projects: Project[] = [
  {
    id: '1',
    title: 'Lumina',
    category: 'Brand Identity',
    description: 'Complete visual identity rebrand for a modern luxury lighting company, including logo, typography, and guidelines.',
    image: 'https://picsum.photos/800/600?random=1',
    link: '#',
  },
  {
    id: '2',
    title: 'Vogue Sans',
    category: 'Typography',
    description: 'A custom display typeface designed specifically for high-end fashion editorials and large scale print.',
    image: 'https://picsum.photos/800/600?random=2',
    link: '#',
  },
  {
    id: '3',
    title: 'EcoFlow',
    category: 'Packaging',
    description: 'Sustainable packaging design system for a new line of organic skincare products using biodegradable materials.',
    image: 'https://picsum.photos/800/600?random=3',
    link: '#',
  },
  {
    id: '4',
    title: 'Nexus Event',
    category: 'Motion Graphics',
    description: 'Abstract 3D motion graphics and kinetic typography for a global tech conference opener.',
    image: 'https://picsum.photos/800/600?random=4',
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
        className="mb-16"
      >
        <h2 className="font-display text-5xl md:text-7xl font-bold mb-4">Selected Works</h2>
        <div className="h-1 w-24 bg-white rounded-full" />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            className="group relative"
          >
            <div className="relative overflow-hidden rounded-2xl aspect-[4/3] bg-zinc-900 border border-white/5 mb-6 cursor-pointer">
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500 z-10" />
              <motion.img
                src={project.image}
                alt={project.title}
                className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-700"
                whileHover={{ scale: 1.05 }}
              />
              <div className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex gap-2">
                 <button className="p-3 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-white hover:text-black transition-colors">
                    <ArrowUpRight size={20} />
                 </button>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-start">
                <h3 className="text-2xl md:text-3xl font-medium text-white">{project.title}</h3>
                <span className="text-xs font-mono py-1 px-2 border border-white/20 rounded-full text-zinc-400 uppercase tracking-wider">
                  {project.category}
                </span>
              </div>
              <p className="text-zinc-400 text-lg">{project.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;