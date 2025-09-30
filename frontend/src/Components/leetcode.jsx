import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaCalendarAlt,
  FaChevronRight,
  FaChevronDown,
  FaCode,
  FaTrophy,
  FaAward,
  FaUser,
} from "react-icons/fa";

// 🔧 GraphQL fetch function with fallback
const fetchLeetCodeData = async (query, variables) => {
  const apiUrls = [
    process.env.REACT_APP_API_URL || "https://prasad-shaswat-protifilo.onrender.com",
    "https://prasad-shaswat-protifilo-fcs8.onrender.com" // fallback URL
  ];

  for (const apiUrl of apiUrls) {
    try {
      console.log(`Trying to fetch from: ${apiUrl}/leetcode`);
      const res = await fetch(`${apiUrl}/leetcode`, {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        mode: 'cors',
        credentials: 'omit',
        body: JSON.stringify({ query, variables }),
      });

      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }

      const data = await res.json();
      console.log(`Successfully fetched from: ${apiUrl}/leetcode`);
      return data;
    } catch (error) {
      console.error(`Fetch error from ${apiUrl}:`, error);
      // Continue to next URL if this one fails
      if (apiUrl === apiUrls[apiUrls.length - 1]) {
        // If this was the last URL, throw the error
        throw new Error(`All API endpoints failed. Last error: ${error.message}`);
      }
    }
  }
};

