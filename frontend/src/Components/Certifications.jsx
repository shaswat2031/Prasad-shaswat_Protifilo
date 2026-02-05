import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Award,
  Calendar,
  Shield,
  ExternalLink,
  Cpu,
  Globe,
  Users,
  Code
} from "lucide-react";

import hackthonImage from "../Assets/hackthon4.0.png";
import figmaImage from "../Assets/Figma.png";
import onmySiteImage from "../Assets/onmyhealth.jpg";
import CiscoImagenetwork from "../Assets/cybersecurity.jpg";
import cdcimage from "../Assets/cdc.jpg";
import cyberbootcamp from "../Assets/cyber.jpg";
import fullstackImage from "../Assets/bootcamp.jpg";
import enterpenershipImage from "../Assets/enter.png";
import days from "../Assets/30days.png";
import oracle from "../Assets/oracle.png";

const certificates = [
  {
    id: 9,
    title: "Oracle Cloud Infrastructure 2025 AI Foundations",
    issuer: "Oracle",
    date: "Oct 2025",
    image: oracle,
    color: "from-red-500 to-orange-500",
    icon: Cpu,
    category: "AI & Cloud"
  },
  {
    id: 1,
    title: "Hackathon of Vadodara 4.0",
    issuer: "Parul Institute",
    date: "Oct 2023",
    image: hackthonImage,
    color: "from-blue-500 to-indigo-500",
    icon: Code,
    category: "Competition"
  },
  {
    id: 5,
    title: "Global Funfest Coordinator",
    issuer: "Career Development Cell",
    date: "Mar 2024",
    image: cdcimage,
    color: "from-yellow-500 to-amber-500",
    icon: Users,
    category: "Leadership"
  },
  {
    id: 6,
    title: "Cyber Security Bootcamp",
    issuer: "60-Day Intensive",
    date: "Feb 2024",
    image: cyberbootcamp,
    color: "from-green-500 to-emerald-500",
    icon: Shield,
    category: "Security"
  },
  {
    id: 4,
    title: "Cisco Certified Network Associate",
    issuer: "Cisco",
    date: "Nov 2023",
    image: CiscoImagenetwork,
    color: "from-cyan-500 to-blue-500",
    icon: Globe,
    category: "Network"
  },
  {
    id: 8,
    title: "Discovering Entrepreneurship",
    issuer: "Cisco Academy",
    date: "May 2025",
    image: enterpenershipImage,
    color: "from-purple-500 to-pink-500",
    icon: Award,
    category: "Business"
  },
  {
    id: 7,
    title: "Full Stack Web Development",
    issuer: "Udemy",
    date: "Dec 2023",
    image: fullstackImage,
    color: "from-pink-500 to-rose-500",
    icon: Code,
    category: "Development"
  },
  {
    id: 2,
    title: "Figma UI/UX Design",
    issuer: "Udemy",
    date: "Aug 2023",
    image: figmaImage,
    color: "from-orange-500 to-red-500",
    icon: Award,
    category: "Design"
  },
  {
    id: 3,
    title: "Healthcare Hackathon",
    issuer: "Parul University",
    date: "Jan 2024",
    image: onmySiteImage,
    color: "from-teal-500 to-cyan-500",
    icon: Award,
    category: "Hackathon"
  },
  {
    id: 10,
    title: "MERN Full-Stack Course",
    issuer: "30 Days Coding",
    date: "May 2024",
    image: days,
    color: "from-indigo-500 to-violet-500",
    icon: Code,
    category: "Development"
  }
];

const Certifications = () => {
  return (
    <section id="certifications" className="min-h-screen bg-[#050505] py-24 relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="mb-20 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-yellow-500 text-sm font-medium mb-6"
          >
            <Award size={16} />
            <span>Honors & Awards</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Certifications & <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">Validation</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto text-lg">
            Recognized milestones in my technical and professional journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {certificates.map((cert, index) => (
            <CertificateCard key={cert.id} cert={cert} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const CertificateCard = ({ cert, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.05 }}
    className="group relative bg-[#0a0a0a] rounded-2xl border border-white/10 overflow-hidden hover:border-white/20 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
  >
    {/* Image / Header */}
    <div className="h-40 overflow-hidden relative">
      <div className={`absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10`} />
      <img
        src={cert.image}
        alt={cert.title}
        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
      />

      <div className="absolute top-3 right-3 z-20">
        <span className={`px-2 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider bg-black/60 backdrop-blur-md border border-white/10 text-white`}>
          {cert.category}
        </span>
      </div>
    </div>

    {/* Content */}
    <div className="p-5 relative z-20">
      {/* Title */}
      <h3 className="text-lg font-bold text-white mb-2 line-clamp-2 leading-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all">
        {cert.title}
      </h3>

      {/* Metadata */}
      <div className="flex items-center justify-between text-xs text-gray-500 font-mono mt-4 pt-4 border-t border-white/5">
        <span className="flex items-center gap-1.5">
          <Users size={12} />
          {cert.issuer}
        </span>
        <span className="flex items-center gap-1.5">
          <Calendar size={12} />
          {cert.date}
        </span>
      </div>
    </div>

    {/* Glow Effect on Hover */}
    <div className={`absolute inset-0 bg-gradient-to-r ${cert.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`} />

    {/* Border Gradient Bottom */}
    <div className={`absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r ${cert.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300`} />
  </motion.div>
);

export default Certifications;
