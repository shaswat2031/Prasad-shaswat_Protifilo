import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FaGitAlt, FaGithub, FaJsSquare, FaPython, FaLinux, FaWindows,
  FaReact, FaNodeJs, FaCloud, FaLaptopCode, FaDatabase, FaServer,
  FaTools, FaCode, FaBrain
} from 'react-icons/fa';
import {
  SiFlask, SiMongodb, SiMysql, SiExpress, SiTailwindcss, SiTypescript, SiNextdotjs,
} from 'react-icons/si';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  
  const categories = [
    { id: 'all', name: 'All Skills', icon: <FaLaptopCode /> },
    { id: 'languages', name: 'Languages', icon: <FaCode /> },
    { id: 'frontend', name: 'Frontend', icon: <FaReact /> },
    { id: 'backend', name: 'Backend', icon: <FaServer /> },
    { id: 'database', name: 'Database', icon: <FaDatabase /> },
    { id: 'tools', name: 'Tools', icon: <FaTools /> },
    { id: 'learning', name: 'Learning', icon: <FaBrain /> }
  ];
  
  const skillsData = [
    // Programming Languages
    { id: 'javascript', name: 'JavaScript', icon: <FaJsSquare />, color: 'text-yellow-500', bg: 'bg-gray-800', category: 'languages', level: 90 },
    { id: 'typescript', name: 'TypeScript', icon: <SiTypescript />, color: 'text-blue-400', bg: 'bg-gray-800', category: 'languages', level: 75, learning: true },
    { id: 'python', name: 'Python', icon: <FaPython />, color: 'text-blue-500', bg: 'bg-gray-800', category: 'languages', level: 85 },
    
    // Frontend
    { id: 'react', name: 'React.js', icon: <FaReact />, color: 'text-blue-400', bg: 'bg-gray-800', category: 'frontend', level: 92 },
    { id: 'nextjs', name: 'Next.js', icon: <SiNextdotjs />, color: 'text-gray-300', bg: 'bg-gray-800', category: 'frontend', level: 70, learning: true },
    { id: 'tailwind', name: 'Tailwind CSS', icon: <SiTailwindcss />, color: 'text-teal-500', bg: 'bg-gray-800', category: 'frontend', level: 88 },
    
    // Backend
    { id: 'nodejs', name: 'Node.js', icon: <FaNodeJs />, color: 'text-green-500', bg: 'bg-gray-800', category: 'backend', level: 85 },
    { id: 'express', name: 'Express.js', icon: <SiExpress />, color: 'text-gray-300', bg: 'bg-gray-800', category: 'backend', level: 82 },
    { id: 'flask', name: 'Flask', icon: <SiFlask />, color: 'text-gray-300', bg: 'bg-gray-800', category: 'backend', level: 75 },
    
    // Databases
    { id: 'mongodb', name: 'MongoDB', icon: <SiMongodb />, color: 'text-green-500', bg: 'bg-gray-800', category: 'database', level: 80 },
    { id: 'mysql', name: 'MySQL', icon: <SiMysql />, color: 'text-blue-500', bg: 'bg-gray-800', category: 'database', level: 78 },
    
    // Tools & Platforms
    { id: 'git', name: 'Git', icon: <FaGitAlt />, color: 'text-red-500', bg: 'bg-gray-800', category: 'tools', level: 85 },
    { id: 'github', name: 'GitHub', icon: <FaGithub />, color: 'text-gray-300', bg: 'bg-gray-800', category: 'tools', level: 90 },
    { id: 'linux', name: 'Linux', icon: <FaLinux />, color: 'text-gray-300', bg: 'bg-gray-800', category: 'tools', level: 70 },
    { id: 'windows', name: 'Windows', icon: <FaWindows />, color: 'text-blue-500', bg: 'bg-gray-800', category: 'tools', level: 95 },
    { id: 'cloud', name: 'Cloud Services', icon: <FaCloud />, color: 'text-sky-400', bg: 'bg-gray-800', category: 'tools', level: 65, learning: true }
  ];
  
  const filteredSkills = activeCategory === 'all' 
    ? skillsData 
    : activeCategory === 'learning'
      ? skillsData.filter(skill => skill.learning)
      : skillsData.filter(skill => skill.category === activeCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
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
    <section id="skills" className="py-16 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 min-h-screen">
      <div className="max-w-5xl mx-auto px-4 md:px-8">
        {/* Background decorative elements */}
        <div className="absolute top-10 right-10 w-64 h-64 bg-indigo-500 rounded-full opacity-5 blur-xl"></div>
        <div className="absolute bottom-10 left-10 w-64 h-64 bg-purple-600 rounded-full opacity-5 blur-xl"></div>
        
        {/* Section Header */}
        <motion.div 
          className="text-center mb-12 relative z-10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block mb-3">
            <div className="w-14 h-14 mx-auto bg-gray-800 rounded-xl flex items-center justify-center border-2 border-indigo-700 shadow-lg shadow-indigo-900/20">
              <FaCode className="text-indigo-400 text-2xl" />
            </div>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-3">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">
              Technical Toolkit
            </span>
          </h2>
          <div className="h-0.5 w-20 mx-auto bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mb-4"></div>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm">
            My technology stack and skills that I've acquired through projects, work experience, and continuous learning.
          </p>
        </motion.div>
        
        {/* Category Filters */}
        <motion.div 
          className="flex flex-wrap justify-center gap-2 mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              className={`px-3 py-1.5 rounded-full flex items-center gap-1.5 text-sm transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700 border border-gray-700'
              }`}
              onClick={() => setActiveCategory(category.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className={activeCategory === category.id ? 'text-white' : 'text-indigo-400'}>
                {category.icon}
              </span>
              <span className="font-medium">{category.name}</span>
              {category.id === 'learning' && (
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
                </span>
              )}
            </motion.button>
          ))}
        </motion.div>
        
        {/* Skills Grid */}
        <motion.div 
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {filteredSkills.map((skill) => (
            <motion.div
              key={skill.id}
              className={`${skill.bg} border border-gray-700 rounded-lg p-3 flex flex-col items-center shadow-md hover:shadow-indigo-900/10 transition-shadow relative overflow-hidden group bg-opacity-60 backdrop-blur-sm`}
              variants={itemVariants}
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
            >
              {skill.learning && (
                <div className="absolute top-2 right-2">
                  <span className="inline-flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
                  </span>
                </div>
              )}
              
              <motion.div 
                className={`text-4xl ${skill.color} mb-2 group-hover:scale-110 transition-transform`}
                whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                transition={{ duration: 0.5 }}
              >
                {skill.icon}
              </motion.div>
              
              <h3 className="font-bold text-white mb-2 text-center text-sm">{skill.name}</h3>
              
              <div className="w-full bg-gray-700 rounded-full h-1.5 mb-1 overflow-hidden">
                <motion.div 
                  className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ delay: 0.6, duration: 1, ease: "easeOut" }}
                />
              </div>
              
              <span className="text-xs text-gray-400 font-medium">
                {skill.learning ? 'Learning' : `${skill.level}%`}
              </span>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Learning Focus */}
        <motion.div 
          className="mt-12 bg-gray-800 bg-opacity-60 backdrop-blur-sm rounded-lg p-5 border border-gray-700 shadow-md"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <div className="flex items-start gap-4">
            <div className="p-2 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg text-white shadow-md flex-shrink-0">
              <FaBrain className="text-xl" />
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Current Learning Focus</h3>
              <p className="text-gray-400 mb-3 text-sm">
                Always expanding my skill set. Currently focusing on mastering these technologies:
              </p>
              
              <div className="flex flex-wrap gap-2">
                {skillsData
                  .filter(skill => skill.learning)
                  .map(skill => (
                    <span 
                      key={skill.id}
                      className={`bg-gray-900 ${skill.color} px-2.5 py-1 rounded-full text-xs font-medium border border-gray-700 flex items-center gap-1`}
                    >
                      {skill.icon}
                      {skill.name}
                    </span>
                  ))
                }
              </div>
            </div>
          </div>
        </motion.div>
        
        {/* Progress Notes */}
        <motion.div 
          className="mt-8 text-center text-gray-400 text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <p>
            Skills are continuously evolving - these represent my current technical proficiency.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;