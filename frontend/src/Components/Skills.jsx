import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaGitAlt,
  FaGithub,
  FaJsSquare,
  FaPython,
  FaLinux,
  FaWindows,
  FaReact,
  FaNodeJs,
  FaCloud,
  FaLaptopCode,
  FaDatabase,
  FaServer,
  FaTools,
  FaCode,
  FaBrain,
  FaArrowRight,
} from "react-icons/fa";
import {
  SiFlask,
  SiMongodb,
  SiMysql,
  SiExpress,
  SiTailwindcss,
  SiTypescript,
  SiNextdotjs,
  SiDocker,
  SiPostgresql,
} from "react-icons/si";

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const categories = [
    { id: "all", name: "All Skills", icon: <FaLaptopCode /> },
    { id: "languages", name: "Languages", icon: <FaCode /> },
    { id: "frontend", name: "Frontend", icon: <FaReact /> },
    { id: "backend", name: "Backend", icon: <FaServer /> },
    { id: "database", name: "Database", icon: <FaDatabase /> },
    { id: "devops", name: "DevOps", icon: <SiDocker /> },
    { id: "learning", name: "Learning", icon: <FaBrain /> },
  ];

  const skillsData = [
    // Programming Languages
    {
      id: "javascript",
      name: "JavaScript",
      icon: <FaJsSquare />,
      color: "#f7df1e",
      category: "languages",
      learning: false,
    },
    {
      id: "typescript",
      name: "TypeScript",
      icon: <SiTypescript />,
      color: "#3178c6",
      category: "languages",
      learning: true,
    },
    {
      id: "python",
      name: "Python",
      icon: <FaPython />,
      color: "#3776ab",
      category: "languages",
      learning: false,
    },

    // Frontend
    {
      id: "react",
      name: "React.js",
      icon: <FaReact />,
      color: "#61dafb",
      category: "frontend",
      learning: false,
    },
    {
      id: "nextjs",
      name: "Next.js",
      icon: <SiNextdotjs />,
      color: "#000000",
      category: "frontend",
      learning: true,
    },
    {
      id: "tailwind",
      name: "Tailwind CSS",
      icon: <SiTailwindcss />,
      color: "#38b2ac",
      category: "frontend",
      learning: false,
    },

    // Backend
    {
      id: "nodejs",
      name: "Node.js",
      icon: <FaNodeJs />,
      color: "#68a063",
      category: "backend",
      learning: false,
    },
    {
      id: "express",
      name: "Express.js",
      icon: <SiExpress />,
      color: "#000000",
      category: "backend",
      learning: false,
    },
    {
      id: "flask",
      name: "Flask",
      icon: <SiFlask />,
      color: "#000000",
      category: "backend",
      learning: false,
    },

    // Databases
    {
      id: "mongodb",
      name: "MongoDB",
      icon: <SiMongodb />,
      color: "#47a248",
      category: "database",
      learning: false,
    },
    {
      id: "postgresql",
      name: "PostgreSQL",
      icon: <SiPostgresql />,
      color: "#336791",
      category: "database",
      learning: false,
    },
    {
      id: "mysql",
      name: "MySQL",
      icon: <SiMysql />,
      color: "#4479a1",
      category: "database",
      learning: false,
    },

    // Tools & Platforms
    {
      id: "git",
      name: "Git",
      icon: <FaGitAlt />,
      color: "#f05032",
      category: "devops",
      learning: false,
    },
    {
      id: "github",
      name: "GitHub",
      icon: <FaGithub />,
      color: "#181717",
      category: "devops",
      learning: false,
    },
    {
      id: "docker",
      name: "Docker",
      icon: <SiDocker />,
      color: "#2496ed",
      category: "devops",
      learning: true,
    },
    {
      id: "linux",
      name: "Linux",
      icon: <FaLinux />,
      color: "#fcc624",
      category: "devops",
      learning: false,
    },
    {
      id: "windows",
      name: "Windows",
      icon: <FaWindows />,
      color: "#0078d6",
      category: "devops",
      learning: false,
    },
    {
      id: "cloud",
      name: "Cloud Services",
      icon: <FaCloud />,
      color: "#0089d6",
      category: "devops",
      learning: true,
    },
  ];

  const filteredSkills =
    activeCategory === "all"
      ? skillsData
      : activeCategory === "learning"
      ? skillsData.filter((skill) => skill.learning)
      : skillsData.filter((skill) => skill.category === activeCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0, scale: 0.9 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: { type: "spring", stiffness: 100, damping: 10 },
    },
    hover: {
      y: -8,
      scale: 1.05,
      transition: { type: "spring", stiffness: 300 },
    },
  };

  const iconVariants = {
    hover: {
      rotate: [0, -15, 15, 0],
      y: [0, -5, 0],
      transition: { duration: 0.6 },
    },
  };

  return (
    <section
      id="skills"
      className="py-20 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 min-h-screen relative overflow-hidden"
    >
      {/* Floating background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => {
          const skill = skillsData[i % skillsData.length];
          return (
            <motion.div
              key={i}
              className="absolute text-gray-700 opacity-10"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                fontSize: `${Math.random() * 3 + 2}rem`,
                color: skill.color,
              }}
              animate={{
                y: [0, Math.random() * 40 - 20],
                x: [0, Math.random() * 40 - 20],
                rotate: [0, Math.random() * 360],
              }}
              transition={{
                duration: Math.random() * 20 + 10,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "linear",
              }}
            >
              {skill.icon}
            </motion.div>
          );
        })}
      </div>

      {/* Glow effects */}
      <div className="absolute top-1/4 -left-20 w-64 h-64 bg-indigo-600 rounded-full filter blur-3xl opacity-10"></div>
      <div className="absolute bottom-1/4 -right-20 w-64 h-64 bg-purple-600 rounded-full filter blur-3xl opacity-10"></div>

      <div className="max-w-6xl mx-auto px-4 md:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex mb-6"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-indigo-600 rounded-xl blur-md opacity-30"></div>
              <div className="relative w-16 h-16 mx-auto bg-gray-800 rounded-xl flex items-center justify-center border-2 border-indigo-500/50 shadow-lg shadow-indigo-900/20">
                <FaCode className="text-indigo-400 text-2xl" />
              </div>
            </div>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
              Technical Expertise
            </span>
          </h2>

          <motion.div
            className="h-1 w-24 mx-auto bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mb-5"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          />

          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            My comprehensive technology stack, honed through real-world projects
            and continuous learning.
          </p>

          {/* Quote Section */}
          <motion.div
            className="mt-8 p-6 bg-gray-800/30 backdrop-blur-sm rounded-xl border border-gray-700/50"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <blockquote className="text-gray-300 text-lg italic mb-3">
              "Technology is best when it brings people together."
            </blockquote>
            <cite className="text-gray-400 text-sm">— Matt Mullenweg</cite>
          </motion.div>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              className={`relative px-4 py-2 rounded-lg flex items-center gap-2 text-sm transition-all duration-300 font-medium ${
                activeCategory === category.id
                  ? "text-white bg-gradient-to-r from-indigo-600 to-purple-600 shadow-lg shadow-indigo-900/30"
                  : "text-gray-300 bg-gray-800/50 hover:bg-gray-700/50 border border-gray-700 hover:border-gray-600"
              }`}
              onClick={() => setActiveCategory(category.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-base">{category.icon}</span>
              <span>{category.name}</span>
              {category.id === "learning" && (
                <span className="absolute -top-1 -right-1 flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-purple-500"></span>
                </span>
              )}
            </motion.button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 md:gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {filteredSkills.map((skill) => (
            <motion.div
              key={skill.id}
              className={`bg-gray-800/50 border border-gray-700 rounded-xl p-5 flex flex-col items-center shadow-md transition-all duration-300 h-full hover:shadow-indigo-900/20 hover:border-indigo-500/30 backdrop-blur-sm ${
                hoveredSkill === skill.id ? "scale-105" : ""
              }`}
              variants={itemVariants}
              whileHover="hover"
              onHoverStart={() => setHoveredSkill(skill.id)}
              onHoverEnd={() => setHoveredSkill(null)}
            >
              {/* Learning indicator */}
              {skill.learning && (
                <div className="absolute top-3 right-3">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-purple-500"></span>
                  </span>
                </div>
              )}

              {/* Skill icon with floating effect */}
              <motion.div
                className={`text-4xl mb-4 transition-transform duration-300`}
                style={{ color: skill.color }}
                variants={iconVariants}
              >
                {skill.icon}
              </motion.div>

              <h3 className="font-bold text-white mb-3 text-center text-base">
                {skill.name}
              </h3>

              {/* Remove the proficiency meter section */}

              {/* Learning label */}
              {skill.learning && (
                <div className="mt-3 px-2 py-1 bg-purple-900/30 text-purple-400 rounded-full text-xs font-medium border border-purple-800/30">
                  In Progress
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Current Focus Section */}
        <motion.div
          className="mt-20 bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-gray-700 shadow-xl overflow-hidden"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <div className="flex flex-col md:flex-row gap-6 md:gap-8">
            <div className="flex-shrink-0">
              <div className="relative">
                <div className="absolute -inset-2 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl blur opacity-30"></div>
                <div className="relative w-16 h-16 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl text-white shadow-lg flex items-center justify-center">
                  <FaBrain className="text-2xl" />
                </div>
              </div>
            </div>

            <div className="flex-1">
              <h3 className="text-2xl font-bold text-white mb-3">
                Current Learning Focus
              </h3>
              <p className="text-gray-400 mb-5 text-base">
                Continuously expanding my knowledge. Currently mastering these
                technologies to build more advanced and scalable applications.
              </p>

              <div className="flex flex-wrap gap-3">
                {skillsData
                  .filter((skill) => skill.learning)
                  .map((skill) => (
                    <motion.div
                      key={skill.id}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <div
                        className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium border border-gray-700 bg-gray-800/50`}
                        style={{ color: skill.color }}
                      >
                        <span className="text-lg">{skill.icon}</span>
                        <span>{skill.name}</span>
                        <FaArrowRight className="ml-1 opacity-70" />
                      </div>
                    </motion.div>
                  ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Inspirational Quote Section */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          <div className="relative p-8 bg-gradient-to-r from-gray-800/40 to-gray-900/40 backdrop-blur-sm rounded-2xl border border-gray-700/50 shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/5 to-purple-600/5 rounded-2xl"></div>
            <div className="relative">
              <blockquote className="text-xl md:text-2xl text-gray-200 font-light italic mb-4 leading-relaxed">
                "The only way to do great work is to love what you do."
              </blockquote>
              <cite className="text-gray-400 text-lg">— Steve Jobs</cite>
            </div>
          </div>
        </motion.div>

        {/* Closing Note */}
        <motion.div
          className="mt-12 text-center text-gray-400 text-sm md:text-base"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <p className="max-w-3xl mx-auto">
            Technology evolves rapidly, and so do I. These skills represent my
            current expertise, but I'm always exploring new tools and frameworks
            to stay at the cutting edge.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
