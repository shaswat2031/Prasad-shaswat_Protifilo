import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaAward, FaArrowRight, FaArrowLeft, FaInfoCircle, FaTimes, FaCode, FaLaptopCode } from 'react-icons/fa';

// Import images
import bootcampImage from '../Assets/bootcamp.jpg';
import cdcImage from '../Assets/cdc.jpg';
import cyberSecurityImage from '../Assets/cyber.jpg';
import ciscoImage from '../Assets/cybersecurity.jpg';
import figmaImage from '../Assets/Figma.png';
import hackathonImage from '../Assets/hackthon4.0.png';
import myOnsiteImage from '../Assets/onmyhealth.jpg';

// Define your certification data with images
const certifications = [
  {
    title: 'Hackathon of Vadodara 4.0',
    organization: 'Parul Institute of Innovation',
    date: 'October 2023',
    description: 'Organized by Parul Institute of Innovation and Entrepreneurship Research Center, this hackathon focused on fostering creativity and innovation.',
    image: hackathonImage,
    skills: ['Problem Solving', 'Team Collaboration', 'Innovation'],
    category: 'Competition'
  },
  {
    title: 'Figma Course Certification',
    organization: 'Udemy',
    date: 'August 2023',
    description: 'This course provided in-depth knowledge of Figma, covering essential design principles and techniques for creating user-friendly designs.',
    image: figmaImage,
    skills: ['UI/UX Design', 'Prototyping', 'Design Thinking'],
    category: 'Design'
  },
  {
    title: 'MyOnSite Healthcare Hackathon',
    organization: 'Parul University',
    date: 'January 2024',
    description: 'A 36-hour intensive hackathon supported by JBT Hospitality and MedinoAi, where teams developed innovative healthcare solutions.',
    image: myOnsiteImage,
    skills: ['Healthcare Tech', 'Rapid Prototyping', 'Presentation'],
    category: 'Competition'
  },
  {
    title: 'Cisco Certificate of Computer Networks',
    organization: 'Cisco',
    date: 'November 2023',
    description: 'This certification validated your understanding of networking concepts, covering topics like network design and secure networks.',
    image: ciscoImage,
    skills: ['Network Architecture', 'Network Security', 'Protocols'],
    category: 'Technical'
  },
  {
    title: 'CDC Coordinator in GLOBAL FUNFEST',
    organization: 'Career Development Cell',
    date: 'March 2024',
    description: 'As a coordinator, you organized and managed GLOBAL FUNFEST 2024, facilitating networking, skill development, and fun.',
    image: cdcImage,
    skills: ['Event Management', 'Leadership', 'Communication'],
    category: 'Leadership'
  },
  {
    title: 'Cyber Security Bootcamp',
    organization: '60-day Intensive Program',
    date: 'February 2024',
    description: 'This boot camp provided a comprehensive overview of cybersecurity principles, including threat detection and risk management.',
    image: cyberSecurityImage,
    skills: ['Cybersecurity', 'Threat Detection', 'Security Protocols'],
    category: 'Technical'
  },
  {
    title: 'Full Stack Web Development',
    organization: 'Udemy',
    date: 'December 2023',
    description: 'This bootcamp covered front-end and back-end technologies, equipping you with the skills to build dynamic web applications.',
    image: bootcampImage,
    skills: ['React', 'Node.js', 'MongoDB', 'Express'],
    category: 'Technical'
  },
];

const categoryColors = {
  'Technical': 'indigo',
  'Design': 'purple',
  'Competition': 'blue',
  'Leadership': 'teal'
};

