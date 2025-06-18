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
      id="about"
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
        <div
          className="absolute top-1/3 left-0 w-2 h-20 bg-blue-400 opacity-20 animate-bounce"
          style={{ animationDuration: "2.5s" }}
        ></div>
        <div className="absolute right-20 top-40 text-blue-300 opacity-20 animate-float">
          <FaCode size={20} />
        </div>
        <div className="absolute left-10 bottom-40 text-purple-300 opacity-20 animate-float-delay">
          <FaLaptopCode size={24} />
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-8 lg:px-12 py-12 md:py-16 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          {/* Left Column - Content */}
          <div className="w-full lg:w-1/2 order-2 lg:order-1">
            {/* Introduction */}
            <div className="text-center lg:text-left mb-8">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-100 mb-4">
                <span className="block text-5xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-500 mb-2 transform transition-transform duration-500 hover:scale-105">
                  Hi, I'm
                </span>
                <span className="block text-5xl md:text-6xl relative">
                  Prasad Shaswat
                  <span className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 lg:scale-x-[0.6] lg:group-hover:scale-x-100"></span>
                </span>
              </h1>

              <div className="text-xl md:text-2xl font-medium text-gray-300 mb-6 h-12">
                <span className="inline-flex items-center">
                  <span className="w-3 h-3 bg-indigo-500 rounded-full mr-2 animate-pulse"></span>
                  <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">
                    {displayText}
                    <span className="ml-1 animate-pulse">|</span>
                  </span>
                </span>
              </div>

              <div className="text-gray-400 text-sm md:text-base mb-8">
                <p className="mb-4 leading-relaxed backdrop-blur-sm mx-auto lg:mx-0 max-w-lg">
                  I build exceptional digital experiences with modern web
                  technologies. Focused on creating clean, efficient, and
                  user-friendly applications.
                </p>
                <div className="flex justify-center lg:justify-start gap-2 flex-wrap">
                  <span className="tech-badge bg-blue-900/30 text-blue-300 border-blue-700/50 px-3 py-1 rounded-full text-xs font-medium border shadow-sm hover:shadow-blue-500/20 hover:scale-105 transition-all duration-300">
                    React
                  </span>
                  <span className="tech-badge bg-yellow-900/30 text-yellow-300 border-yellow-700/50 px-3 py-1 rounded-full text-xs font-medium border shadow-sm hover:shadow-yellow-500/20 hover:scale-105 transition-all duration-300">
                    JavaScript
                  </span>
                  <span className="tech-badge bg-blue-900/30 text-blue-300 border-blue-700/50 px-3 py-1 rounded-full text-xs font-medium border shadow-sm hover:shadow-blue-500/20 hover:scale-105 transition-all duration-300">
                    TypeScript
                  </span>
                  <span className="tech-badge bg-green-900/30 text-green-300 border-green-700/50 px-3 py-1 rounded-full text-xs font-medium border shadow-sm hover:shadow-green-500/20 hover:scale-105 transition-all duration-300">
                    Node.js
                  </span>
                  <span className="tech-badge bg-cyan-900/30 text-cyan-300 border-cyan-700/50 px-3 py-1 rounded-full text-xs font-medium border shadow-sm hover:shadow-cyan-500/20 hover:scale-105 transition-all duration-300">
                    Tailwind CSS
                  </span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <a
                href="https://drive.google.com/uc?export=download&id=1z-HEsyCKudk9_HIZZxkz2ObZ2x4D9j4K"
                download="PrasadShaswat_Resume.pdf"
                className="btn-primary bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-medium px-6 py-3 rounded-lg flex items-center justify-center shadow-lg hover:shadow-indigo-500/30 transform hover:-translate-y-1 transition-all duration-300"
              >
                <FaDownload className="mr-2" /> Download Resume
              </a>
              <a
                href="#contact"
                className="btn-secondary border-2 border-indigo-500/50 text-indigo-300 hover:bg-indigo-500/10 font-medium px-6 py-3 rounded-lg flex items-center justify-center shadow-lg hover:shadow-indigo-500/20 transform hover:-translate-y-1 transition-all duration-300"
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
          <div className="w-full lg:w-1/2 order-1 lg:order-2 flex justify-center">
            <div className="relative group">
              {/* Photo Frame */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl blur opacity-70 group-hover:opacity-100 transition duration-1000 group-hover:duration-300"></div>
              <div className="relative z-10 w-64 md:w-80 h-64 md:h-80 rounded-2xl overflow-hidden shadow-2xl shadow-indigo-800/30 border-4 border-gray-800 group-hover:border-gray-700 transition-colors duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 to-purple-600/20 mix-blend-overlay"></div>
                <img
                  src={myselfImage}
                  alt="Prasad Shaswat"
                  className="w-full h-full object-cover transform group-hover:scale-[1.02] transition-transform duration-700"
                />

                {/* Photo Caption */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-900 via-gray-900/80 to-transparent p-4 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-white text-center font-medium">
                    Prasad Shaswat
                  </p>
                  <p className="text-indigo-300 text-center text-sm">
                    Full Stack Developer
                  </p>
                </div>
              </div>

              {/* Improved Floating Tech Icons */}
              <div className="absolute -top-4 -right-4 bg-gradient-to-br from-gray-800 to-gray-900 p-3 rounded-full shadow-lg shadow-indigo-500/20 animate-float group-hover:-translate-y-1 transition-transform duration-300 border border-indigo-500/30">
                <SiReact
                  size={24}
                  className="text-blue-400 filter drop-shadow-md"
                />
              </div>

              <div className="absolute -bottom-4 -left-4 bg-gradient-to-br from-gray-800 to-gray-900 p-3 rounded-full shadow-lg shadow-purple-500/20 animate-float-delay group-hover:translate-y-1 transition-transform duration-300 border border-purple-500/30">
                <SiTypescript
                  size={24}
                  className="text-blue-500 filter drop-shadow-md"
                />
              </div>

              <div className="absolute top-1/2 -right-6 bg-gradient-to-br from-gray-800 to-gray-900 p-2.5 rounded-lg shadow-lg shadow-blue-500/10 rotate-12 group-hover:rotate-6 transition-all duration-300 border border-blue-500/20">
                <SiNextdotjs
                  size={20}
                  className="text-white filter drop-shadow-sm"
                />
              </div>

              <div className="absolute bottom-8 -left-6 bg-gradient-to-br from-gray-800 to-gray-900 p-2.5 rounded-lg shadow-lg shadow-cyan-500/10 -rotate-12 group-hover:-rotate-6 transition-all duration-300 border border-cyan-500/20">
                <SiTailwindcss
                  size={20}
                  className="text-cyan-400 filter drop-shadow-sm"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
