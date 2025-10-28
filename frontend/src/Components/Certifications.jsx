import React, { useState, memo } from "react";
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

import hackthonImage from "../Assets/hackthon4.0.png";
import figmaImage from "../Assets/Figma.png";
import onmySiteImage from "../Assets/onmyhealth.jpg";
import CiscoImagenetwork from "../Assets/cybersecurity.jpg";
import cdcimage from "../Assets/cdc.jpg";
import cyberbootcamp from "../Assets/cyber.jpg";
import fullstackImage from "../Assets/bootcamp.jpg";
import enterpenershipImage from "../Assets/enter.png";
import days from "../Assets/30days.png";
import oracle from "../Assets/oracle.png"

// --- ICON HELPERS ---
const skillIconMap = [
  { match: "problem", icon: <FaBrain className="text-teal-300" /> },
  { match: "team", icon: <FaUsers className="text-orange-300" /> },
  { match: "ui/ux", icon: <FaPalette className="text-pink-300" /> },
  { match: "prototype", icon: <FaCode className="text-sky-300" /> },
  { match: "health", icon: <FaMedkit className="text-red-300" /> },
  { match: "network", icon: <FaNetworkWired className="text-green-300" /> },
  { match: "cyber", icon: <FaShieldAlt className="text-indigo-300" /> },
  { match: "event", icon: <FaCalendarAlt className="text-purple-300" /> },
  { match: "leadership", icon: <FaUsers className="text-yellow-300" /> },
  { match: "react", icon: <FaCode className="text-blue-300" /> },
  { match: "node", icon: <FaServer className="text-lime-300" /> },
  { match: "security", icon: <FaShieldAlt className="text-red-400" /> },
];

const getSkillIcon = (skill) => {
  const lower = skill.toLowerCase();
  const found = skillIconMap.find(({ match }) => lower.includes(match));
  return found ? found.icon : <FaLaptop className="text-gray-300" />;
};

const typeIconMap = {
  Competition: <FaAward className="text-yellow-400" />,
  Design: <FaPalette className="text-purple-400" />,
  Technical: <FaLaptopCode className="text-sky-400" />,
  Leadership: <FaUsers className="text-green-400" />,
  "Web Development": <FaCode className="text-blue-400" />,
};

const getCertificateTypeIcon = (type) =>
  typeIconMap[type] || <FaCertificate className="text-gray-400" />;

// --- DATA ---
const certificates = [
  {
    id: 1,
    title: "Hackathon of Vadodara 4.0",
    issuer: "Parul Institute of Innovation",
    date: "October 2023",
    type: "Competition",
    image: hackthonImage,
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
    image: figmaImage,
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
    image: onmySiteImage,
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
    image: CiscoImagenetwork,
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
    image: cdcimage,
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
    image: cyberbootcamp,
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
    image: fullstackImage,
    skills: ["React", "Node.js", "MongoDB"],
    description:
      "Mastered both frontend and backend technologies through a comprehensive course, developing proficiency in the MERN stack for building modern web applications.",
  },
  {
    id: 8,
    title: "Discovering Entrepreneurship",
    issuer: "Cisco Networking Academy",
    date: "May 2025",
    type: "Technical",
    image: enterpenershipImage,
    skills: [
      "Entrepreneurial Vision",
      "Entrepreneurial Mindset",
      "Business Opportunity Analysis",
      "Competitive Analysis",
      "Pitch Development",
    ],
    description:
      "Completed the Discovering Entrepreneurship course by Cisco Networking Academy. Gained skills in entrepreneurial vision and mindset, business opportunity research, competitive analysis, and creating pitches tailored to different audiences.",
  },
  {
    id: 9,
    title: "Job Ready MERN Full-Stack Web Development Course",
    issuer: "30 Days Coding",
    date: "May 19, 2024",
    type: "Web Development",
    image: days,
    skills: [
      "MongoDB",
      "Express.js",
      "React.js",
      "Node.js",
      "Full-Stack Web Development",
    ],
    description:
      "Completed the Job Ready MERN Full-Stack Web Development course offered by 30 Days Coding. Acquired hands-on experience in MongoDB, Express.js, React.js, and Node.js for building scalable, production-ready web applications.",
  },
  {
  id: 11,
  title: "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
  issuer: "Oracle",
  date: "October 27, 2025",
  type: "Cloud & AI",
  image: oracle,
  skills: [
    "Oracle Cloud Infrastructure (OCI)",
    "Artificial Intelligence Fundamentals",
    "Cloud Computing Concepts",
    "Machine Learning Basics",
    "Data Management in OCI"
  ],
  description:
    "Achieved the Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate certification, demonstrating foundational knowledge in Oracle Cloud services, AI concepts, and machine learning integration within OCI environments."
}

  
];

// --- CARD COMPONENT ---
const CertificateCard = memo(({ cert, onViewDetails }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["12deg", "-12deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-12deg", "12deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      style={{ rotateY, rotateX, transformStyle: "preserve-3d" }}
      className="relative w-full min-h-[460px] cursor-pointer hover:scale-[1.02] transition-transform duration-300"
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
            <span>{cert.date}</span>
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

// --- MAIN COMPONENT ---
export default function Certifications() {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section
      id="certifications"
      className="relative py-24 sm:py-32 bg-gray-900 text-gray-200"
    >
      {/* Gradient Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-20 -left-40 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute -bottom-20 -right-40 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
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
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
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
              <CertificateCard cert={cert} onViewDetails={setSelectedCert} />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* MODAL */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedCert(null)}
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
              <button
                onClick={() => setSelectedCert(null)}
                className="absolute top-4 right-4 bg-gray-900/50 hover:bg-gray-700/80 text-gray-300 rounded-full p-2 transition-colors"
                aria-label="Close"
              >
                <FaTimes />
              </button>
              <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="md:col-span-1">
                  <img
                    src={selectedCert.image}
                    alt={selectedCert.title}
                    className="w-full rounded-lg shadow-lg object-cover"
                  />
                </div>
                <div className="md:col-span-2">
                  <div className="flex items-center gap-2 mb-2">
                    {getCertificateTypeIcon(selectedCert.type)}
                    <span className="text-indigo-400 font-semibold">
                      {selectedCert.type}
                    </span>
                  </div>
                  <h2 className="text-3xl font-extrabold text-white mb-2">
                    {selectedCert.title}
                  </h2>
                  <div className="flex flex-wrap items-center text-gray-400 text-sm mb-6 gap-4">
                    <span>
                      Issued by:{" "}
                      <strong className="text-gray-300">
                        {selectedCert.issuer}
                      </strong>
                    </span>
                    <span className="flex items-center gap-1.5">
                      <FaCalendarAlt /> {selectedCert.date}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3">
                    Description
                  </h3>
                  <p className="text-gray-300 mb-6">
                    {selectedCert.description}
                  </p>
                  <h3 className="text-lg font-bold text-white mb-3">
                    Skills Gained
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedCert.skills.map((skill) => (
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
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
