import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, ExternalLink, X, Code, Globe, Layers } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  image: string;
  tech: string[];
  github: string;
  live: string;
  category: 'web' | 'mobile' | 'other';
}

const projects: Project[] = [
  {
    title: "E-Commerce Platform",
    description: "A full-featured e-commerce platform built with React and Node.js. Includes user authentication, product management, and payment integration.",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=800&q=80",
    tech: ["React", "Node.js", "MongoDB", "Stripe"],
    github: "https://github.com",
    live: "https://example.com",
    category: 'web'
  },
  {
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates and team features.",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=800&q=80",
    tech: ["React", "Firebase", "Material-UI"],
    github: "https://github.com",
    live: "https://example.com",
    category: 'mobile'
  },
  {
    title: "AI Image Generator",
    description: "An AI-powered image generation tool using state-of-the-art machine learning models.",
    image: "https://images.unsplash.com/photo-1547954575-855750c57bd3?auto=format&fit=crop&w=800&q=80",
    tech: ["Python", "TensorFlow", "React"],
    github: "https://github.com",
    live: "https://example.com",
    category: 'other'
  }
];

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filter, setFilter] = useState<'all' | 'web' | 'mobile' | 'other'>('all');

  const filteredProjects = projects.filter(
    project => filter === 'all' || project.category === filter
  );

  const categories = [
    { id: 'all', label: 'All Projects', icon: Layers },
    { id: 'web', label: 'Web Apps', icon: Globe },
    { id: 'mobile', label: 'Mobile Apps', icon: Code },
    { id: 'other', label: 'Other', icon: Code }
  ];

  return (
    <section ref={ref} className="relative py-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800">
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
      
      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: Math.random() * 0.5 + 0.3,
            }}
            animate={{
              y: [null, Math.random() * window.innerHeight],
              opacity: [null, Math.random() * 0.5 + 0.3],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200"
        >
          Featured Projects
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="flex justify-center gap-4 mb-12"
        >
          {categories.map(({ id, label, icon: Icon }) => (
            <motion.button
              key={id}
              onClick={() => setFilter(id as any)}
              className={`px-6 py-2 rounded-full flex items-center gap-2 transition-all
                ${filter === id 
                  ? 'bg-white text-indigo-900 shadow-lg' 
                  : 'bg-white/10 text-white hover:bg-white/20'}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Icon size={16} />
              {label}
            </motion.button>
          ))}
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-white/10 backdrop-blur-sm rounded-lg overflow-hidden"
              whileHover={{ y: -5 }}
            >
              <div className="relative h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map(tech => (
                    <span key={tech} className="px-2 py-1 text-sm bg-white/20 rounded-full text-white">
                      {tech}
                    </span>
                  ))}
                </div>
                <button
                  onClick={() => setSelectedProject(project)}
                  className="mt-4 px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors w-full"
                >
                  View Details
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="bg-gradient-to-br from-indigo-900 to-purple-900 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto"
                onClick={e => e.stopPropagation()}
              >
                <div className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-2xl font-bold text-white">{selectedProject.title}</h3>
                    <button
                      onClick={() => setSelectedProject(null)}
                      className="text-white/70 hover:text-white"
                    >
                      <X size={24} />
                    </button>
                  </div>
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-64 object-cover rounded-lg mb-4"
                  />
                  <p className="text-white/90 mb-4">{selectedProject.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {selectedProject.tech.map(tech => (
                      <span key={tech} className="px-3 py-1 bg-white/10 rounded-full text-white">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-white/90 hover:text-white"
                    >
                      <Github size={20} />
                      <span>View Code</span>
                    </a>
                    <a
                      href={selectedProject.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-white/90 hover:text-white"
                    >
                      <ExternalLink size={20} />
                      <span>Live Demo</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}