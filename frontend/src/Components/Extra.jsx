import React from "react";
import { motion } from "framer-motion";
import {
  FaLanguage,
  FaUserTie,
  FaAward,
  FaGraduationCap,
  FaCode,
  FaLaptopCode,
  FaChevronRight,
} from "react-icons/fa";
import { BiNetworkChart } from "react-icons/bi";
import { HiOutlineLightBulb } from "react-icons/hi";

const Extra = () => {
  const activities = [
    {
      title: "Career Development Cell",
      role: "Tech Leader (2023 - 2025)",
      description:
        "Led technical initiatives and organized large-scale events to foster student growth and technical skills development.",
      icon: <FaUserTie />,
      color: "from-indigo-500 to-purple-600",
      achievements: [
        "Managed team of 12 technical volunteers",
        "Organized 5 major tech events with 3000+ participants",
        "Developed leadership and event management skills",
      ],
      year: "2023-2025",
    },
    {
      title: "Multilingual Proficiency",
      role: "Language Skills",
      description:
        "Fluent communication across multiple languages enables effective collaboration in diverse environments.",
      icon: <FaLanguage />,
      color: "from-blue-500 to-teal-500",
      achievements: [
        "English - Professional proficiency",
        "Hindi - Native fluency",
        "Gujarati - Basic conversational",
      ],
      year: "Ongoing",
    },
    {
      title: "Mentorship & Networking",
      role: "Community Leader",
      description:
        "Built professional networks through events and provided guidance to junior developers.",
      icon: <BiNetworkChart />,
      color: "from-amber-500 to-pink-500",
      achievements: [
        "Mentored 15+ junior developers",
        "Attended 10+ industry networking events",
        "Enhanced interpersonal communication",
      ],
      year: "2022-Present",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 12,
      },
    },
    hover: {
      y: -5,
      transition: { duration: 0.2 },
    },
  };

  return (
    <section
      id="extra"
      className="py-24 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-gray-200 relative overflow-hidden"
    >
      {/* Floating background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-gray-700 opacity-10"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              fontSize: `${Math.random() * 3 + 2}rem`,
            }}
            animate={{
              y: [0, Math.random() * 40 - 20],
              x: [0, Math.random() * 40 - 20],
              rotate: [0, Math.random() * 360],
            }}
            transition={{
              duration: Math.random() * 20 + 10,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "linear",
            }}
          >
            {i % 3 === 0 ? (
              <FaUserTie />
            ) : i % 3 === 1 ? (
              <FaLanguage />
            ) : (
              <BiNetworkChart />
            )}
          </motion.div>
        ))}
      </div>

      {/* Glow effects */}
      <div className="absolute top-1/4 -left-20 w-64 h-64 bg-indigo-600 rounded-full filter blur-3xl opacity-10"></div>
      <div className="absolute bottom-1/4 -right-20 w-64 h-64 bg-purple-600 rounded-full filter blur-3xl opacity-10"></div>

      <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex mb-6"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-indigo-600 rounded-xl blur-md opacity-30"></div>
              <div className="relative w-16 h-16 mx-auto bg-gray-800 rounded-xl flex items-center justify-center border-2 border-indigo-500/50 shadow-lg shadow-indigo-900/20">
                <HiOutlineLightBulb className="text-indigo-400 text-2xl" />
              </div>
            </div>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
              Beyond Code
            </span>
          </h2>

          <motion.div
            className="h-1 w-24 mx-auto bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mb-5"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          />

          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            The skills and experiences that complement my technical expertise
            and shape my professional identity.
          </p>
        </motion.div>

        {/* Interactive Timeline */}
        <motion.div
          className="relative"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-500/20 via-purple-500/20 to-transparent hidden md:block"></div>

          <div className="space-y-16 md:space-y-24">
            {activities.map((activity, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative flex flex-col md:flex-row items-start gap-8 group"
                whileHover="hover"
              >
                {/* Timeline dot */}
                <div className="absolute left-0 top-6 transform -translate-x-1/2 hidden md:flex">
                  <div className="w-6 h-6 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full flex items-center justify-center shadow-lg shadow-indigo-900/30 z-10">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                </div>

                {/* Year indicator */}
                <div className="md:absolute left-0 top-0 md:w-24 text-right pr-6 hidden md:block">
                  <span className="text-xs font-medium text-gray-400">
                    {activity.year}
                  </span>
                </div>

                {/* Mobile year indicator */}
                <div className="md:hidden mb-2">
                  <span className="text-xs font-medium text-gray-400 bg-gray-800/50 px-2 py-1 rounded-full">
                    {activity.year}
                  </span>
                </div>

                {/* Activity card */}
                <motion.div
                  className={`flex-1 bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700 shadow-lg transition-all duration-300 group-hover:shadow-indigo-900/20 group-hover:border-indigo-500/30`}
                >
                  <div className="p-6 md:p-8">
                    <div className="flex items-start gap-6">
                      {/* Icon */}
                      <div
                        className={`flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-r ${activity.color} flex items-center justify-center text-white shadow-md`}
                      >
                        <motion.div
                          whileHover={{ rotate: [0, -10, 10, 0] }}
                          transition={{ duration: 0.6 }}
                        >
                          {activity.icon}
                        </motion.div>
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-4">
                          <h3 className="text-xl font-bold text-white">
                            {activity.title}
                          </h3>
                          <span className="text-xs font-medium px-3 py-1 bg-gray-900/70 text-indigo-300 rounded-full border border-indigo-800/30">
                            {activity.role}
                          </span>
                        </div>

                        <p className="text-gray-300 mb-6 text-sm md:text-base">
                          {activity.description}
                        </p>

                        <div className="space-y-4">
                          <h4 className="text-xs font-semibold text-indigo-300 uppercase tracking-wider">
                            Key Contributions
                          </h4>
                          <ul className="space-y-3">
                            {activity.achievements.map((achievement, i) => (
                              <motion.li
                                key={i}
                                className="flex items-start"
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.6 + i * 0.1 }}
                              >
                                <div className="mr-3 mt-0.5 flex-shrink-0">
                                  <div className="w-5 h-5 rounded-full bg-indigo-900/50 flex items-center justify-center text-indigo-400">
                                    <FaChevronRight size={10} />
                                  </div>
                                </div>
                                <span className="text-gray-400 text-sm md:text-base">
                                  {achievement}
                                </span>
                              </motion.li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Growth Mindset Section */}
        <motion.div
          className="mt-24 bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 shadow-xl overflow-hidden"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
        >
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-shrink-0">
              <div className="relative">
                <div className="absolute -inset-3 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl blur opacity-30"></div>
                <div className="relative w-16 h-16 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl text-white shadow-lg flex items-center justify-center">
                  <FaGraduationCap className="text-2xl" />
                </div>
              </div>
            </div>

            <div className="flex-1">
              <h3 className="text-2xl font-bold text-white mb-4">
                Continuous Growth Philosophy
              </h3>
              <p className="text-gray-300 mb-6 text-base">
                Beyond formal activities, I embrace a philosophy of continuous
                learning and self-improvement. I actively seek challenges that
                push my boundaries and expand my perspective, believing that
                true expertise combines technical skills with personal
                development.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                <div className="px-3 py-2 bg-gray-900/30 rounded-lg border border-gray-700 text-center">
                  <div className="text-indigo-400 text-sm font-medium">
                    Adaptability
                  </div>
                </div>
                <div className="px-3 py-2 bg-gray-900/30 rounded-lg border border-gray-700 text-center">
                  <div className="text-purple-400 text-sm font-medium">
                    Curiosity
                  </div>
                </div>
                <div className="px-3 py-2 bg-gray-900/30 rounded-lg border border-gray-700 text-center">
                  <div className="text-blue-400 text-sm font-medium">
                    Resilience
                  </div>
                </div>
                <div className="px-3 py-2 bg-gray-900/30 rounded-lg border border-gray-700 text-center">
                  <div className="text-teal-400 text-sm font-medium">
                    Collaboration
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Extra;
