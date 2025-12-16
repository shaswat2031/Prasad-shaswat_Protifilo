import React from "react";
import Sidebar from "./Sidebar";
import { Routes, Route, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

// Import existing components
import Home from "../Home";
import Education from "../Education";
import Skills from "../Skills";
import Projects from "../Projects";
import Certifications from "../Certifications";
import ContactUs from "../ContactUs";
import AllProjects from "../../pages/AllProjects";

const DashboardLayout = () => {
    const location = useLocation();

    return (
        <div className="flex w-full min-h-screen bg-portfolio-bg font-sans">
            <Sidebar />

            <div className="flex-1 w-full md:ml-64">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={location.pathname}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="w-full min-h-screen"
                    >
                        <Routes location={location} key={location.pathname}>
                            <Route path="/" element={<div className="bg-portfolio-dark min-h-screen"><Home /></div>} />
                            <Route path="/education" element={<div className="bg-gradient-to-br from-portfolio-dark via-gray-900 to-portfolio-dark min-h-screen p-8"><Education /></div>} />
                            <Route path="/skills" element={<div className="bg-gradient-to-br from-portfolio-dark via-gray-900 to-portfolio-dark min-h-screen p-8"><Skills /></div>} />
                            <Route path="/projects" element={<div className="bg-gradient-to-br from-portfolio-dark via-gray-900 to-portfolio-dark min-h-screen p-8"><Projects /></div>} />
                            <Route path="/certifications" element={<div className="bg-gradient-to-br from-portfolio-dark via-gray-900 to-portfolio-dark min-h-screen p-8"><Certifications /></div>} />
                            <Route path="/contact" element={<div className="bg-gradient-to-br from-portfolio-dark via-gray-900 to-portfolio-dark min-h-screen p-8"><ContactUs /></div>} />
                            <Route path="/all-projects" element={<div className="bg-portfolio-dark min-h-screen"><AllProjects /></div>} />
                            <Route path="*" element={<div className="bg-portfolio-dark min-h-screen"><Home /></div>} />
                        </Routes>
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
};

export default DashboardLayout;
