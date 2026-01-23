import React, { useState, useEffect, useRef, useLayoutEffect } from "react";
import { FaDownload, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import {
    SiReact,
    SiJavascript,
    SiPython,
    SiNodedotjs,
    SiTailwindcss,
    SiExpress,
} from "react-icons/si";
import gsap from "gsap";
import myselfImage from "../Assets/myself.png";
import "./Home.css";
import ThreeBackground from "./ThreeBackground";

const Home = () => {
    const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
    const [displayText, setDisplayText] = useState("");
    const [isTyping, setIsTyping] = useState(true);

    // Refs for GSAP
    const containerRef = useRef(null);
    const contentRef = useRef(null);
    const textRef = useRef(null);
    const bioRef = useRef(null);
    const techRef = useRef(null);
    const buttonsRef = useRef(null);
    const socialRef = useRef(null);
    const imageRef = useRef(null);

    const roles = [
        "React Specialist",
        "JavaScript Expert",
        "Full Stack Developer",
        "UI/UX Enthusiast",
    ];

    // Typing effect logic
    useEffect(() => {
        let timeout;
        const currentRole = roles[currentRoleIndex];

        if (isTyping) {
            if (displayText.length < currentRole.length) {
                timeout = setTimeout(() => {
                    setDisplayText(currentRole.substring(0, displayText.length + 1));
                }, 100);
            } else {
                setIsTyping(false);
                timeout = setTimeout(() => { }, 2000);
            }
        } else {
            if (displayText.length > 0) {
                timeout = setTimeout(() => {
                    setDisplayText(displayText.substring(0, displayText.length - 1));
                }, 50);
            } else {
                setIsTyping(true);
                setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
            }
        }

        return () => clearTimeout(timeout);
    }, [displayText, isTyping, currentRoleIndex]);

    // GSAP Animations
    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            // Initial setup - hide elements
            gsap.set([textRef.current, bioRef.current, techRef.current?.children, buttonsRef.current, socialRef.current?.children], {
                opacity: 0,
                y: 30
            });
            gsap.set(imageRef.current, { opacity: 0, x: 50 });

            // Entrance Timeline
            const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

            tl.to(textRef.current, {
                opacity: 1,
                y: 0,
                duration: 1,
                delay: 0.2
            })
                .to(bioRef.current, {
                    opacity: 1,
                    y: 0,
                    duration: 0.8
                }, "-=0.6")
                .to(techRef.current?.children || [], {
                    opacity: 1,
                    y: 0,
                    duration: 0.5,
                    stagger: 0.1
                }, "-=0.4")
                .to(buttonsRef.current, {
                    opacity: 1,
                    y: 0,
                    duration: 0.6
                }, "-=0.2")
                .to(socialRef.current?.children || [], {
                    opacity: 1,
                    scale: 1,
                    y: 0,
                    duration: 0.5,
                    stagger: 0.1
                }, "-=0.4")
                .to(imageRef.current, {
                    opacity: 1,
                    x: 0,
                    duration: 1.2,
                    ease: "back.out(1.7)"
                }, 0.5);

        }, containerRef);

        return () => ctx.revert();
    }, []);

    // Mouse Move Parallax/Tilt Effect
    const handleMouseMove = (e) => {
        if (!containerRef.current || !contentRef.current) return;
        const { clientX, clientY } = e;
        const { innerWidth, innerHeight } = window;

        // Calculate normalized mouse position (-1 to 1)
        const x = (clientX / innerWidth - 0.5) * 2;
        const y = (clientY / innerHeight - 0.5) * 2;

        // Apply 3D Tilt to the content container
        gsap.to(contentRef.current, {
            rotationY: x * 2, // Rotate around Y axis based on mouse X
            rotationX: -y * 2, // Rotate around X axis based on mouse Y
            x: -x * 10,
            y: -y * 10,
            duration: 1,
            ease: "power2.out",
            transformPerspective: 1000,
            transformOrigin: "center center"
        });

        // Independent, more pronounced tilt for image
        if (imageRef.current) {
            gsap.to(imageRef.current, {
                rotationY: x * 10,
                rotationX: -y * 10,
                duration: 1.2,
                ease: "power2.out"
            });
        }
    };

    const techStack = [
        { icon: <SiReact />, name: "React" },
        { icon: <SiJavascript />, name: "JavaScript" },
        { icon: <SiPython />, name: "Python Flask" },
        { icon: <SiNodedotjs />, name: "Node.js" },
        { icon: <SiTailwindcss />, name: "Tailwind" },
        { icon: <SiExpress />, name: "Express JS" },
    ];

    return (
        <section
            id="home"
            ref={containerRef}
            onMouseMove={handleMouseMove}
            className="w-full min-h-screen bg-portfolio-dark flex items-center justify-center overflow-hidden relative"
        >
            {/* 3D Background */}
            <ThreeBackground />

            {/* Content Container with 3D context */}
            <div
                ref={contentRef}
                className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 relative z-10 py-20 lg:py-0 perspective-1000"
                style={{ transformStyle: "preserve-3d" }}
            >
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                    {/* Left Column */}
                    <div className="flex-1 w-full text-center lg:text-left transform-style-3d">
                        <div ref={textRef} className="transform-style-3d">
                            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-100 leading-tight mb-4">
                                <span className="block bg-clip-text text-transparent bg-gradient-to-r from-portfolio-accent to-portfolio-primary falling-text">
                                    Hi, I'm
                                </span>
                                <span className="block bold-text mt-2 sm:mt-0 text-3d-shadow">Prasad Shaswat</span>
                            </h1>

                            <div className="text-xl sm:text-2xl md:text-3xl font-medium text-gray-300 mb-6 h-12 sm:h-16 typing-text flex justify-center lg:justify-start">
                                <span className="inline-flex items-center">
                                    <span className="w-3 h-3 sm:w-4 sm:h-4 bg-portfolio-primary rounded-full mr-3 animate-pulse"></span>
                                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-portfolio-primary to-portfolio-secondary">
                                        {displayText}
                                        <span className="ml-1 animate-pulse">|</span>
                                    </span>
                                </span>
                            </div>
                        </div>

                        <p
                            ref={bioRef}
                            className="text-gray-400 max-w-xl mb-8 mx-auto lg:mx-0 text-base sm:text-lg leading-relaxed transform-style-3d"
                        >
                            A results-driven Full-Stack Developer experienced in the MERN
                            stack and Flask, focused on creating scalable web applications and
                            responsive UI/UX designs.
                        </p>

                        {/* Tech Stack */}
                        <div
                            ref={techRef}
                            className="flex flex-wrap justify-center lg:justify-start gap-3 mb-10 transform-style-3d"
                        >
                            {techStack.map((tech, idx) => (
                                <span
                                    key={idx}
                                    className="tech-item flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-portfolio-dark/50 border border-gray-700/50 text-xs sm:text-sm text-gray-300 transition-all hover:border-portfolio-primary hover:text-white hover:shadow-[0_0_15px_rgba(234,47,20,0.5)] transform hover:translate-z-10"
                                >
                                    {tech.icon} {tech.name}
                                </span>
                            ))}
                        </div>

                        {/* Buttons */}
                        <div
                            ref={buttonsRef}
                            className="flex flex-col sm:flex-row gap-5 mb-10 justify-center lg:justify-start w-full sm:w-auto transform-style-3d"
                        >
                            <a
                                href="https://drive.google.com/file/d/1XR7BQtjUL1MoJ3E4VC7SJySzOKeeCU4k/view?usp=sharing"
                                download="PrasadShaswat_Resume.pdf"
                                className="group relative px-8 py-4 bg-gradient-to-r from-portfolio-accent to-portfolio-primary text-white font-semibold rounded-xl shadow-[0_10px_40px_-10px_rgba(39,111,191,0.5)] hover:shadow-[0_20px_40px_-10px_rgba(39,111,191,0.6)] transform hover:-translate-y-1 transition-all duration-300 overflow-hidden text-center"
                            >
                                <div className="absolute inset-0 bg-white/20 group-hover:bg-white/30 transition-colors duration-300" />
                                <span className="relative flex items-center justify-center gap-3 text-lg tracking-wide">
                                    <FaDownload className="group-hover:translate-y-1 transition-transform duration-300" size={18} />
                                    Download CV
                                </span>
                            </a>
                        </div>

                        {/* Social Links */}
                        <div
                            ref={socialRef}
                            className="flex justify-center lg:justify-start gap-4 text-gray-400 transform-style-3d"
                        >
                            <a
                                href="https://github.com/shaswat2031"
                                className="hover:text-portfolio-primary bg-portfolio-dark/40 p-3 rounded-full hover:bg-portfolio-dark transform hover:scale-110 transition-all duration-300 hover:shadow-lg"
                            >
                                <FaGithub size={20} />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/shaswat-prasad-14b147266/"
                                className="hover:text-portfolio-accent bg-portfolio-dark/40 p-3 rounded-full hover:bg-portfolio-dark transform hover:scale-110 transition-all duration-300 hover:shadow-lg"
                            >
                                <FaLinkedin size={20} />
                            </a>
                            <a
                                href="https://x.com/pr17745"
                                className="hover:text-portfolio-secondary bg-portfolio-dark/40 p-3 rounded-full hover:bg-portfolio-dark transform hover:scale-110 transition-all duration-300 hover:shadow-lg"
                            >
                                <FaTwitter size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Right Column - Photo */}
                    <div
                        ref={imageRef}
                        className="flex-1 flex justify-center items-center transform-style-3d"
                    >
                        <div className="relative group flex justify-center items-center perspective-1000">
                            {/* Rotating Gradient Border */}
                            <div className="rounded-full p-[3px] bg-gradient-to-r from-portfolio-accent via-portfolio-primary to-portfolio-secondary animate-spin-slow">
                                <div className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-portfolio-dark p-1 photo-hover shrink-0">
                                    <img
                                        src={myselfImage}
                                        alt="Prasad Shaswat"
                                        className="w-full h-full object-cover rounded-full"
                                    />
                                </div>
                            </div>

                            {/* Glow effect */}
                            <div className="absolute -inset-4 rounded-full bg-portfolio-primary/20 blur-3xl opacity-0 group-hover:opacity-100 transition duration-700"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;