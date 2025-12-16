import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaGithub,
  FaCalendarAlt,
  FaTools,
  FaArrowRight,
  FaLaptopCode,
  FaFire,
  FaExternalLinkAlt,
} from "react-icons/fa";

import universityConnect from "../Assets/university-connect.png";
import unolinks from "../Assets/unolinks.png";
import SlotlyBookingApp from "../Assets/sloty.png";

// Data for the projects
export const projects = [
  {
    title: "University Connect",
    description:
      "A student-driven platform for profiles, skill showcases, and collaboration.",
    longDescription:
      "Developed a dynamic UI with React, integrated student profiles, a real-time messaging system, and a certification showcase. The backend uses Node.js and Express with JWT for secure authentication and optimized data handling with MongoDB.",
    date: "Jan 2025 – Feb 2025",
    githubLink:
      "https://github.com/shaswat2031/Minor-Project-University-Connect.git",
    liveLink: null,
    image: universityConnect,
    tags: ["React", "Node.js", "MongoDB", "Express", "JWT", "TailwindCSS"],
    highlight: true,
  },
  {
    title: "Unolinks",
    description:
      "One link for everything you love — a vintage-inspired bio link platform.",
    longDescription: "UnoLinks is a personal bio-link platform that allows users to bring all their content into a single beautifully crafted, vintage-inspired profile. Users can showcase social links, portfolios, and important resources through one customizable link with a clean and responsive UI.",
    date: "OCT 2025 – Present",
    githubLink: null,
    liveLink: "https://unolinks.prasadshaswat.app/",
    image: unolinks,
    tags: ["React", "Tailwind CSS", "Web App", "Personal Branding"],
    highlight: false,
  },
  {
    title: "Slotly - Booking App",
    description:
      "A real-time booking app with vendor dashboards and Twilio notifications.",
    longDescription:
      "A comprehensive MERN stack booking application featuring real-time slot availability, a dedicated dashboard for vendors to manage their schedules, and automated SMS notifications using the Twilio API.",
    date: "March 2025 – April 2025",
    githubLink: "https://github.com/shaswat2031/",
    liveLink: null,
    image: SlotlyBookingApp,
    tags: ["React", "Node.js", "MongoDB", "Twilio", "Tailwind CSS"],
    highlight: false,
  },


];

const Projects = () => {
  const [selectedId, setSelectedId] = useState(null);

  return (
    <section
      id="projects"
      className="py-24 bg-portfolio-dark text-white relative overflow-hidden"
    >
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 bg-grid-gray-800/20 [mask-image:linear-gradient(to_bottom,white_5%,transparent_95%)]"></div>
      <div className="absolute top-1/4 -left-24 w-72 h-72 bg-portfolio-primary rounded-full filter blur-3xl opacity-10 animate-pulse"></div>
      <div className="absolute bottom-1/4 -right-24 w-72 h-72 bg-portfolio-secondary rounded-full filter blur-3xl opacity-10 animate-pulse animation-delay-4000"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          className="mb-12 md:mb-20 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block mb-4">
            <div className="relative w-12 h-12 md:w-16 md:h-16 mx-auto bg-portfolio-dark rounded-xl flex items-center justify-center border-2 border-portfolio-primary shadow-lg shadow-portfolio-primary/20">
              <FaLaptopCode className="text-portfolio-primary text-2xl md:text-3xl" />
            </div>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-3">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-portfolio-primary to-portfolio-secondary">
              My Creative Portfolio
            </span>
          </h2>
          <div className="h-1 w-24 mx-auto bg-gradient-to-r from-portfolio-primary to-portfolio-secondary rounded-full mb-4"></div>
          <p className="text-gray-400 max-w-2xl mx-auto text-base md:text-lg">
            A selection of projects that showcase my passion for building modern
            web applications.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.1 }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              layoutId={`card-${index}`}
              onClick={() => setSelectedId(index)}
              className="bg-portfolio-dark/40 backdrop-blur-lg rounded-2xl overflow-hidden border border-gray-700/80 cursor-pointer group relative hover:z-10"
              variants={{
                hidden: { y: 20, opacity: 0 },
                visible: { y: 0, opacity: 1 },
              }}
              whileHover={{
                y: -6,
                scale: 1.02,
                transition: { type: "spring", stiffness: 300 },
              }}
            >
              <div className="overflow-hidden h-48 md:h-52">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5 md:p-6">
                <div className="flex justify-between items-start">
                  <h3 className="text-lg md:text-xl font-bold text-white mb-2">
                    {project.title}
                  </h3>
                  {project.highlight && (
                    <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-portfolio-primary/20 text-portfolio-primary text-xs font-bold border border-portfolio-primary/50 whitespace-nowrap ml-2">
                      <FaFire className="mr-1.5 text-portfolio-secondary" size={12} />
                      Featured
                    </span>
                  )}
                </div>
                <p className="text-gray-400 text-sm mb-4 h-auto md:h-10 line-clamp-2 md:line-clamp-none">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.slice(0, 4).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 md:px-3 py-1 text-xs font-semibold bg-portfolio-dark/80 text-portfolio-accent rounded-full border border-gray-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-portfolio-primary rounded-2xl transition-all duration-300 pointer-events-none"></div>
            </motion.div>
          ))}
        </motion.div>

      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedId !== null && (
          <motion.div
            layoutId={`card-${selectedId}`}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
            onClick={() => setSelectedId(null)}
          >
            <motion.div
              className="absolute inset-0 bg-black/70 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
            <motion.div
              className="relative w-full max-w-3xl bg-portfolio-dark rounded-2xl overflow-hidden border border-gray-700 shadow-2xl flex flex-col max-h-[90vh]"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 25 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="h-48 sm:h-64 overflow-hidden shrink-0">
                <img
                  src={projects[selectedId].image}
                  alt={projects[selectedId].title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 md:p-8 overflow-y-auto">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                  {projects[selectedId].title}
                </h2>
                <p className="text-portfolio-accent text-sm mb-4">
                  <FaCalendarAlt className="inline mr-2" />
                  {projects[selectedId].date}
                </p>
                <p className="text-gray-300 mb-6 text-sm md:text-base">
                  {projects[selectedId].longDescription}
                </p>
                <h4 className="font-bold text-white mb-3 flex items-center">
                  <FaTools className="mr-2 text-portfolio-primary" />
                  Key Features
                </h4>
                <ul className="space-y-2 mb-6">
                  {projects[selectedId].tags.map((tag) => (
                    <li
                      key={tag}
                      className="text-sm text-gray-400 flex items-start"
                    >
                      <span className="text-portfolio-primary mr-2 mt-1">▹</span>
                      {tag}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-col sm:flex-row items-center gap-4 pt-4 border-t border-gray-700">
                  <motion.a
                    href={projects[selectedId].githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-full px-4 py-3 text-sm font-semibold rounded-lg text-white bg-portfolio-primary hover:bg-portfolio-primary/80 transition-colors"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <FaGithub className="mr-2" /> View on GitHub
                  </motion.a>
                  {projects[selectedId].liveLink && (
                    <motion.a
                      href={projects[selectedId].liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-full px-4 py-3 text-sm font-semibold rounded-lg text-gray-200 bg-gray-700 hover:bg-gray-600 transition-colors"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <FaExternalLinkAlt className="mr-2" /> Live Demo
                    </motion.a>
                  )}
                </div>
              </div>
              <button
                onClick={() => setSelectedId(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-black/30 text-white hover:bg-black/60 transition-colors z-10"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
