<<<<<<< HEAD
import { motion } from "framer-motion";
import React, { useState } from "react";
import {
  FaExternalLinkAlt,
  FaGithub,
  FaCalendarAlt,
  FaCode,
  FaTools,
  FaArrowRight,
  FaStar,
  FaLaptopCode,
  FaFire,
} from "react-icons/fa";
import universityConnectImage from "../Assets/university-connect.png";
import inventoryImage from "../Assets/image.png";
=======
import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { FaExternalLinkAlt, FaGithub, FaCalendarAlt, FaCode, FaTools, FaArrowRight, FaStar, FaLaptopCode, FaFire } from 'react-icons/fa';
import universityConnectImage from '../Assets/university-connect.png';
import inventoryImage from '../Assets/image.png';
>>>>>>> 9bde7ed3336d8601f695ad02eefd8f330dcff845

export const projects = [
  {
    title: "University Connect",
<<<<<<< HEAD
    description:
      "A student-driven platform enabling users to create profiles, showcase skills, and connect for collaboration.",
    longDescription:
      "Developed a dynamic UI, integrated student profiles, messaging, and a certification system with secure authentication and optimized data handling.",
    date: "Jan 2025 – Feb 2025",
    githubLink:
      "https://github.com/shaswat2031/Minor-Project-University-Connect.git",
=======
    description: "A student-driven platform enabling users to create profiles, showcase skills, and connect for collaboration.",
    longDescription: "Developed a dynamic UI, integrated student profiles, messaging, and a certification system with secure authentication and optimized data handling.",
    date: "Jan 2025 – Feb 2025",
    githubLink: "https://github.com/shaswat2031/Minor-Project-University-Connect.git",
>>>>>>> 9bde7ed3336d8601f695ad02eefd8f330dcff845
    image: universityConnectImage,
    alignment: "left",
    tags: ["React", "Node.js", "MongoDB", "Express", "JWT"],
    highlight: true,
    features: [
      "User profile creation and management",
      "Skill showcase and search functionality",
      "Real-time messaging system",
      "Certification verification",
<<<<<<< HEAD
      "Role-based access control",
    ],
    color: "from-indigo-600 to-purple-600",
  },
  {
    title: "Flask Inventory Management System",
    description:
      "A personal project focused on authentication, inventory & sales management, and billing.",
    longDescription:
      "Features secure login/logout with hashed passwords, user-specific access control, invoice generation, and real-time stock analytics.",
=======
      "Role-based access control"
    ],
    color: "from-indigo-600 to-purple-600"
  },
  {
    title: "Flask Inventory Management System",
    description: "A personal project focused on authentication, inventory & sales management, and billing.",
    longDescription: "Features secure login/logout with hashed passwords, user-specific access control, invoice generation, and real-time stock analytics.",
>>>>>>> 9bde7ed3336d8601f695ad02eefd8f330dcff845
    date: "Feb 2025 – Present",
    githubLink: "https://github.com/shaswat2031/Flask-Inventory-Management",
    image: inventoryImage,
    alignment: "right",
    tags: ["Python", "Flask", "MongoDB", "Bootstrap", "Jinja"],
    highlight: false,
    features: [
      "Secure authentication with password hashing",
      "Real-time inventory tracking",
      "Sales and purchase management",
      "PDF invoice generation",
<<<<<<< HEAD
      "Data analytics dashboard",
    ],
    color: "from-blue-600 to-indigo-600",
  },
=======
      "Data analytics dashboard"
    ],
    color: "from-blue-600 to-indigo-600"
  }
>>>>>>> 9bde7ed3336d8601f695ad02eefd8f330dcff845
];

