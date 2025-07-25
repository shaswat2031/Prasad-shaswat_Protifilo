import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaCoffee } from "react-icons/fa";
import { Routes, Route, useLocation } from "react-router-dom";
import confetti from "canvas-confetti";
import logo from "./Assets/logops.png";

// Regular imports for all components instead of lazy loading
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Education from "./Components/Education";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Extra from "./Components/Extra";
import Certifications from "./Components/Certifications";
import ContactUs from "./Components/ContactUs";
import Popup from "./Components/Popup";
import AllProjects from "./pages/AllProjects";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const location = useLocation();

  useEffect(() => {
    // Disable scrolling during loading screen
    if (isLoading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // Show the loading screen for 4 seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4000);

    return () => {
      clearTimeout(timer);
    };
  }, [isLoading]);

  useEffect(() => {
    // Track scroll progress - improved calculation
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      // Prevent division by zero and ensure progress is between 0-100
      const progress =
        totalHeight <= 0
          ? 0
          : Math.min(Math.max((window.scrollY / totalHeight) * 100, 0), 100);
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);

    // Initialize scroll position on component mount
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
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
      shapes: ["circle", "square"],
      ticks: 200,
      disableForReducedMotion: true,
    });
  };
  // No longer need closeSidebar since we're using a navbar

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
        delay: 0.3,
      },
    },
    exit: {
      opacity: 0,
      scale: 1.2,
      transition: {
        duration: 0.5,
      },
    },
  };
  // Main homepage content - removed Suspense and lazy loading
  const MainContent = () => (
    <>
      <Home />
      <Education />
      <Skills />
      <Projects />
      <Extra />
      <Certifications />
      <ContactUs />
    </>
  );
  return (
    <div className="flex flex-col w-full">
      {/* Scroll Progress Indicator - above navbar */}
      <div className="fixed top-0 left-0 w-full h-1 z-[60]">
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
                transition={{
                  repeat: Infinity,
                  duration: 8,
                  ease: "easeInOut",
                }}
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
                      opacity: [1, 0.5, 1],
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 1,
                      delay: 0,
                    }}
                  />
                  <motion.div
                    className="w-3 h-3 rounded-full bg-purple-600"
                    animate={{
                      y: [0, -10, 0],
                      opacity: [1, 0.5, 1],
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 1,
                      delay: 0.2,
                    }}
                  />
                  <motion.div
                    className="w-3 h-3 rounded-full bg-indigo-600"
                    animate={{
                      y: [0, -10, 0],
                      opacity: [1, 0.5, 1],
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 1,
                      delay: 0.4,
                    }}
                  />
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>{" "}
      {/* Main App Content */}
      {!isLoading && (
        <>
          {" "}
          {/* Navigation Bar - Full width at the top of the page */}
          <Navbar />
          {/* Main Content with Routes - removed Suspense */}
          <div className="w-full min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
            <Routes>
              <Route path="/" element={<MainContent />} />
              <Route path="/all-projects" element={<AllProjects />} />
            </Routes>

            {/* Animated Floating Button - Only on homepage */}
            <AnimatePresence>
              {location.pathname === "/" && (
                <motion.button
                  onClick={togglePopup}
                  className="fixed bottom-5 right-5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 px-6 rounded-full shadow-lg shadow-indigo-900/20 hover:from-indigo-700 hover:to-purple-700 transition-all focus:outline-none flex items-center space-x-2 backdrop-blur-sm"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 50 }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  whileHover={{
                    scale: 1.05,
                    boxShadow:
                      "0 10px 25px -5px rgba(99, 102, 241, 0.4), 0 10px 10px -5px rgba(139, 92, 246, 0.3)",
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaCoffee className="text-white" size={20} />
                  <span>Buy Me a Coffee</span>
                </motion.button>
              )}
            </AnimatePresence>

            {/* Popup Component - removed Suspense */}
            <AnimatePresence>
              {isPopupVisible && <Popup togglePopup={togglePopup} />}
            </AnimatePresence>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
