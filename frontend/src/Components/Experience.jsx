import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowUpRight, 
  Zap,
  ExternalLink,
  Sparkles,
  Trophy
} from "lucide-react";

const experienceData = [
  {
    id: "full-time",
    title: "Full Stack Developer",
    type: "FULL TIME",
    company: "RYM Grenergy",
    period: "May 2026 – Present",
    duration: "Ongoing Journey",
    location: "Remote / Hybrid",
    description: "Leading the development of high-performance digital systems and scalable web architectures for strategic partners.",
    projects: [
      {
        name: "BoxFox",
        url: "https://boxfox.in/",
        info: "Curated, personalized gift box platform for individuals and corporate clients."
      },
      {
        name: "Synchronous Build Digital",
        url: "https://www.synchronousbuilddigital.com/",
        info: "Digital solution partner focused on synchronized development and technical systems."
      }
    ],
    tech: ["React", "Node.js", "Express", "System Design"],
    color: "from-blue-500 to-indigo-600",
    glow: "rgba(59, 130, 246, 0.5)",
    isCurrent: true
  },
  {
    id: "internship",
    title: "Full Stack Developer",
    type: "INTERNSHIP",
    company: "RYM Grenergy",
    period: "Jan 2026 – Apr 2026",
    duration: "4 Months Milestone",
    location: "Vadodara, Gujarat",
    description: "Contributed to the development of indigenous IoT and fashion platforms through specialized technical competencies.",
    projects: [
      {
        name: "Inventis Labs",
        url: "https://www.inventislabs.com/",
        info: "IoT & AI-powered seismic sensing technology for earthquake early warning."
      },
      {
        name: "Fashquick",
        url: "https://www.fashquick.in/",
        info: "Fashion-sharing platform for hourly clothing rentals."
      },
      {
        name: "RYM Grenergy",
        url: "https://rymgrenergy.com/",
        info: "Sustainable energy solutions and smart automation technology."
      }
    ],
    tech: ["React", "Node.js", "MongoDB", "Tailwind"],
    color: "from-purple-500 to-pink-600",
    glow: "rgba(168, 85, 247, 0.5)",
    isCurrent: false
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 bg-[#020202] relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20">
        <div className="absolute top-1/4 left-10 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10 max-w-6xl">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-blue-400 text-[10px] font-mono tracking-widest uppercase mb-6"
          >
            <Trophy size={14} />
            <span>Professional Career</span>
          </motion.div>
          <h2 className="text-4xl md:text-8xl font-bold text-white mb-6 tracking-tighter">
            The <span className="text-gray-700 italic">Timeline.</span>
          </h2>
        </div>

        <div className="space-y-20">
          {experienceData.map((exp, index) => (
            <ExperienceCard key={exp.id} exp={exp} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ExperienceCard = ({ exp, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="relative"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
        {/* Left Side: Status & Type (The Highlight) */}
        <div className="lg:col-span-4 flex flex-col items-start gap-6 lg:sticky lg:top-32">
            <div className={`relative px-6 py-2 rounded-2xl border bg-black overflow-hidden group/badge`} style={{ borderColor: exp.glow }}>
                <div className={`absolute inset-0 bg-gradient-to-r ${exp.color} opacity-10 group-hover/badge:opacity-20 transition-opacity`} />
                <div className="relative z-10 flex items-center gap-3">
                    {exp.isCurrent ? (
                        <div className="flex items-center gap-2">
                             <div className="w-2 h-2 rounded-full bg-blue-500 animate-ping" />
                             <div className="w-2 h-2 rounded-full bg-blue-500 absolute" />
                        </div>
                    ) : (
                        <Sparkles size={14} className="text-purple-400" />
                    )}
                    <span className={`text-sm font-black tracking-[0.2em] ${exp.isCurrent ? 'text-blue-400' : 'text-purple-400'}`}>
                        {exp.type}
                    </span>
                </div>
            </div>

            <div className="space-y-2">
                <h3 className="text-4xl lg:text-5xl font-bold text-white tracking-tighter">{exp.company}</h3>
                <p className="text-gray-500 font-mono text-sm uppercase tracking-widest">{exp.period}</p>
            </div>

            <div className="flex flex-wrap gap-2">
                {exp.tech.map(t => (
                    <span key={t} className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-[10px] text-gray-500 font-mono">
                        {t}
                    </span>
                ))}
            </div>
        </div>

        {/* Right Side: Details & Projects */}
        <div className="lg:col-span-8 bg-white/[0.02] border border-white/10 rounded-[3rem] p-8 md:p-14 relative overflow-hidden group hover:border-white/20 transition-colors">
            {/* Background Glow Overlay */}
            <div className={`absolute -right-20 -top-20 w-96 h-96 bg-gradient-to-br ${exp.color} opacity-0 group-hover:opacity-5 transition-opacity rounded-full blur-[100px] pointer-events-none`} />

            <div className="space-y-12 relative z-10">
                <div className="space-y-4">
                    <h4 className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.3em] flex items-center gap-2">
                        <Zap size={14} className="text-blue-400" />
                        Focus & Impact
                    </h4>
                    <p className="text-gray-400 text-lg leading-relaxed font-light">
                        {exp.description}
                    </p>
                </div>

                <div className="space-y-6">
                    <h4 className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.3em]">Built & Scaled</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {exp.projects.map((proj) => (
                            <ProjectItem key={proj.name} project={proj} color={exp.isCurrent ? 'blue' : 'purple'} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
      </div>
    </motion.div>
  );
};

const ProjectItem = ({ project, color }) => {
    const [isHovered, setIsHovered] = useState(false);
    const colorClass = color === 'blue' ? 'text-blue-400 border-blue-500/30' : 'text-purple-400 border-purple-500/30';

    return (
        <div 
            className="relative"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <a 
                href={project.url} 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center justify-between p-5 bg-white/5 border border-white/5 rounded-3xl group/link hover:bg-white/10 hover:border-white/20 transition-all h-full"
            >
                <div className="space-y-1">
                    <span className="text-base font-bold text-gray-200 group-hover/link:text-white transition-colors">
                        {project.name}
                    </span>
                    <div className="flex items-center gap-2 text-[10px] text-gray-500 uppercase tracking-widest">
                        <span>External System</span>
                        <ArrowUpRight size={10} />
                    </div>
                </div>
                <div className={`p-2 rounded-xl bg-white/5 ${colorClass} opacity-0 group-hover/link:opacity-100 transition-opacity`}>
                    <ExternalLink size={16} />
                </div>
            </a>

            <AnimatePresence>
                {isHovered && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        className="absolute left-0 bottom-full mb-4 w-72 p-6 bg-[#0c0c0c] border border-white/10 rounded-[2rem] shadow-2xl z-50 pointer-events-none"
                    >
                        <p className="text-xs text-gray-400 leading-relaxed italic">
                            "{project.info}"
                        </p>
                        <div className="absolute bottom-[-6px] left-10 w-3 h-3 bg-[#0c0c0c] border-r border-b border-white/10 rotate-45" />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Experience;
