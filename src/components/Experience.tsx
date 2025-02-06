import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, MapPin, Briefcase } from 'lucide-react';

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
      "Mentored junior developers"
    ]
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
      "Introduced automated testing"
    ]
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
      "Won intern hackathon"
    ]
  }
];

export default function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

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
          Experience
        </motion.h2>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: index * 0.2 }}
              className="relative pl-8 pb-12 last:pb-0"
            >
              {index !== experiences.length - 1 && (
                <div className="absolute left-[11px] top-0 h-full w-0.5 bg-white/20" />
              )}
              <div className="absolute left-0 top-0 w-6 h-6 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500" />
              
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 ml-6">
                <div className="flex items-center gap-4 mb-4">
                  <Briefcase className="text-indigo-300" size={24} />
                  <div>
                    <h3 className="text-xl font-semibold text-white">{exp.title}</h3>
                    <h4 className="text-lg text-indigo-300">{exp.company}</h4>
                  </div>
                </div>
                
                <div className="flex items-center gap-6 text-white/80 mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar size={16} />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin size={16} />
                    <span>{exp.location}</span>
                  </div>
                </div>
                
                <p className="text-white/90 mb-4">{exp.description}</p>
                
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: index * 0.2 + i * 0.1 }}
                      className="flex items-center gap-2 text-white/80"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                      {achievement}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}