import React, { useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import { Link, useNavigate, useLocation } from "react-router-dom";
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

// --- Placeholder Page Components ---
const PageWrapper = ({ title, children }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.5, ease: "easeInOut" }}
    className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 min-h-[calc(100vh-8rem)]"
  >
    <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4 tracking-tight">
      {title}
    </h1>
    <div className="w-24 h-1.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mb-8"></div>
    <div className="text-gray-300 text-lg leading-relaxed">{children}</div>
  </motion.div>
);

const AboutPage = () => (
  <PageWrapper title="About Me">
    Welcome! This is the main content area for the 'About' page. You can fill
    this with your personal introduction, professional summary, and what drives
    you.
  </PageWrapper>
);
const EducationPage = () => (
  <PageWrapper title="My Education">
    Here you can detail your educational background, including degrees,
    universities, and relevant coursework.
  </PageWrapper>
);
const SkillsPage = () => (
  <PageWrapper title="Technical Skills">
    Showcase your technical abilities here. You can list programming languages,
    frameworks, tools, and other skills.
  </PageWrapper>
);
const ProjectsPage = () => (
  <PageWrapper title="My Projects">
    This section is for highlighting your key projects. Include descriptions,
    technologies used, and links to live demos or source code.
  </PageWrapper>
);
const ExtraPage = () => (
  <PageWrapper title="Extracurriculars">
    Talk about your activities outside of coding, such as leadership roles,
    volunteer work, or personal hobbies.
  </PageWrapper>
);
const CertificationsPage = () => (
  <PageWrapper title="Certifications">
    List any professional certifications or online course completions to
    validate your skills.
  </PageWrapper>
);
const ContactPage = () => (
  <PageWrapper title="Contact Me">
    Provide ways for visitors to get in touch with you, like a contact form or
    links to your professional profiles.
  </PageWrapper>
);

// --- Navbar Component ---
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
      <svg
        width="32"
        height="32"
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="100" cy="100" r="100" fill="url(#paint0_linear_101_2)" />
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
          <linearGradient
            id="paint0_linear_101_2"
            x1="0"
            y1="0"
            x2="200"
            y2="200"
            gradientUnits="userSpaceOnUse"
          >
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
      { id: "home", label: "About", icon: <FaHome />, path: "/" },
      {
        id: "education",
        label: "Education",
        icon: <FaGraduationCap />,
        path: "/",
      },
      { id: "skills", label: "Skills", icon: <FaLaptopCode />, path: "/" },
      {
        id: "projects",
        label: "Projects",
        icon: <FaProjectDiagram />,
        path: "/",
      },
      { id: "extra", label: "Extra", icon: <FaStar />, path: "/" },
      {
        id: "certifications",
        label: "Certifications",
        icon: <FaCertificate />,
        path: "/",
      },
      { id: "contact", label: "Contact", icon: <FaEnvelope />, path: "/" },
      {
        id: "all-projects",
        label: "All Projects",
        icon: <FaProjectDiagram />,
        path: "/all-projects",
      },
    ],
    []
  );

  useEffect(() => {
    const handleScroll = () => {
      // Set isScrolled state based on window scroll position
      setIsScrolled(window.scrollY > 50);

      // Only check for active section on homepage
      if (location.pathname === "/") {
        // Find which section is currently in view
        const sections = [
          "home",
          "education",
          "skills",
          "projects",
          "extra",
          "certifications",
          "contact",
        ];

        for (const section of sections) {
          const element = document.getElementById(section);
          if (element) {
            const rect = element.getBoundingClientRect();
            // If the element is in view (partially or fully)
            if (rect.top <= 100 && rect.bottom >= 100) {
              setActiveSection(section);
              break;
            }
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  // Set active section when location changes
  useEffect(() => {
    if (location.pathname === "/") {
      // On initial load, check which section is in view
      const checkInitialSection = () => {
        const sections = [
          "home",
          "education",
          "skills",
          "projects",
          "extra",
          "certifications",
          "contact",
        ];

        for (const section of sections) {
          const element = document.getElementById(section);
          if (element) {
            const rect = element.getBoundingClientRect();
            // If the element is in view (partially or fully)
            if (rect.top <= 100 && rect.bottom >= 100) {
              setActiveSection(section);
              break;
            }
          }
        }
      };

      // Run after a slight delay to ensure DOM is fully loaded
      setTimeout(checkInitialSection, 300);
    } else if (location.pathname === "/all-projects") {
      setActiveSection("all-projects");
    }
  }, [location.pathname]);

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
      {/* Spacer to prevent content from hiding behind fixed navbar */}
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
            item.path === "/" ? (
              // Use ScrollLink for sections on the homepage
              <ScrollLink
                key={item.id}
                to={item.id}
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                onSetActive={() => setActiveSection(item.id)}
                className={`relative px-4 py-1.5 text-sm rounded-full transition-colors cursor-pointer ${
                  activeSection === item.id && location.pathname === "/"
                    ? "text-white"
                    : "text-gray-400 hover:text-white"
                }`}
                onClick={() => {
                  if (location.pathname !== "/") {
                    navigate("/");
                    // We need a small delay to allow navigation to complete
                    setTimeout(() => {
                      const element = document.getElementById(item.id);
                      if (element) {
                        element.scrollIntoView({
                          behavior: "smooth",
                          block: "start",
                        });
                      }
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
              // Use regular button with onClick for navigation to other pages
              <button
                key={item.id}
                onClick={() => navigate(item.path)}
                className={`relative px-4 py-1.5 text-sm rounded-full transition-colors cursor-pointer ${
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
            item.path === "/" ? (
              // Use ScrollLink for sections on the homepage
              <ScrollLink
                key={item.id}
                to={item.id}
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                onSetActive={() => setActiveSection(item.id)}
                className={`relative flex flex-col items-center gap-1 w-full h-full justify-center transition-colors cursor-pointer ${
                  activeSection === item.id && location.pathname === "/"
                    ? "text-indigo-400"
                    : "text-gray-500"
                }`}
                onClick={() => {
                  if (location.pathname !== "/") {
                    navigate("/");
                    // We need a small delay to allow navigation to complete
                    setTimeout(() => {
                      const element = document.getElementById(item.id);
                      if (element) {
                        element.scrollIntoView({
                          behavior: "smooth",
                          block: "start",
                        });
                      }
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
              // Use button with onClick for navigation to other pages
              <button
                key={item.id}
                onClick={() => navigate(item.path)}
                className={`relative flex flex-col items-center gap-1 w-full h-full justify-center transition-colors cursor-pointer ${
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
