import React, { useState, useEffect, useRef } from "react";
import {
  FaSearch,
  FaGithub,
  FaExternalLinkAlt,
  FaFilter,
  FaTags,
} from "react-icons/fa";
import { IoArrowBack } from "react-icons/io5";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import universityonnect from "../Assets/university-connect.png";
import Protifilo from "../Assets/protifilo.png";
import Inventory from "../Assets/image.png";
import Githubprofile from "../Assets/githubprogile.png";
import ChatEcommerce from "../Assets/chatecommerce.png";
import built from "../Assets/builtwithme.jpg";
import sloty from "../Assets/sloty.png";

function AllProjects() {
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
          "A student-driven platform enabling users to create profiles, showcase skills, and connect for collaboration. Features include real-time messaging, project collaboration tools, and skill endorsements to help students build their professional network within the university ecosystem.",
        challenges:
          "Implementing real-time communication and ensuring data privacy while maintaining an intuitive user experience.",
        techStack:
          "MERN Stack with Socket.io for real-time features and JWT for authentication",
        image: universityonnect,
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
        description:
          "A dynamic personal portfolio showcasing my projects, skills, and professional journey. Built with React and Tailwind CSS, featuring smooth animations, responsive design, and interactive elements to create an engaging user experience.",
        challenges:
          "Creating a performance-optimized site with complex animations while maintaining accessibility standards.",
        techStack:
          "React, Tailwind CSS, Framer Motion for animations, and React Router for navigation",
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
          "A comprehensive inventory management solution designed for small businesses. Features include product tracking, sales analytics, user authentication, automated billing, and low-stock alerts to streamline business operations.",
        challenges:
          "Building a scalable database structure while ensuring the system remained intuitive for non-technical users.",
        techStack:
          "Flask backend with Python, MongoDB for database, and a responsive frontend with Tailwind CSS",
        image: Inventory,
        tags: ["Flask", "Python", "MongoDB", "HTML", "tailwind CSS", "jinja2"],
        githubLink:
          "https://github.com/shaswat2031/small-busniess-invenrtry-management",
        date: "2024-11-25",
        featured: true,
      },
      {
        id: 4,
        title: "Sloty - Appointment Booking System",
        description:
          "A comprehensive appointment booking platform for service-based businesses such as salons, clinics, and consultancies. Features include real-time availability, automated reminders, payment integration, and business analytics to optimize scheduling and reduce no-shows.",
        challenges:
          "Implementing a complex booking algorithm that handles timezone differences and prevents double bookings.",
        techStack:
          "MERN stack with Twilio API for notifications and custom calendar implementation",
        image: sloty,
        tags: [
          "React",
          "Node.js",
          "Express",
          "MongoDB",
          "Tailwind CSS",
          "Twilio",
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
        title: "BuiltItWithMe - Website Creation SaaS",
        description:
          "A Software as a Service (SaaS) platform that allows clients to request custom website development with an intuitive project management system. Features include requirement specification tools, milestone tracking, payment scheduling, and continuous deployment integration.",
        challenges:
          "Creating a scalable project management system that accommodates various client needs while maintaining a streamlined workflow.",
        techStack:
          "React frontend with Node.js backend, MongoDB for data storage, and Stripe for payment processing",
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
      {
        id: 6,
        title: "GitHub Profile Comparison Tool",
        description:
          "An AI-powered analytics platform that compares GitHub profiles to provide meaningful insights. The tool analyzes language preferences, contribution patterns, repository quality, and coding habits to help developers understand their strengths and areas for improvement.",
        challenges:
          "Integrating the Deepseek AI model with GitHub API data to generate meaningful comparative analysis while respecting API rate limits.",
        techStack:
          "Next.js for frontend and server components, Deepseek R1 AI model for analysis, and GitHub API for data collection",
        image: Githubprofile,
        tags: [
          "Next.js",
          "Tailwind CSS",
          "Deepseek R1 model API",
          "GitHub API",
        ],
        githubLink: "https://github.com/shaswat2031/github-profile-compar",
        liveLink: "https://github-profile-compar-vmeq.vercel.app/",
        date: "2025-06-22",
        featured: false,
      },
      {
        id: 7,
        title: "E-commerce Chatbot Application",
        description:
          "A modern Flask-based e-commerce platform featuring an intelligent chatbot interface, comprehensive product management, user authentication, shopping cart functionality, and administrative tools. The AI-powered chatbot assists users in discovering products via natural language conversations for a seamless shopping experience.",
        challenges:
          "Integrating natural language understanding with product search, managing user sessions securely, and building a responsive, scalable shopping platform with a smooth chatbot interaction.",
        techStack:
          "Flask for backend, MongoDB for database, Flask-Login for authentication, Tailwind CSS for UI, and Python for chatbot logic.",
        image: ChatEcommerce, // Replace with your image import variable
        tags: [
          "Flask",
          "MongoDB",
          "Tailwind CSS",
          "Flask-Login",
          "Python",
          "Chatbot",
        ],
        githubLink: "https://github.com/shaswat2031/ChatEcommerce",
        liveLink: "", // Add deployment link if available
        date: "2025-05-20",
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

  const handleKeyDown = (e, projectId) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setActiveProject(activeProject === projectId ? null : projectId);
    }
  };

  return (
    <div className="bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 min-h-screen py-12 text-gray-200">
      {/* Back to Home Button */}
      <div className="container mx-auto px-4 mb-8">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
          aria-label="Back to homepage"
        >
          <IoArrowBack /> Back to Home
        </Link>
      </div>

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <div className="relative mb-6">
            <div className="absolute inset-0 bg-blue-500 blur-3xl opacity-10 rounded-full transform -translate-y-1/2"></div>
            <h1 className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent relative z-10">
              Project Gallery
            </h1>
          </div>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg">
            Explore my collection of projects that showcase my skills and
            experience in web development. Each project represents a unique
            challenge and learning opportunity that has helped shape my journey
            as a developer.
          </p>

          <div className="flex flex-wrap justify-center gap-3 mt-6">
            <div className="bg-gray-800/50 backdrop-blur-sm px-4 py-2 rounded-full flex items-center gap-2 border border-gray-700/50">
              <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></span>
              <span className="text-gray-300 text-sm">
                {filteredProjects.length} Projects
              </span>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm px-4 py-2 rounded-full flex items-center gap-2 border border-gray-700/50">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              <span className="text-gray-300 text-sm">
                {projects.filter((p) => p.featured).length} Featured
              </span>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm px-4 py-2 rounded-full flex items-center gap-2 border border-gray-700/50">
              <span className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></span>
              <span className="text-gray-300 text-sm">
                {allTags.length} Technologies
              </span>
            </div>
          </div>
        </motion.div>

        {/* Search & Filter Section - Enhanced with glass morphism */}
        <div className="mb-10 bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 max-w-4xl mx-auto shadow-lg">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <input
                type="text"
                placeholder="Search projects..."
                className="w-full px-4 py-3 rounded-lg border border-gray-700/70 focus:outline-none focus:ring-2 focus:ring-blue-500 pl-10 bg-gray-800/80 text-gray-200 shadow-sm"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                aria-label="Search projects"
              />
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
            </div>

            <div className="relative" ref={filterRef}>
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-2 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg hover:bg-gray-700 shadow-sm transition-colors text-gray-200"
                aria-expanded={showFilters}
                aria-haspopup="true"
                aria-label="Filter projects"
              >
                <FaFilter /> Filters
              </button>

              <AnimatePresence>
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
                                ? "bg-blue-600/90 text-gray-100"
                                : "bg-gray-700/70 text-gray-300 hover:bg-gray-600/70"
                            }`}
                            aria-label={`Filter by ${tag}`}
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
                        aria-label="Sort projects"
                      >
                        <option value="newest">Newest First</option>
                        <option value="oldest">Oldest First</option>
                        <option value="nameAsc">Name (A-Z)</option>
                        <option value="nameDesc">Name (Z-A)</option>
                      </select>

                      <button
                        onClick={resetFilters}
                        className="w-full mt-4 text-sm text-blue-400 hover:text-blue-300 flex justify-center items-center gap-1"
                        aria-label="Reset filters"
                      >
                        Reset Filters
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Active filters section */}
          {(searchQuery || selectedTag) && (
            <div className="flex flex-wrap items-center gap-2 mt-4 text-sm">
              <span className="text-gray-400">Active filters:</span>
              {searchQuery && (
                <span className="bg-gray-700 text-blue-300 px-3 py-1 rounded-full flex items-center gap-1">
                  Search: {searchQuery}
                  <button
                    onClick={() => setSearchQuery("")}
                    className="ml-1 hover:text-blue-200"
                    aria-label="Clear search"
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
                    aria-label="Clear tag filter"
                  >
                    ×
                  </button>
                </span>
              )}
            </div>
          )}

          {/* Popular tags section */}
          <div className="mt-4 pt-4 border-t border-gray-700/30">
            <h3 className="text-sm text-gray-400 mb-2">Popular tags:</h3>
            <div className="flex flex-wrap gap-2">
              {allTags.slice(0, 8).map((tag) => (
                <button
                  key={tag}
                  onClick={() => setSelectedTag(selectedTag === tag ? "" : tag)}
                  className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                    selectedTag === tag
                      ? "bg-blue-600/90 text-gray-100"
                      : "bg-gray-700/70 text-gray-300 hover:bg-gray-600/70"
                  }`}
                  aria-label={`Filter by ${tag}`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Enhanced Project Grid */}
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
                  className={`bg-gray-800/40 backdrop-blur-sm rounded-xl overflow-hidden shadow-xl hover:shadow-blue-900/20 transition-all border border-gray-700/50 ${
                    project.featured ? "ring-2 ring-blue-500/50" : ""
                  }`}
                  onClick={() =>
                    setActiveProject(
                      activeProject === project.id ? null : project.id
                    )
                  }
                  onKeyDown={(e) => handleKeyDown(e, project.id)}
                  tabIndex="0"
                  role="button"
                  aria-expanded={activeProject === project.id}
                  aria-label={`Project: ${project.title}. Click to ${
                    activeProject === project.id ? "collapse" : "expand"
                  } details`}
                >
                  <div className="relative">
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={project.image}
                        alt={`Screenshot of ${project.title} project`}
                        className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                        loading="lazy"
                      />
                    </div>

                    {project.featured && (
                      <div className="absolute top-3 right-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg shadow-blue-900/20">
                        Featured
                      </div>
                    )}

                    {/* Project links overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity flex items-end">
                      <div className="p-5 w-full">
                        <div className="flex flex-wrap justify-center gap-2">
                          <a
                            href={project.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="inline-flex items-center gap-2 bg-gray-900/90 backdrop-blur-sm text-gray-200 px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors border border-gray-700/50 shadow-lg"
                            aria-label={`View ${project.title} on GitHub`}
                          >
                            <FaGithub /> GitHub
                          </a>
                          {project.liveLink && (
                            <a
                              href={project.liveLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
                              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-700 to-indigo-700 text-white px-4 py-2 rounded-lg hover:from-blue-600 hover:to-indigo-600 transition-all shadow-lg"
                              aria-label={`View ${project.title} live demo`}
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
                      <span className="text-xs text-gray-400 bg-gray-700/50 px-2 py-1 rounded-md">
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
                          className="bg-gray-700/70 text-blue-300 text-xs font-medium px-2.5 py-0.5 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 4 && (
                        <span className="bg-gray-700/70 text-gray-300 text-xs font-medium px-2.5 py-0.5 rounded-full">
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
                          <div className="border-t border-gray-700/50 pt-4 mt-2 space-y-4">
                            <div>
                              <h4 className="text-sm font-semibold text-gray-300 mb-1">
                                Description:
                              </h4>
                              <p className="text-gray-400">
                                {project.description}
                              </p>
                            </div>

                            <div>
                              <h4 className="text-sm font-semibold text-gray-300 mb-1">
                                Challenges:
                              </h4>
                              <p className="text-gray-400">
                                {project.challenges}
                              </p>
                            </div>

                            <div>
                              <h4 className="text-sm font-semibold text-gray-300 mb-1">
                                Tech Stack:
                              </h4>
                              <p className="text-gray-400">
                                {project.techStack}
                              </p>
                            </div>

                            <div>
                              <h4 className="text-sm font-semibold text-gray-300 mb-1">
                                All Technologies:
                              </h4>
                              <div className="flex flex-wrap gap-2 mb-2">
                                {project.tags.map((tag, index) => (
                                  <span
                                    key={index}
                                    className="bg-gray-700/70 text-blue-300 text-xs font-medium px-2.5 py-0.5 rounded-full"
                                  >
                                    {tag}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
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
                      aria-label={`${
                        activeProject === project.id ? "Show less" : "Show more"
                      } about ${project.title}`}
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
                <div className="bg-gray-800/40 backdrop-blur-sm rounded-lg p-8 shadow-xl max-w-md mx-auto border border-gray-700/50">
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
                    aria-label="Reset all filters"
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

        {/* Footer section with stats */}
        <div className="mt-20 pt-10 border-t border-gray-800/50 text-center">
          <p className="text-gray-400 mb-6">
            Thank you for exploring my projects!
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white rounded-lg shadow-lg transition-all"
          >
            <IoArrowBack /> Back to Portfolio
          </Link>

          <div className="flex justify-center gap-8 mt-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400">
                {projects.length}
              </div>
              <div className="text-gray-500 text-sm">Total Projects</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400">
                {allTags.length}
              </div>
              <div className="text-gray-500 text-sm">Technologies</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-indigo-400">
                {projects.filter((p) => p.featured).length}
              </div>
              <div className="text-gray-500 text-sm">Featured</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AllProjects;