const Projects = () => {
  const [activeProject, setActiveProject] = useState(null);
<<<<<<< HEAD

=======
  
>>>>>>> 9bde7ed3336d8601f695ad02eefd8f330dcff845
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
<<<<<<< HEAD
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden"
    >
=======
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
    <section id="projects" className="py-20 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
>>>>>>> 9bde7ed3336d8601f695ad02eefd8f330dcff845
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-500 rounded-full opacity-5 blur-3xl -mr-40 -mt-20"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-600 rounded-full opacity-5 blur-3xl -ml-48 -mb-20"></div>
      <div className="absolute top-1/3 left-10 w-2 h-32 bg-indigo-600 opacity-10"></div>
<<<<<<< HEAD

      <motion.div
        className="absolute right-12 top-60 text-indigo-400 opacity-10"
        animate={{
          y: [0, -15, 0],
          opacity: [0.1, 0.2, 0.1],
          scale: [1, 1.2, 1],
=======
      
      <motion.div 
        className="absolute right-12 top-60 text-indigo-400 opacity-10"
        animate={{ 
          y: [0, -15, 0],
          opacity: [0.1, 0.2, 0.1],
          scale: [1, 1.2, 1]
>>>>>>> 9bde7ed3336d8601f695ad02eefd8f330dcff845
        }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
      >
        <FaCode size={20} />
      </motion.div>
<<<<<<< HEAD

      <motion.div
        className="absolute left-1/4 bottom-20 text-purple-400 opacity-10"
        animate={{
          y: [0, 15, 0],
          opacity: [0.1, 0.2, 0.1],
          rotate: [0, 10, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 5,
          ease: "easeInOut",
          delay: 1,
        }}
      >
        <FaLaptopCode size={24} />
      </motion.div>

      <div className="max-w-6xl mx-auto px-4 md:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
=======
      
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
      
      <div className="max-w-6xl mx-auto px-4 md:px-8 relative z-10">
        {/* Section Header */}
        <motion.div 
>>>>>>> 9bde7ed3336d8601f695ad02eefd8f330dcff845
          className="mb-16 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block mb-3 relative">
<<<<<<< HEAD
            <motion.div
              className="absolute inset-0 rounded-xl bg-gradient-to-r from-indigo-600/20 to-purple-600/20 blur-xl"
              animate={{
                rotate: [0, 5, 0, -5, 0],
                scale: [1, 1.05, 1, 1.05, 1],
=======
            <motion.div 
              className="absolute inset-0 rounded-xl bg-gradient-to-r from-indigo-600/20 to-purple-600/20 blur-xl"
              animate={{ 
                rotate: [0, 5, 0, -5, 0],
                scale: [1, 1.05, 1, 1.05, 1]
>>>>>>> 9bde7ed3336d8601f695ad02eefd8f330dcff845
              }}
              transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
            />
            <div className="w-16 h-16 mx-auto bg-gray-800 rounded-xl flex items-center justify-center border-2 border-indigo-700 shadow-lg shadow-indigo-900/20 relative">
              <motion.div
<<<<<<< HEAD
                animate={{
                  rotateY: [0, 360],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 6,
                  ease: "easeInOut",
                }}
=======
                animate={{ 
                  rotateY: [0, 360],
                }}
                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
>>>>>>> 9bde7ed3336d8601f695ad02eefd8f330dcff845
                className="text-indigo-400 text-2xl"
              >
                <FaCode />
              </motion.div>
            </div>
          </div>
<<<<<<< HEAD

=======
          
>>>>>>> 9bde7ed3336d8601f695ad02eefd8f330dcff845
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-3">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">
              Crafted Projects
            </span>
          </h2>
          <div className="h-0.5 w-24 mx-auto bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mb-4"></div>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm">
<<<<<<< HEAD
            A collection of development journeys where challenges met creative
            solutions, each representing a unique problem-solving approach.
          </p>
        </motion.div>

        {/* Unique Hexagonal Grid Layout - Projects */}
        <motion.div
=======
            A collection of development journeys where challenges met creative solutions, 
            each representing a unique problem-solving approach.
          </p>
        </motion.div>
        
        {/* Unique Hexagonal Grid Layout - Projects */}
        <motion.div 
>>>>>>> 9bde7ed3336d8601f695ad02eefd8f330dcff845
          className="space-y-24"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="relative z-10"
              variants={itemVariants}
            >
              {/* Decorative Number */}
              <div className="absolute -top-12 -left-4 opacity-5 z-0">
<<<<<<< HEAD
                <span className="text-[120px] font-black text-white">
                  0{index + 1}
                </span>
              </div>

              {/* Project Card with Unique Alignment */}
              <div
                className={`relative flex flex-col ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } gap-8 items-center`}
              >
=======
                <span className="text-[120px] font-black text-white">0{index + 1}</span>
              </div>
              
              {/* Project Card with Unique Alignment */}
              <div className={`relative flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center`}>
>>>>>>> 9bde7ed3336d8601f695ad02eefd8f330dcff845
                {/* Image Container with Asymmetrical Design */}
                <div className="w-full md:w-1/2 relative">
                  {/* Image Frame with Gradient Border */}
                  <div className="relative group">
                    {/* Background Pattern */}
<<<<<<< HEAD
                    <div
                      className={`absolute inset-0 bg-gradient-to-r ${project.color} rounded-xl opacity-20 blur-sm transform group-hover:opacity-30 transition-all duration-500`}
                    ></div>

                    {/* Main Image */}
                    <motion.div
                      className="relative z-10 rounded-xl overflow-hidden border-2 border-gray-800 shadow-xl"
                      whileHover={{
                        y: -8,
                        boxShadow: "0 25px 50px -12px rgba(79, 70, 229, 0.25)",
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <div
                        className={`absolute inset-0 bg-gradient-to-tr ${project.color} opacity-20 mix-blend-overlay z-10`}
                      ></div>
=======
                    <div className={`absolute inset-0 bg-gradient-to-r ${project.color} rounded-xl opacity-20 blur-sm transform group-hover:opacity-30 transition-all duration-500`}></div>
                    
                    {/* Main Image */}
                    <motion.div 
                      className="relative z-10 rounded-xl overflow-hidden border-2 border-gray-800 shadow-xl"
                      whileHover={{ 
                        y: -8,
                        boxShadow: "0 25px 50px -12px rgba(79, 70, 229, 0.25)"
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className={`absolute inset-0 bg-gradient-to-tr ${project.color} opacity-20 mix-blend-overlay z-10`}></div>
>>>>>>> 9bde7ed3336d8601f695ad02eefd8f330dcff845
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-64 object-cover object-top"
                      />
<<<<<<< HEAD

                      {/* Overlay Elements */}
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-900 to-transparent h-16 z-20"></div>

=======
                      
                      {/* Overlay Elements */}
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-900 to-transparent h-16 z-20"></div>
                      
>>>>>>> 9bde7ed3336d8601f695ad02eefd8f330dcff845
                      {/* Featured Badge */}
                      {project.highlight && (
                        <div className="absolute top-4 right-4 z-30">
                          <span className="inline-flex items-center px-2 py-1 rounded-full bg-indigo-900/60 backdrop-blur-sm text-indigo-200 text-xs border border-indigo-700/50">
                            <FaFire className="mr-1 text-amber-500" size={10} />
                            Featured
                          </span>
                        </div>
                      )}
                    </motion.div>
                  </div>
                </div>
<<<<<<< HEAD

                {/* Content Side with Glass Effect */}
                <div className="w-full md:w-1/2 relative md:transform md:translate-x-0">
                  {/* Inner Glass Card */}
                  <motion.div
                    className={`bg-gray-800 bg-opacity-60 backdrop-blur-sm rounded-xl overflow-hidden border-t-2 ${
                      index === 0
                        ? "border-purple-500"
                        : index === 1
                        ? "border-indigo-500"
                        : "border-blue-500"
=======
                
                {/* Content Side with Glass Effect */}
                <div className="w-full md:w-1/2 relative md:transform md:translate-x-0">
                  {/* Inner Glass Card */}
                  <motion.div 
                    className={`bg-gray-800 bg-opacity-60 backdrop-blur-sm rounded-xl overflow-hidden border-t-2 ${
                      index === 0 ? 'border-purple-500' : index === 1 ? 'border-indigo-500' : 'border-blue-500'
>>>>>>> 9bde7ed3336d8601f695ad02eefd8f330dcff845
                    } shadow-xl p-6`}
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.2 }}
                  >
                    {/* Project Date */}
                    <div className="flex items-center text-indigo-300 text-sm mb-4">
                      <FaCalendarAlt className="mr-2" size={12} />
                      <span>{project.date}</span>
                    </div>
<<<<<<< HEAD

=======
                    
>>>>>>> 9bde7ed3336d8601f695ad02eefd8f330dcff845
                    {/* Title with Bottom Line */}
                    <h3 className="text-2xl font-bold text-white mb-4 pb-2 border-b border-gray-700">
                      {project.title}
                    </h3>
<<<<<<< HEAD

=======
                    
>>>>>>> 9bde7ed3336d8601f695ad02eefd8f330dcff845
                    {/* Description */}
                    <p className="text-gray-300 text-sm mb-5">
                      {project.description}
                    </p>
<<<<<<< HEAD

                    {/* Tags with Unique Style */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag, i) => (
                        <span
                          key={i}
=======
                    
                    {/* Tags with Unique Style */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag, i) => (
                        <span 
                          key={i} 
>>>>>>> 9bde7ed3336d8601f695ad02eefd8f330dcff845
                          className="px-2.5 py-1 text-xs font-medium bg-gray-700/80 text-indigo-300 rounded-full border border-gray-600"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
<<<<<<< HEAD

=======
                    
>>>>>>> 9bde7ed3336d8601f695ad02eefd8f330dcff845
                    {/* Expandable Content */}
                    {activeProject === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
<<<<<<< HEAD
                        animate={{ opacity: 1, height: "auto" }}
=======
                        animate={{ opacity: 1, height: 'auto' }}
>>>>>>> 9bde7ed3336d8601f695ad02eefd8f330dcff845
                        transition={{ duration: 0.3 }}
                        className="mt-4 pt-4 border-t border-gray-700"
                      >
                        <p className="text-gray-400 text-sm mb-4">
                          {project.longDescription}
                        </p>
<<<<<<< HEAD

=======
                        
>>>>>>> 9bde7ed3336d8601f695ad02eefd8f330dcff845
                        <div className="space-y-3">
                          <h4 className="font-bold text-white mb-2 flex items-center text-sm">
                            <span className="w-5 h-5 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white flex items-center justify-center mr-2">
                              <FaTools size={10} />
                            </span>
                            Key Features
                          </h4>
<<<<<<< HEAD

                          <ul className="grid grid-cols-1 gap-2">
                            {project.features.map((feature, i) => (
                              <li
                                key={i}
                                className="text-sm text-gray-400 flex items-start"
                              >
                                <span className="text-indigo-400 mr-2 mt-1">
                                  •
                                </span>
=======
                          
                          <ul className="grid grid-cols-1 gap-2">
                            {project.features.map((feature, i) => (
                              <li key={i} className="text-sm text-gray-400 flex items-start">
                                <span className="text-indigo-400 mr-2 mt-1">•</span>
>>>>>>> 9bde7ed3336d8601f695ad02eefd8f330dcff845
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    )}
<<<<<<< HEAD

=======
                    
>>>>>>> 9bde7ed3336d8601f695ad02eefd8f330dcff845
                    {/* Action Buttons */}
                    <div className="flex items-center justify-between mt-5 pt-4 border-t border-gray-700">
                      <motion.button
                        className="inline-flex items-center text-indigo-300 hover:text-indigo-200 text-sm font-medium"
<<<<<<< HEAD
                        onClick={() =>
                          setActiveProject(
                            activeProject === index ? null : index
                          )
                        }
                        whileHover={{ x: 3 }}
                        whileTap={{ scale: 0.97 }}
                      >
                        {activeProject === index
                          ? "Hide Details"
                          : "View Details"}
                        <FaArrowRight
                          className={`ml-2 transition-transform duration-300 ${
                            activeProject === index ? "rotate-90" : ""
                          }`}
                          size={12}
                        />
                      </motion.button>

=======
                        onClick={() => setActiveProject(activeProject === index ? null : index)}
                        whileHover={{ x: 3 }}
                        whileTap={{ scale: 0.97 }}
                      >
                        {activeProject === index ? 'Hide Details' : 'View Details'}
                        <FaArrowRight className={`ml-2 transition-transform duration-300 ${activeProject === index ? 'rotate-90' : ''}`} size={12} />
                      </motion.button>
                      
>>>>>>> 9bde7ed3336d8601f695ad02eefd8f330dcff845
                      <motion.a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full bg-gray-700 text-white hover:bg-indigo-600 transition-colors"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <FaGithub size={16} />
                      </motion.a>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
<<<<<<< HEAD

=======
        
>>>>>>> 9bde7ed3336d8601f695ad02eefd8f330dcff845
        {/* More Projects Link - Styled to Match Navbar */}
        <motion.div
          className="mt-20 text-center relative"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Decorative Elements */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-indigo-600 rounded-full opacity-10 blur-2xl"></div>
          <div className="absolute left-1/4 top-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-purple-600 rounded-full opacity-10 blur-xl"></div>
<<<<<<< HEAD

=======
          
>>>>>>> 9bde7ed3336d8601f695ad02eefd8f330dcff845
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.a
              href="https://github.com/shaswat2031"
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center px-6 py-3 text-sm font-medium rounded-full text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 shadow-lg hover:shadow-indigo-500/30 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaGithub className="mr-2" />
              Explore More on GitHub
            </motion.a>
<<<<<<< HEAD

=======
            
>>>>>>> 9bde7ed3336d8601f695ad02eefd8f330dcff845
            <motion.a
              href="/all-projects"
              className="relative inline-flex items-center px-6 py-3 text-sm font-medium rounded-full text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 shadow-lg hover:shadow-purple-500/30 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaLaptopCode className="mr-2" />
              View All Projects
            </motion.a>
          </div>
<<<<<<< HEAD

=======
          
>>>>>>> 9bde7ed3336d8601f695ad02eefd8f330dcff845
          <p className="text-gray-400 mt-4 text-sm relative max-w-md mx-auto">
            Discover additional projects and contributions in my repositories
          </p>
        </motion.div>
      </div>
    </section>
  );
};

<<<<<<< HEAD
export default Projects;
=======
export default Projects;
>>>>>>> 9bde7ed3336d8601f695ad02eefd8f330dcff845
