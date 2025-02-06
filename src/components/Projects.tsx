import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, ExternalLink, X, Code, Globe, Layers, Rocket, Zap, Monitor } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  image: string;
  tech: string[];
  github: string;
  live: string;
  category: 'web' | 'ML' | 'other';
  color: string;
}

const projects: Project[] = [
  {
    title: "Ride-Sharing Platform",
    description: "Developed a full-stack ride-sharing platform with real-time ride booking, driver management, and geolocation-based tracking using Google Maps API. Integrated secure user authentication, payment gateway, and dynamic fare calculations. Designed an admin panel for trip management and analytics.",
    image: "https://images.unsplash.com/photo-1578926375605-eaf7559b1459?auto=format&fit=crop&w=800&q=80",
    tech: ["React", "Node.js", "Express.js", "MongoDB", "Google Maps API", "Docker"],
    github: "https://github.com",
    live: "https://example.com",
    category: "web",
    color: "from-green-500 to-teal-500"
  },
  {
    title: "Forged Signature Detection AI Agent",
    description: "A Convolutional Neural Network (CNN)-based AI model that detects forged signatures by classifying them as genuine or forged. Includes data preprocessing, augmentation, and evaluation metrics like accuracy and precision.",
    image: "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?auto=format&fit=crop&w=800&q=80",
    tech: ["TensorFlow", "Keras", "Python", "CNN"],
    github: "https://github.com",
    live: "https://example.com",
    category: "ML",
    color: "from-purple-500 to-pink-500"
  },
  {
    title: "DJIniT.AI Website",
    description: "Led the technical team for DJIniT.ai and developed the club’s website using ReactJS, Tailwind CSS, and Node.js. Utilized MongoDB and Cloudinary for data and image storage. Hosted on Netlify.",
    image: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=800&q=80",
    tech: ["React", "Node.js", "MongoDB", "Tailwind CSS", "Cloudinary"],
    github: "https://github.com",
    live: "https://example.com",
    category: "web",
    color: "from-blue-500 to-cyan-500"
  },
  {
    title: "Exam Management System",
    description: "Department-level project focused on automating exam management tasks, including attendance tracking, timetable generation, student record management, and a professor portal for scheduling and seating arrangements.",
    image: "https://images.unsplash.com/photo-1584697964192-871c61340d5e?auto=format&fit=crop&w=800&q=80",
    tech: ["MongoDB", "ReactJS", "Node.js"],
    github: "https://github.com",
    live: "https://example.com",
    category: "web",
    color: "from-yellow-500 to-orange-500"
  }
];


const categories = [
  { id: 'all', label: 'All Projects', icon: Layers },
  { id: 'web', label: 'Web Apps', icon: Globe },
  { id: 'mobile', label: 'Mobile Apps', icon: Monitor },
  { id: 'other', label: 'Other', icon: Rocket }
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

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section ref={ref} className="relative py-32 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(99,102,241,0.3),transparent_40%),radial-gradient(circle_at_bottom_left,rgba(219,39,119,0.3),transparent_40%)]" />
      
      {/* Enhanced Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              scale: Math.random() * 0.5 + 0.5,
              opacity: Math.random() * 0.5 + 0.3,
            }}
            animate={{
              y: [null, Math.random() * window.innerHeight],
              x: [null, Math.random() * window.innerWidth],
              opacity: [null, Math.random() * 0.5 + 0.3],
            }}
            transition={{
              duration: Math.random() * 20 + 10,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          className="max-w-7xl mx-auto"
        >
          <div className="text-center mb-20">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200 mb-6 animate-text-gradient"
            >
              Featured Projects
            </motion.h2>
            <motion.div
              initial={{ width: 0 }}
              animate={inView ? { width: '200px' } : {}}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mb-16"
            />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="flex flex-wrap justify-center gap-4 mb-16"
            >
              {categories.map(({ id, label, icon: Icon }) => (
                <motion.button
                  key={id}
                  onClick={() => setFilter(id as any)}
                  className={`px-6 py-3 rounded-xl flex items-center gap-2 transition-all ${
                    filter === id 
                      ? 'bg-white text-indigo-900 shadow-lg glow' 
                      : 'bg-white/10 text-white hover:bg-white/20'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon size={18} />
                  {label}
                </motion.button>
              ))}
            </motion.div>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={project.title}
                variants={itemVariants}
                className="group relative"
              >
                <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden transform transition-all duration-300 hover:-translate-y-2">
                  <div className="relative h-64">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    <motion.div
                      initial={false}
                      animate={{ opacity: 1 }}
                      className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    >
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="px-6 py-3 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white rounded-xl transition-all transform hover:scale-105"
                      >
                        View Details
                      </button>
                    </motion.div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map(tech => (
                        <span
                          key={tech}
                          className={`px-3 py-1 text-sm rounded-full bg-gradient-to-r ${project.color} text-white`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <p className="text-white/80 line-clamp-2">{project.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

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
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                className="bg-gradient-to-br from-indigo-900 to-purple-900 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
                onClick={e => e.stopPropagation()}
              >
                <div className="p-8">
                  <div className="flex justify-between items-center mb-6">
                    <motion.h3
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="text-3xl font-bold text-white"
                    >
                      {selectedProject.title}
                    </motion.h3>
                    <button
                      onClick={() => setSelectedProject(null)}
                      className="text-white/70 hover:text-white transition-colors"
                    >
                      <X size={24} />
                    </button>
                  </div>
                  
                  <motion.img
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-80 object-cover rounded-xl mb-6"
                  />
                  
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-lg text-white/90 mb-6"
                  >
                    {selectedProject.description}
                  </motion.p>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex flex-wrap gap-3 mb-8"
                  >
                    {selectedProject.tech.map(tech => (
                      <span
                        key={tech}
                        className={`px-4 py-2 rounded-xl bg-gradient-to-r ${selectedProject.color} text-white`}
                      >
                        {tech}
                      </span>
                    ))}
                  </motion.div>
                  
                  <div className="flex gap-4">
                    <motion.a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors"
                    >
                      <Github size={20} />
                      <span>View Code</span>
                    </motion.a>
                    <motion.a
                      href={selectedProject.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 text-white"
                    >
                      <ExternalLink size={20} />
                      <span>Live Demo</span>
                    </motion.a>
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