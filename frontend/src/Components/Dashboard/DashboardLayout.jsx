import React, { useEffect, useState, useRef } from "react";
import ModernNav from "./ModernNav";
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
        <div className="flex flex-col pb-24"> {/* Added padding bottom for dock */}
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
    const [activeSection, setActiveSection] = useState('hero');

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

            <ModernNav activeSection={activeSection} />

            <div className="flex-1 w-full relative z-10">
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
                            <Route path="/all-projects" element={<div className="bg-portfolio-dark min-h-screen pb-24"><AllProjects /></div>} />
                            <Route path="*" element={<MainContent onSectionChange={setActiveSection} />} />
                        </Routes>
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
};

export default DashboardLayout;
