import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import BhagwatLogo from "../Assets/bhagwat.png";
import ParulLogo from "../Assets/parul.png";
import SungraceLogo from "../Assets/Sungrace.png";
import { Sparkles, GraduationCap, ScrollText } from "lucide-react";
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
      period: "2022 – 2026",
      degree: "B.Tech in Computer Science & Engineering",
      field: "Specialization in Full Stack Development",
      grade: "CGPA: 7.03/10",
      board: "PIT",
      icon: <FaUniversity />,
      color: "from-sky-400 to-indigo-500",
      bgAccent: "bg-indigo-500/10",
      details: [
        { icon: <FaCode />, content: "Built scalable full-stack web apps" },
        {
          icon: <FaBookOpen />,
          content: "Proficient in Data Structures & Algorithms",
        },
        {
          icon: <FaUsers />,
          content: "Led collaborative development projects",
        },
        { icon: <FaAward />, content: "Hackathon finalist" },
      ],
    },
    {
      id: "bhagwat",
      school: "Bhagwat Vidyapith",
      location: "Chhapra",
      logo: BhagwatLogo,
      period: "2020 – 2022",
      degree: "Higher Secondary (Science & Mathematics)",
      field: "Physics, Chemistry, Mathematics, CS",
      grade: "59.20%",
      board: "CBSE",
      icon: <FaSchool />,
      color: "from-violet-400 to-fuchsia-500",
      bgAccent: "bg-fuchsia-500/10",
      details: [
        { icon: <FaFlask />, content: "Strong foundation in core sciences" },
        {
          icon: <FaLightbulb />,
          content: "Introduced to programming concepts",
        },
        { icon: <FaCode />, content: "Developed early coding skills" },
      ],
    },
    {
      id: "sungrace",
      school: "Sungrace School",
      location: "Surat",
      logo: SungraceLogo,
      period: "Completed 2020",
      degree: "Secondary School (General Studies)",
      field: "Science & Mathematics Focus",
      grade: "56.66%",
      board: "GSEB",
      icon: <FaBookOpen />,
      color: "from-emerald-400 to-teal-500",
      bgAccent: "bg-teal-500/10",
      details: [
        {
          icon: <FaChalkboardTeacher />,
          content: "Excelled in mathematics and sciences",
        },
        { icon: <FaStar />, content: "Active member of tech club" },
        { icon: <FaTrophy />, content: "Math competition finalist" },
      ],
    },
  ];

  return (
    <section
      id="education"
      className="py-24 bg-gradient-to-b from-gray-900 via-gray-800 to-black text-gray-200 relative"
    >
      {/* Abstract background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <div className="absolute top-40 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-60 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-40 left-1/2 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-5xl mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center gap-2 mb-3 px-4 py-2 rounded-full bg-indigo-500/10 text-indigo-300 text-sm font-medium">
            <GraduationCap size={16} />
            <span>Education & Learning</span>
          </div>

          <h2 className="text-5xl font-bold mb-5 leading-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
              Academic Journey
            </span>
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            A timeline of my learning path — from building strong academic
            fundamentals to mastering advanced technologies in Computer Science.
          </p>

          <div className="mt-8 flex justify-center">
            <div className="h-1 w-20 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full"></div>
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
        className={`bg-gray-800/40 backdrop-blur-lg border border-gray-700/50 rounded-xl overflow-hidden transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-[1.01] ${
          isExpanded
            ? `ring-2 ring-offset-2 ring-offset-gray-900 ring-${
                item.color.split(" ")[0]
              }`
            : ""
        }`}
        style={{
          boxShadow: isExpanded 
            ? `0 10px 30px -10px rgba(0, 0, 0, 0.5), 0 0 15px -3px rgba(79, 70, 229, 0.3)` 
            : ''
        }}
      >
        {/* Header */}
        <div
          onClick={onToggle}
          className={`p-6 cursor-pointer transition-colors group ${
            isExpanded
              ? `${item.bgAccent}`
              : "hover:bg-gray-700/30"
          }`}
        >
          <div className="flex items-center gap-5">
            {/* Logo Area */}
            <div
              className={`flex-shrink-0 p-3 bg-gradient-to-br ${item.color} rounded-xl shadow-lg transform transition-transform group-hover:scale-105`}
            >
              <div className="w-12 h-12 flex items-center justify-center bg-gray-900/90 backdrop-blur-sm rounded-lg p-2">
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
                <h3 className="text-xl font-bold text-white flex items-center gap-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-gray-100 group-hover:to-white transition-all duration-300">
                  {item.school}
                  {item.location && (
                    <span className="text-sm font-normal text-gray-400 bg-gray-800/70 px-2 py-0.5 rounded-md">
                      {item.location}
                    </span>
                  )}
                </h3>
                <div className="text-sm text-gray-300 flex items-center gap-2 bg-gray-800/60 backdrop-blur-md px-3 py-1 rounded-full shadow-sm">
                  <FaCalendarAlt size={14} className="text-gray-400" />
                  <span>{item.period}</span>
                </div>
              </div>

              <div className="mt-3 flex flex-wrap items-center gap-3">
                <div className="text-lg text-gray-200 font-medium bg-gradient-to-r from-white/90 to-gray-300/90 bg-clip-text text-transparent">
                  {item.degree}
                </div>

                {item.board && (
                  <div className="text-sm bg-gray-800/60 backdrop-blur-sm px-2 py-0.5 rounded-md text-gray-300 border border-gray-700/30">
                    {item.board}
                  </div>
                )}

                <div className="ml-auto text-sm font-medium bg-gray-900/80 backdrop-blur-md px-4 py-1.5 rounded-full text-gray-200 flex items-center gap-2 shadow-inner">
                  <span
                    className={`w-2 h-2 rounded-full bg-gradient-to-r ${item.color} animate-pulse`}
                  ></span>
                  {item.grade}
                </div>
              </div>
            </div>

            {/* Expand Icon */}
            <motion.div
              animate={{ rotate: isExpanded ? 90 : 0 }}
              transition={{ duration: 0.2 }}
              className={`text-gradient bg-clip-text text-transparent bg-gradient-to-r ${item.color} p-2 rounded-full ${isExpanded ? '' : 'group-hover:bg-gray-800/60'}`}
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
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="p-6 pt-4 border-t border-gray-700/30">
                <div className="flex items-center mb-4">
                  <span
                    className={`px-4 py-1.5 ${item.bgAccent} text-white rounded-full text-sm font-medium flex items-center gap-2 shadow-md`}
                  >
                    <Sparkles size={14} className="text-gray-300" />
                    {item.field}
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  {item.details.map((detail, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-start p-4 rounded-xl bg-gray-800/60 backdrop-blur-sm border border-gray-700/50 hover:border-gray-600/70 transition-all hover:shadow-md group"
                    >
                      <div
                        className={`p-2 rounded-lg mr-3 bg-gradient-to-r ${item.color} bg-opacity-20 group-hover:bg-opacity-30 transition-all`}
                      >
                        <span
                          className={`text-gradient bg-clip-text text-transparent bg-gradient-to-r ${item.color}`}
                        >
                          {React.cloneElement(detail.icon, { size: 16 })}
                        </span>
                      </div>
                      <span className="text-sm text-gray-300 leading-relaxed group-hover:text-white transition-colors">
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

// Add CSS keyframes for animations
const animationCSS = document.createElement('style');
animationCSS.innerHTML = `
  @keyframes blob {
    0% {
      transform: translate(0px, 0px) scale(1);
    }
    33% {
      transform: translate(30px, -50px) scale(1.1);
    }
    66% {
      transform: translate(-20px, 20px) scale(0.9);
    }
    100% {
      transform: translate(0px, 0px) scale(1);
    }
  }
  .animate-blob {
    animation: blob 7s infinite;
  }
  .animation-delay-2000 {
    animation-delay: 2s;
  }
  .animation-delay-4000 {
    animation-delay: 4s;
  }
`;
document.head.appendChild(animationCSS);

export default Education;
