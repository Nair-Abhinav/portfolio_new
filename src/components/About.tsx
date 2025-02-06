import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Database, Layout, Server, Cpu, Globe, Terminal, Cloud } from 'lucide-react';

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skills = [
    { name: 'Frontend', icon: Layout, items: ['React', 'TypeScript', 'Next'], color: 'from-blue-500 to-cyan-500' },
    { name: 'Backend', icon: Server, items: ['Node.js', 'Flask','Fast API'], color: 'from-green-500 to-emerald-500' },
    { name: 'Database', icon: Database, items: ['MongoDB', 'PostgreSQL', 'Redis'], color: 'from-yellow-500 to-orange-500' },
    { name: 'DevOps', icon: Cloud, items: ['Docker', 'AWS', 'CI/CD'], color: 'from-purple-500 to-pink-500' },
    { name: 'Tools', icon: Terminal, items: ['Git', 'VS Code', 'Postman'], color: 'from-red-500 to-pink-500' },
    { name: 'Other', icon: Globe, items: ['RESTful APIs', 'GraphQL', 'WebSockets'], color: 'from-indigo-500 to-purple-500' },
  ];

  return (
    <section ref={ref} className="relative py-32 overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800">
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
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto"
        >
          <div className="text-center mb-20">
            <motion.h2
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.2 }}
              className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200 mb-6"
            >
              About Me
            </motion.h2>
            <motion.div
              initial={{ width: 0 }}
              animate={inView ? { width: '200px' } : {}}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mb-8"
            />
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="relative"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={inView ? { scale: 1 } : {}}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="relative z-10"
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl transform rotate-6 scale-105" />
                  <img
                    src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80"
                    alt="Profile"
                    className="relative rounded-2xl shadow-2xl transform -rotate-6 transition-transform hover:rotate-0 duration-300"
                  />
                </div>
              </motion.div>
              
              {/* Floating Tech Icons */}
              {[Cpu, Code, Globe, Cloud].map((Icon, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="absolute"
                  style={{
                    top: `${20 + index * 25}%`,
                    left: index % 2 ? '85%' : '-5%',
                  }}
                >
                  <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                    className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center"
                  >
                    <Icon className="text-white" size={24} />
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="space-y-8"
            >
              <div className="space-y-6">
                <h3 className="text-3xl font-bold text-white">Passionate Full Stack Developer</h3>
                <p className="text-xl text-indigo-100/90 leading-relaxed">
                Motivated Information Technology student with strong academic performance and hands-on experience in backend development
 and web technologies. Skilled in Python, Java, React, Node.js, and more. Proven ability to develop scalable backend services
 and collaborate with cross-functional teams. 
                </p>
                <p className="text-xl text-indigo-100/90 leading-relaxed">
                Finalist in hackathons, showcasing expertise in AI, machine learning, and data
                science. Passionate about building innovative and impactful solutions.
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {skills.map((category, index) => {
                  const Icon = category.icon;
                  return (
                    <motion.div
                      key={category.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={inView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 0.6 + index * 0.1 }}
                      className="group"
                    >
                      <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2">
                        <div className="flex items-center gap-3 mb-4">
                          <div className={`p-3 rounded-xl bg-gradient-to-r ${category.color}`}>
                            <Icon className="text-white" size={24} />
                          </div>
                          <h3 className="font-semibold text-xl text-white">{category.name}</h3>
                        </div>
                        <div className="space-y-2">
                          {category.items.map((item, i) => (
                            <motion.div
                              key={item}
                              initial={{ opacity: 0, x: -10 }}
                              animate={inView ? { opacity: 1, x: 0 } : {}}
                              transition={{ delay: 0.8 + index * 0.1 + i * 0.1 }}
                              className="flex items-center gap-2"
                            >
                              <div className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                              <span className="text-indigo-100/90">{item}</span>
                            </motion.div>
                          ))}
                        </div>
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