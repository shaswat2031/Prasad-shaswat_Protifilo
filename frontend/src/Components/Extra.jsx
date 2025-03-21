import React from 'react';
import { motion } from 'framer-motion';
import { FaLanguage, FaUserTie, FaAward, FaGraduationCap, FaCode, FaLaptopCode } from 'react-icons/fa'; 
import { BiNetworkChart } from 'react-icons/bi';
import { HiOutlineLightBulb } from 'react-icons/hi';

const Extra = () => {
  const activities = [
    {
      title: 'Career Development Cell (CDC)',
      role: 'Tech Leader (2023 - 2025)',
      description: 'Successfully organized and managed multiple technical events, attracting more than 3000 participants. Championed initiatives to enhance technical skills and foster student growth.',
      icon: <FaUserTie size={28} />,
      color: 'indigo',
      achievements: [
        'Led a team of 12 technical volunteers',
        'Organized 5 major tech events with 3000+ participants',
        'Developed leadership and event management skills'
      ]
    },
    {
      title: 'Languages Known',
      role: 'Multilingual Communication',
      description: 'Communicate fluently in English and Hindi, and have basic proficiency in Gujarati.',
      icon: <FaLanguage size={28} />,
      color: 'purple',
      achievements: [
        'English - Professional working proficiency',
        'Hindi - Native proficiency',
        'Gujarati - Elementary proficiency'
      ]
    },
    {
      title: 'Networking and Leadership',
      role: 'Mentor and Leader',
      description: 'Built a professional network through events and seminars, and mentored junior members in technical and leadership skills.',
      icon: <BiNetworkChart size={28} />,
      color: 'blue',
      achievements: [
        'Mentored 15+ junior developers in coding skills',
        'Participated in 10+ industry networking events',
        'Developed strong interpersonal and communication skills'
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  return (
    <section id="extra" className="py-20 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-gray-200 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-500 rounded-full opacity-5 blur-3xl -mr-40 -mt-20"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-600 rounded-full opacity-5 blur-3xl -ml-48 -mb-20"></div>
      <div className="absolute top-1/3 left-10 w-2 h-32 bg-indigo-600 opacity-10"></div>
      
      <motion.div 
        className="absolute right-12 top-60 text-indigo-400 opacity-10"
        animate={{ 
          y: [0, -15, 0],
          opacity: [0.1, 0.2, 0.1],
          scale: [1, 1.2, 1]
        }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
      >
        <FaCode size={20} />
      </motion.div>
      
      <motion.div 
        className="absolute left-1/4 bottom-20 text-purple-400 opacity-10"
        animate={{ 
          y: [0, 15, 0],
          opacity: [0.1, 0.2, 0.1],
          rotate: [0, 10, 0]
        }}
        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
      >
        <FaLaptopCode size={24} />
      </motion.div>
      
      <div className="max-w-5xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <motion.div 
          className="mb-16 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block mb-3 relative">
            <motion.div 
              className="absolute inset-0 rounded-xl bg-gradient-to-r from-indigo-600/20 to-purple-600/20 blur-xl"
              animate={{ 
                rotate: [0, 5, 0, -5, 0],
                scale: [1, 1.05, 1, 1.05, 1]
              }}
              transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
            />
            <div className="w-16 h-16 mx-auto bg-gray-800 rounded-xl flex items-center justify-center border-2 border-indigo-700 shadow-lg shadow-indigo-900/20 relative">
              <motion.div
                animate={{ 
                  rotateY: [0, 360],
                }}
                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                className="text-indigo-400 text-2xl"
              >
                <HiOutlineLightBulb />
              </motion.div>
            </div>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-3">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">
              Beyond Coding
            </span>
          </h2>
          <div className="h-0.5 w-24 mx-auto bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mb-4"></div>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm">
            Activities and skills that complement my technical expertise and showcase my well-rounded personality.
          </p>
        </motion.div>
        
        {/* Activities */}
        <motion.div 
          className="space-y-12 md:space-y-16"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {activities.map((activity, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="flex flex-col md:flex-row items-start gap-6"
            >
              {/* Icon column */}
              <div className="bg-gray-800 bg-opacity-60 p-4 rounded-xl flex-shrink-0 relative border border-gray-700 shadow-lg">
                <div className={`w-16 h-16 md:w-18 md:h-18 bg-${activity.color}-900/40 rounded-lg flex items-center justify-center text-${activity.color}-400 backdrop-blur-sm border border-${activity.color}-700/30`}>
                  {activity.icon}
                </div>
                <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full flex items-center justify-center bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg">
                  <span className="text-xs font-bold">{index + 1}</span>
                </div>
              </div>
              
              {/* Content column */}
              <div className="flex-grow bg-gray-800 bg-opacity-60 backdrop-blur-sm rounded-xl p-5 border-t-2 border-indigo-500 shadow-xl">
                <div className="mb-3 inline-block px-3 py-1 bg-gray-900/70 text-indigo-300 text-xs font-medium rounded-full border border-indigo-800/30">
                  {activity.role}
                </div>
                
                <h3 className="text-xl font-bold mb-3 text-white">
                  {activity.title}
                </h3>
                
                <p className="text-gray-300 mb-5 text-sm">
                  {activity.description}
                </p>
                
                <div className={`border-l-2 border-${activity.color}-500 pl-4 py-1 space-y-3`}>
                  <h4 className={`font-semibold text-${activity.color}-300 text-xs uppercase tracking-wider`}>
                    Key Achievements
                  </h4>
                  <ul className="space-y-2">
                    {activity.achievements.map((achievement, i) => (
                      <motion.li 
                        key={i}
                        className="flex items-start"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.8 + (i * 0.1) }}
                      >
                        <div className={`mr-2 text-${activity.color}-400 flex-shrink-0 mt-1`}>
                          <FaAward size={12} />
                        </div>
                        <span className="text-gray-400 text-sm">{achievement}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Additional Note */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          <div className="inline-flex items-center justify-center p-6 rounded-xl bg-gray-800 bg-opacity-60 backdrop-blur-sm border border-gray-700 shadow-lg">
            <div className="flex items-start max-w-2xl">
              <div className="mr-4 text-indigo-400 flex-shrink-0 mt-1">
                <FaGraduationCap size={24} />
              </div>
              <div className="text-left">
                <h4 className="font-bold text-white mb-2">Continuous Growth Mindset</h4>
                <p className="text-gray-400 text-sm">
                  Beyond technical skills and formal activities, I am committed to continuous personal and professional development. 
                  I actively seek out new challenges and learning opportunities to broaden my perspective and enhance my capabilities.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Extra;