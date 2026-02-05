import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
    ArrowDown,
    Github,
    Linkedin,
    Twitter,
    Download,
    Code2,
    Terminal,
    Cpu,
    Globe
} from "lucide-react";
import myselfImage from "../Assets/myself.png";
import "./Home.css";

const TechBadge = ({ icon: Icon, name, color }) => (
    <motion.div
        className="flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full"
        whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
        whileTap={{ scale: 0.95 }}
    >
        <Icon size={16} className={`text-${color}-400`} style={{ color }} />
        <span className="text-sm font-medium text-gray-300">{name}</span>
    </motion.div>
);

const SocialLink = ({ href, icon: Icon }) => (
    <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="p-3 bg-white/5 border border-white/10 rounded-full text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
        whileHover={{ y: -4, scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
    >
        <Icon size={20} />
    </motion.a>
);

const Home = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    const techs = [
        { icon: Code2, name: "React", color: "#61DAFB" },
        { icon: Terminal, name: "Node.js", color: "#339933" },
        { icon: Globe, name: "Express", color: "#fff" },
        { icon: Cpu, name: "Python", color: "#3776AB" },
    ];

    return (
        <section
            id="home"
            ref={containerRef}
            className="relative w-full min-h-screen bg-[#050505] overflow-hidden flex items-center justify-center px-4"
        >
            {/* Background Gradients */}
            <div className="absolute top-0 -left-20 w-96 h-96 bg-purple-600/20 rounded-full blur-[128px] pointer-events-none" />
            <div className="absolute bottom-0 -right-20 w-96 h-96 bg-blue-600/20 rounded-full blur-[128px] pointer-events-none" />

            <div className="container mx-auto max-w-7xl grid lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">

                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="order-2 lg:order-1 flex flex-col items-center lg:items-start text-center lg:text-left"
                >
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-purple-400 mb-6"
                    >
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
                        </span>
                        Available for Work
                    </motion.div>

                    <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-6 leading-[1.1]">
                        Prasad <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500">
                            Shaswat
                        </span>
                    </h1>

                    <p className="text-lg sm:text-xl text-gray-400 max-w-xl mb-8 leading-relaxed">
                        Full-Stack Developer crafting scalable web applications with
                        <span className="text-gray-200 font-semibold"> aesthetic precision</span> and
                        <span className="text-gray-200 font-semibold"> technical excellence</span>.
                    </p>

                    {/* Tech Stack Marqueeish */}
                    <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-10">
                        {techs.map((tech, idx) => (
                            <TechBadge key={idx} {...tech} />
                        ))}
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                        <motion.a
                            href="https://drive.google.com/file/d/1XR7BQtjUL1MoJ3E4VC7SJySzOKeeCU4k/view?usp=sharing"
                            target="_blank"
                            className="group relative px-8 py-4 bg-white text-black font-bold rounded-full overflow-hidden flex items-center justify-center gap-2"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                <Download size={20} />
                                Download CV
                            </span>
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-200 to-blue-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </motion.a>

                        <div className="flex items-center gap-4 justify-center">
                            <SocialLink href="https://github.com/shaswat2031" icon={Github} />
                            <SocialLink href="https://linkedin.com/in/shaswat-prasad-14b147266/" icon={Linkedin} />
                            <SocialLink href="https://x.com/prasa" icon={Twitter} />
                        </div>
                    </div>
                </motion.div>

                {/* Hero Image /Visual */}
                <motion.div
                    style={{ y, opacity }}
                    className="order-1 lg:order-2 flex justify-center items-center relative"
                >
                    <div className="relative w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] lg:w-[500px] lg:h-[500px]">
                        {/* Abstract Shapes behind */}
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                            className="absolute inset-0 rounded-full border border-white/10 border-dashed"
                        />
                        <motion.div
                            animate={{ rotate: -360 }}
                            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                            className="absolute inset-4 rounded-full border border-white/5"
                        />

                        {/* Main Image Container */}
                        <div className="absolute inset-10 rounded-full overflow-hidden border-2 border-white/10 bg-gradient-to-tr from-white/5 to-white/0 backdrop-blur-sm z-10">
                            <img
                                src={myselfImage}
                                alt="Prasad Shaswat"
                                className="w-full h-full object-cover scale-110 grayscale hover:grayscale-0 transition-all duration-700 ease-in-out"
                            />
                        </div>

                        {/* Floating Cards */}
                        <motion.div
                            animate={{ y: [0, -20, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -right-4 top-20 z-20 bg-[#111] border border-white/10 p-4 rounded-2xl shadow-xl"
                        >
                            <Code2 className="text-blue-400 mb-2" />
                            <div className="h-2 w-16 bg-white/20 rounded-full mb-2" />
                            <div className="h-2 w-10 bg-white/10 rounded-full" />
                        </motion.div>

                        <motion.div
                            animate={{ y: [0, 20, 0] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            className="absolute -left-8 bottom-20 z-20 bg-[#111] border border-white/10 p-4 rounded-2xl shadow-xl"
                        >
                            <div className="flex gap-2 mb-2">
                                <div className="w-3 h-3 rounded-full bg-red-500" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                                <div className="w-3 h-3 rounded-full bg-green-500" />
                            </div>
                            <div className="h-2 w-20 bg-white/20 rounded-full" />
                        </motion.div>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-500"
            >
                <ArrowDown size={24} />
            </motion.div>
        </section>
    );
};

export default Home;