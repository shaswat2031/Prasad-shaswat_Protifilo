import React, { useRef } from "react";
import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import {
    Briefcase,
    Calendar,
    Globe,
    Code2,
    Server,
    Users,
    Zap,
    ArrowUpRight
} from "lucide-react";

const ROTATION_RANGE = 32.5;
const HALF_ROTATION_RANGE = 32.5 / 2;

const Experience = () => {
    return (
        <section id="experience" className="min-h-screen bg-[#050505] py-24 relative overflow-hidden flex flex-col justify-center">
            {/* Background Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

            {/* Ambient Glow */}
            <div className="absolute left-0 bottom-0 w-96 h-96 bg-purple-600/10 rounded-full blur-[128px] pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-blue-400 text-sm font-medium mb-6">
                        <Briefcase size={16} />
                        <span>Professional Career</span>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                        Work <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">History</span>
                    </h2>
                    <p className="text-gray-400 max-w-xl mx-auto text-lg">
                        Contributions to real-world projects and technical problem solving.
                    </p>
                </motion.div>

                <div className="flex justify-center perspective-1000">
                    <TiltCard />
                </div>
            </div>
        </section>
    );
};

const TiltCard = () => {
    const ref = useRef(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const xSpring = useSpring(x);
    const ySpring = useSpring(y);

    const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

    const handleMouseMove = (e) => {
        if (!ref.current) return [0, 0];

        const rect = ref.current.getBoundingClientRect();

        const width = rect.width;
        const height = rect.height;

        const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
        const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

        const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
        const rY = mouseX / width - HALF_ROTATION_RANGE;

        x.set(rX);
        y.set(rY);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                transformStyle: "preserve-3d",
                transform,
            }}
            className="relative h-[600px] w-full max-w-4xl rounded-2xl bg-[#0a0a0a] border border-white/10 p-2 md:p-4"
        >
            <div
                style={{ transform: "translateZ(75px)", transformStyle: "preserve-3d" }}
                className="absolute inset-4 md:inset-8 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center"
            >
                {/* Left Side: Brand & Visuals */}
                <div className="flex flex-col h-full justify-between order-2 md:order-1">
                    <div>
                        <div className="inline-block p-4 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-white/10 mb-8 backdrop-blur-md">
                            <Code2 size={40} className="text-blue-400" />
                        </div>

                        <h3 className="text-3xl md:text-5xl font-bold text-white mb-2 leading-tight">
                            RYM <br />
                            <span className="text-gray-500">Grenergy</span>
                        </h3>
                        <a
                            href="https://www.rymgrenergy.com"
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors text-sm font-medium"
                        >
                            rymgrenergy.com <ArrowUpRight size={14} />
                        </a>
                    </div>

                    <div className="space-y-4">
                        <div className="flex items-center gap-4 text-gray-400 text-sm">
                            <div className="p-2 rounded-lg bg-white/5 border border-white/5">
                                <Calendar size={18} />
                            </div>
                            <div>
                                <p className="text-white font-medium">Jan 2026 - Apr 2026</p>
                                <p className="text-xs">4 Months Duration</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4 text-gray-400 text-sm">
                            <div className="p-2 rounded-lg bg-white/5 border border-white/5">
                                <Briefcase size={18} />
                            </div>
                            <div>
                                <p className="text-white font-medium">Internship</p>
                                <p className="text-xs">Full Stack Developer</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Side: Details & Tech */}
                <div className="bg-white/5 rounded-xl p-6 md:p-8 h-full border border-white/5 backdrop-blur-sm flex flex-col justify-between order-1 md:order-2 relative overflow-hidden group">
                    {/* Decorative background gradients */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/20 rounded-full blur-[50px] pointer-events-none" />

                    <div>
                        <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                            <Zap className="text-yellow-400 fill-yellow-400" size={20} />
                            Key Contributions
                        </h4>

                        <ul className="space-y-4 mb-8">
                            <li className="flex gap-3 text-gray-300 text-sm leading-relaxed">
                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                                Designed and developed scalable applications aligned with company goals.
                            </li>
                            <li className="flex gap-3 text-gray-300 text-sm leading-relaxed">
                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-purple-500 flex-shrink-0" />
                                Optimized backend systems for high-performance deployment.
                            </li>
                            <li className="flex gap-3 text-gray-300 text-sm leading-relaxed">
                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-green-500 flex-shrink-0" />
                                Collaborated closely with product teams to refine user requirements.
                            </li>
                        </ul>
                    </div>

                    {/* Tech Stack Pills */}
                    <div>
                        <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">Technologies Used</p>
                        <div className="flex flex-wrap gap-2">
                            {["React", "Node.js", "MongoDB", "Express", "Tailwind"].map((tech) => (
                                <span key={tech} className="px-3 py-1 rounded-full bg-black/40 border border-white/10 text-xs text-gray-300">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Card Border Highlight/Glow */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-50 pointer-events-none" />
        </motion.div>
    );
};

export default Experience;
