import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    FileText,
    BookOpen,
    Building,
    Cpu,
    Briefcase,
    Award,
    Mail,
    Terminal
} from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { scroller } from "react-scroll";

const ModernNav = ({ activeSection }) => {
    const navigate = useNavigate();
    const location = useLocation();
    const [hoveredTab, setHoveredTab] = useState(null);

    const navItems = [
        { id: "hero", icon: FileText, label: "Hero" },
        { id: "education", icon: BookOpen, label: "Education" },
        { id: "experience", icon: Building, label: "Experience" },
        { id: "skills", icon: Cpu, label: "Skills" },
        { id: "projects", icon: Briefcase, label: "Projects" },
        { id: "certifications", icon: Award, label: "Certifications" },
        { id: "contact", icon: Mail, label: "Contact" },
        { path: "/all-projects", icon: Terminal, label: "All Projects" },
    ];

    const handleNavigation = (item) => {
        if (item.path) {
            if (location.pathname !== item.path) {
                navigate(item.path);
            }
        } else if (item.id) {
            if (location.pathname !== "/") {
                navigate("/", { state: { scrollTo: item.id } });
            } else {
                scroller.scrollTo(item.id, {
                    duration: 800,
                    delay: 0,
                    smooth: "easeInOutQuart",
                });
            }
        }
    };

    return (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-fit px-4">
            <motion.div
                className="flex items-center gap-2 px-4 py-3 bg-black/40 backdrop-blur-2xl border border-white/10 rounded-full shadow-2xl shadow-purple-500/10"
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
            >
                {navItems.map((item) => {
                    const isActive = item.path
                        ? location.pathname === item.path
                        : (location.pathname === '/' && activeSection === item.id);

                    return (
                        <div key={item.label} className="relative group">
                            <motion.button
                                onClick={() => handleNavigation(item)}
                                onHoverStart={() => setHoveredTab(item.label)}
                                onHoverEnd={() => setHoveredTab(null)}
                                className={`p-3 rounded-full transition-all duration-300 relative z-10 ${isActive
                                    ? "text-white bg-white/10"
                                    : "text-gray-400 hover:text-white hover:bg-white/5"
                                    }`}
                                whileHover={{ scale: 1.1, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <item.icon size={20} className={isActive ? "stroke-[2.5px]" : "stroke-[1.5px]"} />

                                {/* Active Indicator Dot */}
                                {isActive && (
                                    <motion.div
                                        layoutId="active-dot"
                                        className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-purple-500 rounded-full"
                                    />
                                )}
                            </motion.button>

                            {/* Tooltip */}
                            <AnimatePresence>
                                {hoveredTab === item.label && (
                                    <motion.div
                                        className="absolute -top-12 left-1/2 -translate-x-1/2 bg-black/90 text-white text-xs font-medium px-3 py-1.5 rounded-lg border border-white/10 whitespace-nowrap backdrop-blur-md"
                                        initial={{ opacity: 0, y: 10, scale: 0.8 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        exit={{ opacity: 0, y: 2, scale: 0.8 }}
                                        transition={{ duration: 0.15 }}
                                    >
                                        {item.label}
                                        {/* Tooltip Arrow */}
                                        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-black/90 rotate-45 border-b border-r border-white/10"></div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    );
                })}
            </motion.div>
        </div>
    );
};

export default ModernNav;
