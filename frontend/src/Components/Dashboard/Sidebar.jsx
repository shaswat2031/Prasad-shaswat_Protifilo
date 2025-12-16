import React from 'react';
import { User, BookOpen, Cpu, Briefcase, Award, Mail, Terminal, FileText } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

import myselfImage from "../../Assets/shaswat2.png"

const Sidebar = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const menuItems = [
        { icon: FileText, label: 'RESUME / HERO', path: '/' },
        { icon: BookOpen, label: 'EDUCATION', path: '/education' },
        { icon: Cpu, label: 'SKILLS', path: '/skills' },
        { icon: Briefcase, label: 'PROJECTS', path: '/projects' },
        { icon: Award, label: 'CERTIFICATIONS', path: '/certifications' },
        { icon: Mail, label: 'CONTACT', path: '/contact' },
        { icon: Terminal, label: 'ALL PROJECTS', path: '/all-projects' },
    ];

    return (
        <div className="w-64 bg-portfolio-bg h-screen flex flex-col p-4 fixed left-0 top-0 overflow-y-auto z-20 shadow-[4px_0_24px_rgba(0,0,0,0.02)] border-r border-portfolio-primary/10">
            <div className="mb-8 px-4 py-2">
                <h2 className="text-2xl font-serif italic font-bold text-portfolio-dark">PS portfolio.</h2>
            </div>

            <div className="space-y-2 py-4">
                {menuItems.map((item) => (
                    <button
                        key={item.label}
                        onClick={() => navigate(item.path)}
                        className={`w-full flex items-center gap-3 px-5 py-3.5 rounded-2xl text-sm font-bold tracking-wide transition-all duration-300 ${location.pathname === item.path
                            ? 'bg-portfolio-primary text-white shadow-lg shadow-portfolio-primary/30 scale-[1.02]'
                            : 'text-gray-500 hover:bg-white hover:text-portfolio-secondary hover:pl-6'
                            }`}
                    >
                        <item.icon
                            size={20}
                            strokeWidth={2.5}
                            className={location.pathname === item.path ? "text-white" : "text-gray-400 group-hover:text-portfolio-secondary"}
                        />
                        {item.label}
                        {location.pathname === item.path && (
                            <div className="ml-auto w-1.5 h-1.5 rounded-full bg-white" />
                        )}
                    </button>
                ))}
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
