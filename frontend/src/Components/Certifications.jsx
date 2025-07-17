import React, { useState, useCallback, memo, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useTransform,
  useSpring,
} from "framer-motion";
import {
  FaCalendarAlt,
  FaTimes,
  FaAward,
  FaCertificate,
  FaLaptopCode,
  FaBrain,
  FaNetworkWired,
  FaUsers,
  FaShieldAlt,
  FaCode,
  FaServer,
  FaLaptop,
  FaPalette,
  FaMedkit,
  FaStar,
} from "react-icons/fa";

// --- UTILITY FUNCTIONS ---
// Centralized icon getters to avoid repetition.

const getSkillIcon = (skill) => {
  const size = "1em";
  if (skill.includes("Problem"))
    return <FaBrain size={size} className="text-teal-300" />;
  if (skill.includes("Team"))
    return <FaUsers size={size} className="text-orange-300" />;
  if (skill.includes("UI/UX"))
    return <FaPalette size={size} className="text-pink-300" />;
  if (skill.includes("Prototyping"))
    return <FaCode size={size} className="text-sky-300" />;
  if (skill.includes("Healthcare"))
    return <FaMedkit size={size} className="text-red-300" />;
  if (skill.includes("Network"))
    return <FaNetworkWired size={size} className="text-green-300" />;
  if (skill.includes("Cyber"))
    return <FaShieldAlt size={size} className="text-indigo-300" />;
  if (skill.includes("Event"))
    return <FaCalendarAlt size={size} className="text-purple-300" />;
  if (skill.includes("Leadership"))
    return <FaUsers size={size} className="text-yellow-300" />;
  if (skill.includes("React"))
    return <FaCode size={size} className="text-blue-300" />;
  if (skill.includes("Node"))
    return <FaServer size={size} className="text-lime-300" />;
  return <FaLaptop size={size} className="text-gray-300" />;
};

const getCertificateTypeIcon = (type) => {
  switch (type) {
    case "Competition":
      return <FaAward className="text-yellow-400" />;
    case "Design":
      return <FaPalette className="text-purple-400" />;
    case "Technical":
      return <FaLaptopCode className="text-sky-400" />;
    case "Leadership":
      return <FaUsers className="text-green-400" />;
    default:
      return <FaCertificate className="text-gray-400" />;
  }
};

// --- DATA ---
// Using placeholders for images to ensure the code runs without local assets.
const certificates = [
  {
    id: 1,
    title: "Hackathon of Vadodara 4.0",
    issuer: "Parul Institute of Innovation",
    date: "October 2023",
    type: "Competition",
    image: "https://placehold.co/600x400/1a202c/9f7aea?text=Hackathon+4.0",
    skills: ["Problem Solving", "Team Collaboration", "Innovation"],
    description:
      "Collaborated in a high-pressure environment to develop innovative solutions to real-world problems, demonstrating rapid prototyping and creative problem-solving skills.",
  },
  {
    id: 2,
    title: "Figma UI/UX Design",
    issuer: "Udemy",
    date: "August 2023",
    type: "Design",
    image: "https://placehold.co/600x400/1a202c/ed64a6?text=Figma+Design",
    skills: ["UI/UX Design", "Prototyping", "Wireframing"],
    description:
      "Completed an intensive Figma course covering UI/UX principles, interactive prototyping, and design systems to create user-centric and accessible interfaces.",
  },
  {
    id: 3,
    title: "MyOnSite Healthcare Hackathon",
    issuer: "Parul University",
    date: "January 2024",
    type: "Competition",
    image: "https://placehold.co/600x400/1a202c/f56565?text=Healthcare+Hack",
    skills: ["Healthcare Tech", "Rapid Prototyping", "Problem Solving"],
    description:
      "Participated in a hackathon focused on creating technology that addresses real-world healthcare challenges, with an emphasis on accessibility and user-centered design.",
  },
  {
    id: 4,
    title: "Cisco Certified Network Associate",
    issuer: "Cisco",
    date: "November 2023",
    type: "Technical",
    image: "https://placehold.co/600x400/1a202c/48bb78?text=Cisco+CCNA",
    skills: ["Network Architecture", "Security", "Protocols"],
    description:
      "Earned Cisco certification, demonstrating proficiency in network architecture, security protocols, and infrastructure management with hands-on experience.",
  },
  {
    id: 5,
    title: "CDC Coordinator in GLOBAL FUNFEST",
    issuer: "Career Development Cell",
    date: "March 2024",
    type: "Leadership",
    image: "https://placehold.co/600x400/1a202c/d6bcfa?text=CDC+Coordinator",
    skills: ["Event Management", "Leadership", "Coordination"],
    description:
      "Served as a coordinator, managing team operations and stakeholder communication. Demonstrated leadership by supervising logistics and ensuring smooth event execution.",
  },
  {
    id: 6,
    title: "Cyber Security Bootcamp",
    issuer: "60-Day Intensive Program",
    date: "February 2024",
    type: "Technical",
    image: "https://placehold.co/600x400/1a202c/667eea?text=Cybersecurity",
    skills: ["Cybersecurity", "Threat Detection", "Security"],
    description:
      "Completed a rigorous bootcamp covering penetration testing, vulnerability assessment, and security protocols, gaining hands-on experience with industry-standard tools.",
  },
  {
    id: 7,
    title: "Full Stack Web Development",
    issuer: "Udemy",
    date: "December 2023",
    type: "Technical",
    image: "https://placehold.co/600x400/1a202c/38b2ac?text=Full+Stack",
    skills: ["React", "Node.js", "MongoDB"],
    description:
      "Mastered both frontend and backend technologies through a comprehensive course, developing proficiency in the MERN stack for building modern web applications.",
  },
];

