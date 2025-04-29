<<<<<<< HEAD
import React, { useState, useEffect, useRef } from "react";
import {
  FaSearch,
  FaGithub,
  FaExternalLinkAlt,
  FaFilter,
  FaTags,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import universtyonnect from "../Assets/university-connect.png";
import Protifilo from "../Assets/protifilo.png";
import Inventory from "../Assets/image.png";
import built from "../Assets/builtwithme.jpg";
import sloty from "../Assets/sloty.png";

const AllProjects = () => {
  const [projects, setProjects] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [selectedTag, setSelectedTag] = useState("");
  const [allTags, setAllTags] = useState([]);
  const [showFilters, setShowFilters] = useState(false);
  const [sortOption, setSortOption] = useState("newest");
  const [activeProject, setActiveProject] = useState(null);

  const filterRef = useRef(null);

  useEffect(() => {
    const dummyProjects = [
      {
        id: 1,
        title: "University Connect",
        description:
          "A student-driven platform enabling users to create profiles, showcase skills, and connect for collaboration.",
        image: universtyonnect,
        tags: [
          "React",
          "Node.js",
          "MongoDB",
          "Express",
          "Tailwind CSS",
          "Socket.io",
          "JWT",
        ],
        githubLink:
          "https://github.com/shaswat2031/Minor-Project-University-Connect",
        date: "2025-03-15",
        featured: true,
      },
      {
        id: 2,
        title: "Portfolio Website",
        description: "Personal portfolio built with React and Tailwind CSS",
        image: Protifilo,
        tags: [
          "React",
          "Tailwind CSS",
          "JavaScript",
          "React Router",
          "Framer Motion",
          "reactIcon",
        ],
        githubLink: "https://github.com/shaswat2031/Prasad-shaswat_Protifilo",
        liveLink: "https://prasadshaswat.tech",
        date: "2024-08-20",
        featured: true,
      },
      {
        id: 3,
        title: "Inventory Management System",
        description:
          "A personal project focused on authentication, inventory & sales management, and billing.",
        image: Inventory,
        tags: ["Flask", "Python", "MongoDB", "HTML", "tailwind CSS", "jinja2"],
        githubLink:
          "https://github.com/shaswat2031/small-busniess-invenrtry-management",
        date: "2024-11-25",
        featured: true,
      },
      {
        id: 4,
        title: "Sloty",
        description:
          "A web application for booking slots for various services, built with React and Node.js.",
        image: sloty,
        tags: [
          "React",
          "Node.js",
          "Express",
          "MongoDB",
          "Tailwind CSS",
          "Tiwlo",
          "JWT",
          "Socket.io",
        ],
        githubLink:
          "https://github.com/shaswat2031/Appointment-Booking-System-for-Salons-Clinics",
        liveLink: "",
        date: "2025-03-31",
        featured: false,
      },
      {
        id: 5,
        title: "Builtitwithme",
        description:
          " A Saas where i create Websites for you, built with React and Node.js.",
        image: built,
        tags: [
          "React",
          "Node.js",
          "Express",
          "MongoDB",
          "Tailwind CSS",
          "payment-gateway",
          "Startup",
        ],
        githubLink: "https://github.com/shaswat2031/BuiltItWithme",
        liveLink:
          "https://vercel.com/prasadshaswat123s-projects/built-it-withme",
        date: "2025-04-01",
        featured: false,
      },
    ];

    setProjects(dummyProjects);
    setFilteredProjects(dummyProjects);

    const tags = [...new Set(dummyProjects.flatMap((project) => project.tags))];
    setAllTags(tags);
  }, []);

  useEffect(() => {
    let result = projects;

    if (searchQuery) {
      result = result.filter(
        (project) =>
          project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          project.description
            .toLowerCase()
            .includes(searchQuery.toLowerCase()) ||
          project.tags.some((tag) =>
            tag.toLowerCase().includes(searchQuery.toLowerCase())
          )
      );
    }

    if (selectedTag) {
      result = result.filter((project) => project.tags.includes(selectedTag));
    }

    switch (sortOption) {
      case "newest":
        result = [...result].sort(
          (a, b) => new Date(b.date) - new Date(a.date)
        );
        break;
      case "oldest":
        result = [...result].sort(
          (a, b) => new Date(a.date) - new Date(b.date)
        );
        break;
      case "nameAsc":
        result = [...result].sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "nameDesc":
        result = [...result].sort((a, b) => b.title.localeCompare(a.title));
        break;
      default:
        break;
    }

    setFilteredProjects(result);
  }, [searchQuery, projects, selectedTag, sortOption]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (filterRef.current && !filterRef.current.contains(event.target)) {
        setShowFilters(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [filterRef]);

  const resetFilters = () => {
    setSearchQuery("");
    setSelectedTag("");
    setSortOption("newest");
  };

  return (
    <div className="bg-gray-900 min-h-screen py-12 text-gray-200">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            My Projects
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explore my collection of projects that showcase my skills and
            experience in web development.
          </p>
        </motion.div>

        <div className="mb-10">
          <div className="flex flex-col md:flex-row gap-4 max-w-4xl mx-auto">
            <div className="flex-1 relative">
              <input
                type="text"
                placeholder="Search projects..."
                className="w-full px-4 py-3 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 pl-10 bg-gray-800 text-gray-200 shadow-sm"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
            </div>

            <div className="relative" ref={filterRef}>
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-2 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg hover:bg-gray-700 shadow-sm transition-colors text-gray-200"
              >
                <FaFilter /> Filters
              </button>

              {showFilters && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute right-0 mt-2 w-64 bg-gray-800 rounded-lg shadow-lg z-10 border border-gray-700"
                >
                  <div className="p-4">
                    <h3 className="font-medium text-gray-300 mb-3 flex items-center gap-2">
                      <FaTags size={14} /> Filter by Tag
                    </h3>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {allTags.map((tag) => (
                        <button
                          key={tag}
                          onClick={() =>
                            setSelectedTag(selectedTag === tag ? "" : tag)
                          }
                          className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                            selectedTag === tag
                              ? "bg-blue-600 text-gray-200"
                              : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                          }`}
                        >
                          {tag}
                        </button>
                      ))}
                    </div>

                    <h3 className="font-medium text-gray-300 mb-3 mt-4">
                      Sort By
                    </h3>
                    <select
                      value={sortOption}
                      onChange={(e) => setSortOption(e.target.value)}
                      className="w-full p-2 border border-gray-700 rounded-md text-sm bg-gray-700 text-gray-300"
                    >
                      <option value="newest">Newest First</option>
                      <option value="oldest">Oldest First</option>
                      <option value="nameAsc">Name (A-Z)</option>
                      <option value="nameDesc">Name (Z-A)</option>
                    </select>

                    <button
                      onClick={resetFilters}
                      className="w-full mt-4 text-sm text-blue-400 hover:text-blue-300 flex justify-center items-center gap-1"
                    >
                      Reset Filters
                    </button>
                  </div>
                </motion.div>
              )}
            </div>
          </div>

          {(searchQuery || selectedTag) && (
            <div className="flex items-center gap-2 max-w-4xl mx-auto mt-4 text-sm">
              <span className="text-gray-400">Active filters:</span>
              {searchQuery && (
                <span className="bg-gray-700 text-blue-300 px-3 py-1 rounded-full flex items-center gap-1">
                  Search: {searchQuery}
                  <button
                    onClick={() => setSearchQuery("")}
                    className="ml-1 hover:text-blue-200"
                  >
                    ×
                  </button>
                </span>
              )}
              {selectedTag && (
                <span className="bg-gray-700 text-blue-300 px-3 py-1 rounded-full flex items-center gap-1">
                  Tag: {selectedTag}
                  <button
                    onClick={() => setSelectedTag("")}
                    className="ml-1 hover:text-blue-200"
                  >
                    ×
                  </button>
                </span>
              )}
            </div>
          )}
        </div>

        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  whileHover={{ y: -8, transition: { duration: 0.2 } }}
                  className={`bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all border border-gray-700 ${
                    project.featured ? "border-2 border-blue-500" : ""
                  }`}
                  onClick={() =>
                    setActiveProject(
                      activeProject === project.id ? null : project.id
                    )
                  }
                >
                  <div className="relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-52 object-cover"
                    />
                    {project.featured && (
                      <div className="absolute top-3 right-3 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                        Featured
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 hover:opacity-100 transition-opacity flex items-end">
                      <div className="p-5 w-full">
                        <div className="flex justify-between">
                          <a
                            href={project.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="inline-flex items-center gap-2 bg-gray-900 text-gray-200 px-4 py-2 rounded hover:bg-gray-800 transition-colors border border-gray-700"
                          >
                            <FaGithub /> GitHub
                          </a>
                          {project.liveLink && (
                            <a
                              href={project.liveLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
                              className="inline-flex items-center gap-2 bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
                            >
                              <FaExternalLinkAlt /> Live Demo
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="text-xl font-bold text-gray-200">
                        {project.title}
                      </h3>
                      <span className="text-xs text-gray-400">
                        {new Date(project.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "short",
                        })}
                      </span>
                    </div>

                    <p className="text-gray-400 mb-4 line-clamp-2">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.slice(0, 4).map((tag, index) => (
                        <span
                          key={index}
                          className="bg-gray-700 text-blue-300 text-xs font-medium px-2.5 py-0.5 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 4 && (
                        <span className="bg-gray-700 text-gray-300 text-xs font-medium px-2.5 py-0.5 rounded-full">
                          +{project.tags.length - 4}
                        </span>
                      )}
                    </div>

                    <AnimatePresence>
                      {activeProject === project.id && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <p className="text-gray-400 mb-4 border-t border-gray-700 pt-4 mt-2">
                            {project.description}
                          </p>
                          <div className="flex flex-wrap gap-2 mb-2">
                            {project.tags.map((tag, index) => (
                              <span
                                key={index}
                                className="bg-gray-700 text-blue-300 text-xs font-medium px-2.5 py-0.5 rounded-full"
=======
import { motion } from 'framer-motion';
import React, { useState, useEffect } from 'react';
import { FaExternalLinkAlt, FaGithub, FaCalendarAlt, FaCode, FaTools, FaArrowRight, FaStar, FaLaptopCode, FaFire, FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import universityConnectImage from '../Assets/university-connect.png';
import inventoryImage from '../Assets/image.png';
import Builtwithme from '/workspaces/Prasad-shaswat_Protifilo/frontend/src/Assets/builtwithme.jpg';
import ecommerceImage from '../Assets/Ecommerce.png';

// Import the projects array from Projects component
import { projects } from '../Components/Projects';

// Additional projects for the all-projects page
const additionalProjects = [
  
  {
    title: "Built-It-Wit-hMe",
    description: "Get your website built with me.",
    longDescription:
      "I will build your website with the latest technologies and frameworks, just for you. 'Protifilo' is a responsive and interactive portfolio with animations, dark mode, and mobile-friendly design built using React and Tailwind CSS.",
    date: "April 2025",
    githubLink: "https://github.com/shaswat2031/BuiltItWithme",
    liveLink: "https://built-it-withme.vercel.app/",
    image: Builtwithme, // assuming this is imported elsewhere
    alignment: "right",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion", "Responsive Design"],
    highlight: true,
    highlights: [
      {
        icon: "💰",
        title: "Affordable Pricing",
        description: "Premium quality without breaking the bank",
      },
      {
        icon: "⚡",
        title: "3–4 Day Delivery",
        description: "Quick turnaround to get you online fast",
      },
      {
        icon: "🎨",
        title: "Custom Design & Code",
        description: "Tailored to match your personal brand",
      },
      {
        icon: "🚀",
        title: "FREE Vercel Deployment",
        description: "Professional hosting included",
      },
      {
        icon: "🌟",
        title: "Perfect for Creators",
        description: "Ideal for freelancers & small businesses",
      },
    ],
    color: "from-blue-600 to-cyan-600",
  }
];

// Combine all projects
const allProjects = [...projects, ...additionalProjects];

const AllProjects = () => {
  const [activeProject, setActiveProject] = useState(null);
  const [filterTag, setFilterTag] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  // Extract all unique tags from projects
  const allTags = ['All', ...new Set(allProjects.flatMap(project => project.tags))];

  // Filter projects based on selected tag and search query
  const filteredProjects = allProjects.filter(project => {
    const matchesTag = filterTag === 'All' || project.tags.includes(filterTag);
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          project.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesTag && matchesSearch;
  });

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
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
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden pt-10">
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
      
      <div className="max-w-6xl mx-auto px-4 md:px-8 relative z-10 pb-20">
        {/* Back to Home Link */}
        <div className="mb-8">
          <Link to="/" className="inline-flex items-center text-indigo-400 hover:text-indigo-300 transition-colors">
            <FaArrowLeft className="mr-2" size={14} />
            <span>Back to Home</span>
          </Link>
        </div>

        {/* Page Header */}
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
                <FaLaptopCode />
              </motion.div>
            </div>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-3">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">
              Project Portfolio
            </span>
          </h1>
          <div className="h-0.5 w-24 mx-auto bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mb-4"></div>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm">
            A comprehensive collection of my development work, showcasing a range of technologies and problem-solving approaches.
          </p>
        </motion.div>

        {/* Search and Filter Controls */}
        <div className="mb-10 flex flex-col md:flex-row gap-4 items-center justify-between">
          {/* Search Bar */}
          <div className="relative w-full md:w-1/3">
            <input
              type="text"
              placeholder="Search projects..."
              className="w-full py-2 px-4 pl-10 rounded-lg bg-gray-800 bg-opacity-50 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-gray-300 placeholder-gray-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <FaCode className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={16} />
          </div>
          
          {/* Tag Filter */}
          <div className="flex flex-wrap gap-2 justify-center md:justify-end">
            {allTags.map((tag, index) => (
              <motion.button
                key={index}
                className={`px-3 py-1 text-xs font-medium rounded-full transition-colors ${
                  filterTag === tag
                    ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md'
                    : 'bg-gray-800 text-gray-400 border border-gray-700 hover:bg-gray-700'
                }`}
                onClick={() => setFilterTag(tag)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {tag}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={index}
                className="bg-gray-800 bg-opacity-60 backdrop-blur-sm rounded-xl overflow-hidden border-t-2 border-indigo-500 shadow-xl hover:shadow-indigo-900/20 transition-all duration-300"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-tr ${project.color} opacity-20 mix-blend-overlay z-10`}></div>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Project Date Badge */}
                  <div className="absolute top-2 left-2 bg-gray-900 bg-opacity-70 backdrop-blur-sm px-2 py-1 rounded text-xs font-medium text-gray-300 flex items-center">
                    <FaCalendarAlt className="mr-1" size={10} />
                    {project.date}
                  </div>
                  
                  {/* Featured Badge */}
                  {project.highlight && (
                    <div className="absolute top-2 right-2 z-30">
                      <span className="inline-flex items-center px-2 py-1 rounded-full bg-indigo-900/60 backdrop-blur-sm text-indigo-200 text-xs border border-indigo-700/50">
                        <FaFire className="mr-1 text-amber-500" size={10} />
                        Featured
                      </span>
                    </div>
                  )}
                </div>
                
                {/* Project Content */}
                <div className="p-5">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.slice(0, 3).map((tag, i) => (
                      <span 
                        key={i} 
                        className="px-2 py-0.5 text-xs font-medium bg-gray-700/80 text-indigo-300 rounded-full border border-gray-600"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="px-2 py-0.5 text-xs font-medium bg-gray-700/80 text-gray-400 rounded-full border border-gray-600">
                        +{project.tags.length - 3}
                      </span>
                    )}
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex items-center justify-between pt-3 border-t border-gray-700">
                    <motion.button
                      className="inline-flex items-center text-indigo-300 hover:text-indigo-200 text-xs font-medium"
                      onClick={() => setActiveProject(activeProject === index ? null : index)}
                      whileHover={{ x: 3 }}
                      whileTap={{ scale: 0.97 }}
                    >
                      View Details
                      <FaArrowRight className="ml-1.5" size={10} />
                    </motion.button>
                    
                    <div className="flex gap-2">
                      {project.liveLink && (
                        <motion.a
                          href={project.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-full bg-gray-700 text-white hover:bg-green-600 transition-colors"
                          whileHover={{ scale: 1.1, rotate: -5 }}
                          whileTap={{ scale: 0.9 }}
                          title="Live Demo"
                        >
                          <FaExternalLinkAlt size={12} />
                        </motion.a>
                      )}
                      <motion.a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full bg-gray-700 text-white hover:bg-indigo-600 transition-colors"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        whileTap={{ scale: 0.9 }}
                        title="View Code"
                      >
                        <FaGithub size={14} />
                      </motion.a>
                    </div>
                  </div>
                </div>
                
                {/* Expanded Project Details Modal */}
                {activeProject === index && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 bg-black bg-opacity-70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                    onClick={() => setActiveProject(null)}
                  >
                    <motion.div
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0.9, opacity: 0 }}
                      className="bg-gray-900 rounded-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
                      onClick={(e) => e.stopPropagation()}
                    >
                      {/* Project Image Header */}
                      <div className="relative h-56 md:h-64">
                        <img 
                          src={project.image} 
                          alt={project.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
                        
                        {/* Project Title Overlay */}
                        <div className="absolute bottom-0 left-0 right-0 p-6">
                          <div className="flex items-center text-indigo-300 text-sm mb-2">
                            <FaCalendarAlt className="mr-2" size={12} />
                            <span>{project.date}</span>
                          </div>
                          <h2 className="text-2xl md:text-3xl font-bold text-white">{project.title}</h2>
                        </div>
                        
                        {/* Close Button */}
                        <button 
                          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gray-900 bg-opacity-50 text-white flex items-center justify-center hover:bg-opacity-70"
                          onClick={() => setActiveProject(null)}
                        >
                          ✕
                        </button>
                      </div>
                      
                      <div className="p-6">
                        {/* Description */}
                        <div className="mb-6">
                          <h3 className="text-lg font-semibold text-white mb-2">Project Overview</h3>
                          <p className="text-gray-300">{project.longDescription}</p>
                        </div>
                        
                        {/* Tags Section */}
                        <div className="mb-6">
                          <h3 className="text-lg font-semibold text-white mb-2">Technologies</h3>
                          <div className="flex flex-wrap gap-2">
                            {project.tags.map((tag, i) => (
                              <span 
                                key={i} 
                                className="px-3 py-1 text-sm font-medium bg-gray-800 text-indigo-300 rounded-full border border-gray-700"
>>>>>>> 9bde7ed3336d8601f695ad02eefd8f330dcff845
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
<<<<<<< HEAD
                        </motion.div>
                      )}
                    </AnimatePresence>

                    <button
                      className="text-blue-400 hover:text-blue-300 text-sm flex items-center gap-1 mt-2"
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveProject(
                          activeProject === project.id ? null : project.id
                        );
                      }}
                    >
                      {activeProject === project.id ? "Show less" : "Show more"}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className={`h-4 w-4 transition-transform ${
                          activeProject === project.id ? "rotate-180" : ""
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                  </div>
                </motion.div>
              ))
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="col-span-full text-center py-16"
              >
                <div className="bg-gray-800 rounded-lg p-8 shadow-md max-w-md mx-auto border border-gray-700">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-16 w-16 text-gray-600 mx-auto mb-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <h3 className="text-xl font-semibold text-gray-300 mb-2">
                    No projects found
                  </h3>
                  <p className="text-gray-400 mb-4">
                    No projects match your current search criteria. Try
                    adjusting your filters.
                  </p>
                  <button
                    onClick={resetFilters}
                    className="text-blue-400 hover:text-blue-300 font-medium flex items-center gap-2 mx-auto"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                      />
                    </svg>
                    Reset Filters
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
=======
                        </div>
                        
                        {/* Features Section */}
                        <div className="mb-6">
                          <h3 className="text-lg font-semibold text-white mb-2">Key Features</h3>
                          <ul className="grid grid-cols-1 gap-2">
                            {project.features.map((feature, i) => (
                              <li key={i} className="flex items-start">
                                <span className="text-indigo-400 mr-2 mt-1">•</span>
                                <span className="text-gray-300">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        {/* Action Button */}
                        <div className="flex justify-end gap-4 pt-4 border-t border-gray-700">
                          {project.liveLink && (
                            <motion.a
                              href={project.liveLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="px-5 py-2.5 bg-gradient-to-r from-green-600 to-teal-600 text-white rounded-lg font-medium hover:from-green-700 hover:to-teal-700 transition-colors flex items-center"
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              <FaExternalLinkAlt className="mr-2" size={14} />
                              View Live Demo
                            </motion.a>
                          )}
                          <motion.a
                            href={project.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-5 py-2.5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg font-medium hover:from-indigo-700 hover:to-purple-700 transition-colors flex items-center"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <FaGithub className="mr-2" size={16} />
                            View on GitHub
                          </motion.a>
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <div className="text-center py-20">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-block mb-5"
            >
              <div className="w-16 h-16 mx-auto bg-gray-800 rounded-xl flex items-center justify-center border-2 border-gray-700 text-gray-500">
                <FaLaptopCode size={30} />
              </div>
            </motion.div>
            <h3 className="text-xl font-bold text-gray-300 mb-2">No Projects Found</h3>
            <p className="text-gray-500">
              Try adjusting your search or filter to find what you're looking for.
            </p>
            <motion.button
              className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition-colors"
              onClick={() => { setSearchQuery(''); setFilterTag('All'); }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Reset Filters
            </motion.button>
          </div>
        )}
        
        {/* Footer Navigation */}
        <div className="mt-16 text-center">
          <Link
            to="/"
            className="inline-flex items-center px-6 py-3 text-sm font-medium rounded-full text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 shadow-lg hover:shadow-indigo-500/30 transition-all duration-300"
          >
            <FaArrowLeft className="mr-2" />
            Return to Portfolio
          </Link>
        </div>
>>>>>>> 9bde7ed3336d8601f695ad02eefd8f330dcff845
      </div>
    </div>
  );
};

<<<<<<< HEAD
export default AllProjects;
=======
export default AllProjects;
>>>>>>> 9bde7ed3336d8601f695ad02eefd8f330dcff845
