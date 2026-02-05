import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Code2,
  Database,
  Layout,
  Server,
  Terminal,
  Cpu,
  Hash
} from "lucide-react";

// Lucide doesn't have brand icons, so we mix in a few dedicated brand libraries or use generic fallbacks
// For this 'out of the box' design, we'll use abstract representations + coloring to denote specific tech
// This creates a cleaner, more high-tech aesthetic than just slapping logos everywhere.

const skillCategories = [
  {
    id: "languages",
    label: "Languages",
    icon: Code2,
    color: "from-yellow-400 to-orange-500",
    skills: ["JavaScript", "Python", "Java", "HTML5", "CSS3"]
  },
  {
    id: "frontend",
    label: "Frontend",
    icon: Layout,
    color: "from-cyan-400 to-blue-500",
    skills: ["React.js", "Tailwind CSS", "Bootstrap", "Framer Motion"]
  },
  {
    id: "backend",
    label: "Backend",
    icon: Server,
    color: "from-green-400 to-emerald-600",
    skills: ["Node.js", "Express", "Flask", "REST APIs"]
  },
  {
    id: "database",
    label: "Database",
    icon: Database,
    color: "from-pink-400 to-rose-600",
    skills: ["MongoDB", "MySQL", "PostgreSQL"]
  },
  {
    id: "tools",
    label: "Tools",
    icon: Terminal,
    color: "from-purple-400 to-indigo-600",
    skills: ["Git", "Docker", "Postman", "Vercel"]
  },
  {
    id: "concepts",
    label: "Concepts",
    icon: Cpu,
    color: "from-red-400 to-orange-600",
    skills: ["DS & Algo", "OOP", "System Design"]
  }
];

const Skills = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="skills" className="min-h-screen bg-[#050505] py-24 relative overflow-hidden flex flex-col justify-center">

      {/* Background Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10 max-w-6xl">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-indigo-400 text-sm font-medium mb-6"
          >
            <Cpu size={16} />
            <span>Technical Arsenal</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Commanding <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Technology</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            A curated suite of powerful tools and languages customized for building next-generation applications.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-start">

          {/* Navigation Pylons (Tabs) */}
          <div className="w-full lg:w-1/3 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-1 gap-4">
            {skillCategories.map((cat, index) => (
              <TabButton
                key={cat.id}
                category={cat}
                isActive={activeTab === index}
                onClick={() => setActiveTab(index)}
              />
            ))}
          </div>

          {/* Main Display Area (Holographic Deck) */}
          <div className="w-full lg:w-2/3 min-h-[400px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 relative overflow-hidden group"
              >
                {/* Decorative Background Gradient tied to category color */}
                <div className={`absolute -right-20 -top-20 w-80 h-80 bg-gradient-to-br ${skillCategories[activeTab].color} opacity-10 rounded-full blur-[80px] pointer-events-none`} />

                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-8 border-b border-white/10 pb-6">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${skillCategories[activeTab].color} bg-opacity-20`}>
                      {React.createElement(skillCategories[activeTab].icon, { size: 32, className: "text-white" })}
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-white">{skillCategories[activeTab].label}</h3>
                      <p className="text-gray-400 text-sm">Specialized competencies</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                    {skillCategories[activeTab].skills.map((skill, idx) => (
                      <SkillCard key={skill} skill={skill} index={idx} color={skillCategories[activeTab].color} />
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

const TabButton = ({ category, isActive, onClick }) => (
  <button
    onClick={onClick}
    className={`relative group flex items-center gap-4 p-4 rounded-xl transition-all duration-300 w-full text-left
            ${isActive ? "bg-white/10 border-white/20" : "bg-transparent border-transparent hover:bg-white/5"}
            border
        `}
  >
    {isActive && (
      <motion.div
        layoutId="activeTabIndicator"
        className={`absolute inset-0 rounded-xl bg-gradient-to-r ${category.color} opacity-10`}
      />
    )}

    <div className={`p-2 rounded-lg transition-colors duration-300 ${isActive ? "text-white" : "text-gray-500 group-hover:text-gray-300"}`}>
      {React.createElement(category.icon, { size: 24 })}
    </div>

    <span className={`font-semibold transition-colors duration-300 ${isActive ? "text-white" : "text-gray-500 group-hover:text-gray-300"}`}>
      {category.label}
    </span>

    {/* Hover Arrow */}
    <div className={`ml-auto transition-opacity duration-300 ${isActive ? "opacity-100 text-white" : "opacity-0"}`}>
      →
    </div>
  </button>
);

const SkillCard = ({ skill, index, color }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1 }}
    className="relative group cursor-default"
  >
    <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    <div className="p-4 rounded-xl bg-[#0a0a0a] border border-white/10 relative z-10 hover:border-white/30 transition-colors duration-300 h-24 flex flex-col justify-end">
      {/* Abstract Tech Icon representation */}
      <div className="mb-auto opacity-50">
        <Hash size={16} className="text-gray-500" />
      </div>

      <p className="font-bold text-gray-200 group-hover:text-white transition-colors">{skill}</p>
      <div className={`h-1 w-0 group-hover:w-full bg-gradient-to-r ${color} transition-all duration-300 rounded-full mt-2`} />
    </div>
  </motion.div>
);

export default Skills;
