import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaEnvelope,
  FaWhatsapp,
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { SiHashnode, SiLeetcode } from "react-icons/si";

// --- DATA ---
// Centralized data for all contact links
const contactLinks = [
  {
    id: "linkedin",
    icon: <FaLinkedin />,
    label: "LinkedIn",
    href: "https://linkedin.com/in/shaswat-prasad-14b147266/",
    color: "hover:text-sky-400",
    shadow: "hover:shadow-sky-500/50",
  },
  {
    id: "github",
    icon: <FaGithub />,
    label: "GitHub",
    href: "https://github.com/shaswat2031",
    color: "hover:text-white",
    shadow: "hover:shadow-white/50",
  },
  {
    id: "twitter",
    icon: <FaTwitter />,
    label: "Twitter",
    href: "https://x.com/prasadshaswat1",
    color: "hover:text-blue-400",
    shadow: "hover:shadow-blue-500/50",
  },
  {
    id: "whatsapp",
    icon: <FaWhatsapp />,
    label: "WhatsApp",
    href: "https://wa.me/9265318481",
    color: "hover:text-green-400",
    shadow: "hover:shadow-green-500/50",
  },
  {
    id: "leetcode",
    icon: <SiLeetcode />,
    label: "LeetCode",
    href: "https://leetcode.com/u/prasadshaswat9265/",
    color: "hover:text-yellow-400",
    shadow: "hover:shadow-yellow-500/50",
  },
  {
    id: "hashnode",
    icon: <SiHashnode />,
    label: "Hashnode",
    href: "https://hashnode.com/@prasadshaswat",
    color: "hover:text-purple-400",
    shadow: "hover:shadow-purple-500/50",
  },
];

// --- COMPONENTS ---

// Component for each orbiting icon
const OrbitalIcon = ({ link, angle, radius, onHover }) => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  useEffect(() => {
    setX(Math.cos(angle) * radius);
    setY(Math.sin(angle) * radius);
  }, [angle, radius]);

  return (
    <motion.div
      className="absolute"
      initial={{ x: 0, y: 0, opacity: 0 }}
      animate={{ x, y, opacity: 1 }}
      transition={{ type: "spring", stiffness: 100, damping: 12, delay: 0.5 }}
    >
      <motion.a
        href={link.href}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => onHover(link.id)}
        onMouseLeave={() => onHover(null)}
        className={`relative w-16 h-16 rounded-full bg-gray-800/50 border border-gray-700/80 flex items-center justify-center text-gray-400 text-3xl transition-colors duration-300 ${link.color}`}
        whileHover={{ scale: 1.2, boxShadow: `0 0 20px var(--shadow-color)` }}
        style={{
          "--shadow-color": link.shadow
            .replace("hover:shadow-", "var(--tw-shadow-color: ")
            .replace("/50", ")")
            .replace(")", ", 0.5)"),
        }}
      >
        {link.icon}
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute -bottom-10 bg-gray-900 text-white text-xs px-2 py-1 rounded-md whitespace-nowrap"
          >
            {link.label}
          </motion.div>
        </AnimatePresence>
      </motion.a>
    </motion.div>
  );
};

// Main Contact Component
const ContactUs = () => {
  const [hoveredId, setHoveredId] = useState(null);
  const [radius, setRadius] = useState(220);

  useEffect(() => {
    const updateRadius = () => {
      if (window.innerWidth < 768) {
        setRadius(140);
      } else {
        setRadius(220);
      }
    };
    updateRadius();
    window.addEventListener("resize", updateRadius);
    return () => window.removeEventListener("resize", updateRadius);
  }, []);

  return (
    <section
      id="contact"
      className="relative min-h-screen bg-gray-900 text-gray-200 flex flex-col items-center justify-center py-24 px-4 overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_rgba(128,0,128,0.1)_0%,_rgba(0,0,0,0)_50%)]"></div>
        <motion.div
          className="absolute top-1/2 left-1/2 w-[50vw] h-[50vh] bg-indigo-600/10 rounded-full filter blur-3xl"
          animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
          transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
        />
      </div>

      <div className="relative z-10 text-center mb-16 md:mb-0">
        <motion.h2
          className="text-4xl md:text-6xl font-extrabold text-white tracking-tighter mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Let's Build Something{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500">
            Amazing
          </span>
          .
        </motion.h2>
        <motion.p
          className="max-w-2xl mx-auto text-lg text-gray-400"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Have a project, an idea, or just want to say hi? Reach out.
        </motion.p>
      </div>

      <div className="relative w-full flex items-center justify-center h-[400px] md:h-[550px] my-8">
        {contactLinks.map((link, index) => {
          const angle = (index / contactLinks.length) * 2 * Math.PI;
          return (
            <OrbitalIcon
              key={link.id}
              link={link}
              angle={angle}
              radius={radius}
              onHover={setHoveredId}
            />
          );
        })}
        <motion.div
          className="w-40 h-40 md:w-56 md:w-56 rounded-full bg-gray-800 flex items-center justify-center border-2 border-indigo-500/30 transition-all duration-500"
          animate={{
            borderColor: hoveredId
              ? contactLinks
                  .find((l) => l.id === hoveredId)
                  ?.color.replace("hover:text-", "var(--tw-color-")
                  .replace(")", ")")
              : "rgba(99, 102, 241, 0.3)",
            boxShadow: hoveredId
              ? `0 0 40px ${contactLinks
                  .find((l) => l.id === hoveredId)
                  ?.color.replace("hover:text-", "var(--tw-color-")
                  .replace(")", ")")}`
              : "0 0 20px rgba(99, 102, 241, 0.2)",
          }}
        >
          <div className="text-center">
            <div className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-white to-gray-400">
              SP
            </div>
            <div className="text-xs text-gray-400 tracking-widest">CONTACT</div>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="relative z-10 flex flex-col md:flex-row items-center gap-4 md:gap-8 text-gray-400 bg-gray-800/50 backdrop-blur-sm px-6 py-4 rounded-lg border border-gray-700"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        <div className="flex items-center gap-2">
          <FaMapMarkerAlt className="text-indigo-400" />
          <span>Vadodara, Gujarat</span>
        </div>
        <div className="hidden md:block h-6 w-px bg-gray-700"></div>
        <a
          href="mailto:prasadshaswat9265@gmail.com"
          className="flex items-center gap-2 hover:text-indigo-300 transition-colors"
        >
          <FaEnvelope className="text-indigo-400" />
          <span>prasadshaswat9265@gmail.com</span>
        </a>
      </motion.div>
    </section>
  );
};

export default ContactUs;
