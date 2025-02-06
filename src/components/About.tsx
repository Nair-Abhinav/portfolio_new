import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Database, Layout, Server } from 'lucide-react';

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skills = [
    { name: 'Frontend', icon: Layout, items: ['React', 'TypeScript', 'Tailwind CSS'] },
    { name: 'Backend', icon: Server, items: ['Node.js', 'Python', 'Java'] },
    { name: 'Database', icon: Database, items: ['MongoDB', 'PostgreSQL', 'Redis'] },
    { name: 'Other', icon: Code, items: ['Git', 'Docker', 'AWS'] },
  ];

  return (
    <section ref={ref} className="relative py-20 overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800">
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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-white"
        >
          <h2 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200">
            About Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2 }}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg transform rotate-3"></div>
                <img
                  src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=600&q=80"
                  alt="Profile"
                  className="relative rounded-lg shadow-2xl transform -rotate-3 transition-transform hover:rotate-0 duration-300"
                />
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4 }}
            >
              <p className="text-lg text-indigo-100/90 mb-6">
                I'm a passionate Full Stack Developer with 5 years of experience in building
                web applications. I love turning complex problems into simple, beautiful,
                and intuitive solutions.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                {skills.map((category, index) => {
                  const Icon = category.icon;
                  return (
                    <motion.div
                      key={category.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={inView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 0.6 + index * 0.1 }}
                      className="p-4 rounded-lg bg-white/10 backdrop-blur-sm"
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <Icon className="text-indigo-300" size={20} />
                        <h3 className="font-semibold text-indigo-200">{category.name}</h3>
                      </div>
                      <div className="space-y-1">
                        {category.items.map((item) => (
                          <div key={item} className="text-sm text-indigo-100/80">
                            {item}
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}