const Certifications = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');
  
  const filteredCertifications = activeCategory === 'all' 
    ? certifications 
    : certifications.filter(cert => cert.category === activeCategory);
  
  const categories = [
    { id: 'all', name: 'All Certifications' },
    { id: 'Technical', name: 'Technical' },
    { id: 'Design', name: 'Design' },
    { id: 'Competition', name: 'Competitions' },
    { id: 'Leadership', name: 'Leadership' }
  ];

  const nextCertificate = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % filteredCertifications.length);
  };

  const prevCertificate = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === 0 ? filteredCertifications.length - 1 : prevIndex - 1
    );
  };

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
      transition: { type: "spring", stiffness: 100 }
    }
  };

  return (
    <section id="certifications" className="py-20 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-gray-200 relative overflow-hidden">
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
      
      <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">
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
                <FaAward />
              </motion.div>
            </div>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-3">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">
              Certifications & Achievements
            </span>
          </h2>
          <div className="h-0.5 w-24 mx-auto bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mb-4"></div>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm">
            Credentials and accomplishments that reflect my commitment to continuous learning and professional growth.
          </p>
        </motion.div>

        {/* Category Filters */}
        <motion.div 
          className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          {categories.map(category => (
            <motion.button
              key={category.id}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md shadow-indigo-900/20'
                  : 'bg-gray-800 bg-opacity-70 text-gray-300 hover:bg-gray-700 border border-gray-700'
              }`}
              onClick={() => {
                setActiveCategory(category.id);
                setActiveIndex(0);
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.name}
            </motion.button>
          ))}
        </motion.div>

        {/* Featured Certification */}
        <motion.div 
          className="mb-16 relative"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <div className="bg-gray-800 bg-opacity-70 backdrop-blur-sm rounded-xl shadow-xl overflow-hidden border-t-2 border-indigo-500">
            <div className="md:flex items-stretch">
              {/* Certificate Image */}
              <div className="md:w-1/2 relative group overflow-hidden bg-gray-900">
                <motion.img 
                  src={filteredCertifications[activeIndex].image}
                  alt={filteredCertifications[activeIndex].title}
                  className="w-full h-64 md:h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700 opacity-80"
                  key={activeIndex}
                  initial={{ opacity: 0.5 }}
                  animate={{ opacity: 0.8 }}
                  transition={{ duration: 0.5 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-80"></div>
                <motion.button
                  className="absolute bottom-4 right-4 px-4 py-2 bg-indigo-700 bg-opacity-80 rounded-lg text-sm font-medium text-white flex items-center shadow-md backdrop-blur-sm border border-indigo-600/50 hover:bg-indigo-600"
                  onClick={() => setModalOpen(true)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaInfoCircle className="mr-2" />
                  View Details
                </motion.button>
              </div>
              
              {/* Certificate Content */}
              <div className="md:w-1/2 p-8">
                <motion.div
                  key={`content-${activeIndex}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-4 bg-${categoryColors[filteredCertifications[activeIndex].category]}-900/50 text-${categoryColors[filteredCertifications[activeIndex].category]}-300 border border-${categoryColors[filteredCertifications[activeIndex].category]}-700/50`}>
                    {filteredCertifications[activeIndex].category}
                  </span>
                  
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {filteredCertifications[activeIndex].title}
                  </h3>
                  
                  <div className="flex items-center text-gray-400 mb-4">
                    <span className="font-medium text-indigo-400">{filteredCertifications[activeIndex].organization}</span>
                    <span className="mx-2">•</span>
                    <span>{filteredCertifications[activeIndex].date}</span>
                  </div>
                  
                  <p className="text-gray-300 mb-6">
                    {filteredCertifications[activeIndex].description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-300 mb-2">Skills Acquired:</h4>
                    <div className="flex flex-wrap gap-2">
                      {filteredCertifications[activeIndex].skills.map((skill, idx) => (
                        <span 
                          key={idx} 
                          className={`px-3 py-1 bg-${categoryColors[filteredCertifications[activeIndex].category]}-900/40 text-${categoryColors[filteredCertifications[activeIndex].category]}-300 text-xs font-medium rounded-full border border-${categoryColors[filteredCertifications[activeIndex].category]}-700/30`}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
          
          {/* Navigation Controls */}
          <div className="flex justify-center mt-8 space-x-4">
            <motion.button
              className="w-10 h-10 rounded-full bg-gray-800 border border-gray-700 shadow-md flex items-center justify-center text-indigo-400 hover:bg-gray-700 transition-colors"
              onClick={prevCertificate}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaArrowLeft size={14} />
            </motion.button>
            
            <div className="flex items-center text-gray-400 text-sm">
              {filteredCertifications.map((_, idx) => (
                <button 
                  key={idx}
                  className={`w-2.5 h-2.5 mx-1 rounded-full transition-all ${
                    idx === activeIndex 
                      ? 'bg-gradient-to-r from-indigo-500 to-purple-500 scale-125' 
                      : 'bg-gray-700 hover:bg-gray-600'
                  }`}
                  onClick={() => setActiveIndex(idx)}
                />
              ))}
            </div>
            
            <motion.button
              className="w-10 h-10 rounded-full bg-gray-800 border border-gray-700 shadow-md flex items-center justify-center text-indigo-400 hover:bg-gray-700 transition-colors"
              onClick={nextCertificate}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaArrowRight size={14} />
            </motion.button>
          </div>
        </motion.div>
        
        {/* Certificate Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {filteredCertifications.map((cert, idx) => (
            <motion.div
              key={idx}
              className={`bg-gray-800 bg-opacity-60 backdrop-blur-sm rounded-xl shadow-xl overflow-hidden border-t-2 border-${categoryColors[cert.category]}-500 hover:shadow-${categoryColors[cert.category]}-900/20 transition-shadow`}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              variants={itemVariants}
            >
              <div className="h-40 overflow-hidden bg-gray-900">
                <img 
                  src={cert.image} 
                  alt={cert.title}
                  className="w-full h-full object-cover object-center hover:scale-110 transition-transform duration-500 opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
              </div>
              
              <div className="p-5 relative">
                <div className={`absolute top-0 right-5 w-8 h-8 rounded-b-lg flex items-center justify-center bg-${categoryColors[cert.category]}-700 text-white transform -translate-y-2`}>
                  <FaAward size={12} />
                </div>
                
                <div className="flex justify-between items-start">
                  <div>
                    <span className={`inline-block px-2.5 py-0.5 text-xs font-medium rounded-full bg-${categoryColors[cert.category]}-900/50 text-${categoryColors[cert.category]}-300 border border-${categoryColors[cert.category]}-700/50 mb-2`}>
                      {cert.category}
                    </span>
                    <h3 className="font-bold text-white">{cert.title}</h3>
                  </div>
                </div>
                
                <div className="text-sm text-gray-400 mt-1 mb-3">
                  {cert.organization} • {cert.date}
                </div>
                
                <motion.button
                  className={`w-full mt-2 px-3 py-1.5 rounded-lg flex items-center justify-center text-${categoryColors[cert.category]}-300 bg-${categoryColors[cert.category]}-900/30 border border-${categoryColors[cert.category]}-700/30 hover:bg-${categoryColors[cert.category]}-900/50 transition-colors text-sm`}
                  onClick={() => {
                    setActiveIndex(idx);
                    window.scrollTo({
                      top: document.querySelector('#certifications').offsetTop,
                      behavior: 'smooth'
                    });
                  }}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  View Certificate <FaArrowRight className="ml-2" size={12} />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      
      {/* Detail Modal */}
      <AnimatePresence>
        {modalOpen && (
          <motion.div 
            className="fixed inset-0 bg-black bg-opacity-75 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setModalOpen(false)}
          >
            <motion.div 
              className="bg-gray-800 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-auto border border-gray-700"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={e => e.stopPropagation()}
            >
              <div className="relative">
                <img 
                  src={filteredCertifications[activeIndex].image} 
                  alt={filteredCertifications[activeIndex].title}
                  className="w-full h-80 object-cover object-center opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-70"></div>
                
                <button 
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-gray-900 bg-opacity-70 text-white flex items-center justify-center hover:bg-opacity-90 transition-colors border border-gray-700"
                  onClick={() => setModalOpen(false)}
                >
                  <FaTimes />
                </button>
                
                <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-gray-900 to-transparent">
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-2 bg-${categoryColors[filteredCertifications[activeIndex].category]}-900/50 text-${categoryColors[filteredCertifications[activeIndex].category]}-300 border border-${categoryColors[filteredCertifications[activeIndex].category]}-700/50`}>
                    {filteredCertifications[activeIndex].category}
                  </span>
                  
                  <h2 className="text-2xl font-bold text-white mb-1">
                    {filteredCertifications[activeIndex].title}
                  </h2>
                  
                  <div className="flex items-center text-gray-400">
                    <span className="font-medium text-indigo-400">{filteredCertifications[activeIndex].organization}</span>
                    <span className="mx-2">•</span>
                    <span>{filteredCertifications[activeIndex].date}</span>
                  </div>
                </div>
              </div>
              
              <div className="p-8">
                <div className="bg-gray-900/60 p-6 rounded-lg mb-6 border border-gray-700">
                  <h3 className="font-semibold text-white mb-3">Description</h3>
                  <p className="text-gray-300">
                    {filteredCertifications[activeIndex].description}
                  </p>
                </div>
                
                <div className="mb-6">
                  <h3 className="font-semibold text-white mb-3">Skills Acquired</h3>
                  <div className="flex flex-wrap gap-2">
                    {filteredCertifications[activeIndex].skills.map((skill, idx) => (
                      <span 
                        key={idx} 
                        className={`px-4 py-2 bg-${categoryColors[filteredCertifications[activeIndex].category]}-900/40 text-${categoryColors[filteredCertifications[activeIndex].category]}-300 text-sm font-medium rounded-full border border-${categoryColors[filteredCertifications[activeIndex].category]}-700/30`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex justify-end border-t border-gray-700 pt-6">
                  <button 
                    className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg font-medium hover:from-indigo-700 hover:to-purple-700 transition-colors shadow-lg shadow-indigo-900/20"
                    onClick={() => setModalOpen(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Certifications;