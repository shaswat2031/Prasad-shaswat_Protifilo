import React, { useState, useEffect, lazy, Suspense } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoMenu, IoClose } from "react-icons/io5";
import { FaCoffee } from "react-icons/fa";
import { Routes, Route, useLocation } from "react-router-dom";
import confetti from "canvas-confetti";
import logo from "./Assets/logops.png";

// Regular imports for initial load
import Sidebar from "./Components/Sidefullnavbar";
import Home from "./Components/Home";

// Lazy loaded components
const Education = lazy(() => import("./Components/Education"));
const Skills = lazy(() => import("./Components/Skills"));
const Projects = lazy(() => import("./Components/Projects"));
const Extra = lazy(() => import("./Components/Extra"));
const Certifications = lazy(() => import("./Components/Certifications"));
const ContactUs = lazy(() => import("./Components/ContactUs"));
const Popup = lazy(() => import("./Components/Popup"));
const AllProjects = lazy(() => import("./pages/AllProjects"));

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [isButtonVisible, setIsButtonVisible] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const location = useLocation();

  useEffect(() => {
    // Show the loading screen for 4 seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4000);

    // Delay for button animation
    const buttonTimer = setTimeout(() => {
      setIsButtonVisible(true);
    }, 5500);

    // Track scroll progress - improved calculation
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      // Prevent division by zero and ensure progress is between 0-100
      const progress = totalHeight <= 0 ? 0 : Math.min(Math.max((window.scrollY / totalHeight) * 100, 0), 100);
      setScrollProgress(progress);
      
      // Ensure scroll events aren't blocked
      document.body.style.overflow = "auto";
    };

    window.addEventListener('scroll', handleScroll);

    // Initialize scroll position on component mount
    handleScroll();
    
    // Ensure scrolling is enabled
    document.body.style.overflow = "auto";

    return () => {
      clearTimeout(timer);
      clearTimeout(buttonTimer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const togglePopup = () => {
    setIsPopupVisible(!isPopupVisible);

    // Trigger confetti effect with better distribution and indigo/purple colors
    confetti({
      particleCount: 150,
      spread: 200,
      origin: { y: 0.6 },
      colors: ["#6366F1", "#A855F7", "#8B5CF6", "#4F46E5", "#C4B5FD"],
      shapes: ['circle', 'square'],
      ticks: 200,
      disableForReducedMotion: true
    });
  };

  const closeSidebar = () => {
    if (window.innerWidth < 768) {
      setIsSidebarOpen(false);
    }
  };

  // Loading animation variants
  const logoVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -10 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      rotate: 0,
      transition: { 
        duration: 1.2,
        ease: "easeOut",
        delay: 0.3
      }
    },
    exit: { 
      opacity: 0, 
      scale: 1.2,
      transition: { 
        duration: 0.5 
      }
    }
  };

  // Main homepage content
  const MainContent = () => (
    <>
      <Home />
      
      <Suspense fallback={
        <div className="flex justify-center items-center py-20">
          <div className="animate-pulse flex space-x-2">
            <div className="rounded-full bg-indigo-600 h-3 w-3"></div>
            <div className="rounded-full bg-purple-600 h-3 w-3"></div>
            <div className="rounded-full bg-indigo-600 h-3 w-3"></div>
          </div>
        </div>
      }>
        <Education />
        <Skills />
        <Projects />
        <Extra />
        <Certifications />
        <ContactUs />
      </Suspense>
    </>
  );

  return (
    <div className="flex">
      {/* Scroll Progress Indicator */}
      <div className="fixed top-0 left-0 w-full h-1 z-50">
        <div 
          className="h-full bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-700"
          style={{ width: `${scrollProgress}%` }}
        ></div>
      </div>

      {/* Show loading screen */}
      <AnimatePresence>
        {isLoading && (
          <motion.div 
            className="fixed inset-0 w-screen h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 z-50"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              variants={logoVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="relative"
            >
              <motion.div 
                className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-600/30 to-purple-600/30 blur-3xl"
                animate={{ 
                  rotate: [0, 180],
                  scale: [1, 1.1, 1],
                }}
                transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
              />
              
              <img
                src={logo}
                alt="Loading..."
                className="w-72 h-72 md:w-96 md:h-96 drop-shadow-2xl relative z-10"
              />
              
              <motion.div 
                className="w-full flex justify-center mt-8 relative z-10" 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.8 }}
              >
                <div className="flex space-x-2">
                  <motion.div 
                    className="w-3 h-3 rounded-full bg-indigo-600"
                    animate={{ 
                      y: [0, -10, 0],
                      opacity: [1, 0.5, 1]
                    }}
                    transition={{ 
                      repeat: Infinity, 
                      duration: 1,
                      delay: 0 
                    }}
                  />
                  <motion.div 
                    className="w-3 h-3 rounded-full bg-purple-600"
                    animate={{ 
                      y: [0, -10, 0],
                      opacity: [1, 0.5, 1]
                    }}
                    transition={{ 
                      repeat: Infinity, 
                      duration: 1,
                      delay: 0.2 
                    }}
                  />
                  <motion.div 
                    className="w-3 h-3 rounded-full bg-indigo-600"
                    animate={{ 
                      y: [0, -10, 0],
                      opacity: [1, 0.5, 1]
                    }}
                    transition={{ 
                      repeat: Infinity, 
                      duration: 1,
                      delay: 0.4 
                    }}
                  />
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main App Content */}
      {!isLoading && (
        <>
          {location.pathname === '/' && (
            <>
              {/* Mobile Sidebar Button */}
              <motion.button
                className="md:hidden fixed top-6 left-6 bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-3 rounded-full shadow-lg shadow-indigo-900/20 transition-all hover:from-indigo-700 hover:to-purple-700 focus:outline-none z-50"
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.2 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {isSidebarOpen ? <IoClose size={24} /> : <IoMenu size={24} />}
              </motion.button>

              {/* Sidebar Overlay */}
              {isSidebarOpen && (
                <motion.div
                  className="fixed inset-0 bg-gray-900 bg-opacity-70 backdrop-blur-sm z-30 md:hidden"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={closeSidebar}
                />
              )}

              {/* Sidebar (Hidden on Mobile, Animated) */}
              <motion.div
                className={`fixed top-0 left-0 h-full w-64 bg-gray-900 shadow-lg shadow-indigo-900/10 z-40 ${
                  isSidebarOpen ? "translate-x-0" : "-translate-x-full"
                } md:translate-x-0 md:block`}
                initial={{ x: -250 }}
                animate={{ x: isSidebarOpen || window.innerWidth >= 768 ? 0 : -250 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                <Sidebar closeSidebar={closeSidebar} />
              </motion.div>
            </>
          )}

          {/* Main Content with Routes */}
          <div className={`w-full ${location.pathname === '/' ? 'md:ml-64' : ''} min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900`}>
            <Routes>
              <Route path="/" element={<MainContent />} />
              <Route 
                path="/all-projects" 
                element={
                  <Suspense fallback={
                    <div className="flex justify-center items-center py-20">
                      <div className="animate-pulse flex space-x-2">
                        <div className="rounded-full bg-indigo-600 h-3 w-3"></div>
                        <div className="rounded-full bg-purple-600 h-3 w-3"></div>
                        <div className="rounded-full bg-indigo-600 h-3 w-3"></div>
                      </div>
                    </div>
                  }>
                    <AllProjects />
                  </Suspense>
                } 
              />
            </Routes>

            {/* Animated Floating Button - Only on homepage */}
            <AnimatePresence>
              {isButtonVisible && location.pathname === '/' && (
                <motion.button
                  onClick={togglePopup}
                  className="fixed bottom-5 right-5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 px-6 rounded-full shadow-lg shadow-indigo-900/20 hover:from-indigo-700 hover:to-purple-700 transition-all focus:outline-none flex items-center space-x-2 backdrop-blur-sm"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 50 }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  whileHover={{ 
                    scale: 1.05, 
                    boxShadow: "0 10px 25px -5px rgba(99, 102, 241, 0.4), 0 10px 10px -5px rgba(139, 92, 246, 0.3)" 
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaCoffee className="text-white" size={20} />
                  <span>Buy Me a Coffee</span>
                </motion.button>
              )}
            </AnimatePresence>

            {/* Popup Component */}
            <AnimatePresence>
              {isPopupVisible && (
                <Suspense fallback={<div className="fixed inset-0 bg-gray-900 bg-opacity-80 backdrop-blur-sm z-50" />}>
                  <Popup togglePopup={togglePopup} />
                </Suspense>
              )}
            </AnimatePresence>
          </div>
        </>
      )}
    </div>
  );
}

export default App;