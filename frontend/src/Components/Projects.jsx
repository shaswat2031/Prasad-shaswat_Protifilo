import React from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink, Code2, Database, Layout, Smartphone, Search } from "lucide-react";

import universityConnect from "../Assets/university-connect.png";
import unolinks from "../Assets/unolinks.png";
import SlotlyBookingApp from "../Assets/sloty.png";
import ecommerceImg from "../Assets/Ecommerce.png";
import inventoryImg from "../Assets/inventory.png";

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
    tags: ["React", "Tailwind", "Vite"],
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
    tags: ["React", "Twilio", "Node.js"],
    link: "https://github.com/shaswat2031/",
    type: "Source",
    className: "md:col-span-1 md:row-span-1",
    accent: "bg-red-500/10 border-red-500/20 text-red-400"
  },
  {
    id: 4,
    title: "E-commerce Pro",
    subtitle: "Modern Storefront",
    description: "High-performance e-commerce engine with complex filtering.",
    image: ecommerceImg,
    tags: ["Redux", "Stripe", "Express"],
    link: "https://github.com/shaswat2031/",
    type: "Source",
    className: "md:col-span-1 md:row-span-2",
    accent: "bg-green-500/10 border-green-500/20 text-green-400"
  },
  {
    id: 5,
    title: "Inventory Sync",
    subtitle: "Stock Management",
    description: "Real-time inventory tracking with automated alerts.",
    image: inventoryImg,
    tags: ["React Native", "Firebase"],
    link: "https://github.com/shaswat2031/",
    type: "Source",
    className: "md:col-span-3 md:row-span-1",
    accent: "bg-orange-500/10 border-orange-500/20 text-orange-400"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-[#020202] relative overflow-hidden">
      {/* Background Lighting */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-purple-600/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-blue-600/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10 max-w-7xl">
        <div className="mb-12">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 text-purple-400 font-mono text-[10px] tracking-[0.3em] mb-4"
          >
            <span>/ FEATURED WORK</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold text-white tracking-tighter"
          >
            Project <span className="text-gray-600 font-normal italic">Portfolio.</span>
          </motion.h2>
        </div>

        {/* Bento Grid with fixed gap filling */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[250px]">
          {/* Order: P1(2x2), P2(2x1), P3(1x1), P4(1x2), P5(3x1) */}
          <BentoCard project={projects[0]} /> {/* University Connect: Col 1-2, Row 1-2 */}
          <BentoCard project={projects[1]} /> {/* Unolinks: Col 3-4, Row 1 */}
          <BentoCard project={projects[2]} /> {/* Slotly: Col 3, Row 2 */}
          <BentoCard project={projects[3]} /> {/* E-commerce: Col 4, Row 2-3 */}
          <BentoCard project={projects[4]} /> {/* Inventory: Col 1-3, Row 3 */}
        </div>
      </div>
    </section>
  );
};

const BentoCard = ({ project }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`group relative rounded-3xl border border-white/10 bg-[#0a0a0a] overflow-hidden flex flex-col ${project.className}`}
    >
      <div className="absolute inset-0 z-0">
        <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover opacity-20 group-hover:opacity-40 group-hover:scale-110 transition-all duration-1000 filter grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent" />
      </div>

      <div className="relative z-10 flex flex-col h-full p-6 md:p-8">
        <div className="flex justify-between items-start mb-auto">
            <span className={`px-3 py-1 rounded-full text-[9px] font-bold uppercase tracking-[0.2em] border ${project.accent} backdrop-blur-md`}>
                {project.subtitle}
            </span>
            <motion.a 
                href={project.link} 
                target="_blank" 
                rel="noreferrer"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 bg-white/5 border border-white/10 rounded-2xl text-white hover:bg-white/20 transition-all"
            >
                {project.type === "Source" ? <Github size={18} /> : <ExternalLink size={18} />}
            </motion.a>
        </div>

        <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-2 tracking-tighter">{project.title}</h3>
            <p className="text-gray-400 text-[11px] leading-relaxed line-clamp-2 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                {project.description}
            </p>
            <div className="flex flex-wrap gap-2 opacity-80 group-hover:opacity-100 transition-opacity">
                {project.tags.map(tag => (
                    <span key={tag} className="text-[9px] font-mono text-gray-500 flex items-center gap-1">
                        <span className="w-1 h-1 rounded-full bg-white/20" />
                        {tag}
                    </span>
                ))}
            </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
