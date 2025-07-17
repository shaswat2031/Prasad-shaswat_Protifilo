import React, { useState, useEffect } from "react";
import {
  FaDownload,
  FaCode,
  FaLaptopCode,
  FaGithub,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import {
  SiReact,
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
} from "react-icons/si";
import "./Home.css";
import myselfImage from "../Assets/myself.png";

const Home = () => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  const roles = [
    "React Specialist",
    "JavaScript Expert",
    "Full Stack Developer",
    "UI/UX Enthusiast",
  ];

  useEffect(() => {
    let timeout;

    const typeText = () => {
      const currentRole = roles[currentRoleIndex];

      if (isTyping) {
        // Typing animation
        if (displayText.length < currentRole.length) {
          timeout = setTimeout(() => {
            setDisplayText(currentRole.substring(0, displayText.length + 1));
          }, 100);
        } else {
          // Switch to deleting after a pause
          setIsTyping(false);
          timeout = setTimeout(typeText, 2000);
        }
      } else {
        // Deleting animation
        if (displayText.length > 0) {
          timeout = setTimeout(() => {
            setDisplayText(displayText.substring(0, displayText.length - 1));
          }, 50);
        } else {
          // Move to next role and start typing again
          setIsTyping(true);
          setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
          timeout = setTimeout(typeText, 500);
        }
      }
    };

    timeout = setTimeout(typeText, 500);

    return () => clearTimeout(timeout);
  }, [displayText, isTyping, currentRoleIndex]);

  return (
    <section
      id="home"
      className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center w-full overflow-hidden"
      style={{
        "--primary-color": "#6366f1",
        "--secondary-color": "#a855f7",
      }}
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute top-0 right-0 w-64 h-64 bg-indigo-500 rounded-full opacity-10 -mr-32 -mt-32 animate-pulse"
          style={{ animationDuration: "4s" }}
        ></div>
        <div
          className="absolute bottom-0 left-0 w-80 h-80 bg-purple-600 rounded-full opacity-10 -ml-40 -mb-40 animate-pulse"
          style={{ animationDuration: "6s" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16 max-w-7xl w-full relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          {/* Left Column - Content */}
          <div className="w-full lg:w-3/5 order-2 lg:order-1">
            {/* Introduction */}
            <div className="text-center lg:text-left mb-8">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-100 mb-6">
                <span className="block text-6xl md:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-500 mb-3 transform transition-transform duration-500 hover:scale-105">
                  Hi, I'm
                </span>
                <span className="block text-6xl md:text-7xl relative">
                  Prasad Shaswat
                  <span className="absolute -bottom-2 left-0 w-full h-1.5 bg-gradient-to-r from-indigo-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 lg:scale-x-[0.6] lg:group-hover:scale-x-100"></span>
                </span>
              </h1>

              <div className="text-2xl md:text-3xl font-medium text-gray-300 mb-8 h-16">
                <span className="inline-flex items-center">
                  <span className="w-4 h-4 bg-indigo-500 rounded-full mr-3 animate-pulse"></span>
                  <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">
                    {displayText}
                    <span className="ml-1 animate-pulse">|</span>
                  </span>
                </span>
              </div>

              <div className="text-gray-300 text-base md:text-lg mb-10">
                <p className="mb-6 leading-relaxed backdrop-blur-sm mx-auto lg:mx-0 max-w-2xl">
                  A results-driven Full-Stack Developer experienced in the MERN
                  stack and Flask , focused on creating scalable web
                  applications and responsive UI/UX designs
                </p>
                <div className="flex justify-center lg:justify-start gap-3 flex-wrap">
                  <span className="tech-badge bg-blue-900/30 text-blue-300 border-blue-700/50 px-4 py-2 rounded-full text-sm font-medium border shadow-sm hover:shadow-blue-500/20 hover:scale-105 transition-all duration-300">
                    React
                  </span>
                  <span className="tech-badge bg-yellow-900/30 text-yellow-300 border-yellow-700/50 px-4 py-2 rounded-full text-sm font-medium border shadow-sm hover:shadow-yellow-500/20 hover:scale-105 transition-all duration-300">
                    JavaScript
                  </span>
                  <span className="tech-badge bg-blue-900/30 text-blue-300 border-blue-700/50 px-4 py-2 rounded-full text-sm font-medium border shadow-sm hover:shadow-blue-500/20 hover:scale-105 transition-all duration-300">
                    Python Flask
                  </span>
                  <span className="tech-badge bg-green-900/30 text-green-300 border-green-700/50 px-4 py-2 rounded-full text-sm font-medium border shadow-sm hover:shadow-green-500/20 hover:scale-105 transition-all duration-300">
                    Node.js
                  </span>
                  <span className="tech-badge bg-cyan-900/30 text-cyan-300 border-cyan-700/50 px-4 py-2 rounded-full text-sm font-medium border shadow-sm hover:shadow-cyan-500/20 hover:scale-105 transition-all duration-300">
                    Tailwind
                  </span>
                  <span className="tech-badge bg-cyan-900/30 text-cyan-300 border-cyan-700/50 px-4 py-2 rounded-full text-sm font-medium border shadow-sm hover:shadow-cyan-500/20 hover:scale-105 transition-all duration-300">
                    Express JS
                  </span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start mb-10">
              <a
                href="https://drive.google.com/file/d/1XR7BQtjUL1MoJ3E4VC7SJySzOKeeCU4k/view?usp=sharing"
                download="PrasadShaswat_Resume.pdf"
                className="btn-primary bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-medium px-8 py-4 rounded-lg flex items-center justify-center shadow-lg hover:shadow-indigo-500/30 transform hover:-translate-y-1 transition-all duration-300 text-lg"
              >
                <FaDownload className="mr-3" size={20} /> Download Resume
              </a>
              <a
                href="#contact"
                className="btn-secondary border-2 border-indigo-500/50 text-indigo-300 hover:bg-indigo-500/10 font-medium px-8 py-4 rounded-lg flex items-center justify-center shadow-lg hover:shadow-indigo-500/20 transform hover:-translate-y-1 transition-all duration-300 text-lg"
              >
                Contact Me
              </a>
            </div>

            {/* Social Links */}
            <div className="flex justify-center lg:justify-start gap-4 text-gray-400">
              <a
                href="https://github.com/yourusername"
                className="social-link hover:text-indigo-400 bg-gray-800/50 p-2 rounded-full hover:bg-gray-800 transform hover:scale-110 transition-all duration-300"
              >
                <FaGithub size={20} />
              </a>
              <a
                href="https://linkedin.com/in/yourusername"
                className="social-link hover:text-blue-400 bg-gray-800/50 p-2 rounded-full hover:bg-gray-800 transform hover:scale-110 transition-all duration-300"
              >
                <FaLinkedin size={20} />
              </a>
              <a
                href="https://twitter.com/yourusername"
                className="social-link hover:text-sky-400 bg-gray-800/50 p-2 rounded-full hover:bg-gray-800 transform hover:scale-110 transition-all duration-300"
              >
                <FaTwitter size={20} />
              </a>
            </div>
          </div>

          {/* Right Column - Photo */}
          <div className="w-full lg:w-2/5 order-1 lg:order-2 flex justify-center">
            <div className="relative group">
              {/* Photo Frame - Even larger now */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 blur-md opacity-70 group-hover:opacity-100 transition duration-500 group-hover:scale-110"></div>
              <div className="relative z-10 w-80 md:w-96 h-80 md:h-96 rounded-full overflow-hidden shadow-2xl shadow-indigo-800/30 border-4 border-gray-800 group-hover:border-indigo-500 transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 to-purple-600/20 mix-blend-overlay"></div>
                <img
                  src={myselfImage}
                  alt="Prasad Shaswat"
                  className="w-full h-full object-cover object-center transform group-hover:scale-[1.05] transition-transform duration-500"
                />

                {/* Enhanced Photo Caption */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-900/95 to-transparent p-5 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-white text-center font-bold text-xl">
                    Prasad Shaswat
                  </p>
                  <p className="text-indigo-300 text-center text-sm font-medium">
                    Full Stack Developer
                  </p>
                </div>
              </div>

              {/* Add a subtle pulsing ring effect */}
              <div className="absolute -inset-4 rounded-full border-2 border-indigo-500/20 opacity-0 group-hover:opacity-100 animate-pulse transition-opacity duration-500"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
