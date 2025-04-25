import React from "react";
import { FaDownload, FaCode, FaLaptopCode } from "react-icons/fa";
import "./Home.css";

const Home = () => {
  return (
    <section
      id="about"
      className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center"
    >
      <div className="w-full max-w-5xl px-6 md:px-12 py-12 md:py-16 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500 rounded-full opacity-10 -mr-32 -mt-32"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-600 rounded-full opacity-10 -ml-40 -mb-40"></div>
        <div className="absolute top-1/3 left-0 w-2 h-20 bg-blue-400 opacity-20"></div>
        <div className="absolute right-20 top-40 text-blue-300 opacity-20">
          <FaCode size={20} />
        </div>
        <div className="absolute left-10 bottom-40 text-purple-300 opacity-20">
          <FaLaptopCode size={24} />
        </div>

        {/* Introduction Section */}
        <div className="text-4xl md:text-5xl font-extrabold text-gray-100 mb-6 text-center md:text-left relative z-10">
          <span
            className="block text-5xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-500 mb-2"
            style={{ fontFamily: "'Roboto Slab', serif" }}
          >
            GREETINGS & WELCOME!
          </span>
          <span className="leading-tight block">
            I AM{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-500 relative">
              Prasad Shaswat
              <span className="absolute bottom-0 left-0 w-full h-1 bg-indigo-400 opacity-70"></span>
            </span>
          </span>
        </div>

        {/* Contact Info */}
        <div className="text-gray-400 text-center md:text-left mb-6 text-sm md:text-base flex flex-col md:flex-row md:items-center md:space-x-4">
          <span className="inline-flex items-center">
            <span className="w-4 h-4 bg-indigo-500 rounded-full mr-2"></span>
            Vadodara, 391760
          </span>
          <span className="hidden md:inline text-gray-500">•</span>
          <span className="font-medium text-indigo-300">prasadshaswat9265@gmail.com</span>
        </div>

        {/* Role Description - Dark version */}
        <div className="text-gray-300 text-center md:text-left mb-8 relative z-10">
          <div className="bg-gray-800 bg-opacity-80 p-6 rounded-lg shadow-md border-l-4 border-indigo-500">
            <p className="text-lg md:text-xl flex flex-col md:flex-row items-center md:items-start gap-2">
              <span className="font-medium text-gray-300">I'm a passionate</span>
              <span className="font-bold text-xl md:text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400">
                Full Stack Developer ⚡
              </span>
            </p>

            <p className="mt-4 text-gray-400 leading-relaxed">
              specializing in cutting-edge web technologies including
              <span className="inline-flex gap-2 flex-wrap mt-2">
                <span className="font-medium text-blue-300 bg-blue-900 bg-opacity-40 px-2 py-1 rounded-md shadow-sm">
                  React
                </span>
                <span className="font-medium text-green-300 bg-green-900 bg-opacity-40 px-2 py-1 rounded-md shadow-sm">
                  Node.js
                </span>
                <span className="font-medium text-purple-300 bg-purple-900 bg-opacity-40 px-2 py-1 rounded-md shadow-sm">
                  JavaScript (ES6+)
                </span>
                <span className="font-medium text-indigo-300 bg-indigo-900 bg-opacity-40 px-2 py-1 rounded-md shadow-sm">
                  Responsive Design
                </span>
              </span>
            </p>
          </div>
        </div>

        {/* Social Links */}

        {/* Download Resume Button */}
        <div className="mt-8 flex justify-center md:justify-start">
          <a
            href="https://drive.google.com/uc?export=download&id=1z-HEsyCKudk9_HIZZxkz2ObZ2x4D9j4K"
            download="Prasadshaswatresume.pdf"
            className="px-6 py-3 text-white bg-gradient-to-r from-indigo-600 to-blue-600 rounded-lg shadow-lg hover:shadow-indigo-500/20 transform hover:-translate-y-1 transition duration-300 flex items-center"
          >
            <FaDownload className="mr-2" /> Download Resume
          </a>
        </div>

        {/* Professional Profile - Dark version */}
        <div className="mt-10 text-gray-300 text-center md:text-left text-sm md:text-base relative z-10">
          <h3 className="text-xl md:text-2xl font-bold text-white mb-4 flex items-center">
            <span className="bg-gradient-to-r from-indigo-500 to-blue-500 h-8 w-2 rounded mr-3"></span>
            Professional Profile
          </h3>

          <div className="space-y-4">
            {/* Card 1: Availability & Skills Combined */}
            <div className="bg-gray-800 bg-opacity-80 p-5 rounded-lg shadow-md border-l-4 border-indigo-500 hover:shadow-lg transition duration-300">
              <h4 className="font-bold text-indigo-400 mb-2 flex items-center">
                <span className="mr-2">🚀</span> Current Status & Expertise
              </h4>
              <p className="mb-3 text-gray-400">
                <strong className="text-white">Currently available:</strong> Seeking web development
                internships or part-time opportunities commencing January 2024. As a
                versatile full-stack JavaScript developer, I bring comprehensive experience with React,
                Node.js, and contemporary web technologies.
              </p>
              <div className="flex flex-wrap gap-2 mt-3">
                <span className="text-xs font-medium bg-blue-900 bg-opacity-40 text-blue-300 px-2 py-1 rounded">
                  React
                </span>
                <span className="text-xs font-medium bg-green-900 bg-opacity-40 text-green-300 px-2 py-1 rounded">
                  Node.js
                </span>
                <span className="text-xs font-medium bg-purple-900 bg-opacity-40 text-purple-300 px-2 py-1 rounded">
                  JavaScript
                </span>
                <span className="text-xs font-medium bg-indigo-900 bg-opacity-40 text-indigo-300 px-2 py-1 rounded">
                  Responsive Design
                </span>
                <span className="text-xs font-medium bg-red-900 bg-opacity-40 text-red-300 px-2 py-1 rounded">
                  REST APIs
                </span>
                <span className="text-xs font-medium bg-blue-900 bg-opacity-40 text-blue-300 px-2 py-1 rounded">
                  UI/UX
                </span>
              </div>
            </div>

            {/* Card 2: Professional Focus & Connect Combined */}
            <div className="bg-gray-800 bg-opacity-80 p-5 rounded-lg shadow-md border-l-4 border-blue-500 hover:shadow-lg transition duration-300">
              <h4 className="font-bold text-blue-400 mb-2 flex items-center">
                <span className="mr-2">🎯</span> Professional Focus
              </h4>
              <p className="mb-3 text-gray-400">
                Crafting elegant, high-performance applications through modern JavaScript
                frameworks, advanced responsive design principles, and user-centered
                interfaces. Currently expanding expertise in TypeScript,
                Next.js, and enterprise-grade cloud infrastructure.
              </p>

              {/* Connect Section - Integrated */}
              <div className="flex justify-between items-center mt-4 pt-3 border-t border-gray-700">
                <div className="flex items-center text-indigo-400">
                  <span className="mr-2">✨</span>
                  <span className="font-medium">Let's Collaborate</span>
                </div>
                <a
                  href="#contact"
                  className="px-4 py-1.5 text-sm bg-gradient-to-r from-indigo-600 to-blue-600 text-white rounded hover:from-indigo-700 hover:to-blue-700 transition duration-300 shadow-sm"
                >
                  Contact Me →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
