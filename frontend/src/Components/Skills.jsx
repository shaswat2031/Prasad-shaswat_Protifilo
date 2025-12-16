import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaGitAlt,
  FaGithub,
  FaJsSquare,
  FaPython,
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
  SiTailwindcss,
  SiDocker,
} from "react-icons/si";

// Main Skills Component
const Skills = () => {
  // State to manage the currently selected skill category
  const [activeCategory, setActiveCategory] = useState("all");
  // State to track which skill card is being hovered over for targeted animations
  const [hoveredSkill, setHoveredSkill] = useState(null);

  // Data for all skills, categorized and with associated info
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
      id: "python",
      name: "Python",
      icon: <FaPython />,
      color: "#3776ab",
      category: "languages",
      learning: false,
    },
    {
      id: "java",
      name: "Java (Core)",
      icon: <FaCode />,
      color: "#007396",
      category: "languages",
      learning: false,
    },
    {
      id: "html",
      name: "HTML",
      icon: <FaCode />,
      color: "#e34c26",
      category: "languages",
      learning: false,
    },
    {
      id: "css",
      name: "CSS",
      icon: <FaCode />,
      color: "#264de4",
      category: "languages",
      learning: false,
    },

    // Frontend Frameworks & Libraries
    {
      id: "react",
      name: "React.js",
      icon: <FaReact />,
      color: "#61dafb",
      category: "frontend",
      learning: false,
    },
    {
      id: "tailwind",
      name: "Tailwind CSS",
      icon: <SiTailwindcss />,
      color: "#38b2ac",
      category: "frontend",
      learning: false,
    },
    {
      id: "bootstrap",
      name: "Bootstrap",
      icon: <FaCode />,
      color: "#7952b3",
      category: "frontend",
      learning: false,
    },

    // Backend Frameworks & Libraries
    {
      id: "nodejs",
      name: "Node.js",
      icon: <FaNodeJs />,
      color: "#68a063",
      category: "backend",
      learning: false,
    },
    {
      id: "flask",
      name: "Flask",
      icon: <SiFlask />,
      color: "#ffffff",
      category: "backend",
      learning: false,
    },
    {
      id: "restapi",
      name: "REST APIs",
      icon: <FaServer />,
      color: "#009688",
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
      color: "#ffffff",
      category: "devops",
      learning: false,
    },
    {
      id: "docker",
      name: "Docker",
      icon: <SiDocker />,
      color: "#2496ed",
      category: "devops",
      learning: false,
    },
    {
      id: "postman",
      name: "Postman",
      icon: <FaTools />,
      color: "#ff6c37",
      category: "devops",
      learning: false,
    },
    {
      id: "vercel",
      name: "Vercel",
      icon: <FaCloud />,
      color: "#ffffff",
      category: "devops",
      learning: false,
    },

    // Concepts & Other Skills
    {
      id: "uiux",
      name: "UI/UX Design",
      icon: <FaTools />,
      color: "#ff4088",
      category: "concepts",
      learning: false,
      description: "Creating intuitive user interfaces and experiences",
    },
    {
      id: "oop",
      name: "OOP",
      icon: <FaCode />,
      color: "#3949ab",
      category: "concepts",
      learning: false,
      description: "Object-Oriented Programming principles",
    },
    {
      id: "dsa",
      name: "DS & Algorithms",
      icon: <FaBrain />,
      color: "#43a047",
      category: "concepts",
      learning: false,
      description: "Problem-solving with efficient data structures",
    },

    // Data Structures & Algorithms Sub-skills
    {
      id: "arrays",
      name: "Arrays",
      icon: <FaCode />,
      color: "#00897b",
      category: "dsa",
      learning: false,
    },
    {
      id: "strings",
      name: "Strings",
      icon: <FaCode />,
      color: "#00897b",
      category: "dsa",
      learning: false,
    },
    {
      id: "linkedlists",
      name: "Linked Lists",
      icon: <FaCode />,
      color: "#00897b",
      category: "dsa",
      learning: false,
    },
    {
      id: "stacks",
      name: "Stacks",
      icon: <FaCode />,
      color: "#00897b",
      category: "dsa",
      learning: false,
    },
    {
      id: "queues",
      name: "Queues",
      icon: <FaCode />,
      color: "#00897b",
      category: "dsa",
      learning: false,
    },
    {
      id: "sorting",
      name: "Sorting Algorithms",
      icon: <FaCode />,
      color: "#00897b",
      category: "dsa",
      learning: false,
    },
  ];

  // Categories for filtering buttons
  const categories = [
    { id: "all", name: "All Skills", icon: <FaLaptopCode /> },
    { id: "languages", name: "Languages", icon: <FaCode /> },
    { id: "frontend", name: "Frontend", icon: <FaReact /> },
    { id: "backend", name: "Backend", icon: <FaServer /> },
    { id: "database", name: "Database", icon: <FaDatabase /> },
    { id: "devops", name: "Tools & Platforms", icon: <FaTools /> },
    { id: "concepts", name: "Concepts", icon: <FaBrain /> },
    { id: "dsa", name: "DS & Algorithms", icon: <FaCode /> },
  ];

  // Filter skills based on the active category
  const filteredSkills =
    activeCategory === "all"
      ? skillsData.filter((skill) => skill.category !== "dsa") // Exclude DSA sub-skills from 'All' view
      : skillsData.filter((skill) => skill.category === activeCategory);

  // Animation variants for the main container (staggered children)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 },
    },
  };

  // Animation variants for each skill item
  const itemVariants = {
    hidden: { y: 20, opacity: 0, scale: 0.95 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: { type: "spring", stiffness: 120, damping: 12 },
    },
    hover: {
      y: -8,
      scale: 1.05,
      transition: { type: "spring", stiffness: 300 },
    },
  };

  // Animation variants for the icons within the skill items
  const iconVariants = {
    hover: {
      rotate: [0, -15, 15, -10, 10, 0],
      transition: { duration: 0.7, ease: "easeInOut" },
    },
  };

  return (
    <section
      id="skills"
      className="py-16 md:py-24 bg-portfolio-dark text-white min-h-screen relative overflow-hidden"
    >
      {/* Background glow effects for aesthetic appeal */}
      <div className="absolute top-1/4 -left-24 w-48 h-48 md:w-72 md:h-72 bg-portfolio-primary rounded-full filter blur-3xl opacity-10"></div>
      <div className="absolute bottom-1/4 -right-24 w-48 h-48 md:w-72 md:h-72 bg-portfolio-secondary rounded-full filter blur-3xl opacity-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-10 md:mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block mb-4 md:mb-6">
            <div className="relative">
              <div className="absolute inset-0 bg-portfolio-primary rounded-xl blur-md opacity-40"></div>
              <div className="relative w-12 h-12 md:w-16 md:h-16 mx-auto bg-portfolio-dark/50 rounded-xl flex items-center justify-center border-2 border-portfolio-primary/50 shadow-lg shadow-portfolio-primary/20">
                <FaLaptopCode className="text-portfolio-primary text-2xl md:text-3xl" />
              </div>
            </div>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-portfolio-primary to-portfolio-secondary">
              Technical Expertise
            </span>
          </h2>
          <motion.div
            className="h-1 w-24 mx-auto bg-gradient-to-r from-portfolio-primary to-portfolio-secondary rounded-full mb-5"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
          />
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            My comprehensive technology stack, honed through real-world projects
            and continuous learning.
          </p>
        </motion.div>

        {/* Category Filter Buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              className={`relative px-4 py-2 rounded-lg flex items-center gap-2 text-sm transition-all duration-300 font-semibold ${activeCategory === category.id
                ? "text-white bg-gradient-to-r from-portfolio-primary to-portfolio-secondary shadow-lg shadow-portfolio-primary/40"
                : "text-gray-300 bg-portfolio-dark/60 hover:bg-portfolio-dark/80 border border-gray-700 hover:border-gray-500"
                }`}
              onClick={() => setActiveCategory(category.id)}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-base">{category.icon}</span>
              <span>{category.name}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {filteredSkills.map((skill) => (
            <motion.div
              key={skill.id}
              className="bg-portfolio-dark/50 border border-gray-700 rounded-xl p-5 flex flex-col items-center justify-center text-center shadow-md transition-all duration-300 h-48 hover:border-portfolio-primary/50 hover:shadow-portfolio-primary/20 backdrop-blur-sm"
              variants={itemVariants}
              whileHover="hover"
              onHoverStart={() => setHoveredSkill(skill.id)}
              onHoverEnd={() => setHoveredSkill(null)}
            >
              {/* Skill Icon */}
              <motion.div
                className="text-5xl mb-4"
                style={{ color: skill.color }}
                variants={iconVariants}
              >
                {skill.icon}
              </motion.div>

              {/* Skill Name */}
              <h3 className="font-bold text-white text-base leading-tight">
                {skill.name}
              </h3>

              {/* Skill Description (for concepts) */}
              {skill.description && (
                <p className="text-gray-400 text-xs mt-2">
                  {skill.description}
                </p>
              )}

              {/* Learning Indicator */}
              {skill.learning && (
                <div className="absolute top-2 right-2 px-2 py-0.5 bg-portfolio-secondary/50 text-white rounded-full text-xs font-medium border border-portfolio-secondary/50">
                  Learning
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Closing Note */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <p className="max-w-3xl mx-auto text-gray-500">
            Technology evolves rapidly, and so do I. This toolkit represents my
            current expertise, but I'm always exploring new tools and frameworks
            to stay at the cutting edge.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
