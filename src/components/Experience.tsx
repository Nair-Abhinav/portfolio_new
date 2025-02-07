import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Briefcase, 
  Award, 
  Calendar, 
  MapPin, 
  Trophy, 
  Users, 
  Star, 
  Target,
  Zap,
  Medal,
  Flag,
  Book
} from 'lucide-react';

const professionalExperience = [
  {
    "title": "Backend Development Intern",
    "company": "Techplement",
    "location": "Remote",
    "period": "August 2024 - September 2024",
    "description": "Working on developing and maintaining Back-end services and APIs. Collaborating with Front-end developers to integrate user-facing elements with server-side logic. Implementing security and data protection measures.",
    "achievements": [
      "Developed RESTful APIs for seamless front-end integration",
      "Optimized database queries for improved performance",
      "Implemented JWT-based authentication",
      "Enhanced security with role-based access control"
    ],
    "icon": "Briefcase",
    "color": "from-blue-500 to-cyan-500"
  },
  {
    "title": "Technical Head",
    "company": "DJ InIT.AI Club",
    "location": "Mumbai, India",
    "period": "August 2024 - Present",
    "description": "Managed the development and maintenance of the club’s AI-driven website, enhancing user experience and integrating advanced features. Ensured optimal performance and security while showcasing the club’s innovative technology and events.",
    "achievements": [
      "Developed AI-powered features for the club’s website",
      "Enhanced website security and user authentication",
      "Integrated event registration and management system",
      "Led a team of developers to ensure smooth operations"
    ],
    "icon": "Users",
    "color": "from-purple-500 to-pink-500"
  }
];

const coCurricularActivities = [
  {
    "title": "JPMC Student Engagement Program",
    "organization": "JPMC",
    "period": "October 2023 - Present",
    "description": "Actively engaged in JPMC’s Student Engagement Program, gaining hands-on experience and insights through various activities and projects. Contributed to program initiatives, collaborated with peers and professionals, and developed skills relevant to finance and business.",
    "achievements": [
      "Participated in multiple finance and tech-related workshops",
      "Collaborated on projects with industry professionals",
      "Enhanced understanding of financial technologies",
      "Developed problem-solving and analytical skills"
    ],
    "icon": "Book",
    "color": "from-emerald-500 to-teal-500"
  },
  {
    "title": "Technical Head",
    "organization": "DJ InIT.AI Club",
    "period": "August 2024 - Present",
    "description": "Managed the development and maintenance of the club’s AI-driven website, enhancing user experience and integrating advanced features. Ensured optimal performance and security while showcasing the club’s innovative technology and events.",
    "achievements": [
      "Developed AI-driven website features",
      "Integrated real-time event updates",
      "Improved website performance and security",
      "Led a team of developers to drive innovation"
    ],
    "icon": "Users",
    "color": "from-blue-500 to-cyan-500"
  },
  {
    "title": "Placement and Internship Coordinator",
    "organization": "Training and Placement Cell",
    "period": "August 2024 - Present",
    "description": "Facilitated recruitment drives, connected students with top industry opportunities, and organized pre-placement activities. Focused on bridging the gap between students and recruiters, ensuring smooth communication and career readiness for all.",
    "achievements": [
      "Organized multiple pre-placement workshops",
      "Facilitated networking between students and companies",
      "Helped students secure internships and job offers",
      "Improved placement process efficiency"
    ],
    "icon": "Trophy",
    "color": "from-rose-500 to-red-500"
  }
];
const achievements = [
  { 
    title: "Years of Experience",
    value: "Fresher",
    icon: Briefcase,
    color: "from-blue-500 to-cyan-500"
  },
  { 
    title: "Projects Completed",
    value: "10+",
    icon: Target,
    color: "from-purple-500 to-pink-500"
  },
  { 
    title: "Hackathon Finalist",
    value: "3 X",
    icon: Trophy,
    color: "from-amber-500 to-orange-500"
  },
  { 
    title: "Community Impact",
    value: "100+",
    icon: Users,
    color: "from-emerald-500 to-teal-500"
  }
];



