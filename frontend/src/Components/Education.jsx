import React, { useState } from 'react';
import { motion } from 'framer-motion';
import BhagwatLogo from '../Assets/bhagwat.png';
import ParulLogo from '../Assets/parul.png';
import SungraceLogo from '../Assets/Sungrace.png';
import { FaGraduationCap, FaBookOpen, FaChalkboardTeacher, FaAward, FaCalendarAlt, 
         FaCode, FaFlask, FaUsers, FaTrophy, FaArrowRight, FaPlus, FaBriefcase, 
         FaStar, FaLightbulb } from 'react-icons/fa';

const Education = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const educationData = [
    {
      id: 'parul',
      school: 'Parul University',
      logo: ParulLogo, 
      period: '2022 - Present',
      degree: 'Bachelor of Technology (B.Tech)',
      field: 'Computer Science and Engineering',
      description: 'Currently pursuing my degree with focus on web development, data structures, and software engineering principles.',
      icon: <FaGraduationCap />,
      details: [
        { icon: <FaBookOpen />, title: 'Key Subjects', content: 'Data Structures, Web Development, Databases, Object-Oriented Programming' },
        { icon: <FaCode />, title: 'Projects', content: 'Built a student connection platform and various web applications incorporating modern technologies' },
        { icon: <FaAward />, title: 'Skills Gained', content: 'Problem-solving, teamwork, adaptability to new technologies' }
      ]
    },
    {
      id: 'bhagwat',
      school: 'Bhagwat Vidyapith',
      logo: BhagwatLogo,
      period: '2020 - 2022',
      degree: 'Higher Secondary (Class 12)',
      field: 'Science Stream',
      description: 'Studied Science with focus on Mathematics, Physics, and Computer Science, developing analytical thinking skills.',
      icon: <FaBookOpen />,
      details: [
        { icon: <FaFlask />, title: 'Key Subjects', content: 'Physics, Mathematics, Chemistry, Computer Science' },
        { icon: <FaLightbulb />, title: 'Discovery', content: 'Developed passion for coding and problem-solving during this time' },
        { icon: <FaTrophy />, title: 'Growth', content: 'Participated in basic coding competitions and self-learning initiatives' }
      ]
    },
    {
      id: 'sungrace',
      school: 'Sungrace School',
      logo: SungraceLogo,
      period: '2019 - 2020',
      degree: 'Secondary School (Class 10)',
      field: 'General Studies',
      description: 'Developed foundational knowledge while exploring my interest in technology and logical problem-solving.',
      icon: <FaUsers />,
      details: [
        { icon: <FaChalkboardTeacher />, title: 'Core Focus', content: 'Mathematics, Science, English, Social Studies' },
        { icon: <FaCode />, title: 'Tech Exploration', content: 'Started learning basic coding and website development' },
        { icon: <FaStar />, title: 'Activities', content: 'Member of school computer club, participated in small projects' }
      ]
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { type: 'spring', stiffness: 100 }
    }
  };

  return (
    <section id="education" className="py-16 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-gray-200 relative overflow-hidden">
      {/* Decorative background elements */}
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
        <FaBriefcase size={24} />
      </motion.div>
      
      <div className="max-w-5xl mx-auto px-4 md:px-8 relative z-10">
        {/* Section Header with Gradient Text */}
        <motion.div 
          className="mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
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
                <FaGraduationCap />
              </motion.div>
            </div>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-3">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">
              Education Journey
            </span>
          </h2>
          <div className="h-0.5 w-24 mx-auto bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mb-4"></div>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm">
            The academic path that has shaped my technical foundation and problem-solving approach.
          </p>
        </motion.div>

        {/* Education Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-indigo-600/30 via-purple-600/30 to-indigo-600/10 transform md:translate-x-[-50%] hidden md:block"></div>
          
          {/* Education Items */}
          <motion.div 
            className="space-y-0"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {educationData.map((item, index) => (
              <motion.div 
                key={item.id} 
                className={`relative mb-12 ${index % 2 === 0 ? 'md:mr-auto md:ml-0' : 'md:ml-auto md:mr-0'} md:w-[calc(50%-40px)]`}
                variants={itemVariants}
              >
                {/* Timeline Node */}
                <div className="absolute hidden md:flex left-[-40px] md:left-auto md:right-[-40px] top-5 w-12 h-12 rounded-full bg-gray-800 border-2 border-indigo-500 items-center justify-center z-10 shadow-lg shadow-indigo-900/20">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.8 }}
                    className="text-indigo-400"
                  >
                    {index % 2 === 0 ? 
                      <FaArrowRight size={14} /> :
                      <FaArrowRight className="transform rotate-180" size={14} />
                    }
                  </motion.div>
                </div>
                
                {/* Year Badge */}
                <div className={`absolute top-0 ${index % 2 === 0 ? 'right-0' : 'left-0'} bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-3 py-1 rounded-full text-xs font-bold -mt-3 shadow-md z-10`}>
                  <div className="flex items-center gap-1.5">
                    <FaCalendarAlt size={10} />
                    {item.period}
                  </div>
                </div>
                
                {/* Content Card */}
                <motion.div 
                  className={`bg-gray-800 bg-opacity-70 backdrop-blur-sm rounded-xl shadow-xl overflow-hidden border-t-2 ${
                    index === 0 ? 'border-purple-500' : index === 1 ? 'border-indigo-500' : 'border-blue-500'
                  } hover:shadow-indigo-900/20 transition-all duration-300`}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  layoutId={`card-${item.id}`}
                  onClick={() => setActiveIndex(index)}
                >
                  <div className={`p-5 ${activeIndex === index ? 'bg-gradient-to-br from-gray-800 to-gray-900' : ''}`}>
                    {/* School Info with Logo */}
                    <div className="flex items-center mb-4">
                      <motion.div 
                        className="p-2 bg-gray-900 rounded-lg border border-gray-700 shadow-inner mr-4 flex-shrink-0"
                        whileHover={{ rotate: [0, -5, 5, -5, 0] }}
                        transition={{ duration: 0.5 }}
                      >
                        <img 
                          src={item.logo} 
                          alt={item.school} 
                          className="w-12 h-12 object-contain"
                        />
                      </motion.div>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-1">{item.school}</h3>
                        <div className="text-indigo-300 text-sm font-medium">{item.degree}</div>
                      </div>
                    </div>
                    
                    {/* Description - Only show when not expanded */}
                    {activeIndex !== index && (
                      <p className="text-gray-400 text-sm mb-3 line-clamp-2">{item.description}</p>
                    )}
                    
                    {/* Field Badge */}
                    <div className="inline-flex items-center px-3 py-1 bg-indigo-900/40 text-indigo-300 rounded-full text-xs font-medium border border-indigo-800/30">
                      {React.cloneElement(item.icon, { className: "mr-1.5", size: 12 })}
                      {item.field}
                    </div>
                    
                    {/* Expand Button - only shown when not active */}
                    {activeIndex !== index && (
                      <div className="mt-4 text-right">
                        <motion.button 
                          className="inline-flex items-center px-3 py-1 rounded-full bg-indigo-700/30 text-indigo-300 hover:bg-indigo-700/50 text-xs font-medium transition-colors"
                          onClick={(e) => {
                            e.stopPropagation();
                            setActiveIndex(index);
                          }}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          View Details <FaArrowRight className="ml-1.5" size={10} />
                        </motion.button>
                      </div>
                    )}
                    
                    {/* Expanded Details */}
                    {activeIndex === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        transition={{ duration: 0.3 }}
                      >
                        {/* Full Description */}
                        <p className="text-gray-300 text-sm my-4">{item.description}</p>
                        
                        <div className="mt-5 pt-4 border-t border-gray-700/50">
                          <h4 className="font-bold text-white mb-4 flex items-center text-sm">
                            <span className="w-5 h-5 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white flex items-center justify-center mr-2">
                              <FaPlus size={8} />
                            </span>
                            Key Highlights
                          </h4>
                          
                          <div className="space-y-3.5">
                            {item.details.map((detail, i) => (
                              <motion.div 
                                key={i} 
                                className="flex"
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.1 }}
                              >
                                <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center mr-3 flex-shrink-0 border border-gray-600">
                                  {React.cloneElement(detail.icon, { className: "text-indigo-400", size: 14 })}
                                </div>
                                <div>
                                  <h5 className="font-semibold text-indigo-200 text-sm mb-1">{detail.title}</h5>
                                  <p className="text-gray-400 text-xs leading-relaxed">{detail.content}</p>
                                </div>
                              </motion.div>
                            ))}
                          </div>
                          
                          <div className="flex justify-between items-center mt-6">
                            {index === 0 && (
                              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-green-900/30 text-green-400 text-xs font-medium border border-green-800/30">
                                <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-1.5 animate-pulse"></span>
                                Current Program
                              </span>
                            )}
                            
                            {/* Close button */}
                            <motion.button 
                              className="inline-flex items-center text-gray-400 hover:text-gray-300 text-xs px-2.5 py-1 bg-gray-700/50 rounded-full hover:bg-gray-700 transition-colors"
                              onClick={(e) => {
                                e.stopPropagation();
                                setActiveIndex(null);
                              }}
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              Close <span className="ml-1 text-sm">×</span>
                            </motion.button>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
        
        {/* Bottom Navigation */}
        <div className="mt-6 flex justify-center items-center gap-3">
          {educationData.map((item, index) => (
            <motion.button
              key={index}
              className={`relative ${
                index === activeIndex 
                  ? 'scale-100' 
                  : 'scale-90'
              }`}
              onClick={() => setActiveIndex(index)}
              aria-label={`View ${item.school} details`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {index === activeIndex && (
                <motion.div
                  className="absolute inset-0 rounded-full bg-indigo-400 blur-sm opacity-40"
                  layoutId="nav-glow"
                />
              )}
              <div className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === activeIndex 
                  ? 'bg-gradient-to-r from-indigo-500 to-purple-500' 
                  : 'bg-gray-700 hover:bg-gray-600'
              }`} />
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;