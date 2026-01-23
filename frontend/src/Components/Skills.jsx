import React, { useState, useRef, useLayoutEffect, useEffect } from "react";
import {
  FaGitAlt,
  FaGithub,
  FaJsSquare,
  FaPython,
  FaReact,
  FaNodeJs,
  FaCloud,
  FaLaptopCode,
  FaDatabase,
  FaServer,
  FaTools,
  FaCode,
  FaBrain,
} from "react-icons/fa";
import {
  SiFlask,
  SiMongodb,
  SiMysql,
  SiTailwindcss,
  SiDocker,
} from "react-icons/si";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Main Skills Component
const Skills = () => {
  // State to manage the currently selected skill category
  const [activeCategory, setActiveCategory] = useState("all");

  const containerRef = useRef(null);
  const headerRef = useRef(null);
  const filterRef = useRef(null);
  const gridRef = useRef(null);

  // Data for all skills, categorized and with associated info
  const skillsData = [
    // Programming Languages
    {
      id: "javascript",
      name: "JavaScript",
      icon: <FaJsSquare />,
      color: "#f7df1e",
      category: "languages",
      learning: false,
    },
    {
      id: "python",
      name: "Python",
      icon: <FaPython />,
      color: "#3776ab",
      category: "languages",
      learning: false,
    },
    {
      id: "java",
      name: "Java (Core)",
      icon: <FaCode />,
      color: "#007396",
      category: "languages",
      learning: false,
    },
    {
      id: "html",
      name: "HTML",
      icon: <FaCode />,
      color: "#e34c26",
      category: "languages",
      learning: false,
    },
    {
      id: "css",
      name: "CSS",
      icon: <FaCode />,
      color: "#264de4",
      category: "languages",
      learning: false,
    },

    // Frontend Frameworks & Libraries
    {
      id: "react",
      name: "React.js",
      icon: <FaReact />,
      color: "#61dafb",
      category: "frontend",
      learning: false,
    },
    {
      id: "tailwind",
      name: "Tailwind CSS",
      icon: <SiTailwindcss />,
      color: "#38b2ac",
      category: "frontend",
      learning: false,
    },
    {
      id: "bootstrap",
      name: "Bootstrap",
      icon: <FaCode />,
      color: "#7952b3",
      category: "frontend",
      learning: false,
    },

    // Backend Frameworks & Libraries
    {
      id: "nodejs",
      name: "Node.js",
      icon: <FaNodeJs />,
      color: "#68a063",
      category: "backend",
      learning: false,
    },
    {
      id: "flask",
      name: "Flask",
      icon: <SiFlask />,
      color: "#ffffff",
      category: "backend",
      learning: false,
    },
    {
      id: "restapi",
      name: "REST APIs",
      icon: <FaServer />,
      color: "#009688",
      category: "backend",
      learning: false,
    },

    // Databases
    {
      id: "mongodb",
      name: "MongoDB",
      icon: <SiMongodb />,
      color: "#47a248",
      category: "database",
      learning: false,
    },
    {
      id: "mysql",
      name: "MySQL",
      icon: <SiMysql />,
      color: "#4479a1",
      category: "database",
      learning: false,
    },

    // Tools & Platforms
    {
      id: "git",
      name: "Git",
      icon: <FaGitAlt />,
      color: "#f05032",
      category: "devops",
      learning: false,
    },
    {
      id: "github",
      name: "GitHub",
      icon: <FaGithub />,
      color: "#ffffff",
      category: "devops",
      learning: false,
    },
    {
      id: "docker",
      name: "Docker",
      icon: <SiDocker />,
      color: "#2496ed",
      category: "devops",
      learning: false,
    },
    {
      id: "postman",
      name: "Postman",
      icon: <FaTools />,
      color: "#ff6c37",
      category: "devops",
      learning: false,
    },
    {
      id: "vercel",
      name: "Vercel",
      icon: <FaCloud />,
      color: "#ffffff",
      category: "devops",
      learning: false,
    },

    // Concepts & Other Skills
    {
      id: "uiux",
      name: "UI/UX Design",
      icon: <FaTools />,
      color: "#ff4088",
      category: "concepts",
      learning: false,
      description: "Creating intuitive user interfaces and experiences",
    },
    {
      id: "oop",
      name: "OOP",
      icon: <FaCode />,
      color: "#3949ab",
      category: "concepts",
      learning: false,
      description: "Object-Oriented Programming principles",
    },
    {
      id: "dsa",
      name: "DS & Algorithms",
      icon: <FaBrain />,
      color: "#43a047",
      category: "concepts",
      learning: false,
      description: "Problem-solving with efficient data structures",
    },

    // Data Structures & Algorithms Sub-skills
    {
      id: "arrays",
      name: "Arrays",
      icon: <FaCode />,
      color: "#00897b",
      category: "dsa",
      learning: false,
    },
    {
      id: "strings",
      name: "Strings",
      icon: <FaCode />,
      color: "#00897b",
      category: "dsa",
      learning: false,
    },
    {
      id: "linkedlists",
      name: "Linked Lists",
      icon: <FaCode />,
      color: "#00897b",
      category: "dsa",
      learning: false,
    },
    {
      id: "stacks",
      name: "Stacks",
      icon: <FaCode />,
      color: "#00897b",
      category: "dsa",
      learning: false,
    },
    {
      id: "queues",
      name: "Queues",
      icon: <FaCode />,
      color: "#00897b",
      category: "dsa",
      learning: false,
    },
    {
      id: "sorting",
      name: "Sorting Algorithms",
      icon: <FaCode />,
      color: "#00897b",
      category: "dsa",
      learning: false,
    },
  ];

  // Categories for filtering buttons
  const categories = [
    { id: "all", name: "All Skills", icon: <FaLaptopCode /> },
    { id: "languages", name: "Languages", icon: <FaCode /> },
    { id: "frontend", name: "Frontend", icon: <FaReact /> },
    { id: "backend", name: "Backend", icon: <FaServer /> },
    { id: "database", name: "Database", icon: <FaDatabase /> },
    { id: "devops", name: "Tools & Platforms", icon: <FaTools /> },
    { id: "concepts", name: "Concepts", icon: <FaBrain /> },
    { id: "dsa", name: "DS & Algorithms", icon: <FaCode /> },
  ];

  // Filter skills based on the active category
  const filteredSkills =
    activeCategory === "all"
      ? skillsData.filter((skill) => skill.category !== "dsa") // Exclude DSA sub-skills from 'All' view
      : skillsData.filter((skill) => skill.category === activeCategory);

  // Initial Entrance Animation
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // Header
      gsap.from(headerRef.current.children, {
        scrollTrigger: {
          trigger: headerRef.current,
          start: "top 80%",
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out"
      });

      // Filter Buttons
      gsap.from(filterRef.current.children, {
        scrollTrigger: {
          trigger: filterRef.current,
          start: "top 85%",
        },
        y: 20,
        opacity: 0,
        duration: 0.6,
        stagger: 0.05,
        ease: "power2.out",
        delay: 0.2
      });

      // Message at bottom
      gsap.from(".closing-note", {
        scrollTrigger: {
          trigger: ".closing-note",
          start: "top 90%",
        },
        opacity: 0,
        y: 20,
        duration: 1,
        delay: 0.5
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  // Animate grid items when category changes
  useEffect(() => {
    if (!gridRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(gridRef.current.children,
        {
          y: 20,
          opacity: 0,
          scale: 0.9
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.4,
          stagger: 0.03,
          ease: "back.out(1.2)"
        }
      );
    }, gridRef);

    return () => ctx.revert();
  }, [filteredSkills]);

  // 3D Tilt Hover Handlers
  const handleCardMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Calculate rotation based on mouse position
    const rotateX = ((y - centerY) / centerY) * -15; // Max rotation 15 deg
    const rotateY = ((x - centerX) / centerX) * 15;

    gsap.to(card, {
      rotateX: rotateX,
      rotateY: rotateY,
      scale: 1.1,
      boxShadow: "0px 20px 30px -10px rgba(234, 47, 20, 0.3)", // Glow effect using primary color
      duration: 0.2, // Fast response
      ease: "power1.out",
      transformPerspective: 1000,
      transformOrigin: "center center"
    });

    // Parallax for icon
    const icon = card.querySelector(".skill-icon-inner");
    if (icon) {
      gsap.to(icon, {
        x: (x - centerX) * 0.1,
        y: (y - centerY) * 0.1,
        rotate: 10,
        duration: 0.2
      });
    }
  };

  const handleCardMouseLeave = (e) => {
    gsap.to(e.currentTarget, {
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      y: 0,
      boxShadow: "none",
      duration: 0.5,
      ease: "elastic.out(1, 0.5)",
      clearProps: "all" // Clear inline styles to maintain cleanliness
    });

    const icon = e.currentTarget.querySelector(".skill-icon-inner");
    if (icon) {
      gsap.to(icon, { x: 0, y: 0, rotate: 0, duration: 0.5 });
    }
  };

  return (
    <section
      id="skills"
      ref={containerRef}
      className="py-16 md:py-24 bg-portfolio-dark text-white min-h-screen relative overflow-hidden"
    >
      {/* Background glow effects for aesthetic appeal */}
      <div className="absolute top-1/4 -left-24 w-48 h-48 md:w-72 md:h-72 bg-portfolio-primary rounded-full filter blur-3xl opacity-10"></div>
      <div className="absolute bottom-1/4 -right-24 w-48 h-48 md:w-72 md:h-72 bg-portfolio-secondary rounded-full filter blur-3xl opacity-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div
          ref={headerRef}
          className="text-center mb-10 md:mb-16"
        >
          <div className="inline-block mb-4 md:mb-6">
            <div className="relative">
              <div className="absolute inset-0 bg-portfolio-primary rounded-xl blur-md opacity-40"></div>
              <div className="relative w-12 h-12 md:w-16 md:h-16 mx-auto bg-portfolio-dark/50 rounded-xl flex items-center justify-center border-2 border-portfolio-primary/50 shadow-lg shadow-portfolio-primary/20">
                <FaLaptopCode className="text-portfolio-primary text-2xl md:text-3xl" />
              </div>
            </div>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-portfolio-primary to-portfolio-secondary">
              Technical Expertise
            </span>
          </h2>
          <div className="h-1 w-24 mx-auto bg-gradient-to-r from-portfolio-primary to-portfolio-secondary rounded-full mb-5" />
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            My comprehensive technology stack, honed through real-world projects
            and continuous learning.
          </p>
        </div>

        {/* Category Filter Buttons */}
        <div
          ref={filterRef}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`relative px-4 py-2 rounded-lg flex items-center gap-2 text-sm transition-all duration-300 font-semibold transform hover:scale-105 active:scale-95 ${activeCategory === category.id
                ? "text-white bg-gradient-to-r from-portfolio-primary to-portfolio-secondary shadow-lg shadow-portfolio-primary/40"
                : "text-gray-300 bg-portfolio-dark/60 hover:bg-portfolio-dark/80 border border-gray-700 hover:border-gray-500"
                }`}
            >
              <span className="text-base">{category.icon}</span>
              <span>{category.name}</span>
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
        >
          {filteredSkills.map((skill) => (
            <div
              key={skill.id}
              className="bg-portfolio-dark/50 border border-gray-700 rounded-xl p-5 flex flex-col items-center justify-center text-center shadow-md cursor-default h-48 hover:border-portfolio-primary/50 hover:shadow-portfolio-primary/20 backdrop-blur-sm"
              onMouseMove={handleCardMouseMove}
              onMouseLeave={handleCardMouseLeave}
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Skill Icon */}
              <div
                className="text-5xl mb-4 skill-icon-inner"
                style={{ color: skill.color }}
              >
                {skill.icon}
              </div>

              {/* Skill Name */}
              <h3 className="font-bold text-white text-base leading-tight">
                {skill.name}
              </h3>

              {/* Skill Description (for concepts) */}
              {skill.description && (
                <p className="text-gray-400 text-xs mt-2">
                  {skill.description}
                </p>
              )}

              {/* Learning Indicator */}
              {skill.learning && (
                <div className="absolute top-2 right-2 px-2 py-0.5 bg-portfolio-secondary/50 text-white rounded-full text-xs font-medium border border-portfolio-secondary/50">
                  Learning
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Closing Note */}
        <div className="mt-20 text-center closing-note">
          <p className="max-w-3xl mx-auto text-gray-500">
            Technology evolves rapidly, and so do I. This toolkit represents my
            current expertise, but I'm always exploring new tools and frameworks
            to stay at the cutting edge.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
