import { motion } from 'framer-motion';
import React, { useState, useEffect } from 'react';
import { FaHome, FaGraduationCap, FaLaptopCode, FaProjectDiagram, FaStar, FaCertificate, FaEnvelope, 
         FaCode, FaLinkedin, FaGithub, FaTwitter, FaArrowRight, FaMoon, FaSun, FaBrain } from 'react-icons/fa';
import myself from '../Assets/myself.png';

function Sidebar({ closeSidebar }) {
  const [activeSection, setActiveSection] = useState('about');
  const [hoverItem, setHoverItem] = useState(null);
  const [darkMode, setDarkMode] = useState(true);
  
  // Animation for menu item hover
  const itemVariants = {
    hover: {
      scale: 1.05,
      x: 10,
      transition: { type: "spring", stiffness: 400, damping: 10 }
    }
  };
  
  // Handle scroll to update active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY;
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section) {
          if (section.offsetTop - 200 <= scrollPosition) {
            if (activeSection !== navItems[i].id) {
              setActiveSection(navItems[i].id);
            }
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection]);
  
  const navItems = [
    { id: 'about', label: 'ABOUT', icon: <FaHome size={18} /> },
    { id: 'education', label: 'EDUCATION', icon: <FaGraduationCap size={18} /> },
    { id: 'skills', label: 'SKILLS', icon: <FaLaptopCode size={18} /> },
    { id: 'projects', label: 'PROJECTS', icon: <FaProjectDiagram size={18} /> },
    { id: 'extra', label: 'EXTRA', icon: <FaStar size={18} /> },
    { id: 'certifications', label: 'CERTIFICATIONS', icon: <FaCertificate size={18} /> },
    { id: 'contact', label: 'CONTACT', icon: <FaEnvelope size={18} /> },
  ];

  const handleSectionClick = (id) => {
    setActiveSection(id);
    // Smooth scroll to section
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
    
    // Close sidebar on mobile when a navigation item is clicked
    if (closeSidebar && window.innerWidth < 768) {
      closeSidebar();
    }
  };

  return (
    <motion.div
      className={`h-screen w-64 ${darkMode ? 
        'bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900' : 
        'bg-gradient-to-b from-orange-600 via-orange-700 to-orange-800'} 
        text-white flex flex-col items-center py-8 fixed top-0 left-0 shadow-xl z-50`}
      initial={{ x: '-100%' }}
      animate={{ x: 0 }}
      transition={{ type: 'spring', stiffness: 80, damping: 15 }}
    >
      {/* Theme Toggle Button */}
      <motion.button
        className={`absolute top-4 right-4 p-2 rounded-full ${darkMode ? 
          'bg-gray-700 text-yellow-400' : 
          'bg-orange-500 text-white'} shadow-lg z-10`}
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setDarkMode(!darkMode)}
      >
        {darkMode ? <FaSun size={16} /> : <FaMoon size={16} />}
      </motion.button>

      {/* Decorative elements - Different for light/dark themes */}
      {darkMode ? (
        // Dark theme decorations
        <>
          <div className="absolute top-0 right-0 w-20 h-20 bg-indigo-500 rounded-bl-full opacity-10"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-purple-600 rounded-tr-full opacity-10"></div>
          <div className="absolute top-1/3 left-0 w-2 h-20 bg-blue-400 opacity-20"></div>
          <motion.div 
            className="absolute right-20 top-40 text-blue-300 opacity-20"
            animate={{ 
              y: [0, -15, 0],
              opacity: [0.2, 0.3, 0.2],
              scale: [1, 1.2, 1]
            }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          >
            <FaCode size={20} />
          </motion.div>
          <motion.div 
            className="absolute left-10 bottom-40 text-purple-300 opacity-20"
            animate={{ 
              y: [0, 15, 0],
              opacity: [0.2, 0.3, 0.2],
              scale: [1, 1.2, 1]
            }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
          >
            <FaBrain size={24} />
          </motion.div>
        </>
      ) : (
        // Light theme decorations
        <>
          <div className="absolute top-0 right-0 w-20 h-20 bg-yellow-400 rounded-bl-full opacity-20"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-red-500 rounded-tr-full opacity-10"></div>
          <div className="absolute top-1/3 left-0 w-2 h-20 bg-yellow-300 opacity-30"></div>
          <motion.div 
            className="absolute right-12 top-60 text-yellow-300 opacity-30"
            animate={{ 
              y: [0, -10, 0],
              opacity: [0.3, 0.5, 0.3],
              rotate: [0, 10, 0]
            }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
          >
            <FaCode size={16} />
          </motion.div>
          <motion.div 
            className="absolute left-8 bottom-60 text-yellow-300 opacity-30"
            animate={{ 
              y: [0, 10, 0],
              opacity: [0.3, 0.5, 0.3],
              rotate: [0, -10, 0]
            }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 1.5 }}
          >
            <FaCode size={14} />
          </motion.div>
        </>
      )}
      
      {/* Profile section with enhanced animations */}
      <div className="relative mb-8">
        <motion.div
          className={`absolute -inset-1 ${darkMode ? 
            'bg-gradient-to-r from-blue-500 via-indigo-400 to-purple-500' : 
            'bg-gradient-to-r from-yellow-400 via-orange-300 to-red-500'} 
            rounded-full opacity-80 blur-sm`}
          animate={{ 
            rotate: 360,
            scale: [1, 1.05, 1],
          }}
          transition={{ 
            rotate: { repeat: Infinity, duration: 20, ease: "linear" },
            scale: { repeat: Infinity, duration: 3, ease: "easeInOut" }
          }}
        />
        <motion.div
          className="relative rounded-full p-1 overflow-hidden"
          whileHover={{ 
            scale: 1.05,
            boxShadow: darkMode ? 
              "0 0 25px rgba(99,102,241,0.6)" : 
              "0 0 25px rgba(255,165,0,0.6)"
          }}
        >
          <motion.img
            src={myself}
            alt="Profile"
            className={`rounded-full w-36 h-36 object-cover border-4 ${darkMode ? 
              'border-indigo-400' : 
              'border-white'} shadow-lg transform`}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.4 }}
          />
        </motion.div>
        
        {/* Interactive code particles */}
        <motion.div 
          className={`absolute -top-2 -right-2 ${darkMode ? 'text-blue-300' : 'text-yellow-300'} opacity-70`}
          animate={{ 
            y: [0, -10, 0],
            opacity: [0.7, 1, 0.7],
            rotate: [0, 10, 0]
          }}
          transition={{
            repeat: Infinity,
            duration: 4,
            ease: "easeInOut"
          }}
        >
          <FaCode size={16} />
        </motion.div>
        
        <motion.div 
          className={`absolute -bottom-2 -left-2 ${darkMode ? 'text-purple-300' : 'text-yellow-300'} opacity-70`}
          animate={{ 
            y: [0, 10, 0],
            opacity: [0.7, 1, 0.7],
            rotate: [0, -10, 0]
          }}
          transition={{
            repeat: Infinity,
            duration: 3,
            ease: "easeInOut",
            delay: 1
          }}
        >
          <FaCode size={14} />
        </motion.div>
      </div>
      
      <motion.h2
        className={`text-2xl font-bold mb-1 ${darkMode ? 'text-white' : 'text-white'}`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5, ease: 'easeInOut' }}
      >
        Prasad Shaswat
      </motion.h2>
      
      <motion.div
        className={`${darkMode ? 'text-indigo-200' : 'text-orange-200'} text-sm mb-4 px-4 text-center`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
      >
        <p className="relative">
          <span className={`bg-clip-text text-transparent ${darkMode ? 
            'bg-gradient-to-r from-blue-200 to-purple-200' : 
            'bg-gradient-to-r from-yellow-200 to-orange-200'} font-medium`}>
            Full Stack Developer | JavaScript Specialist
          </span>
        </p>
      </motion.div>
      
      {/* Status Indicator */}
      <motion.div 
        className="flex items-center mb-4 bg-opacity-20 rounded-full px-3 py-1.5 text-xs font-medium"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8 }}
        style={{ 
          background: darkMode ? 'rgba(79, 70, 229, 0.2)' : 'rgba(255, 255, 255, 0.2)' 
        }}
      >
        <motion.div 
          className="w-2 h-2 rounded-full mr-2 bg-green-400"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.8, 1, 0.8]
          }}
          transition={{ repeat: Infinity, duration: 2 }}
        />
        Available for work
      </motion.div>
      
      {/* Social Links - Enhanced with labels that appear on hover */}
      <motion.div 
        className="flex space-x-3 mb-6"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.5 }}
      >
        <motion.a 
          href="https://linkedin.com/in/shaswat-prasad-14b147266" 
          target="_blank"
          rel="noopener noreferrer"
          className={`${darkMode ? 
            'bg-indigo-800 hover:bg-indigo-700' : 
            'bg-orange-800 hover:bg-orange-700'} 
            p-2.5 rounded-full flex items-center justify-center relative group`}
          whileHover={{ y: -3, scale: 1.1 }}
        >
          <FaLinkedin size={16} />
          <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-20 text-center text-xs opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none bg-black bg-opacity-70 px-2 py-1 rounded">LinkedIn</span>
        </motion.a>
        
        <motion.a 
          href="https://github.com/shaswat2031" 
          target="_blank"
          rel="noopener noreferrer"
          className={`${darkMode ? 
            'bg-indigo-800 hover:bg-indigo-700' : 
            'bg-orange-800 hover:bg-orange-700'} 
            p-2.5 rounded-full flex items-center justify-center relative group`}
          whileHover={{ y: -3, scale: 1.1 }}
        >
          <FaGithub size={16} />
          <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-20 text-center text-xs opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none bg-black bg-opacity-70 px-2 py-1 rounded">GitHub</span>
        </motion.a>
        
        <motion.a 
          href="https://twitter.com/pr17745" 
          target="_blank"
          rel="noopener noreferrer"
          className={`${darkMode ? 
            'bg-indigo-800 hover:bg-indigo-700' : 
            'bg-orange-800 hover:bg-orange-700'} 
            p-2.5 rounded-full flex items-center justify-center relative group`}
          whileHover={{ y: -3, scale: 1.1 }}
        >
          <FaTwitter size={16} />
          <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-20 text-center text-xs opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none bg-black bg-opacity-70 px-2 py-1 rounded">Twitter</span>
        </motion.a>
      </motion.div>
      
      {/* Enhanced divider with animated particles */}
      <div className="w-full px-6 mb-6 relative">
        <motion.div 
          className={`w-full h-0.5 ${darkMode ? 
            'bg-gradient-to-r from-transparent via-indigo-400 to-transparent' : 
            'bg-gradient-to-r from-transparent via-orange-300 to-transparent'}`}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <motion.div 
            className={`absolute top-1/2 left-1/4 -translate-y-1/2 w-2 h-2 ${darkMode ? 
              'bg-indigo-300' : 
              'bg-yellow-300'} rounded-full`}
            animate={{
              x: [0, 120, 0],
              scale: [1, 1.2, 1],
              opacity: [0.6, 1, 0.6]
            }}
            transition={{
              repeat: Infinity,
              duration: 8,
              ease: "easeInOut"
            }}
          />
          <motion.div 
            className={`absolute top-1/2 left-3/4 -translate-y-1/2 w-1.5 h-1.5 ${darkMode ? 
              'bg-blue-300' : 
              'bg-orange-300'} rounded-full`}
            animate={{
              x: [-60, 60, -60],
              scale: [1, 1.4, 1],
              opacity: [0.6, 1, 0.6]
            }}
            transition={{
              repeat: Infinity,
              duration: 10,
              ease: "easeInOut",
              delay: 1
            }}
          />
        </motion.div>
      </div>
      
      {/* Enhanced Navigation with indicator animations */}
      <nav className="flex flex-col space-y-1 text-left w-full px-4 pt-1 pb-3 overflow-y-auto scrollbar-hide">
        {navItems.map((item, index) => (
          <motion.a
            key={item.id}
            href={`#${item.id}`}
            className={`flex items-center space-x-3 py-2.5 px-4 rounded-lg transition-all duration-300 relative overflow-hidden
              ${activeSection === item.id 
                ? (darkMode 
                    ? 'bg-gradient-to-r from-indigo-600 to-blue-600 shadow-lg' 
                    : 'bg-gradient-to-r from-orange-400 to-orange-500 shadow-md')
                : 'hover:bg-white hover:bg-opacity-10'}`}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 + index * 0.1, duration: 0.5, ease: 'easeOut' }}
            variants={itemVariants}
            whileHover="hover"
            onHoverStart={() => setHoverItem(item.id)}
            onHoverEnd={() => setHoverItem(null)}
            onClick={() => handleSectionClick(item.id)}
          >
            {/* Background glow effect for active item */}
            {activeSection === item.id && (
              <motion.div 
                className="absolute inset-0 opacity-30 bg-white blur-md" 
                layoutId="navGlow"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.15 }}
                transition={{ 
                  type: "spring",
                  stiffness: 100,
                  damping: 30
                }}
              />
            )}
            
            <motion.div
              className={`flex items-center justify-center w-7 h-7 rounded-full ${
                activeSection === item.id 
                  ? (darkMode ? 'bg-blue-700' : 'bg-orange-600') 
                  : 'bg-white bg-opacity-10'
              }`}
              animate={{ 
                rotate: hoverItem === item.id ? [0, -10, 10, -5, 0] : 0,
                scale: activeSection === item.id ? 1.1 : 1
              }}
              transition={{ 
                rotate: { duration: 0.5 },
                scale: { duration: 0.2 }
              }}
            >
              <motion.span className="text-white">
                {item.icon}
              </motion.span>
            </motion.div>
            
            <span className={`text-xs tracking-wider font-medium ${
              activeSection === item.id 
                ? 'text-white' 
                : (darkMode ? 'text-indigo-100' : 'text-orange-100')
            }`}>
              {item.label}
            </span>
            
            {activeSection === item.id && (
              <motion.div 
                className={`ml-auto ${darkMode ? 'text-blue-200' : 'text-yellow-200'}`}
                layoutId="activeNavIndicator"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <FaArrowRight size={12} />
              </motion.div>
            )}
          </motion.a>
        ))}
      </nav>
      
     
      
      {/* Footer with animation */}
      <motion.div
        className="mt-auto pt-4 w-full px-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
      >
        
      </motion.div>
    </motion.div>
  );
}

export default Sidebar;