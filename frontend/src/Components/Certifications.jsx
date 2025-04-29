import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaAward,
  FaArrowRight,
  FaTimes,
  FaExternalLinkAlt,
} from "react-icons/fa";

// Import images
import bootcampImage from "../Assets/bootcamp.jpg";
import cdcImage from "../Assets/cdc.jpg";
import cyberSecurityImage from "../Assets/cyber.jpg";
import ciscoImage from "../Assets/cybersecurity.jpg";
import figmaImage from "../Assets/Figma.png";
import hackathonImage from "../Assets/hackthon4.0.png";
import myOnsiteImage from "../Assets/onmyhealth.jpg";

// Define your certification data with images
const certifications = [
  {
    title: "Hackathon of Vadodara 4.0",
    organization: "Parul Institute of Innovation",
    date: "October 2023",
    description:
      "Organized by Parul Institute of Innovation and Entrepreneurship Research Center, this hackathon focused on fostering creativity and innovation.",
    image: hackathonImage,
    skills: ["Problem Solving", "Team Collaboration", "Innovation"],
    category: "Competition",
  },
  {
    title: "Figma Course Certification",
    organization: "Udemy",
    date: "August 2023",
    description:
      "This course provided in-depth knowledge of Figma, covering essential design principles and techniques for creating user-friendly designs.",
    image: figmaImage,
    skills: ["UI/UX Design", "Prototyping", "Design Thinking"],
    category: "Design",
  },
  {
    title: "MyOnSite Healthcare Hackathon",
    organization: "Parul University",
    date: "January 2024",
    description:
      "A 36-hour intensive hackathon supported by JBT Hospitality and MedinoAi, where teams developed innovative healthcare solutions.",
    image: myOnsiteImage,
    skills: ["Healthcare Tech", "Rapid Prototyping", "Presentation"],
    category: "Competition",
  },
  {
    title: "Cisco Certificate of Computer Networks",
    organization: "Cisco",
    date: "November 2023",
    description:
      "This certification validated your understanding of networking concepts, covering topics like network design and secure networks.",
    image: ciscoImage,
    skills: ["Network Architecture", "Network Security", "Protocols"],
    category: "Technical",
  },
  {
    title: "CDC Coordinator in GLOBAL FUNFEST",
    organization: "Career Development Cell",
    date: "March 2024",
    description:
      "As a coordinator, you organized and managed GLOBAL FUNFEST 2024, facilitating networking, skill development, and fun.",
    image: cdcImage,
    skills: ["Event Management", "Leadership", "Communication"],
    category: "Leadership",
  },
  {
    title: "Cyber Security Bootcamp",
    organization: "60-day Intensive Program",
    date: "February 2024",
    description:
      "This boot camp provided a comprehensive overview of cybersecurity principles, including threat detection and risk management.",
    image: cyberSecurityImage,
    skills: ["Cybersecurity", "Threat Detection", "Security Protocols"],
    category: "Technical",
  },
  {
    title: "Full Stack Web Development",
    organization: "Udemy",
    date: "December 2023",
    description:
      "This bootcamp covered front-end and back-end technologies, equipping you with the skills to build dynamic web applications.",
    image: bootcampImage,
    skills: ["React", "Node.js", "MongoDB", "Express"],
    category: "Technical",
  },
];

const categoryColors = {
  Technical: {
    bg: "from-blue-500/10 to-blue-600/10",
    border: "border-blue-500/30",
    text: "text-blue-400",
    chip: "bg-blue-500/20 text-blue-300",
  },
  Design: {
    bg: "from-purple-500/10 to-purple-600/10",
    border: "border-purple-500/30",
    text: "text-purple-400",
    chip: "bg-purple-500/20 text-purple-300",
  },
  Competition: {
    bg: "from-emerald-500/10 to-emerald-600/10",
    border: "border-emerald-500/30",
    text: "text-emerald-400",
    chip: "bg-emerald-500/20 text-emerald-300",
  },
  Leadership: {
    bg: "from-amber-500/10 to-amber-600/10",
    border: "border-amber-500/30",
    text: "text-amber-400",
    chip: "bg-amber-500/20 text-amber-300",
  },
};

