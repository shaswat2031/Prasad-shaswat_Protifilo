import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Briefcase, Globe, Mail } from "lucide-react";
import {
    FaLaptopCode,
    FaServer,
    FaCode,
    FaUsers,
    FaChevronRight,
    FaChevronDown,
    FaCalendarAlt,
    FaBuilding,
} from "react-icons/fa";

const Experience = () => {
    const [expandedItem, setExpandedItem] = useState(null);

    const experienceData = [
        {
            id: "rym-grenergy",
            company: "RYM Grenergy",
            website: "www.rymgrenergy.com",
            email: "rym.grenergy.info@gmail.com",
            role: "Full Stack Developer",
            period: "01 Jan 2026 – 30 Apr 2026",
            duration: "4 Months",
            type: "Internship",
            color: "from-portfolio-primary to-portfolio-secondary",
            bgAccent: "bg-portfolio-primary/10",
            description: "Contributing to the design, development, and deployment of scalable and efficient applications aligned with RYM Grenergy's goals.",
            details: [
                { icon: <FaLaptopCode />, content: "Design & development of scalable applications" },
                { icon: <FaUsers />, content: "Close collaboration with product & dev teams" },
                { icon: <FaServer />, content: "Backend system optimization & deployment" },
                { icon: <FaCode />, content: "Full Stack implementation using modern tech" },
            ],
        },
    ];

    return (
        <section
            id="experience"
            className="py-16 md:py-24 bg-portfolio-dark text-gray-200 relative overflow-hidden"
        >
            {/* Abstract background elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
                <div className="absolute top-40 left-10 w-48 h-48 md:w-72 md:h-72 bg-portfolio-primary rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
                <div className="absolute top-60 right-10 w-48 h-48 md:w-72 md:h-72 bg-portfolio-secondary rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
                <div className="absolute bottom-40 left-1/2 w-48 h-48 md:w-72 md:h-72 bg-portfolio-accent rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
            </div>

            <div className="max-w-5xl mx-auto px-4 sm:px-6 relative">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-10 md:mb-16"
                >
                    <div className="inline-flex items-center justify-center gap-2 mb-3 px-4 py-2 rounded-full bg-portfolio-primary/10 text-portfolio-primary text-sm font-medium">
                        <Briefcase size={16} />
                        <span>Professional Experience</span>
                    </div>

                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-5 leading-tight">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-portfolio-primary via-portfolio-accent to-portfolio-secondary">
                            Work History
                        </span>
                    </h2>

                    <p className="text-gray-400 max-w-2xl mx-auto text-base sm:text-lg">
                        My professional journey and contributions to real-world projects, applying technical skills to solve business problems.
                    </p>

                    <div className="mt-8 flex justify-center">
                        <div className="h-1 w-20 bg-gradient-to-r from-portfolio-primary via-portfolio-accent to-portfolio-secondary rounded-full"></div>
                    </div>
                </motion.div>

                <div className="grid gap-6 md:gap-8">
                    {experienceData.map((item, index) => (
                        <ExperienceCard
                            key={item.id}
                            item={item}
                            index={index}
                            isExpanded={expandedItem === index}
                            onToggle={() =>
                                setExpandedItem(expandedItem === index ? null : index)
                            }
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

const ExperienceCard = ({ item, index, isExpanded, onToggle }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15 }}
            className="w-full"
        >
            <motion.div
                layoutId={`card-container-${item.id}`}
                className={`bg-portfolio-dark/40 backdrop-blur-lg border border-gray-700/50 rounded-xl overflow-hidden transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-[1.01] ${isExpanded
                    ? `ring-2 ring-offset-2 ring-offset-portfolio-dark ring-portfolio-primary`
                    : ""
                    }`}
                style={{
                    boxShadow: isExpanded
                        ? `0 10px 30px -10px rgba(0, 0, 0, 0.5), 0 0 15px -3px rgba(234, 47, 20, 0.3)`
                        : ''
                }}
            >
                {/* Header */}
                <div
                    onClick={onToggle}
                    className={`p-4 sm:p-6 cursor-pointer transition-colors group ${isExpanded
                        ? `${item.bgAccent}`
                        : "hover:bg-portfolio-dark/60"
                        }`}
                >
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-5">
                        {/* Logo Area - Using Icon since no logo image */}
                        <div className="flex justify-between w-full sm:w-auto items-center">
                            <div
                                className={`flex-shrink-0 p-3 bg-gradient-to-br ${item.color} rounded-xl shadow-lg transform transition-transform group-hover:scale-105`}
                            >
                                <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-portfolio-dark/90 backdrop-blur-sm rounded-lg p-2">
                                    <FaBuilding className="text-white w-full h-full" />
                                </div>
                            </div>

                            {/* Expand Icon for Mobile */}
                            <div className="sm:hidden block">
                                <motion.div
                                    animate={{ rotate: isExpanded ? 90 : 0 }}
                                    transition={{ duration: 0.2 }}
                                    className={`text-gradient bg-clip-text text-transparent bg-gradient-to-r ${item.color} p-2 rounded-full`}
                                >
                                    {isExpanded ? (
                                        <FaChevronDown size={18} />
                                    ) : (
                                        <FaChevronRight size={18} />
                                    )}
                                </motion.div>
                            </div>
                        </div>

                        {/* Info Area */}
                        <div className="flex-1 w-full">
                            <div className="flex flex-col sm:flex-row justify-between items-start gap-2">
                                <h3 className="text-lg sm:text-xl font-bold text-white flex flex-wrap items-center gap-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-portfolio-highlight group-hover:to-white transition-all duration-300">
                                    {item.company}
                                    {item.type && (
                                        <span className="text-xs sm:text-sm font-normal text-portfolio-secondary bg-portfolio-secondary/10 px-2 py-0.5 rounded-md border border-portfolio-secondary/20">
                                            {item.type}
                                        </span>
                                    )}
                                </h3>
                                <div className="text-xs sm:text-sm text-gray-300 flex items-center gap-2 bg-portfolio-dark/60 backdrop-blur-md px-3 py-1 rounded-full shadow-sm mt-1 sm:mt-0">
                                    <FaCalendarAlt size={14} className="text-gray-400" />
                                    <span>{item.period}</span>
                                </div>
                            </div>

                            <div className="mt-3 flex flex-wrap items-center gap-3">
                                <div className="text-base sm:text-lg text-gray-200 font-medium bg-gradient-to-r from-white/90 to-gray-300/90 bg-clip-text text-transparent w-full sm:w-auto">
                                    {item.role}
                                </div>

                                <div className="text-xs sm:text-sm bg-portfolio-dark/60 backdrop-blur-sm px-2 py-0.5 rounded-md text-gray-300 border border-gray-700/30">
                                    {item.duration}
                                </div>

                                <div className="sm:ml-auto text-xs sm:text-sm font-medium bg-portfolio-dark/80 backdrop-blur-md px-4 py-1.5 rounded-full text-gray-200 flex items-center gap-2 shadow-inner mt-2 sm:mt-0 hover:text-portfolio-primary transition-colors">
                                    <Globe size={14} />
                                    <a href={`https://${item.website}`} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
                                        {item.website}
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Expand Icon Desktop */}
                        <motion.div
                            animate={{ rotate: isExpanded ? 90 : 0 }}
                            transition={{ duration: 0.2 }}
                            className={`hidden sm:block text-gradient bg-clip-text text-transparent bg-gradient-to-r ${item.color} p-2 rounded-full ${isExpanded ? '' : 'group-hover:bg-portfolio-dark/60'}`}
                        >
                            {isExpanded ? (
                                <FaChevronDown size={18} />
                            ) : (
                                <FaChevronRight size={18} />
                            )}
                        </motion.div>
                    </div>
                </div>

                {/* Expandable Details */}
                <AnimatePresence>
                    {isExpanded && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.35, ease: "easeInOut" }}
                            className="overflow-hidden"
                        >
                            <div className="p-6 pt-4 border-t border-gray-700/30">
                                <p className="text-gray-300 mb-6 leading-relaxed italic border-l-4 border-portfolio-primary pl-4 py-1 bg-portfolio-dark/30">
                                    "{item.description}"
                                </p>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {item.details.map((detail, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: i * 0.1 }}
                                            className="flex items-start p-4 rounded-xl bg-portfolio-dark/60 backdrop-blur-sm border border-gray-700/50 hover:border-portfolio-primary/50 transition-all hover:shadow-md group"
                                        >
                                            <div
                                                className={`p-2 rounded-lg mr-3 bg-gradient-to-r ${item.color} bg-opacity-20 group-hover:bg-opacity-30 transition-all`}
                                            >
                                                <span
                                                    className={`text-gradient bg-clip-text text-transparent bg-gradient-to-r ${item.color}`} // Force white/colored text if gradient fails
                                                >
                                                    <span className="text-white">
                                                        {React.cloneElement(detail.icon, { size: 16 })}
                                                    </span>
                                                </span>
                                            </div>
                                            <span className="text-sm text-gray-300 leading-relaxed group-hover:text-white transition-colors">
                                                {detail.content}
                                            </span>
                                        </motion.div>
                                    ))}
                                </div>

                                <div className="mt-6 flex items-center gap-2 text-sm text-gray-400">
                                    <Mail size={14} />
                                    <span>{item.email}</span>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>
        </motion.div>
    );
};

export default Experience;
