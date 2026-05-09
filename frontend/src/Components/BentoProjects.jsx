import React from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink, ArrowUpRight, Code2, Globe, Server, Database } from "lucide-react";

import universityConnect from "../Assets/university-connect.png";
import unolinks from "../Assets/unolinks.png";
import SlotlyBookingApp from "../Assets/sloty.png";

const projects = [
  {
    id: 1,
    title: "University Connect",
    subtitle: "Collaboration Hub",
    description: "A centralized hub for connecting students, simplifying resource sharing, and fostering academic collaboration through an intuitive digital ecosystem.",
    image: universityConnect,
    tags: ["React", "Node.js", "MongoDB"],
    link: "https://github.com/shaswat2031/Minor-Project-University-Connect.git",
    type: "Source",
    className: "md:col-span-2 md:row-span-2",
    accent: "bg-blue-500/10 border-blue-500/20 text-blue-400"
  },
  {
    id: 2,
    title: "Unolinks",
    subtitle: "Bio Link Manager",
    description: "A sleek, vintage-inspired link management tool for digital presence.",
    image: unolinks,
    tags: ["Tailwind", "Vite"],
    link: "https://unolinks.prasadshaswat.app/",
    type: "Live",
    className: "md:col-span-2 md:row-span-1",
    accent: "bg-purple-500/10 border-purple-500/20 text-purple-400"
  },
  {
    id: 3,
    title: "Slotly",
    subtitle: "Smart Booking",
    description: "Automated booking with real-time tracking and SMS alerts.",
    image: SlotlyBookingApp,
    tags: ["Twilio", "NoSQL"],
    link: "https://github.com/shaswat2031/",
    type: "Source",
    className: "md:col-span-2 md:row-span-1",
    accent: "bg-red-500/10 border-red-500/20 text-red-400"
  }
];

const BentoProjects = () => {
  return (
    <section id="projects" className="py-24 bg-[#020202] relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-600/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 text-purple-400 font-mono text-xs tracking-widest mb-4"
          >
            <span>/ FEATURED WORK</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-white tracking-tight"
          >
            Bento <span className="text-gray-500">Showcase.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[250px]">
          {projects.map((project, index) => (
            <BentoCard key={project.id} project={project} index={index} />
          ))}
          
          {/* Decorative Bento Tiles to fill the gap/add flavor */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="hidden md:flex col-span-1 row-span-1 bg-white/5 border border-white/10 rounded-3xl p-6 flex-col justify-between group"
          >
            <div className="p-3 bg-purple-500/10 rounded-2xl w-fit group-hover:scale-110 transition-transform">
                <Code2 className="text-purple-400" size={24} />
            </div>
            <div>
                <p className="text-white font-bold text-lg">Clean Code</p>
                <p className="text-gray-500 text-sm">Scalable architecture focused on performance.</p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            className="hidden md:flex col-span-1 row-span-1 bg-white/5 border border-white/10 rounded-3xl p-6 flex-col justify-between group"
          >
            <div className="p-3 bg-blue-500/10 rounded-2xl w-fit group-hover:scale-110 transition-transform">
                <Database className="text-blue-400" size={24} />
            </div>
            <div>
                <p className="text-white font-bold text-lg">Full Stack</p>
                <p className="text-gray-500 text-sm">MERN specialist with a love for real-time apps.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const BentoCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className={`group relative rounded-3xl border border-white/10 bg-[#0a0a0a] overflow-hidden flex flex-col ${project.className}`}
    >
      {/* Image Overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover opacity-30 group-hover:opacity-50 group-hover:scale-105 transition-all duration-700 filter grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col h-full p-8">
        <div className="flex justify-between items-start mb-auto">
            <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest border ${project.accent}`}>
                {project.subtitle}
            </span>
            <a 
                href={project.link} 
                target="_blank" 
                rel="noreferrer"
                className="p-3 bg-white/5 border border-white/10 rounded-full text-white hover:bg-white/20 transition-all hover:-translate-y-1"
            >
                {project.type === "Source" ? <Github size={18} /> : <ExternalLink size={18} />}
            </a>
        </div>

        <div>
            <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
            <p className="text-gray-400 text-sm line-clamp-2 mb-4">
                {project.description}
            </p>
            <div className="flex flex-wrap gap-2">
                {project.tags.map(tag => (
                    <span key={tag} className="text-[10px] font-mono text-gray-500">#{tag}</span>
                ))}
            </div>
        </div>
      </div>

      {/* Hover Light Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
    </motion.div>
  );
};

export default BentoProjects;
