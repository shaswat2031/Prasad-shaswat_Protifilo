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
  FaUniversity,
  FaSchool,
} from "react-icons/fa";

const Education = () => {
  const [expandedItem, setExpandedItem] = useState(null);

  const educationData = [
    {
      id: "parul",
      school: "Parul University",
      logo: ParulLogo,
      period: "2022 - 2026",
      degree: "Bachelor of Technology",
      field: "Computer Science & Engineering",
      grade: "CGPA: 7.03/10",
      board: "PIT",
      icon: <FaUniversity />,
      color: "from-blue-600 to-indigo-600",
      details: [
        { icon: <FaCode />, content: "Full Stack Web Development" },
        { icon: <FaBookOpen />, content: "Data Structures & Algorithms" },
        { icon: <FaUsers />, content: "Led team projects in web development" },
        { icon: <FaAward />, content: "Hackathon participant" },
      ],
    },
    {
      id: "bhagwat",
      school: "Bhagwat Vidyapith",
      location: "Chhapra",
      logo: BhagwatLogo,
      period: "2020 - 2022",
      degree: "Higher Secondary (12th)",
      field: "Science & Mathematics",
      grade: "59.20%",
      board: "CBSE",
      icon: <FaSchool />,
      color: "from-purple-600 to-pink-600",
      details: [
        { icon: <FaFlask />, content: "Physics, Chemistry, Mathematics" },
        { icon: <FaLightbulb />, content: "Computer Science fundamentals" },
        { icon: <FaCode />, content: "First programming experience" },
      ],
    },
    {
      id: "sungrace",
      school: "Sungrace School",
      location: "Surat",
      logo: SungraceLogo,
      period: "Completed 2020",
      degree: "Secondary School (10th)",
      field: "General Studies",
      grade: "56.66%",
      board: "GSEB",
      icon: <FaBookOpen />,
      color: "from-green-600 to-teal-600",
      details: [
        {
          icon: <FaChalkboardTeacher />,
          content: "Core subjects with distinction",
        },
        { icon: <FaStar />, content: "Active in school technology club" },
        { icon: <FaTrophy />, content: "Mathematics competition finalist" },
      ],
    },
  ];

  return (
    <section
      id="education"
      className="py-20 bg-gradient-to-b from-gray-900 via-gray-800 to-black text-gray-200"
    >
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              Academic Journey
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            My educational background has equipped me with both theoretical
            knowledge and practical skills in computer science and software
            development.
          </p>
          <div className="mt-6 flex justify-center">
            <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded"></div>
          </div>
        </motion.div>

        <div className="grid gap-8">
          {educationData.map((item, index) => (
            <EducationCard
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
    </section>
  );
};

const EducationCard = ({ item, index, isExpanded, onToggle }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.15 }}
      className="w-full"
    >
      <motion.div
        layoutId={`card-container-${item.id}`}
        className={`bg-gray-800/60 backdrop-blur-sm border border-gray-700 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg ${
          isExpanded ? `shadow-lg shadow-${item.color.split(" ")[0]}/10` : ""
        }`}
      >
        {/* Header */}
        <div
          onClick={onToggle}
          className={`p-6 cursor-pointer ${
            isExpanded
              ? `bg-gradient-to-r ${item.color} bg-opacity-10`
              : "hover:bg-gray-700/30"
          }`}
        >
          <div className="flex items-center gap-5">
            {/* Logo Area */}
            <div
              className={`flex-shrink-0 p-3 bg-gradient-to-br ${item.color} rounded-lg shadow-md`}
            >
              <div className="w-12 h-12 flex items-center justify-center bg-gray-900 rounded-md p-2">
                <img
                  src={item.logo}
                  alt={item.school}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            {/* Info Area */}
            <div className="flex-1">
              <div className="flex flex-wrap justify-between items-start gap-2">
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  {item.school}
                  {item.location && (
                    <span className="text-sm font-normal text-gray-400">
                      {item.location}
                    </span>
                  )}
                </h3>
                <div className="text-sm text-gray-300 flex items-center gap-2 bg-gray-700/50 px-3 py-1 rounded-full">
                  <FaCalendarAlt size={14} />
                  <span>{item.period}</span>
                </div>
              </div>

              <div className="mt-2 flex flex-wrap items-center gap-3">
                <div className="text-lg text-gray-200 font-medium">
                  {item.degree}
                </div>

                {item.board && (
                  <div className="text-sm bg-gray-700/50 px-2 py-0.5 rounded-md text-gray-300">
                    {item.board}
                  </div>
                )}

                <div className="ml-auto text-sm font-medium bg-gray-900/80 px-3 py-1 rounded-full text-gray-200 flex items-center gap-2">
                  <span
                    className={`w-2 h-2 rounded-full bg-gradient-to-r ${item.color}`}
                  ></span>
                  {item.grade}
                </div>
              </div>
            </div>

            {/* Expand Icon */}
            <motion.div
              animate={{ rotate: isExpanded ? 90 : 0 }}
              className={`text-gradient bg-clip-text text-transparent bg-gradient-to-r ${item.color}`}
            >
              {isExpanded ? (
                <FaChevronDown size={18} />
              ) : (
                <FaChevronRight size={18} />
              )}
            </motion.div>
          </div>
        </div>

        {/* Expandable Details */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="p-6 pt-0 border-t border-gray-700/30">
                <div className="flex items-center mb-4">
                  <span
                    className={`px-4 py-1.5 bg-gradient-to-r ${item.color} bg-opacity-10 text-white rounded-full text-sm`}
                  >
                    {item.field}
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  {item.details.map((detail, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-start p-4 rounded-lg bg-gray-800 border border-gray-700/50 hover:border-gray-600/50 transition-colors"
                    >
                      <span
                        className={`text-gradient bg-clip-text text-transparent bg-gradient-to-r ${item.color} mr-3 mt-0.5`}
                      >
                        {React.cloneElement(detail.icon, { size: 16 })}
                      </span>
                      <span className="text-sm text-gray-300">
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
    </motion.div>
  );
};

export default Education;
