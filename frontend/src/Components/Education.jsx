import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import BhagwatLogo from "../Assets/bhagwat.png";
import ParulLogo from "../Assets/parul.png";
import SungraceLogo from "../Assets/Sungrace.png";
import {
  FaGraduationCap,
  FaBookOpen,
  FaChalkboardTeacher,
  FaAward,
  FaCalendarAlt,
  FaCode,
  FaFlask,
  FaUsers,
  FaTrophy,
  FaLightbulb,
  FaStar,
  FaChevronRight,
  FaChevronDown,
  FaPercentage,
} from "react-icons/fa";

const Education = () => {
  const [expandedItem, setExpandedItem] = useState(null);

  const educationData = [
    {
      id: "parul",
      school: "Parul University",
      logo: ParulLogo,
      period: "2022 - 2026",
      degree: "B.Tech. - CSE - PIT",
      field: "Computer Science",
      grade: "CGPA: 7.03 / 10",
      board: "",
      icon: <FaGraduationCap />,
      details: [
        { icon: <FaBookOpen />, content: "Data Structures, Web Development" },
        { icon: <FaCode />, content: "Student Connection Platform" },
        { icon: <FaAward />, content: "Problem-solving, Teamwork" },
      ],
    },
    {
      id: "bhagwat",
      school: "Bhagwat Vidyapith, Chhapra",
      logo: BhagwatLogo,
      period: "2022",
      degree: "12th",
      field: "Science",
      grade: "59.20%",
      board: "CBSE",
      icon: <FaBookOpen />,
      details: [
        { icon: <FaFlask />, content: "Physics, Math, Computer Science" },
        { icon: <FaLightbulb />, content: "Discovered passion for coding" },
        { icon: <FaTrophy />, content: "Basic coding competitions" },
      ],
    },
    {
      id: "sungrace",
      school: "Sungrace School, Surat",
      logo: SungraceLogo,
      period: "2020",
      degree: "10th",
      field: "General Studies",
      grade: "56.66%",
      board: "GSEB",
      icon: <FaUsers />,
      details: [
        { icon: <FaChalkboardTeacher />, content: "Math, Science, English" },
        { icon: <FaCode />, content: "Started learning coding" },
        { icon: <FaStar />, content: "School computer club member" },
      ],
    },
  ];

  return (
    <section
      id="education"
      className="py-16 bg-gradient-to-b from-gray-900 to-black text-gray-200"
    >
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center mb-10"
        >
          <span className="inline-block p-3 bg-indigo-900/30 rounded-xl mb-3">
            <FaGraduationCap className="text-indigo-400 text-2xl" />
          </span>
          <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">
            Education
          </h2>
          <div className="h-0.5 w-16 mx-auto bg-indigo-500/50 rounded mt-2"></div>
        </motion.div>

        <div className="relative">
          {/* Vertical connecting line */}
          <div className="absolute left-8 top-[32px] bottom-8 w-0.5 bg-indigo-500/20 hidden sm:block"></div>

          {/* Timeline Items */}
          <div className="space-y-6">
            {educationData.map((item, index) => (
              <EducationItem
                key={item.id}
                item={item}
                index={index}
                isExpanded={expandedItem === index}
                onToggle={() =>
                  setExpandedItem(expandedItem === index ? null : index)
                }
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const EducationItem = ({ item, index, isExpanded, onToggle }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="relative"
    >
      {/* Timeline bullet point */}
      <motion.div
        whileHover={{ scale: 1.2 }}
        className="absolute left-[18px] transform -translate-x-1/2 hidden sm:flex"
      >
        <div className="w-8 h-8 bg-gray-800 border-2 border-indigo-500 rounded-full flex items-center justify-center shadow-lg shadow-indigo-900/20 z-10">
          <span className="text-indigo-400 text-sm">
            {React.cloneElement(item.icon, { size: 14 })}
          </span>
        </div>
      </motion.div>

      {/* Card content */}
      <motion.div
        className={`ml-0 sm:ml-12 bg-gray-800/50 backdrop-filter backdrop-blur-sm rounded-xl border border-gray-700/50 overflow-hidden transition-all duration-300 ${
          isExpanded ? "shadow-lg shadow-indigo-900/10" : ""
        }`}
        layoutId={`card-${item.id}`}
        whileHover={{ y: -2 }}
      >
        {/* Header */}
        <div
          className={`p-4 flex items-center cursor-pointer ${
            isExpanded
              ? "bg-gradient-to-r from-indigo-900/30 to-transparent"
              : ""
          }`}
          onClick={onToggle}
        >
          {/* Logo */}
          <div className="rounded-lg p-2 bg-gray-900 border border-gray-700/70 shadow-inner mr-4">
            <img
              src={item.logo}
              alt={item.school}
              className="w-10 h-10 object-contain"
            />
          </div>

          {/* Info */}
          <div className="flex-1">
            <div className="flex justify-between items-start">
              <h3 className="text-lg font-bold text-white">{item.school}</h3>
              <div className="text-xs text-gray-400 flex items-center gap-1">
                <FaCalendarAlt size={10} />
                <span>{item.period}</span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-0.5">
              <div className="text-sm text-indigo-300">{item.degree}</div>

              {item.board && (
                <div className="text-xs text-gray-400">{item.board}</div>
              )}

              <div className="text-xs font-medium bg-indigo-900/30 px-2 py-0.5 rounded text-indigo-300 flex items-center gap-1">
                <FaPercentage size={10} />
                {item.grade}
              </div>
            </div>
          </div>

          {/* Expand Icon */}
          <motion.div
            animate={{ rotate: isExpanded ? 90 : 0 }}
            className="text-indigo-400 ml-2"
          >
            {isExpanded ? (
              <FaChevronDown size={14} />
            ) : (
              <FaChevronRight size={14} />
            )}
          </motion.div>
        </div>

        {/* Expandable content */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden"
            >
              <div className="p-4 pt-0 border-t border-gray-700/30">
                <div className="flex items-center mb-3">
                  <span className="px-3 py-1 bg-indigo-900/20 text-indigo-300 rounded-full text-xs border border-indigo-800/20">
                    {item.field}
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-3">
                  {item.details.map((detail, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-start bg-gray-800/50 p-3 rounded-lg border border-gray-700/30"
                    >
                      <span className="text-indigo-400 mr-2 mt-0.5">
                        {React.cloneElement(detail.icon, { size: 14 })}
                      </span>
                      <span className="text-xs text-gray-300">
                        {detail.content}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Current indicator */}
      {item.period.includes("Present") && (
        <div className="absolute -right-1 top-4 sm:top-0">
          <span className="inline-flex items-center px-1.5 py-0.5 rounded-full bg-green-900/30 text-green-400 text-[10px] border border-green-800/30">
            <span className="w-1 h-1 bg-green-500 rounded-full mr-1 animate-pulse"></span>
            Current
          </span>
        </div>
      )}
    </motion.div>
  );
};

export default Education;
