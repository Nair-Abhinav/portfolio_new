import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, MapPin, Briefcase, Award, Star, Target, Zap } from 'lucide-react';

const experiences = [
  {
    title: "Senior Full Stack Developer",
    company: "Tech Corp",
    location: "San Francisco, CA",
    period: "2021 - Present",
    description: "Led development of enterprise-scale applications using React and Node.js. Managed team of 5 developers.",
    achievements: [
      "Improved application performance by 40%",
      "Implemented CI/CD pipeline",
      "Mentored junior developers",
      "Led architecture redesign"
    ],
    icon: Briefcase,
    color: "from-blue-500 to-cyan-500"
  },
  {
    title: "Full Stack Developer",
    company: "StartUp Inc",
    location: "New York, NY",
    period: "2019 - 2021",
    description: "Developed and maintained multiple web applications. Implemented CI/CD pipelines and automated testing.",
    achievements: [
      "Launched 3 major products",
      "Reduced bug reports by 60%",
      "Introduced automated testing",
      "Optimized database performance"
    ],
    icon: Target,
    color: "from-purple-500 to-pink-500"
  },
  {
    title: "Software Engineer Intern",
    company: "Big Tech",
    location: "Seattle, WA",
    period: "2018 - 2019",
    description: "Contributed to frontend development using React. Participated in code reviews and agile ceremonies.",
    achievements: [
      "Developed key features",
      "Improved code coverage",
      "Won intern hackathon",
      "Created developer documentation"
    ],
    icon: Star,
    color: "from-yellow-500 to-orange-500"
  }
];

const achievements = [
  { title: "Years of Experience", value: "5+", icon: Calendar },
  { title: "Projects Completed", value: "50+", icon: Target },
  { title: "Happy Clients", value: "30+", icon: Star },
  { title: "Awards", value: "10+", icon: Award }
];

export default function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

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
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="max-w-7xl mx-auto"
        >
          <div className="text-center mb-20">
            <motion.h2
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.2 }}
              className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200 mb-6"
            >
              Experience & Achievements
            </motion.h2>
            <motion.div
              initial={{ width: 0 }}
              animate={inView ? { width: '200px' } : {}}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mb-16"
            />

            {/* Achievement Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="relative group"
                >
                  <div className="p-8 rounded-2xl bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2">
                    <motion.div
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      className="absolute inset-0 rounded-2xl border-2 border-dashed border-white/20 -m-2"
                    />
                    <achievement.icon size={40} className="text-white mb-4 mx-auto" />
                    <h3 className="text-4xl font-bold text-white mb-2">{achievement.value}</h3>
                    <p className="text-indigo-200">{achievement.title}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: index * 0.2 }}
                className="relative"
              >
                <div className="relative pl-8">
                  <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-indigo-500 to-transparent" />
                  
                  <div className="relative">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={inView ? { scale: 1 } : {}}
                      transition={{ delay: 0.4 + index * 0.2 }}
                      className={`absolute -left-12 top-0 w-8 h-8 rounded-lg bg-gradient-to-r ${exp.color} flex items-center justify-center`}
                    >
                      <exp.icon size={20} className="text-white" />
                    </motion.div>

                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 ml-4 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2">
                      <div className="grid md:grid-cols-2 gap-8">
                        <div>
                          <h3 className="text-2xl font-bold text-white mb-2">{exp.title}</h3>
                          <h4 className="text-xl text-indigo-300 mb-4">{exp.company}</h4>
                          
                          <div className="flex items-center gap-6 text-white/80 mb-6">
                            <div className="flex items-center gap-2">
                              <Calendar size={16} />
                              <span>{exp.period}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <MapPin size={16} />
                              <span>{exp.location}</span>
                            </div>
                          </div>
                          
                          <p className="text-white/90 mb-6">{exp.description}</p>
                        </div>

                        <div>
                          <h5 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                            <Zap size={20} className="text-yellow-400" />
                            Key Achievements
                          </h5>
                          
                          <ul className="space-y-4">
                            {exp.achievements.map((achievement, i) => (
                              <motion.li
                                key={achievement}
                                initial={{ opacity: 0, x: -20 }}
                                animate={inView ? { opacity: 1, x: 0 } : {}}
                                transition={{ delay: 0.6 + index * 0.2 + i * 0.1 }}
                                className="flex items-center gap-3 text-white/80"
                              >
                                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500" />
                                {achievement}
                              </motion.li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Skills Progress */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8 }}
            className="mt-20 grid md:grid-cols-2 gap-8"
          >
            {[
              { skill: "Frontend Development", progress: 95 },
              { skill: "Backend Development", progress: 90 },
              { skill: "UI/UX Design", progress: 85 },
              { skill: "DevOps", progress: 80 }
            ].map((item, index) => (
              <div key={item.skill} className="relative">
                <div className="flex justify-between mb-2">
                  <span className="text-white font-medium">{item.skill}</span>
                  <span className="text-indigo-300">{item.progress}%</span>
                </div>
                <div className="h-3 bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${item.progress}%` } : {}}
                    transition={{ delay: 1 + index * 0.2, duration: 1 }}
                    className={`h-full rounded-full bg-gradient-to-r ${
                      index % 2 === 0 ? 'from-blue-500 to-cyan-500' : 'from-purple-500 to-pink-500'
                    }`}
                  />
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}