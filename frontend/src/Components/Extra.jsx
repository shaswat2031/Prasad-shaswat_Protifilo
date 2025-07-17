import React from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import {
  FaLanguage,
  FaUserTie,
  FaGraduationCap,
  FaChevronRight,
} from "react-icons/fa";
import { BiNetworkChart } from "react-icons/bi";
import { HiOutlineLightBulb } from "react-icons/hi";

// Data remains the same
const activities = [
  {
    title: "Career Development Cell",
    role: "Tech Leader (2023 - 2025)",
    description:
      "Led technical initiatives and organized large-scale events to foster student growth and technical skills development.",
    icon: <FaUserTie className="text-2xl" />,
    color: "from-purple-500 to-indigo-500",
    achievements: [
      "Managed team of 12 technical volunteers",
      "Organized 5+ major tech events with over 3000 participants",
      "Developed leadership and event management skills",
    ],
  },
  {
    title: "Multilingual Proficiency",
    role: "Language Skills",
    description:
      "Fluent communication across multiple languages enables effective collaboration in diverse environments.",
    icon: <FaLanguage className="text-2xl" />,
    color: "from-sky-500 to-cyan-500",
    achievements: [
      "English - Professional proficiency",
      "Hindi - Native fluency",
      "Gujarati - Basic conversational",
    ],
  },
  {
    title: "Mentorship & Networking",
    role: "Community Leader",
    description:
      "Built professional networks through events and provided guidance to junior developers, fostering a supportive community.",
    icon: <BiNetworkChart className="text-2xl" />,
    color: "from-amber-500 to-orange-500",
    achievements: [
      "Mentored 15+ junior developers on their career path",
      "Attended 10+ industry networking events",
      "Enhanced interpersonal and communication skills",
    ],
  },
];

// Reusable 3D Interactive Card Component
const ActivityCard = ({ activity }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(
    mouseYSpring,
    [-0.5, 0.5],
    ["10.5deg", "-10.5deg"]
  );
  const rotateY = useTransform(
    mouseXSpring,
    [-0.5, 0.5],
    ["-10.5deg", "10.5deg"]
  );

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
      className="relative w-full h-full rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900"
    >
      <div
        style={{
          transform: "translateZ(75px)",
          transformStyle: "preserve-3d",
        }}
        className="inset-4 grid place-content-center rounded-2xl bg-gray-900/70 p-6 shadow-lg border border-gray-700/50"
      >
        <div
          className={`absolute -top-4 -left-4 w-16 h-16 rounded-xl bg-gradient-to-r ${activity.color} flex items-center justify-center text-white shadow-lg`}
        >
          {activity.icon}
        </div>
        <div className="text-right text-xs font-bold text-indigo-300 uppercase mb-10">
          {activity.role}
        </div>

        <h3 className="text-2xl font-bold text-gray-100 mb-2">
          {activity.title}
        </h3>
        <p className="text-gray-400 mb-6 text-sm">{activity.description}</p>

        <ul className="space-y-2">
          {activity.achievements.map((achievement, i) => (
            <li key={i} className="flex items-center text-gray-300 text-sm">
              <FaChevronRight className="text-indigo-400 w-3 h-3 mr-3 flex-shrink-0" />
              <span>{achievement}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

const Extra = () => {
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
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { type: "spring", stiffness: 100, damping: 15 },
    },
  };

  return (
    <section
      id="extra"
      className="relative py-24 sm:py-32 bg-gray-900 text-gray-200 overflow-hidden"
    >
      {/* Animated Aurora Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-indigo-600/20 via-purple-600/10 to-transparent blur-3xl"></div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-sky-500/10 via-cyan-500/5 to-transparent blur-3xl"></div>
        <motion.div
          className="absolute top-[10%] left-[5%] w-64 h-64 bg-purple-500/30 rounded-full filter blur-3xl opacity-50"
          animate={{ x: [-20, 20, -20], y: [-20, 20, -20] }}
          transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
        />
        <motion.div
          className="absolute bottom-[10%] right-[5%] w-72 h-72 bg-indigo-500/30 rounded-full filter blur-3xl opacity-50"
          animate={{ x: [20, -20, 20], y: [20, -20, 20] }}
          transition={{ duration: 25, repeat: Infinity, repeatType: "reverse" }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16 sm:mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 } },
          }}
        >
          <motion.div
            variants={{
              hidden: { opacity: 0, scale: 0.8 },
              visible: { opacity: 1, scale: 1 },
            }}
            className="inline-block p-3 bg-gray-800/50 rounded-2xl border border-gray-700/50 mb-6"
          >
            <HiOutlineLightBulb className="text-indigo-400 text-3xl" />
          </motion.div>

          <motion.h2
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            className="text-4xl sm:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-gray-100 to-gray-400"
          >
            Beyond The Code
          </motion.h2>
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            className="mt-4 max-w-2xl mx-auto text-lg text-gray-400"
          >
            Experiences and skills that complement my technical abilities and
            drive my passion for growth.
          </motion.p>
        </motion.div>

        {/* Interactive Cards Grid */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {activities.map((activity, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              style={{ perspective: "1000px" }}
            >
              <ActivityCard activity={activity} />
            </motion.div>
          ))}
        </motion.div>

        {/* Growth Mindset Section */}
        <motion.div
          className="mt-24 sm:mt-32 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="relative p-8 rounded-2xl bg-gray-800/50 border border-gray-700/50 backdrop-blur-sm overflow-hidden">
            <div className="absolute -inset-px rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-500 opacity-20 blur-lg pointer-events-none"></div>
            <div className="flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
              <div className="flex-shrink-0 w-20 h-20 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white shadow-lg">
                <FaGraduationCap className="text-3xl" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-3">
                  Commitment to Continuous Growth
                </h3>
                <p className="text-gray-300">
                  I believe true expertise is a journey, not a destination. I
                  actively seek challenges that push my boundaries and embrace a
                  philosophy of lifelong learning to stay curious, adaptable,
                  and resilient.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Extra;
