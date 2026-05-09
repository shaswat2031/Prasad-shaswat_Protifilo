import React, { useRef, Suspense } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Github,
  Linkedin,
  Twitter,
  Download,
  Code2,
  Terminal,
  Cpu,
  Globe,
  Sparkles,
  Zap,
  Coffee
} from "lucide-react";
import myselfImage from "../Assets/myself.png";
import ThreeHero from "./ThreeHero";
import "./Home.css";

const TechBadge = ({ icon: Icon, name, color, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
    className="flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-full"
    whileHover={{ 
      scale: 1.05, 
      backgroundColor: "rgba(255,255,255,0.1)",
      borderColor: color,
      boxShadow: `0 0 20px ${color}33`
    }}
    whileTap={{ scale: 0.95 }}
  >
    <Icon size={16} style={{ color }} />
    <span className="text-sm font-medium text-gray-300">{name}</span>
  </motion.div>
);

const SocialLink = ({ href, icon: Icon, label }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="group relative p-4 bg-white/5 border border-white/10 rounded-2xl text-gray-400 hover:text-white transition-all duration-300"
    whileHover={{ y: -8 }}
    whileTap={{ scale: 0.9 }}
  >
    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
    <Icon size={24} className="relative z-10" />
    <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs font-medium opacity-0 group-hover:opacity-100 transition-all text-purple-400">
      {label}
    </span>
  </motion.a>
);

const Home = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);

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
      {/* 3D Hero Background */}
      <Suspense fallback={<div className="absolute inset-0 bg-[#050505]" />}>
        <ThreeHero />
      </Suspense>

      {/* Decorative Gradients */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-600/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-600/10 rounded-full blur-[150px]" />
      </div>

      <div className="container mx-auto max-w-7xl grid lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10 py-20 lg:py-0">
        
        {/* Left Content */}
        <motion.div
          style={{ opacity, scale }}
          className="order-2 lg:order-1 flex flex-col items-center lg:items-start text-center lg:text-left"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs sm:text-sm font-medium text-purple-300 mb-8 backdrop-blur-sm"
          >
            <Sparkles size={14} className="text-yellow-400" />
            <span className="uppercase tracking-widest">Open for new opportunities</span>
          </motion.div>

          <div className="relative mb-6">
            <motion.h1 
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-6xl sm:text-8xl lg:text-9xl font-black tracking-tighter text-white leading-[0.85]"
            >
              PRASAD
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: "100%" }}
              transition={{ delay: 0.5, duration: 1 }}
              className="h-1 bg-gradient-to-r from-purple-600 via-indigo-600 to-transparent my-4"
            />
            <motion.h1 
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-6xl sm:text-8xl lg:text-9xl font-black tracking-tighter leading-[0.85] text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500"
            >
              SHASWAT
            </motion.h1>
          </div>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg sm:text-xl text-gray-400 max-w-xl mb-10 leading-relaxed font-light"
          >
            Senior Full-Stack Engineer specialized in building 
            <span className="text-white font-medium"> high-performance </span> 
            digital experiences with modern architecture and 
            <span className="text-white font-medium"> aesthetic precision</span>.
          </motion.p>

          {/* Tech Stack Marquee */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-12">
            {techs.map((tech, idx) => (
              <TechBadge key={idx} {...tech} index={idx} />
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-8 w-full sm:w-auto">
            <motion.a
              href="https://drive.google.com/file/d/1XR7BQtjUL1MoJ3E4VC7SJySzOKeeCU4k/view?usp=sharing"
              target="_blank"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-10 py-5 bg-white text-black font-black rounded-2xl overflow-hidden flex items-center justify-center gap-3 transition-transform"
            >
              <Download size={20} className="group-hover:animate-bounce" />
              <span className="relative z-10 text-lg">GET RESUME</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.a>

            <div className="flex items-center gap-4">
              <SocialLink href="https://github.com/shaswat2031" icon={Github} label="GitHub" />
              <SocialLink href="https://linkedin.com/in/shaswat-prasad-14b147266/" icon={Linkedin} label="LinkedIn" />
              <SocialLink href="https://x.com/prasa" icon={Twitter} label="X / Twitter" />
            </div>
          </div>
        </motion.div>

        {/* Right Visual Section */}
        <motion.div
          style={{ y, opacity }}
          className="order-1 lg:order-2 flex justify-center items-center relative"
        >
          <div className="relative w-[320px] h-[320px] sm:w-[450px] sm:h-[450px] lg:w-[600px] lg:h-[600px]">
            {/* Animated Rings */}
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                animate={{ 
                  rotate: i % 2 === 0 ? 360 : -360,
                  scale: [1, 1.05, 1],
                  opacity: [0.1, 0.2, 0.1]
                }}
                transition={{ 
                  rotate: { duration: 20 + i * 5, repeat: Infinity, ease: "linear" },
                  scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                  opacity: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                }}
                className="absolute inset-0 rounded-full border border-white/20 border-dashed"
                style={{ padding: `${i * 40}px` }}
              />
            ))}

            {/* Main Image Container with Glassmorphism */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-[15%] rounded-3xl overflow-hidden border border-white/20 bg-white/5 backdrop-blur-xl z-10 group shadow-2xl"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 via-transparent to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <img
                src={myselfImage}
                alt="Prasad Shaswat"
                className="w-full h-full object-cover transition-all duration-1000 ease-in-out group-hover:scale-110"
              />
              
              {/* Overlay Label */}
              <div className="absolute bottom-6 left-6 right-6 p-4 bg-black/60 backdrop-blur-md rounded-xl border border-white/10 opacity-0 group-hover:opacity-100 transition-all translate-y-4 group-hover:translate-y-0">
                <p className="text-white font-bold flex items-center gap-2">
                  <Zap size={16} className="text-yellow-400" />
                  Prasad Shaswat
                </p>
                <p className="text-gray-400 text-xs">Innovation & Performance</p>
              </div>
            </motion.div>

            {/* Floating Stats/Elements */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-[10%] -right-4 z-20 bg-black/40 backdrop-blur-xl border border-white/10 p-4 rounded-2xl shadow-2xl hidden sm:block"
            >
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-[10px] text-gray-400 font-mono">SYSTEM READY</span>
                </div>
                <div className="h-1.5 w-24 bg-white/10 rounded-full overflow-hidden">
                  <motion.div 
                    animate={{ width: ["20%", "80%", "40%", "90%"] }}
                    transition={{ duration: 10, repeat: Infinity }}
                    className="h-full bg-purple-500" 
                  />
                </div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-[15%] -left-8 z-20 bg-black/40 backdrop-blur-xl border border-white/10 p-4 rounded-2xl shadow-2xl hidden sm:block"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 bg-white/5 rounded-lg">
                  <Coffee size={20} className="text-orange-400" />
                </div>
                <div>
                  <p className="text-white text-xs font-bold">10k+ Lines</p>
                  <p className="text-gray-400 text-[10px]">Code written today</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Advanced Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] tracking-[0.3em] text-gray-500 uppercase">Scroll to explore</span>
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-white/10 rounded-full flex justify-center p-1.5"
        >
          <motion.div className="w-1 h-2 bg-purple-500 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Home;