export default function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section ref={ref} className="relative py-32 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(99,102,241,0.3),transparent_40%),radial-gradient(circle_at_bottom_left,rgba(219,39,119,0.3),transparent_40%)]" />
      
      {/* Floating Particles */}
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
          {/* Header */}
          <div className="text-center mb-20">
            <motion.h2
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.2 }}
              className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200 mb-6"
            >
              Experience & Activities
            </motion.h2>
            <motion.div
              initial={{ width: 0 }}
              animate={inView ? { width: '200px' } : {}}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mb-16"
            />
          </div>

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
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r ${achievement.color} flex items-center justify-center`}>
                    <achievement.icon size={32} className="text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-2">{achievement.value}</h3>
                  <p className="text-indigo-200">{achievement.title}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Professional Experience */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="mb-20"
          >
            <div className="flex items-center gap-4 mb-12">
              <div className="p-3 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500">
                <Briefcase size={24} className="text-white" />
              </div>
              <h3 className="text-3xl font-bold text-white">Professional Experience</h3>
            </div>

            <div className="space-y-8">
              {professionalExperience.map((exp, index) => (
                <motion.div
                  key={exp.title}
                  initial={{ opacity: 0, x: -50 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.6 + index * 0.2 }}
                  className="relative pl-8"
                >
                  <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-indigo-500 to-transparent" />
                  
                  <div className="relative">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={inView ? { scale: 1 } : {}}
                      transition={{ delay: 0.8 + index * 0.2 }}
                      className={`absolute -left-12 top-0 w-8 h-8 rounded-lg bg-gradient-to-r ${exp.color} flex items-center justify-center`}
                    >
                      {React.createElement(eval(exp.icon), { size: 20, className: "text-white" })}
                    </motion.div>

                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2">
                      <div className="grid md:grid-cols-2 gap-8">
                        <div>
                          <h4 className="text-2xl font-bold text-white mb-2">{exp.title}</h4>
                          <h5 className="text-xl text-indigo-300 mb-4">{exp.company}</h5>
                          
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
                          
                          <p className="text-white/90">{exp.description}</p>
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
                                transition={{ delay: 1 + index * 0.2 + i * 0.1 }}
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
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Co-Curricular Activities */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6 }}
          >
            <div className="flex items-center gap-4 mb-12">
              <div className="p-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500">
                <Flag size={24} className="text-white" />
              </div>
              <h3 className="text-3xl font-bold text-white">Co-Curricular Activities</h3>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {coCurricularActivities.map((activity, index) => (
                <motion.div
                  key={activity.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.8 + index * 0.2 }}
                  className="group"
                >
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 h-full hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${activity.color} flex items-center justify-center mb-6`}>
                      {React.createElement(activity.icon, { size: 32, className: "text-white" })}
                    </div>

                    <h4 className="text-2xl font-bold text-white mb-2">{activity.title}</h4>
                    <h5 className="text-lg text-indigo-300 mb-4">{activity.organization}</h5>
                    
                    <div className="flex items-center gap-2 text-white/80 mb-4">
                      <Calendar size={16} />
                      <span>{activity.period}</span>
                    </div>
                    
                    <p className="text-white/90 mb-6">{activity.description}</p>
                    
                    <div className="space-y-3">
                      {activity.achievements.map((achievement, i) => (
                        <motion.div
                          key={achievement}
                          initial={{ opacity: 0, x: -20 }}
                          animate={inView ? { opacity: 1, x: 0 } : {}}
                          transition={{ delay: 1 + index * 0.2 + i * 0.1 }}
                          className="flex items-center gap-3 text-white/80"
                        >
                          <Star size={16} className="text-yellow-400 flex-shrink-0" />
                          <span>{achievement}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}