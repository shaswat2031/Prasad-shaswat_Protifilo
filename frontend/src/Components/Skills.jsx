import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Code2, 
  Layout, 
  Server, 
  Database, 
  Terminal, 
  Cpu, 
  ArrowRight, 
  Binary, 
  ChevronRight,
  Monitor
} from "lucide-react";

const skillCategories = [
  {
    id: "languages",
    label: "Languages",
    icon: Code2,
    skills: ["JavaScript", "Python", "Java", "HTML5", "CSS3"],
    color: "#f59e0b",
    description: "The core syntax used to command the digital world."
  },
  {
    id: "frontend",
    label: "Frontend",
    icon: Layout,
    skills: ["React.js", "Tailwind CSS", "Framer Motion", "Vite"],
    color: "#3b82f6",
    description: "Architecting interactive and fluid user experiences."
  },
  {
    id: "backend",
    label: "Backend",
    icon: Server,
    skills: ["Node.js", "Express", "Flask", "REST APIs"],
    color: "#10b981",
    description: "Building the robust logic behind the interface."
  },
  {
    id: "database",
    label: "Database",
    icon: Database,
    skills: ["MongoDB", "MySQL", "PostgreSQL", "Redis"],
    color: "#ec4899",
    description: "Structuring and persisting critical data assets."
  },
  {
    id: "tools",
    label: "Tools",
    icon: Terminal,
    skills: ["Git", "Docker", "Postman", "Vercel"],
    color: "#8b5cf6",
    description: "Modern toolkits for accelerated development cycles."
  },
  {
    id: "concepts",
    label: "Concepts",
    icon: Cpu,
    skills: ["DS & Algo", "OOP", "System Design"],
    color: "#6366f1",
    description: "The fundamental principles of computer science."
  }
];

const Skills = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section id="skills" className="py-32 bg-[#020202] relative overflow-hidden">
      {/* Cinematic Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-600/5 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10 max-w-7xl">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-24">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 text-blue-400 font-mono text-xs tracking-[0.4em] mb-6"
            >
              <Binary size={16} />
              <span>TECHNICAL ARSENAL</span>
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-8xl font-bold text-white tracking-tighter leading-none"
            >
              Commanding <br />
              <span className="text-gray-700 italic">Technology.</span>
            </motion.h2>
          </div>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-gray-500 text-lg max-w-sm border-l border-white/10 pl-8"
          >
            A curated suite of powerful tools and languages customized for building next-generation applications.
          </motion.p>
        </div>

        {/* List-Based Interactive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-12">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group cursor-default"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="p-4 bg-white/5 rounded-2xl border border-white/10 group-hover:border-white/30 transition-all duration-500">
                    <category.icon size={28} className="text-white group-hover:scale-110 transition-transform" />
                </div>
                <div className="h-[1px] flex-grow bg-white/10 group-hover:bg-white/30 transition-colors" />
                <span className="text-white/20 font-mono text-xs">0{index + 1}</span>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                    {category.label}
                    <motion.div
                        animate={{ x: hoveredIndex === index ? 5 : 0, opacity: hoveredIndex === index ? 1 : 0 }}
                        className="text-blue-400"
                    >
                        <ChevronRight size={20} />
                    </motion.div>
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                    {category.description}
                </p>

                <div className="pt-4 flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                        <span 
                            key={skill} 
                            className="text-sm text-gray-300 font-mono relative overflow-hidden group/skill px-2 py-1"
                        >
                            <span className="relative z-10">{skill}</span>
                            <span className="absolute bottom-0 left-0 w-full h-[1px] bg-white/10 group-hover/skill:h-full group-hover/skill:bg-white/5 transition-all" />
                        </span>
                    ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Decorative Floating Status */}
      <div className="absolute bottom-12 right-12 hidden lg:flex items-center gap-4 text-[10px] font-mono text-gray-700 uppercase tracking-widest">
        <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
        <span>Systems Online</span>
        <div className="w-[100px] h-[1px] bg-white/5" />
        <span>Core_V3.0.2</span>
      </div>
    </section>
  );
};

export default Skills;
