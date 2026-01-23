import React, { useState, useEffect } from 'react';
import { User, BookOpen, Cpu, Briefcase, Award, Mail, Terminal, FileText, Building } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { scroller } from 'react-scroll';

import myselfImage from "../../Assets/shaswat2.png"

const Sidebar = ({ isOpen, onClose, activeSection }) => {
    const navigate = useNavigate();
    const location = useLocation();

    const menuItems = [
        { icon: FileText, label: 'RESUME / HERO', id: 'hero' },
        { icon: BookOpen, label: 'EDUCATION', id: 'education' },
        { icon: Building, label: 'EXPERIENCE', id: 'experience' },
        { icon: Cpu, label: 'SKILLS', id: 'skills' },
        { icon: Briefcase, label: 'PROJECTS', id: 'projects' },
        { icon: Award, label: 'CERTIFICATIONS', id: 'certifications' },
        { icon: Mail, label: 'CONTACT', id: 'contact' },
        { icon: Terminal, label: 'ALL PROJECTS', path: '/all-projects' },
    ];

    const handleNavigation = (item) => {
        if (item.path) {
            navigate(item.path);
        } else if (item.id) {
            if (location.pathname !== '/') {
                navigate('/', { state: { scrollTo: item.id } });
            } else {
                scroller.scrollTo(item.id, {
                    duration: 800,
                    delay: 0,
                    smooth: 'easeInOutQuart'
                });
            }
        }
        if (onClose) onClose();
    };

    return (
        <div className={`w-64 bg-portfolio-bg h-screen flex flex-col p-4 fixed left-0 top-0 overflow-y-auto z-40 shadow-[4px_0_24px_rgba(0,0,0,0.02)] border-r border-portfolio-primary/10 transform transition-transform duration-300 ease-in-out md:translate-x-0 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
            <div className="mb-8 px-4 py-2">
                <h2 className="text-2xl font-serif italic font-bold text-portfolio-dark">PS portfolio.</h2>
            </div>

            <div className="space-y-2 py-4">
                {menuItems.map((item) => {
                    const isActive = item.path
                        ? location.pathname === item.path
                        : (location.pathname === '/' && activeSection === item.id);

                    return (
                        <button
                            key={item.label}
                            onClick={() => handleNavigation(item)}
                            className={`w-full flex items-center gap-3 px-5 py-3.5 rounded-2xl text-sm font-bold tracking-wide transition-all duration-300 ${isActive
                                ? 'bg-portfolio-primary text-white shadow-lg shadow-portfolio-primary/30 scale-[1.02]'
                                : 'text-gray-500 hover:bg-white hover:text-portfolio-secondary hover:pl-6'
                                }`}
                        >
                            <item.icon
                                size={20}
                                strokeWidth={2.5}
                                className={isActive ? "text-white" : "text-gray-400 group-hover:text-portfolio-secondary"}
                            />
                            {item.label}
                            {isActive && (
                                <div className="ml-auto w-1.5 h-1.5 rounded-full bg-white" />
                            )}
                        </button>
                    );
                })}
            </div>

            <div className="mt-auto px-5 py-6">
                <div className="flex items-center gap-3 bg-white p-3 rounded-xl border border-portfolio-primary/20 shadow-sm">
                    <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden ring-2 ring-portfolio-accent/20">
                        <img src={myselfImage} alt="User" className="w-full h-full object-cover" />
                    </div>
                    <div className="text-left">
                        <p className="text-sm font-bold text-portfolio-dark">Prasad Shaswat</p>
                        <p className="text-xs text-portfolio-accent font-medium">Full Stack Dev</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
