import React, { useEffect, useState, useRef } from "react";
import Sidebar from "./Sidebar";
import { Routes, Route, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { scroller } from "react-scroll";

// Import existing components
import Home from "../Home";
import Education from "../Education";
import Skills from "../Skills";
import Projects from "../Projects";
import Certifications from "../Certifications";
import Experience from "../Experience";
import ContactUs from "../ContactUs";
import AllProjects from "../../pages/AllProjects";
import CustomCursor from "../CustomCursor";
import FloatingShapes from "../FloatingShapes";

const MainContent = ({ onSectionChange }) => {
    const observer = useRef(null);

    useEffect(() => {
        const handleIntersect = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    if (onSectionChange) {
                        onSectionChange(entry.target.id);
                    }
                }
            });
        };

        const options = {
            root: null,
            rootMargin: "-40% 0px -40% 0px", // Trigger when the middle 20% of the element is visible
            threshold: 0
        };

        observer.current = new IntersectionObserver(handleIntersect, options);

        const sections = document.querySelectorAll("section");
        sections.forEach((section) => {
            if (observer.current) observer.current.observe(section);
        });

        return () => {
            if (observer.current) observer.current.disconnect();
        };
    }, [onSectionChange]);

    return (
        <div className="flex flex-col">
            <section id="hero" className="min-h-screen bg-portfolio-dark">
                <Home />
            </section>
            <section id="education" className="min-h-screen bg-portfolio-dark">
                <Education />
            </section>
            <section id="experience" className="min-h-screen bg-portfolio-dark">
                <Experience />
            </section>
            <section id="skills" className="min-h-screen bg-portfolio-dark">
                <Skills />
            </section>
            <section id="projects" className="min-h-screen bg-portfolio-dark">
                <Projects />
            </section>
            <section id="certifications" className="min-h-screen bg-portfolio-dark">
                <Certifications />
            </section>
            <section id="contact" className="min-h-screen bg-portfolio-dark">
                <ContactUs />
            </section>
        </div>
    );
};

const DashboardLayout = () => {
    const location = useLocation();
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('hero');

    // Import icons for mobile menu
    const { Menu, X } = require('lucide-react');

    // Handle scroll on navigation
    useEffect(() => {
        if (location.state && location.state.scrollTo) {
            scroller.scrollTo(location.state.scrollTo, {
                duration: 800,
                delay: 100,
                smooth: 'easeInOutQuart'
            });
        }
    }, [location]);

    return (
        <div className="flex w-full min-h-screen bg-portfolio-bg font-sans relative">
            <CustomCursor />
            <FloatingShapes />

            {/* Mobile Sidebar Overlay */}
            {isSidebarOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-30 md:hidden backdrop-blur-sm"
                    onClick={() => setIsSidebarOpen(false)}
                />
            )}

            {/* Mobile Menu Button */}
            <button
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                className="fixed top-4 right-4 z-40 p-2 bg-portfolio-primary text-white rounded-lg shadow-lg md:hidden hover:bg-portfolio-primary/90 transition-colors"
            >
                {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            <Sidebar
                isOpen={isSidebarOpen}
                onClose={() => setIsSidebarOpen(false)}
                activeSection={activeSection}
            />

            <div className="flex-1 w-full md:ml-64 relative z-10">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={location.pathname === '/' ? 'home' : location.pathname}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="w-full min-h-screen"
                    >
                        <Routes>
                            <Route path="/" element={<MainContent onSectionChange={setActiveSection} />} />
                            <Route path="/all-projects" element={<div className="bg-portfolio-dark min-h-screen"><AllProjects /></div>} />
                            <Route path="*" element={<MainContent onSectionChange={setActiveSection} />} />
                        </Routes>
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
};

export default DashboardLayout;
