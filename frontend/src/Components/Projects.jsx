import React, { useRef } from "react";
import { motion } from "framer-motion";
import {
  Github,
  ArrowUpRight,
  FolderOpen
} from "lucide-react";

import universityConnect from "../Assets/university-connect.png";
import unolinks from "../Assets/unolinks.png";
import SlotlyBookingApp from "../Assets/sloty.png";

const projects = [
  {
    id: 1,
    title: "University Connect",
    subtitle: "Student Collaboration Platform",
    description: "A centralized hub for connecting students, simplifying resource sharing, and fostering academic collaboration through an intuitive digital ecosystem.",
    image: universityConnect,
    tags: ["React", "Node.js", "MongoDB", "Express"],
    live: null,
    github: "https://github.com/shaswat2031/Minor-Project-University-Connect.git",
    color: "from-blue-500 to-cyan-500"
  },
  {
    id: 2,
    title: "Unolinks",
    subtitle: "Bio Link Management",
    description: "A sleek, vintage-inspired link management tool allowing users to consolidate their digital presence into a single, highly customizable landing page.",
    image: unolinks,
    tags: ["React", "Tailwind CSS", "Web App"],
    live: "https://unolinks.prasadshaswat.app/",
    github: null,
    color: "from-purple-500 to-pink-500"
  },
  {
    id: 3,
    title: "Slotly",
    subtitle: "Smart Booking System",
    description: "An automated booking solution featuring real-time availability tracking, vendor dashboards, and instant SMS notifications via Twilio.",
    image: SlotlyBookingApp,
    tags: ["React", "Node.js", "MongoDB", "Twilio"],
    live: null,
    github: "https://github.com/shaswat2031/",
    color: "from-orange-500 to-red-500"
  }
];

const Projects = () => {
  const containerRef = useRef(null);

  return (
    <section id="projects" ref={containerRef} className="py-32 bg-[#050505] relative overflow-hidden">
      {/* Background Patterns */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="mb-20 space-y-4">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 text-purple-400 font-mono text-sm tracking-wider"
          >
            <FolderOpen size={16} />
            <span>/ FEATURED WORK</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold text-white max-w-2xl leading-tight"
          >
            Turning concepts into <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">digital reality.</span>
          </motion.h2>
        </div>

        {/* Projects List */}
        <div className="flex flex-col gap-20">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project, index }) => {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, delay: index * 0.1 }}
      className={`flex flex-col lg:flex-row gap-8 lg:gap-16 items-center ${isEven ? '' : 'lg:flex-row-reverse'}`}
    >
      {/* Image Side */}
      <div className="w-full lg:w-3/5 group relative perspective-1000">
        <div className="relative rounded-2xl overflow-hidden bg-[#111] border border-white/10 shadow-2xl transition-transform duration-500 group-hover:scale-[1.02] group-hover:shadow-purple-500/10">
          {/* Overlay Gradient */}
          <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500 z-10`} />

          <img
            src={project.image}
            alt={project.title}
            className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105 filter grayscale hover:grayscale-0"
          />
        </div>
      </div>

      {/* Content Side */}
      <div className="w-full lg:w-2/5 space-y-6">
        <div className="space-y-2">
          <h3 className="text-3xl font-bold text-white flex items-center gap-3">
            {project.title}
            <div className={`h-[2px] flex-grow bg-gradient-to-r ${project.color} opacity-50`} />
          </h3>
          <p className="text-purple-400 font-mono text-sm">{project.subtitle}</p>
        </div>

        <p className="text-gray-400 leading-relaxed text-lg">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map(tag => (
            <span key={tag} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-gray-300 font-medium tracking-wide">
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center gap-4 pt-4">
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-white text-black rounded-lg font-bold hover:bg-gray-200 transition-colors group"
            >
              View Live <ArrowUpRight size={18} className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 text-white rounded-lg font-bold hover:bg-white/10 transition-colors"
            >
              <Github size={18} /> Source
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
