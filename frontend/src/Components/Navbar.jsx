import React, { useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import { useNavigate, useLocation } from "react-router-dom";
import {
  FaHome,
  FaGraduationCap,
  FaLaptopCode,
  FaProjectDiagram,
  FaStar,
  FaCertificate,
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaTwitter,
} from "react-icons/fa";

// --- Logo Component ---
const Logo = () => {
  const navigate = useNavigate();
  return (
    <motion.div
      className="flex items-center gap-2 cursor-pointer"
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
      onClick={() => {
        navigate("/");
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
    >
      <svg width="32" height="32" viewBox="0 0 200 200">
        <circle cx="100" cy="100" r="100" fill="url(#paint0_linear)" />
        <text
          x="50"
          y="135"
          fontFamily="Arial, sans-serif"
          fontSize="100"
          fill="white"
          fontWeight="bold"
        >
          SP
        </text>
        <defs>
          <linearGradient id="paint0_linear" x1="0" y1="0" x2="200" y2="200">
            <stop stopColor="#8A2BE2" />
            <stop offset="1" stopColor="#4F46E5" />
          </linearGradient>
        </defs>
      </svg>
    </motion.div>
  );
};

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = useMemo(
    () => [
      { id: "home", label: "About", icon: <FaHome />, type: "section" },
      {
        id: "education",
        label: "Education",
        icon: <FaGraduationCap />,
        type: "section",
      },
      {
        id: "skills",
        label: "Skills",
        icon: <FaLaptopCode />,
        type: "section",
      },
      {
        id: "projects",
        label: "Projects",
        icon: <FaProjectDiagram />,
        type: "section",
      },
      { id: "extra", label: "Extra", icon: <FaStar />, type: "section" },
      {
        id: "certifications",
        label: "Certifications",
        icon: <FaCertificate />,
        type: "section",
      },
      {
        id: "contact",
        label: "Contact",
        icon: <FaEnvelope />,
        type: "section",
      },
      {
        id: "all-projects",
        label: "All Projects",
        icon: <FaProjectDiagram />,
        type: "page",
        path: "/all-projects",
      },
    ],
    []
  );

  // Debounced scroll handler using requestAnimationFrame
  useEffect(() => {
    let ticking = false;

    const updateActiveSection = () => {
      if (location.pathname === "/") {
        const sections = navItems
          .filter((item) => item.type === "section")
          .map((s) => s.id);
        for (const section of sections) {
          const el = document.getElementById(section);
          if (el) {
            const rect = el.getBoundingClientRect();
            if (rect.top <= 100 && rect.bottom >= 100) {
              setActiveSection(section);
              break;
            }
          }
        }
      }
      setIsScrolled(window.scrollY > 50);
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(updateActiveSection);
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname, navItems]);

  // Initial active section detection
  useEffect(() => {
    const detectInitial = () => {
      if (location.pathname === "/") {
        const sections = navItems
          .filter((item) => item.type === "section")
          .map((s) => s.id);
        for (const section of sections) {
          const el = document.getElementById(section);
          if (el) {
            const rect = el.getBoundingClientRect();
            if (rect.top <= 100 && rect.bottom >= 100) {
              setActiveSection(section);
              return;
            }
          }
        }
        requestAnimationFrame(detectInitial);
      } else if (location.pathname === "/all-projects") {
        setActiveSection("all-projects");
      }
    };
    detectInitial();
  }, [location.pathname, navItems]);

  const socialLinks = [
    {
      id: "github",
      icon: <FaGithub />,
      href: "https://github.com/shaswat2031",
    },
    {
      id: "linkedin",
      icon: <FaLinkedin />,
      href: "https://linkedin.com/in/shaswat-prasad-14b147266/",
    },
    {
      id: "twitter",
      icon: <FaTwitter />,
      href: "https://x.com/prasadshaswat1",
    },
  ];

  return (
    <>
      <div className="h-24" />

      {/* Desktop Navbar */}
      <motion.nav
        className={`hidden md:flex fixed top-4 left-1/2 -translate-x-1/2 items-center gap-4 px-3 py-2 z-50 rounded-full border border-white/10 shadow-lg transition-all duration-300 ${
          isScrolled ? "bg-gray-800/60 backdrop-blur-md" : "bg-gray-900/50"
        }`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 30, delay: 0.2 }}
      >
        <Logo />
        <div className="flex items-center gap-1 bg-gray-900/50 p-1 rounded-full border border-white/10">
          {navItems.map((item) =>
            item.type === "section" ? (
              <ScrollLink
                key={item.id}
                to={item.id}
                smooth={true}
                offset={-100}
                duration={500}
                onSetActive={() => setActiveSection(item.id)}
                className={`relative px-4 py-1.5 text-sm rounded-full cursor-pointer transition-colors ${
                  activeSection === item.id && location.pathname === "/"
                    ? "text-white"
                    : "text-gray-400 hover:text-white"
                }`}
                onClick={() => {
                  if (location.pathname !== "/") {
                    navigate("/");
                    setTimeout(() => {
                      document
                        .getElementById(item.id)
                        ?.scrollIntoView({ behavior: "smooth" });
                    }, 100);
                  }
                }}
              >
                {activeSection === item.id && location.pathname === "/" && (
                  <motion.div
                    layoutId="active-desktop-pill"
                    className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full"
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </ScrollLink>
            ) : (
              <button
                key={item.id}
                onClick={() => navigate(item.path)}
                className={`relative px-4 py-1.5 text-sm rounded-full transition-colors ${
                  location.pathname === item.path
                    ? "text-white"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {location.pathname === item.path && (
                  <motion.div
                    layoutId="active-desktop-pill"
                    className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full"
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </button>
            )
          )}
        </div>
        <div className="flex items-center gap-1">
          {socialLinks.map((social) => (
            <motion.a
              key={social.id}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-gray-400 hover:text-white transition-colors rounded-full hover:bg-gray-700/50"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {social.icon}
            </motion.a>
          ))}
        </div>
      </motion.nav>

      {/* Mobile Bottom Navbar */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-lg border-t border-gray-800">
        <div className="flex justify-around items-center h-16">
          {navItems.slice(0, 5).map((item) =>
            item.type === "section" ? (
              <ScrollLink
                key={item.id}
                to={item.id}
                smooth={true}
                offset={-100}
                duration={500}
                onSetActive={() => setActiveSection(item.id)}
                className={`relative flex flex-col items-center gap-1 w-full h-full justify-center ${
                  activeSection === item.id && location.pathname === "/"
                    ? "text-indigo-400"
                    : "text-gray-500"
                }`}
                onClick={() => {
                  if (location.pathname !== "/") {
                    navigate("/");
                    setTimeout(() => {
                      document
                        .getElementById(item.id)
                        ?.scrollIntoView({ behavior: "smooth" });
                    }, 100);
                  }
                }}
              >
                <div className="text-xl">{item.icon}</div>
                <span className="text-xs font-medium">{item.label}</span>
                {activeSection === item.id && location.pathname === "/" && (
                  <motion.div
                    layoutId="active-mobile-pill"
                    className="absolute top-1 w-1.5 h-1.5 bg-indigo-500 rounded-full"
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </ScrollLink>
            ) : (
              <button
                key={item.id}
                onClick={() => navigate(item.path)}
                className={`relative flex flex-col items-center gap-1 w-full h-full justify-center ${
                  location.pathname === item.path
                    ? "text-indigo-400"
                    : "text-gray-500"
                }`}
              >
                <div className="text-xl">{item.icon}</div>
                <span className="text-xs font-medium">{item.label}</span>
                {location.pathname === item.path && (
                  <motion.div
                    layoutId="active-mobile-pill"
                    className="absolute top-1 w-1.5 h-1.5 bg-indigo-500 rounded-full"
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </button>
            )
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
