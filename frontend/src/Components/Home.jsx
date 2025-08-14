import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaDownload, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import {
  SiReact,
  SiJavascript,
  SiPython,
  SiNodedotjs,
  SiTailwindcss,
  SiExpress,
} from "react-icons/si";
import myselfImage from "../Assets/myself.png";
import "./Home.css";

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
    const currentRole = roles[currentRoleIndex];

    if (isTyping) {
      if (displayText.length < currentRole.length) {
        timeout = setTimeout(() => {
          setDisplayText(currentRole.substring(0, displayText.length + 1));
        }, 100);
      } else {
        setIsTyping(false);
        timeout = setTimeout(() => {}, 2000);
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(displayText.substring(0, displayText.length - 1));
        }, 50);
      } else {
        setIsTyping(true);
        setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, isTyping, currentRoleIndex]);

  const techStack = [
    { icon: <SiReact />, name: "React" },
    { icon: <SiJavascript />, name: "JavaScript" },
    { icon: <SiPython />, name: "Python Flask" },
    { icon: <SiNodedotjs />, name: "Node.js" },
    { icon: <SiTailwindcss />, name: "Tailwind" },
    { icon: <SiExpress />, name: "Express JS" },
  ];

  return (
    <section
      id="home"
      className="w-full min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center"
    >
      {/* Ambient gradient blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500 rounded-full opacity-20 blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500 rounded-full opacity-20 blur-3xl animate-pulse"></div>

      <div className="container mx-auto px-6 md:px-8 lg:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left Column */}
          <motion.div
            className="flex-1 fade-in"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-100 leading-tight mb-4">
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-500 falling-text">
                Hi, I'm
              </span>
              <span className="block bold-text">Prasad Shaswat</span>
            </h1>

            <div className="text-2xl md:text-3xl font-medium text-gray-300 mb-6 h-16 typing-text">
              <span className="inline-flex items-center">
                <span className="w-4 h-4 bg-indigo-500 rounded-full mr-3 animate-pulse"></span>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">
                  {displayText}
                  <span className="ml-1 animate-pulse">|</span>
                </span>
              </span>
            </div>

            <p className="text-gray-400 max-w-xl mb-8 fade-in">
              A results-driven Full-Stack Developer experienced in the MERN
              stack and Flask, focused on creating scalable web applications and
              responsive UI/UX designs.
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-3 mb-10 fade-in">
              {techStack.map((tech, idx) => (
                <span
                  key={idx}
                  className="flex items-center gap-2 px-4 py-2 rounded-full border border-gray-700 bg-gray-800/50 text-sm text-gray-300 hover:scale-105 hover:shadow-lg hover:shadow-indigo-500/20 transition-all"
                >
                  {tech.icon} {tech.name}
                </span>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-5 mb-10 fade-in">
              <a
                href="https://drive.google.com/file/d/1XR7BQtjUL1MoJ3E4VC7SJySzOKeeCU4k/view?usp=sharing"
                download="PrasadShaswat_Resume.pdf"
                className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-medium px-8 py-4 rounded-lg flex items-center justify-center shadow-lg hover:shadow-indigo-500/30 transform hover:-translate-y-1 transition-all duration-300 text-lg"
              >
                <FaDownload className="mr-3" size={20} /> Download Resume
              </a>
              <a
                href="#contact"
                className="border-2 border-indigo-500/50 text-indigo-300 hover:bg-indigo-500/10 font-medium px-8 py-4 rounded-lg flex items-center justify-center shadow-lg hover:shadow-indigo-500/20 transform hover:-translate-y-1 transition-all duration-300 text-lg"
              >
                Contact Me
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 text-gray-400 fade-in">
              <a
                href="https://github.com/yourusername"
                className="hover:text-indigo-400 bg-gray-800/50 p-3 rounded-full hover:bg-gray-800 transform hover:scale-110 transition-all duration-300 animate-float"
              >
                <FaGithub size={20} />
              </a>
              <a
                href="https://linkedin.com/in/yourusername"
                className="hover:text-blue-400 bg-gray-800/50 p-3 rounded-full hover:bg-gray-800 transform hover:scale-110 transition-all duration-300 animate-float-delay"
              >
                <FaLinkedin size={20} />
              </a>
              <a
                href="https://twitter.com/yourusername"
                className="hover:text-sky-400 bg-gray-800/50 p-3 rounded-full hover:bg-gray-800 transform hover:scale-110 transition-all duration-300 animate-float"
              >
                <FaTwitter size={20} />
              </a>
            </div>
          </motion.div>

          {/* Right Column - Photo */}
          {/* Right Column - Photo */}
          <motion.div
            className="flex-1 flex justify-center items-center fade-in"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative group flex justify-center items-center lg:h-[28rem]">
              {/* Rotating Gradient Border */}
              <div className="rounded-full p-[3px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 animate-spin-slow">
                <div className="w-72 h-72 md:w-96 md:h-96 rounded-full bg-gray-900 p-1">
                  <img
                    src={myselfImage}
                    alt="Prasad Shaswat"
                    className="w-full h-full object-cover rounded-full transform group-hover:scale-105 transition duration-500"
                  />
                </div>
              </div>

              {/* Glow effect */}
              <div className="absolute -inset-4 rounded-full bg-indigo-500/20 blur-3xl opacity-0 group-hover:opacity-100 transition duration-700"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Home;
