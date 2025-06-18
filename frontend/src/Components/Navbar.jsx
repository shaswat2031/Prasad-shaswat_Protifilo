import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaHome,
  FaGraduationCap,
  FaLaptopCode,
  FaProjectDiagram,
  FaStar,
  FaCertificate,
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import logo from "../Assets/logops.png";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("about"); // State to track scrolling - we'll use this in UI animations later
  const [, setIsScrolling] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // Memoize navItems to prevent unnecessary re-renders
  const navItems = React.useMemo(
    () => [
      { id: "about", label: "About", icon: <FaHome size={16} /> },
      {
        id: "education",
        label: "Education",
        icon: <FaGraduationCap size={16} />,
      },
      { id: "skills", label: "Skills", icon: <FaLaptopCode size={16} /> },
      {
        id: "projects",
        label: "Projects",
        icon: <FaProjectDiagram size={16} />,
      },
      { id: "extra", label: "Extra", icon: <FaStar size={16} /> },
      {
        id: "certifications",
        label: "Certifications",
        icon: <FaCertificate size={16} />,
      },
      { id: "contact", label: "Contact", icon: <FaEnvelope size={16} /> },
    ],
    []
  );

  // Handle scroll to update active section highlighting
  useEffect(() => {
    let scrollTimer;

    const handleScroll = () => {
      // Set a flag to indicate user is scrolling
      setIsScrolling(true);

      const sections = navItems.map((item) => document.getElementById(item.id));
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      // Check if we've scrolled to the bottom of the page
      const isBottom =
        window.innerHeight + window.pageYOffset >=
        document.body.offsetHeight - 100;

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

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(scrollTimer);
    };
  }, [activeSection, navItems]);

  const handleSectionClick = (id) => {
    const element = document.getElementById(id);
    if (element) {
      // Close mobile menu if open
      setIsOpen(false);

      // Scroll to section
      window.scrollTo({
        top: element.offsetTop - 80, // Adjust for navbar height
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      {/* Fixed Top Navbar */}
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 bg-gray-900/90 backdrop-blur-md shadow-lg shadow-indigo-900/10 border-b border-gray-800"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <motion.div
              className="flex items-center"
              whileHover={{ scale: 1.05 }}
            >
              <img src={logo} alt="Logo" className="h-8 w-auto" />
              <span className="ml-2 text-xl font-bold text-white">
                Portfolio
              </span>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => (
                <motion.button
                  key={item.id}
                  onClick={() => handleSectionClick(item.id)}
                  className={`relative px-3 py-2 text-sm rounded-md transition-colors ${
                    activeSection === item.id
                      ? "text-white"
                      : "text-gray-400 hover:text-white"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="flex items-center space-x-1">
                    {item.icon}
                    <span className="ml-1">{item.label}</span>
                  </div>
                  {activeSection === item.id && (
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"
                      layoutId="navIndicator"
                    />
                  )}
                </motion.button>
              ))}
            </div>

            {/* Social Links - Desktop Only */}
            <div className="hidden md:flex items-center space-x-2">
              <motion.a
                href="https://github.com/shaswat2031"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white p-2"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaGithub size={16} />
              </motion.a>
              <motion.a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white p-2"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaLinkedin size={16} />
              </motion.a>
              <motion.a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white p-2"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaTwitter size={16} />
              </motion.a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <motion.button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-md text-gray-400 hover:text-white focus:outline-none"
                whileTap={{ scale: 0.9 }}
              >
                {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-gray-900/80 backdrop-blur-sm z-40"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Mobile Navigation Menu */}
      <motion.div
        className="fixed top-16 right-0 w-64 h-screen bg-gray-900 shadow-lg z-40 md:hidden"
        initial={{ x: "100%" }}
        animate={{ x: isOpen ? 0 : "100%" }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        <div className="p-5 space-y-4">
          {navItems.map((item) => (
            <motion.button
              key={item.id}
              onClick={() => handleSectionClick(item.id)}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                activeSection === item.id
                  ? "bg-indigo-900/30 text-white"
                  : "text-gray-400 hover:bg-gray-800 hover:text-white"
              }`}
              whileTap={{ scale: 0.95 }}
            >
              {item.icon}
              <span>{item.label}</span>
            </motion.button>
          ))}

          {/* Mobile Social Links */}
          <div className="flex justify-center space-x-5 pt-4 border-t border-gray-800">
            <motion.a
              href="https://github.com/shaswat2031"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaGithub size={20} />
            </motion.a>
            <motion.a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaLinkedin size={20} />
            </motion.a>
            <motion.a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaTwitter size={20} />
            </motion.a>
          </div>
        </div>
      </motion.div>

      {/* Spacer to prevent content from hiding behind fixed navbar */}
      <div className="h-16"></div>
    </>
  );
};

export default Navbar;
