import React, { useState, useEffect } from 'react';
import { FaHome, FaGraduationCap, FaLaptopCode, FaProjectDiagram, FaStar, FaCertificate, FaEnvelope, 
         FaCode, FaLinkedin, FaGithub, FaTwitter, FaArrowRight, FaMoon, FaSun, FaBrain } from 'react-icons/fa';
import myself from '../Assets/myself.png';

function Sidebar({ closeSidebar }) {
  const [activeSection, setActiveSection] = useState('about');
  const [hoverItem, setHoverItem] = useState(null);
  const [darkMode, setDarkMode] = useState(true);
  const [isScrolling, setIsScrolling] = useState(false);
  
  // Define navItems before using it in useEffect
  const navItems = [
    { id: 'about', label: 'ABOUT', icon: <FaHome size={18} /> },
    { id: 'education', label: 'EDUCATION', icon: <FaGraduationCap size={18} /> },
    { id: 'skills', label: 'SKILLS', icon: <FaLaptopCode size={18} /> },
    { id: 'projects', label: 'PROJECTS', icon: <FaProjectDiagram size={18} /> },
    { id: 'extra', label: 'EXTRA', icon: <FaStar size={18} /> },
    { id: 'certifications', label: 'CERTIFICATIONS', icon: <FaCertificate size={18} /> },
    { id: 'contact', label: 'CONTACT', icon: <FaEnvelope size={18} /> },
  ];
  
  // Handle scroll to update active section highlighting only
  useEffect(() => {
    let scrollTimer;
    
    const handleScroll = () => {
      // Set a flag to indicate user is scrolling
      setIsScrolling(true);
      
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + window.innerHeight / 3;
      
      // Check if we've scrolled to the bottom of the page
      const isBottom = window.innerHeight + window.pageYOffset >= document.body.offsetHeight - 100;
      
      if (isBottom) {
        // If at bottom, highlight the last nav item
        setActiveSection(navItems[navItems.length - 1].id);
      } else {
        // Otherwise find the current section based on scroll position
        for (let i = sections.length - 1; i >= 0; i--) {
          const section = sections[i];
          if (section) {
            if (section.offsetTop <= scrollPosition) {
              if (activeSection !== navItems[i].id) {
                setActiveSection(navItems[i].id);
              }
              break;
            }
          }
        }
      }
      
      // Clear previous timer
      clearTimeout(scrollTimer);
      
      // Set a timer to indicate when scrolling has stopped
      scrollTimer = setTimeout(() => {
        setIsScrolling(false);
      }, 150);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimer);
    };
  }, [activeSection, navItems]);

  const handleSectionClick = (id) => {
    // Only set activeSection and scroll if we're not already scrolling
    if (!isScrolling) {
      setActiveSection(id);
      // Smooth scroll to section with offset to account for any fixed headers
      const element = document.getElementById(id);
      const offset = 20; // Adjust this value as needed
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      
      // Close sidebar on mobile when a navigation item is clicked
      if (closeSidebar && window.innerWidth < 768) {
        closeSidebar();
      }
    }
  };

  return (
    <div
      className={`h-screen w-64 ${darkMode ? 
        'bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900' : 
        'bg-gradient-to-b from-orange-600 via-orange-700 to-orange-800'} 
        text-white flex flex-col items-center py-8 fixed top-0 left-0 shadow-xl z-50`}
    >
      {/* Decorative elements - Different for light/dark themes */}
      {darkMode ? (
        // Dark theme decorations
        <>
          <div className="absolute top-0 right-0 w-20 h-20 bg-indigo-500 rounded-bl-full opacity-10"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-purple-600 rounded-tr-full opacity-10"></div>
          <div className="absolute top-1/3 left-0 w-2 h-20 bg-blue-400 opacity-20"></div>
          <div className="absolute right-20 top-40 text-blue-300 opacity-20">
            <FaCode size={20} />
          </div>
          <div className="absolute left-10 bottom-40 text-purple-300 opacity-20">
            <FaBrain size={24} />
          </div>
        </>
      ) : (
        // Light theme decorations
        <>
          <div className="absolute top-0 right-0 w-20 h-20 bg-yellow-400 rounded-bl-full opacity-20"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-red-500 rounded-tr-full opacity-10"></div>
          <div className="absolute top-1/3 left-0 w-2 h-20 bg-yellow-300 opacity-30"></div>
          <div className="absolute right-12 top-60 text-yellow-300 opacity-30">
            <FaCode size={16} />
          </div>
          <div className="absolute left-8 bottom-60 text-yellow-300 opacity-30">
            <FaCode size={14} />
          </div>
        </>
      )}
      
      {/* Profile section */}
      <div className="relative mb-8">
        <div
          className={`absolute -inset-1 ${darkMode ? 
            'bg-gradient-to-r from-blue-500 via-indigo-400 to-purple-500' : 
            'bg-gradient-to-r from-yellow-400 via-orange-300 to-red-500'} 
            rounded-full opacity-80 blur-sm`}
        />
        <div
          className="relative rounded-full p-1 overflow-hidden"
        >
          <img
            src={myself}
            alt="Profile"
            className={`rounded-full w-36 h-36 object-cover border-4 ${darkMode ? 
              'border-indigo-400' : 
              'border-white'} shadow-lg transform`}
          />
        </div>
        
        {/* Code particles */}
        <div className={`absolute -top-2 -right-2 ${darkMode ? 'text-blue-300' : 'text-yellow-300'} opacity-70`}>
          <FaCode size={16} />
        </div>
        
        <div className={`absolute -bottom-2 -left-2 ${darkMode ? 'text-purple-300' : 'text-yellow-300'} opacity-70`}>
          <FaCode size={14} />
        </div>
      </div>
      
      <h2
        className={`text-2xl font-bold mb-1 ${darkMode ? 'text-white' : 'text-white'}`}
      >
        Prasad Shaswat
      </h2>
      
      <div
        className={`${darkMode ? 'text-indigo-200' : 'text-orange-200'} text-sm mb-4 px-4 text-center`}
      >
        <p className="relative">
          <span className={`bg-clip-text text-transparent ${darkMode ? 
            'bg-gradient-to-r from-blue-200 to-purple-200' : 
            'bg-gradient-to-r from-yellow-200 to-orange-200'} font-medium`}>
            Full Stack Developer | JavaScript Specialist
          </span>
        </p>
      </div>
      
      {/* Status Indicator */}
      <div 
        className="flex items-center mb-4 bg-opacity-20 rounded-full px-3 py-1.5 text-xs font-medium"
        style={{ 
          background: darkMode ? 'rgba(79, 70, 229, 0.2)' : 'rgba(255, 255, 255, 0.2)' 
        }}
      >
        <div className="w-2 h-2 rounded-full mr-2 bg-green-400" />
        Available for work
      </div>
      
      {/* Social Links */}
      <div className="flex space-x-3 mb-6">
        <a 
          href="https://linkedin.com/in/shaswat-prasad-14b147266" 
          target="_blank"
          rel="noopener noreferrer"
          className={`${darkMode ? 
            'bg-indigo-800 hover:bg-indigo-700' : 
            'bg-orange-800 hover:bg-orange-700'} 
            p-2.5 rounded-full flex items-center justify-center relative group`}
        >
          <FaLinkedin size={16} />
          <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-20 text-center text-xs opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none bg-black bg-opacity-70 px-2 py-1 rounded">LinkedIn</span>
        </a>
        
        <a 
          href="https://github.com/shaswat2031" 
          target="_blank"
          rel="noopener noreferrer"
          className={`${darkMode ? 
            'bg-indigo-800 hover:bg-indigo-700' : 
            'bg-orange-800 hover:bg-orange-700'} 
            p-2.5 rounded-full flex items-center justify-center relative group`}
        >
          <FaGithub size={16} />
          <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-20 text-center text-xs opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none bg-black bg-opacity-70 px-2 py-1 rounded">GitHub</span>
        </a>
        
        <a 
          href="https://twitter.com/pr17745" 
          target="_blank"
          rel="noopener noreferrer"
          className={`${darkMode ? 
            'bg-indigo-800 hover:bg-indigo-700' : 
            'bg-orange-800 hover:bg-orange-700'} 
            p-2.5 rounded-full flex items-center justify-center relative group`}
        >
          <FaTwitter size={16} />
          <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-20 text-center text-xs opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none bg-black bg-opacity-70 px-2 py-1 rounded">Twitter</span>
        </a>
      </div>
      
      {/* Divider */}
      <div className="w-full px-6 mb-6 relative">
        <div 
          className={`w-full h-0.5 ${darkMode ? 
            'bg-gradient-to-r from-transparent via-indigo-400 to-transparent' : 
            'bg-gradient-to-r from-transparent via-orange-300 to-transparent'}`}
        >
          <div 
            className={`absolute top-1/2 left-1/4 -translate-y-1/2 w-2 h-2 ${darkMode ? 
              'bg-indigo-300' : 
              'bg-yellow-300'} rounded-full`}
          />
          <div 
            className={`absolute top-1/2 left-3/4 -translate-y-1/2 w-1.5 h-1.5 ${darkMode ? 
              'bg-blue-300' : 
              'bg-orange-300'} rounded-full`}
          />
        </div>
      </div>
      
      {/* Navigation */}
      <nav className="flex flex-col space-y-1 text-left w-full px-4 pt-1 pb-3 overflow-y-auto scrollbar-hide">
        {navItems.map((item, index) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={`flex items-center space-x-3 py-2.5 px-4 rounded-lg transition-all duration-300 relative overflow-hidden
              ${activeSection === item.id 
                ? (darkMode 
                    ? 'bg-gradient-to-r from-indigo-600 to-blue-600 shadow-lg' 
                    : 'bg-gradient-to-r from-orange-400 to-orange-500 shadow-md')
                : 'hover:bg-white hover:bg-opacity-10'}`}
            onMouseEnter={() => setHoverItem(item.id)}
            onMouseLeave={() => setHoverItem(null)}
            onClick={(e) => {
              // Only navigate to the section if the user explicitly clicked the link
              if (!isScrolling) {
                handleSectionClick(item.id);
              }
            }}
          >
            {/* Background for active item */}
            {activeSection === item.id && (
              <div className="absolute inset-0 opacity-30 bg-white blur-md" />
            )}
            
            <div
              className={`flex items-center justify-center w-7 h-7 rounded-full ${
                activeSection === item.id 
                  ? (darkMode ? 'bg-blue-700' : 'bg-orange-600') 
                  : 'bg-white bg-opacity-10'
              }`}
            >
              <span className="text-white">
                {item.icon}
              </span>
            </div>
            
            <span className={`text-xs tracking-wider font-medium ${
              activeSection === item.id 
                ? 'text-white' 
                : (darkMode ? 'text-indigo-100' : 'text-orange-100')
            }`}>
              {item.label}
            </span>
            
            {activeSection === item.id && (
              <div className={`ml-auto ${darkMode ? 'text-blue-200' : 'text-yellow-200'}`}>
                <FaArrowRight size={12} />
              </div>
            )}
          </a>
        ))}
      </nav>
      
      {/* Footer */}
      <div className="mt-auto pt-4 w-full px-6">
        
      </div>
    </div>
  );
}

export default Sidebar;