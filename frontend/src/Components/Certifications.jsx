import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaCalendarAlt,
  FaArrowRight,
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
} from "react-icons/fa";

// Import certificate images
import hackathonImage from "../Assets/hackthon4.0.png";
import figmaCertImage from "../Assets/Figma.png";
import healthcareHackathonImage from "../Assets/onmyhealth.jpg";
import ciscoNetworkImage from "../Assets/cyber.jpg";
import cdcCoordinatorImage from "../Assets/cdc.jpg";
import cybersecurityImage from "../Assets/cybersecurity.jpg";
import fullStackImage from "../Assets/bootcamp.jpg";

const Certifications = () => {
  const [selectedCertification, setSelectedCertification] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Define certificates array before using it in useEffect
  const certificates = [
    {
      id: 1,
      title: "Hackathon of Vadodara 4.0",
      issuer: "Parul Institute of Innovation",
      date: "October 2023",
      type: "Competition",
      image: hackathonImage,
      skills: ["Problem Solving", "Team Collaboration", "Innovation"],
      description:
        "Participated in the prestigious Vadodara 4.0 Hackathon organized by Parul Institute of Innovation. Collaborated with a team to develop innovative solutions to real-world problems within a tight timeframe, demonstrating skills in rapid prototyping and creative problem-solving.",
    },
    {
      id: 2,
      title: "Figma Course Certification",
      issuer: "Udemy",
      date: "August 2023",
      type: "Design",
      image: figmaCertImage,
      skills: ["UI/UX Design", "Prototyping", "Wireframing"],
      description:
        "Completed an intensive Figma design course covering UI/UX principles, interactive prototyping, and design systems. Developed skills in creating high-fidelity wireframes and user interfaces with a focus on user experience and accessibility.",
    },
    {
      id: 3,
      title: "MyOnSite Healthcare Hackathon",
      issuer: "Parul University",
      date: "January 2024",
      type: "Competition",
      image: healthcareHackathonImage,
      skills: ["Healthcare Tech", "Rapid Prototyping", "Problem Solving"],
      description:
        "Participated in the MyOnSite Healthcare Hackathon at Parul University, where our team developed innovative healthcare solutions. Focused on creating technology that addresses real-world healthcare challenges, with emphasis on accessibility and user-centered design.",
    },
    {
      id: 4,
      title: "Cisco Certificate of Computer Networks",
      issuer: "Cisco",
      date: "November 2023",
      type: "Technical",
      image: ciscoNetworkImage,
      skills: ["Network Architecture", "Network Security", "Protocols"],
      description:
        "Earned Cisco certification in Computer Networks, demonstrating proficiency in network architecture, security protocols, and infrastructure management. Gained hands-on experience with routing, switching, and network troubleshooting techniques.",
    },
    {
      id: 5,
      title: "CDC Coordinator in GLOBAL FUNFEST",
      issuer: "Career Development Cell",
      date: "March 2024",
      type: "Leadership",
      image: cdcCoordinatorImage,
      skills: ["Event Management", "Leadership", "Team Coordination"],
      description:
        "Served as a CDC Coordinator for the GLOBAL FUNFEST event, managing team operations and coordinating between different stakeholders. Demonstrated leadership abilities by supervising event logistics and ensuring smooth execution of planned activities.",
    },
    {
      id: 6,
      title: "Cyber Security Bootcamp",
      issuer: "60-day Intensive Program",
      date: "February 2024",
      type: "Technical",
      image: cybersecurityImage,
      skills: ["Cybersecurity", "Threat Detection", "Security Protocols"],
      description:
        "Completed a rigorous 60-day Cyber Security Bootcamp covering penetration testing, vulnerability assessment, and security protocols. Gained hands-on experience with security tools and frameworks to identify and mitigate potential security threats.",
    },
    {
      id: 7,
      title: "Full Stack Web Development",
      issuer: "Udemy",
      date: "December 2023",
      type: "Technical",
      image: fullStackImage,
      skills: ["React", "Node.js", "MongoDB", "Express"],
      description:
        "Completed a comprehensive Full Stack Web Development course on Udemy, mastering both frontend and backend technologies. Developed proficiency in React for UI development, Node.js for server-side logic, and database management with MongoDB and Express.",
    },
  ];

  // Fixed useEffect to reference the certificates array after it's defined
  useEffect(() => {
    // Create an array of all image urls
    const imageUrls = certificates.map((cert) => cert.image);

    // Preload all images
    const preloadImages = async () => {
      const promises = imageUrls.map((url) => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.onload = resolve;
          img.onerror = reject;
          img.src = url;
        });
      });

      try {
        await Promise.all(promises);
        setIsLoading(false);
      } catch (error) {
        console.error("Error preloading images:", error);
        setIsLoading(false); // Continue even if some images fail to load
      }
    };

    preloadImages();

    // Cleanup function to handle unmounting
    return () => {
      // Cancel any pending operations if component unmounts
    };
  }, []); // Added certificates as a dependency

  const handleViewDetails = (cert) => {
    setSelectedCertification(cert);
  };

  const handleCloseDetails = () => {
    setSelectedCertification(null);
  };

  // Function to get appropriate icon for certificate type
  const getCertificateTypeIcon = (type) => {
    switch (type) {
      case "Competition":
        return <FaAward className="text-yellow-500" />;
      case "Design":
        return <FaPalette className="text-purple-500" />;
      case "Technical":
        return <FaLaptopCode className="text-blue-500" />;
      case "Leadership":
        return <FaUsers className="text-green-500" />;
      default:
        return <FaCertificate className="text-gray-500" />;
    }
  };

  // Function to get appropriate icon for skill
  const getSkillIcon = (skill) => {
    if (skill.includes("Problem")) return <FaBrain />;
    if (skill.includes("Team")) return <FaUsers />;
    if (skill.includes("UI/UX")) return <FaPalette />;
    if (skill.includes("Prototyping")) return <FaCode />;
    if (skill.includes("Healthcare")) return <FaMedkit />;
    if (skill.includes("Network")) return <FaNetworkWired />;
    if (skill.includes("Cyber")) return <FaShieldAlt />;
    if (skill.includes("Event")) return <FaCalendarAlt />;
    if (skill.includes("Leadership")) return <FaUsers />;
    if (skill.includes("React")) return <FaCode />;
    if (skill.includes("Node")) return <FaServer />;
    return <FaLaptop />;
  };

  return (
    <section id="certifications" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-3">
            Certifications & Achievements
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            A showcase of my professional development journey and notable
            recognitions.
          </p>
        </motion.div>

        {isLoading ? (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certificates.map((cert, index) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: Math.min(index * 0.1, 1) }}
                className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col h-[450px]"
              >
                <div className="relative h-48 overflow-hidden flex-shrink-0">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute top-2 right-2 bg-gray-900 text-white text-xs px-2 py-1 rounded-full flex items-center">
                    {getCertificateTypeIcon(cert.type)}
                    <span className="ml-1">{cert.type}</span>
                  </div>
                </div>
                <div className="p-5 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-white mb-2 line-clamp-2">
                    {cert.title}
                  </h3>
                  <div className="flex items-center text-gray-400 text-sm mb-3">
                    <span className="truncate">{cert.issuer}</span>
                    <span className="mx-2 flex-shrink-0">•</span>
                    <span className="flex items-center flex-shrink-0">
                      <FaCalendarAlt className="mr-1" /> {cert.date}
                    </span>
                  </div>{" "}
                  <div className="flex flex-wrap flex-grow mb-3">
                    {cert.skills.slice(0, 3).map((skill, i) => (
                      <span
                        key={i}
                        className="bg-gray-700 text-gray-300 rounded-full px-3 py-1 text-xs mr-2 mb-2 flex items-center"
                      >
                        {getSkillIcon(skill)}
                        <span className="ml-1 truncate max-w-[80px]">
                          {skill}
                        </span>
                      </span>
                    ))}
                  </div>
                  <button
                    onClick={() => handleViewDetails(cert)}
                    className="flex items-center justify-center w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 transition-colors text-white rounded-md mt-auto"
                  >
                    <span>View Details</span>
                    <FaArrowRight className="ml-2" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Modal implementation with improvements */}
        {selectedCertification && (
          <div
            className="fixed inset-0 z-50 overflow-y-auto"
            aria-labelledby="modal-title"
            role="dialog"
            aria-modal="true"
            onClick={handleCloseDetails} // Close when clicking outside
          >
            <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
              <div
                className="fixed inset-0 bg-gray-900 bg-opacity-75 transition-opacity"
                aria-hidden="true"
              ></div>

              {/* Modal panel */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="inline-block align-bottom bg-gray-800 rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-2xl sm:w-full"
                onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
              >
                <div className="relative">
                  <div className="h-64 w-full overflow-hidden">
                    <img
                      src={selectedCertification.image}
                      alt={selectedCertification.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="px-6 py-5">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-2">
                          {selectedCertification.title}
                        </h3>
                        <div className="flex items-center text-gray-400 mb-4">
                          <span>{selectedCertification.issuer}</span>
                          <span className="mx-2">•</span>
                          <span className="flex items-center">
                            <FaCalendarAlt className="mr-1" />{" "}
                            {selectedCertification.date}
                          </span>
                        </div>
                      </div>
                      <div className="bg-gray-900 text-white px-3 py-1 rounded-full flex items-center">
                        {getCertificateTypeIcon(selectedCertification.type)}
                        <span className="ml-1">
                          {selectedCertification.type}
                        </span>
                      </div>
                    </div>

                    <div className="mb-4">
                      <h4 className="text-lg font-semibold text-white mb-2">
                        Skills
                      </h4>
                      <div className="flex flex-wrap">
                        {selectedCertification.skills.map((skill, index) => (
                          <span
                            key={index}
                            className="bg-gray-700 text-gray-300 rounded-full px-3 py-1 text-sm mr-2 mb-2 flex items-center"
                          >
                            {getSkillIcon(skill)}
                            <span className="ml-1">{skill}</span>
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-white mb-2">
                        Description
                      </h4>
                      <p className="text-gray-300">
                        {selectedCertification.description}
                      </p>
                    </div>

                    <div className="border-t border-gray-700 pt-4 flex justify-end">
                      <button
                        onClick={handleCloseDetails}
                        className="py-2 px-5 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Certifications;