// --- COMPONENTS ---

const CertificateCard = memo(({ cert, onViewDetails }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["12deg", "-12deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-12deg", "12deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateY,
        rotateX,
        transformStyle: "preserve-3d",
      }}
      className="relative w-full h-[460px] cursor-pointer"
      onClick={() => onViewDetails(cert)}
    >
      <div
        style={{ transform: "translateZ(75px)", transformStyle: "preserve-3d" }}
        className="absolute inset-0 bg-gray-800/70 backdrop-blur-md rounded-2xl border border-gray-700 p-6 flex flex-col"
      >
        <div className="relative h-48 w-full mb-4 rounded-lg overflow-hidden flex-shrink-0">
          <img
            src={cert.image}
            alt={cert.title}
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute top-2 right-2 bg-gray-900/50 text-white text-xs px-2 py-1 rounded-full flex items-center gap-1.5 backdrop-blur-sm border border-white/10">
            {getCertificateTypeIcon(cert.type)}
            <span>{cert.type}</span>
          </div>
        </div>

        <div className="flex flex-col flex-grow">
          <h3 className="text-xl font-bold text-gray-100 mb-1 line-clamp-2">
            {cert.title}
          </h3>
          <div className="flex items-center text-gray-400 text-sm mb-4">
            <span className="truncate">{cert.issuer}</span>
            <span className="mx-2">•</span>
            <span className="flex-shrink-0">{cert.date}</span>
          </div>
          <div className="flex flex-wrap gap-2 mb-4">
            {cert.skills.slice(0, 3).map((skill) => (
              <div
                key={skill}
                className="bg-gray-700/50 text-gray-300 text-xs rounded-full px-3 py-1 flex items-center gap-2 border border-gray-600"
              >
                {getSkillIcon(skill)}
                {skill}
              </div>
            ))}
          </div>
          <div className="mt-auto text-center text-indigo-400 font-semibold group">
            View Details{" "}
            <motion.span className="inline-block group-hover:translate-x-1 transition-transform">
              →
            </motion.span>
          </div>
        </div>
      </div>
    </motion.div>
  );
});

const CertificateModal = ({ cert, onClose }) => {
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleEsc);

    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "unset";
    };
  }, [onClose]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      />
      <motion.div
        className="relative bg-gray-800/80 backdrop-blur-xl rounded-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto border border-gray-700 shadow-2xl"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 right-0 p-2 z-10">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-gray-900/50 hover:bg-gray-700/80 text-gray-300 rounded-full p-2 transition-colors"
          >
            <FaTimes />
          </button>
        </div>

        <div className="p-4 sm:p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-1">
              <img
                src={cert.image}
                alt={cert.title}
                className="w-full h-auto object-cover rounded-lg shadow-lg"
              />
            </div>
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-2">
                {getCertificateTypeIcon(cert.type)}
                <span className="text-indigo-400 font-semibold">
                  {cert.type}
                </span>
              </div>
              <h2 className="text-3xl font-extrabold text-white mb-2">
                {cert.title}
              </h2>
              <div className="flex flex-wrap items-center text-gray-400 text-sm mb-6 gap-x-4 gap-y-1">
                <span>
                  Issued by:{" "}
                  <strong className="text-gray-300">{cert.issuer}</strong>
                </span>
                <span className="flex items-center gap-1.5">
                  <FaCalendarAlt /> {cert.date}
                </span>
              </div>

              <h3 className="text-lg font-bold text-white mb-3">Description</h3>
              <p className="text-gray-300 mb-6">{cert.description}</p>

              <h3 className="text-lg font-bold text-white mb-3">
                Skills Gained
              </h3>
              <div className="flex flex-wrap gap-2">
                {cert.skills.map((skill) => (
                  <div
                    key={skill}
                    className="bg-gray-700/60 text-gray-200 text-sm rounded-full px-4 py-1.5 flex items-center gap-2 border border-gray-600"
                  >
                    {getSkillIcon(skill)}
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Certifications = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  const handleViewDetails = useCallback((cert) => {
    setSelectedCert(cert);
  }, []);

  const handleCloseDetails = useCallback(() => {
    setSelectedCert(null);
  }, []);

  return (
    <section
      id="certifications"
      className="relative py-24 sm:py-32 bg-gray-900 text-gray-200 overflow-hidden"
    >
      {/* Background Gradients */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute -top-20 -left-40 w-96 h-96 bg-indigo-600/20 rounded-full filter blur-3xl animate-blob"></div>
        <div className="absolute -bottom-20 -right-40 w-96 h-96 bg-purple-600/20 rounded-full filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-block p-4 bg-gray-800/50 rounded-2xl border border-gray-700 mb-4">
            <FaStar className="text-yellow-400 text-3xl" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-4 tracking-tight">
            Certifications & Achievements
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            A curated collection of my professional development milestones and
            key recognitions.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          transition={{ staggerChildren: 0.1 }}
        >
          {certificates.map((cert) => (
            <motion.div
              key={cert.id}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { type: "spring", stiffness: 100, damping: 12 },
                },
              }}
              style={{ perspective: "1000px" }}
            >
              <CertificateCard cert={cert} onViewDetails={handleViewDetails} />
            </motion.div>
          ))}
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedCert && (
          <CertificateModal cert={selectedCert} onClose={handleCloseDetails} />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Certifications;
