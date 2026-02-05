import React, { useRef } from "react";
import { motion, useScroll, useSpring, useInView } from "framer-motion";
import BhagwatLogo from "../Assets/bhagwat.png";
import ParulLogo from "../Assets/parul.png";
import SungraceLogo from "../Assets/Sungrace.png";
import {
    GraduationCap,
    MapPin,
    Award,
    BookOpen,
    School,
    Building2
} from "lucide-react";

const Education = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"], // Start animation when section enters view
    });

    // Smooth out the scroll progress
    const scaleY = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    const educationData = [
        {
            id: "parul",
            school: "Parul University",
            logo: ParulLogo,
            period: "2022 – 2026",
            degree: "B.Tech in Computer Science & Engineering",
            grade: "CGPA: 7.03/10",
            location: "Vadodara, Gujarat",
            board: "PIT",
            icon: Building2,
            color: "#8B5CF6", // Violet
            tags: ["Full Stack Dev", "DSA", "Hackathons"],
            description: "Building strong fundamentals in Computer Science with a focus on scalable web architectures."
        },
        {
            id: "bhagwat",
            school: "Bhagwat Vidyapith",
            logo: BhagwatLogo,
            period: "2020 – 2022",
            degree: "Higher Secondary (Science)",
            grade: "59.20%",
            location: "Chhapra, Bihar",
            board: "CBSE",
            icon: School,
            color: "#EC4899", // Pink
            tags: ["Physics", "Mathematics", "Chemistry"],
            description: "Developed a strong analytical foundation through rigorous science and mathematics curriculum."
        },
        {
            id: "sungrace",
            school: "Sungrace School",
            logo: SungraceLogo,
            period: "Completed 2020",
            degree: "Secondary School",
            grade: "56.66%",
            location: "Surat, Gujarat",
            board: "GSEB",
            icon: BookOpen,
            color: "#3B82F6", // Blue
            tags: ["General Studies", "Tech Club"],
            description: "Early engagement with technology and active participation in school tech competitions."
        },
    ];

    return (
        <section
            id="education"
            ref={containerRef}
            className="relative w-full min-h-screen py-24 bg-[#050505] overflow-hidden"
        >
            {/* Background Ambient Glow */}
            <div className="absolute top-[20%] left-[10%] w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-[20%] right-[10%] w-[400px] h-[400px] bg-blue-900/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-purple-400 text-sm font-medium mb-4 backdrop-blur-md">
                        <GraduationCap size={16} />
                        <span>Academic Journey</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
                        Education & <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">Milestones</span>
                    </h2>
                    <p className="text-gray-400 max-w-xl mx-auto">
                        The structured path of learning that has shaped my technical perspective.
                    </p>
                </motion.div>

                {/* Timeline Container */}
                <div className="relative max-w-4xl mx-auto">
                    {/* Central Vertical Line (Base) */}
                    <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-[2px] bg-white/5 -translate-x-1/2 md:translate-x-0" />

                    {/* Animated Progress Line */}
                    <motion.div
                        style={{ scaleY, originY: 0 }}
                        className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-purple-500 via-blue-500 to-purple-500 -translate-x-1/2 md:translate-x-0 origin-top"
                    />

                    <div className="space-y-16 md:space-y-24">
                        {educationData.map((item, index) => (
                            <TimelineItem key={item.id} item={item} index={index} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

const TimelineItem = ({ item, index }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const isEven = index % 2 === 0;

    return (
        <div ref={ref} className={`relative flex flex-col md:flex-row items-center gap-8 md:gap-0 ${isEven ? 'md:flex-row-reverse' : ''}`}>

            {/* Timeline Node/Dot */}
            <div className="absolute left-[20px] md:left-1/2 transform -translate-x-1/2 md:translate-x-0 md:-ml-[1px] z-20">
                <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : { scale: 0 }}
                    transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                    className="w-4 h-4 rounded-full bg-[#050505] border-2 border-purple-500 relative"
                >
                    <div className="absolute inset-0 rounded-full bg-purple-500 animate-ping opacity-75" />
                </motion.div>
            </div>

            {/* Date/Period Label (Desktop) */}
            <div className={`hidden md:block w-1/2 ${isEven ? 'pl-12 text-left' : 'pr-12 text-right'}`}>
                <motion.div
                    initial={{ opacity: 0, x: isEven ? 20 : -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.3 }}
                    className="text-2xl font-bold text-white/10"
                >
                    {item.period}
                </motion.div>
            </div>

            {/* Content Card */}
            <div className="grid w-full md:w-1/2 pl-12 md:pl-0">
                <motion.div
                    initial={{ opacity: 0, x: isEven ? -50 : 50, rotateY: isEven ? -15 : 15 }}
                    animate={isInView ? { opacity: 1, x: 0, rotateY: 0 } : {}}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className={`relative ${isEven ? 'md:mr-12' : 'md:ml-12'}`}
                >
                    {/* Card Body */}
                    <div className="group relative bg-[#111] border border-white/10 rounded-2xl p-6 hover:border-purple-500/30 transition-colors duration-300">
                        {/* Period Tag (Mobile Only) */}
                        <div className="md:hidden inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-gray-400 mb-4">
                            {item.period}
                        </div>

                        <div className="flex items-start justify-between mb-4">
                            <div className="flex items-center gap-3">
                                <div className="p-3 bg-white/5 rounded-xl border border-white/10 group-hover:border-purple-500/20 transition-colors">
                                    <img src={item.logo} alt={item.school} className="w-8 h-8 object-contain" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white leading-tight">{item.school}</h3>
                                    <p className="text-sm text-purple-400 font-medium">{item.degree}</p>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-400">
                                <span className="flex items-center gap-1.5">
                                    <MapPin size={14} className="text-gray-500" />
                                    {item.location}
                                </span>
                                <span className="flex items-center gap-1.5">
                                    <Award size={14} className="text-gray-500" />
                                    {item.grade}
                                </span>
                            </div>

                            <p className="text-gray-400 text-sm leading-relaxed border-t border-white/5 pt-4">
                                {item.description}
                            </p>

                            <div className="flex flex-wrap gap-2 pt-2">
                                {item.tags.map(tag => (
                                    <span key={tag} className="px-2 py-1 bg-white/5 text-xs text-gray-300 rounded hover:bg-white/10 transition-colors">
                                        #{tag}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Glow Effect */}
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Education;