const LeetCodeProfile = ({
  username,
  sections = ["profile", "submissions", "contests"],
}) => {
  const [profile, setProfile] = useState(null);
  const [submissions, setSubmissions] = useState([]);
  const [contests, setContests] = useState({});
  const [expandedItem, setExpandedItem] = useState(null);

  // 📌 Fetch profile
  useEffect(() => {
    if (!sections.includes("profile")) return;

    const query = `
      query getUserProfile($username: String!) {
        matchedUser(username: $username) {
          username
          profile { ranking }
          submitStats { acSubmissionNum { difficulty count } }
        }
      }
    `;

    const fetchProfile = async () => {
      try {
        const data = await fetchLeetCodeData(query, { username });
        setProfile(data.data.matchedUser);
      } catch (err) {
        console.error("Profile fetch failed:", err);
      }
    };

    fetchProfile();
  }, [username, sections]);

  // 📌 Lazy fetch submissions
  const loadSubmissions = async () => {
    if (!sections.includes("submissions") || submissions.length > 0) return;
    const query = `
      query getUserSubmissions($username: String!) {
        recentSubmissionList(username: $username, limit: 10) {
          title
          statusDisplay
        }
      }
    `;
    try {
      const data = await fetchLeetCodeData(query, { username });
      setSubmissions(data.data.recentSubmissionList);
    } catch (err) {
      console.error("Submissions fetch failed:", err);
    }
  };

  // 📌 Lazy fetch contests (only summary)
  const loadContests = async () => {
    if (!sections.includes("contests") || contests.rating) return;
    const query = `
      query getUserContest($username: String!) {
        userContestRanking(username: $username) {
          rating
          globalRanking
          attendedContestsCount
        }
      }
    `;
    try {
      const data = await fetchLeetCodeData(query, { username });
      setContests(data.data.userContestRanking || {});
    } catch (err) {
      console.error("Contests fetch failed:", err);
    }
  };

  const handleExpand = (index, id) => {
    setExpandedItem(expandedItem === index ? null : index);
    if (id === "submissions") loadSubmissions();
    if (id === "contests") loadContests();
  };

  if (sections.includes("profile") && !profile) {
    return (
      <div className="text-center text-gray-300 py-16 flex flex-col items-center justify-center">
        <div className="w-16 h-16 mb-4 border-4 border-yellow-500 border-t-transparent rounded-full animate-spin"></div>
        <p className="text-lg font-medium">Loading LeetCode profile...</p>
      </div>
    );
  }

  // 📌 Data cards config
  const dataCards = [
    sections.includes("profile") && {
      id: "profile",
      title: "Profile Info",
      color: "from-yellow-500 to-orange-500",
      icon: <FaUser />,
      details: [
        { icon: <FaAward />, content: `Username: ${profile?.username}` },
        {
          icon: <FaTrophy />,
          content: `Ranking: ${profile?.profile?.ranking}`,
        },
        {
          icon: <FaCode />,
          content: `Solved Total: ${
            profile?.submitStats?.acSubmissionNum?.[0]?.count || 0
          }`,
        },
      ],
    },
    sections.includes("submissions") && {
      id: "submissions",
      title: "Recent Submissions",
      color: "from-blue-500 to-indigo-500",
      icon: <FaCode />,
      details:
        submissions.length > 0
          ? submissions.map((s) => ({
              icon: <FaCode />,
              content: `${s.title} (${s.statusDisplay})`,
            }))
          : [{ icon: <FaCode />, content: "Loading submissions..." }],
    },
    sections.includes("contests") && {
      id: "contests",
      title: "Contest Records",
      color: "from-green-500 to-emerald-500",
      icon: <FaTrophy />,
      details:
        contests && contests.rating
          ? [
              {
                icon: <FaAward />,
                content: `Contest Rating: ${contests.rating}`,
              },
              {
                icon: <FaTrophy />,
                content: `Global Ranking: ${contests.globalRanking?.toLocaleString()}`,
              },
              {
                icon: <FaCalendarAlt />,
                content: `Attended: ${contests.attendedContestsCount}`,
              },
            ]
          : [{ icon: <FaCalendarAlt />, content: "Loading contests..." }],
    },
  ].filter(Boolean);

  return (
    <section
      id="leetcode"
      className="py-24 bg-gradient-to-b from-gray-950 to-gray-900 text-gray-100"
    >
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.h2 
            className="text-5xl font-extrabold mb-6 leading-tight"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-orange-600">
              LeetCode Stats
            </span>
          </motion.h2>
          <motion.p 
            className="text-gray-300 max-w-2xl mx-auto text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            Tracking my coding journey — problems solved, submissions, and
            contest performance.
          </motion.p>
          <motion.div 
            className="mt-8 flex justify-center"
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: "auto" }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <div className="h-1.5 w-24 bg-gradient-to-r from-yellow-400 to-orange-600 rounded-full"></div>
          </motion.div>
        </motion.div>

        {/* Cards */}
        <motion.div 
          className="grid gap-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
        >
          {dataCards.map((item, index) => (
            <DataCard
              key={item.id}
              item={item}
              index={index}
              isExpanded={expandedItem === index}
              onToggle={() => handleExpand(index, item.id)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

// 📌 Reusable DataCard Component
const DataCard = ({ item, index, isExpanded, onToggle }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.15 }}
      className="w-full"
    >
      <motion.div 
        className="bg-gray-800/70 backdrop-blur-xl border border-gray-700 rounded-2xl overflow-hidden transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-[1.01]"
        whileHover={{ boxShadow: `0 0 20px 2px rgba(${isExpanded ? '245, 158, 11' : '75, 85, 99'}, 0.2)` }}
      >
        {/* Header */}
        <div
          onClick={onToggle}
          className={`p-7 cursor-pointer transition-all duration-300 ${
            isExpanded
              ? `bg-gradient-to-r ${item.color} bg-opacity-10`
              : "hover:bg-gray-700/40"
          }`}
        >
          <div className="flex items-center gap-6">
            <div
              className={`flex-shrink-0 p-3.5 bg-gradient-to-br ${item.color} rounded-xl shadow-xl`}
            >
              <div className="w-12 h-12 flex items-center justify-center bg-gray-900/80 backdrop-blur-lg rounded-lg p-2.5 text-white">
                {React.cloneElement(item.icon, { size: 24 })}
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                {item.title}
              </h3>
            </div>
            <motion.div
              animate={{ rotate: isExpanded ? 90 : 0 }}
              transition={{ duration: 0.3, type: "spring", stiffness: 200 }}
              className={`text-gradient bg-clip-text text-transparent bg-gradient-to-r ${item.color}`}
            >
              {isExpanded ? (
                <FaChevronDown size={20} />
              ) : (
                <FaChevronRight size={20} />
              )}
            </motion.div>
          </div>
        </div>

        {/* Expanded Content */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="px-7 pb-7 pt-2 border-t border-gray-700/40">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">
                  {item.details.map((detail, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-start p-5 rounded-xl bg-gray-800/80 backdrop-blur-sm border border-gray-700/60 hover:border-gray-500/80 transition-all duration-300 hover:shadow-md group"
                      whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                    >
                      <span
                        className={`text-gradient bg-clip-text text-transparent bg-gradient-to-r ${item.color} mr-4 mt-0.5 group-hover:scale-110 transition-transform duration-300`}
                      >
                        {React.cloneElement(detail.icon, { size: 18 })}
                      </span>
                      <span className="text-base text-gray-200 leading-relaxed font-medium">
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

export default LeetCodeProfile;