const Certifications = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedCert, setSelectedCert] = useState(null);

  const filteredCertifications =
    activeCategory === "all"
      ? certifications
      : certifications.filter((cert) => cert.category === activeCategory);

  const categories = [
    { id: "all", name: "All" },
    { id: "Technical", name: "Technical" },
    { id: "Design", name: "Design" },
    { id: "Competition", name: "Competitions" },
    { id: "Leadership", name: "Leadership" },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", damping: 15 },
    },
  };

  return (
    <section
      id="certifications"
      className="py-20 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-gray-200"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block p-1.5 rounded-full bg-gray-800/50 border border-gray-700 shadow-inner mb-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500/30 to-purple-600/30 flex items-center justify-center">
              <FaAward className="text-indigo-400" size={20} />
            </div>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">
              Certifications & Achievements
            </span>
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto">
            Credentials that reflect my journey of continuous learning and
            professional growth
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="flex justify-center flex-wrap gap-2 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === category.id
                  ? "bg-gradient-to-r from-indigo-500/30 to-purple-500/30 text-white shadow-lg shadow-indigo-600/10 border border-indigo-500/40"
                  : "bg-gray-800/50 text-gray-400 hover:text-gray-300 border border-gray-700/50"
              }`}
              onClick={() => setActiveCategory(category.id)}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              {category.name}
            </motion.button>
          ))}
        </motion.div>

        {/* Certificates Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {filteredCertifications.map((cert, index) => {
            const colorScheme = categoryColors[cert.category];

            return (
              <motion.div
                key={index}
                className={`group bg-gray-800/40 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700/50 hover:border-${cert.category.toLowerCase()}-500/40 transition-all duration-300`}
                variants={cardVariants}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                onClick={() => setSelectedCert(cert)}
              >
                <div className="relative h-48 overflow-hidden">
                  <div
                    className={`absolute inset-0 bg-gradient-to-b ${colorScheme.bg} mix-blend-overlay opacity-80`}
                  ></div>
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent"></div>

                  <div className="absolute top-3 right-3">
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${colorScheme.chip} ${colorScheme.border}`}
                    >
                      {cert.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-semibold text-white group-hover:text-indigo-300 transition-colors">
                    {cert.title}
                  </h3>

                  <div className="text-sm text-gray-400 mt-1 mb-4">
                    {cert.organization} • {cert.date}
                  </div>

                  <div className="flex gap-2 flex-wrap mb-4">
                    {cert.skills.slice(0, 2).map((skill, idx) => (
                      <span
                        key={idx}
                        className={`px-2 py-1 text-xs ${colorScheme.chip} rounded-md ${colorScheme.border}`}
                      >
                        {skill}
                      </span>
                    ))}
                    {cert.skills.length > 2 && (
                      <span className="px-2 py-1 text-xs bg-gray-700/50 text-gray-400 rounded-md border border-gray-600/30">
                        +{cert.skills.length - 2} more
                      </span>
                    )}
                  </div>

                  <button
                    className={`w-full mt-2 px-4 py-2 rounded-lg flex items-center justify-center ${colorScheme.text} bg-gray-800/70 border ${colorScheme.border} group-hover:bg-gray-800 transition-all text-sm`}
                  >
                    View Details
                    <FaExternalLinkAlt className="ml-2 text-xs opacity-70" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Detail Modal */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCert(null)}
          >
            <motion.div
              className="bg-gray-850 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-auto border border-gray-700/50"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <div className="absolute top-4 right-4 z-10">
                  <button
                    className="w-9 h-9 rounded-full bg-black/50 backdrop-blur-md border border-gray-700/50 text-gray-300 flex items-center justify-center hover:bg-gray-800 transition-colors"
                    onClick={() => setSelectedCert(null)}
                  >
                    <FaTimes size={14} />
                  </button>
                </div>

                <div className="h-64 md:h-80 overflow-hidden relative">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${
                      categoryColors[selectedCert.category].bg
                    } mix-blend-overlay opacity-60`}
                  ></div>
                  <img
                    src={selectedCert.image}
                    alt={selectedCert.title}
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent"></div>
                </div>
              </div>

              <div className="px-6 md:px-8 pt-6 pb-8 -mt-16 relative">
                <div className="bg-gray-850 border border-gray-700/50 rounded-xl p-6 shadow-xl mb-6">
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-4 ${
                      categoryColors[selectedCert.category].chip
                    } ${categoryColors[selectedCert.category].border}`}
                  >
                    {selectedCert.category}
                  </span>

                  <h2 className="text-2xl font-bold text-white mb-2">
                    {selectedCert.title}
                  </h2>

                  <div className="flex items-center text-gray-400 mb-6">
                    <span
                      className={`font-medium ${
                        categoryColors[selectedCert.category].text
                      }`}
                    >
                      {selectedCert.organization}
                    </span>
                    <span className="mx-2">•</span>
                    <span>{selectedCert.date}</span>
                  </div>

                  <div className="prose prose-invert max-w-none mb-6">
                    <p className="text-gray-300">{selectedCert.description}</p>
                  </div>

                  <div>
                    <h3 className="text-sm uppercase tracking-wider text-gray-400 font-semibold mb-3">
                      Skills Acquired
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedCert.skills.map((skill, idx) => (
                        <span
                          key={idx}
                          className={`px-3 py-1.5 ${
                            categoryColors[selectedCert.category].chip
                          } rounded-md ${
                            categoryColors[selectedCert.category].border
                          }`}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex justify-end">
                  <button
                    className="px-6 py-2.5 bg-gradient-to-r from-indigo-600/80 to-purple-600/80 hover:from-indigo-600 hover:to-purple-600 text-white rounded-lg font-medium transition-colors shadow-lg shadow-indigo-900/20"
                    onClick={() => setSelectedCert(null)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Certifications;
