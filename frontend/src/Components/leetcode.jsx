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
      <div className="text-center text-gray-400 py-10">
        Loading LeetCode profile...
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
      className="py-20 bg-gradient-to-b from-gray-900 via-gray-800 to-black text-gray-200"
    >
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-extrabold mb-4 leading-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-500">
              LeetCode Stats
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Tracking my coding journey — problems solved, submissions, and
            contest performance.
          </p>
          <div className="mt-6 flex justify-center">
            <div className="h-1 w-20 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full"></div>
          </div>
        </motion.div>

        {/* Cards */}
        <div className="grid gap-8">
          {dataCards.map((item, index) => (
            <DataCard
              key={item.id}
              item={item}
              index={index}
              isExpanded={expandedItem === index}
              onToggle={() => handleExpand(index, item.id)}
            />
          ))}
        </div>
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
      <motion.div className="bg-gray-800/60 backdrop-blur-md border border-gray-700 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-[1.01]">
        {/* Header */}
        <div
          onClick={onToggle}
          className={`p-6 cursor-pointer transition-colors ${
            isExpanded
              ? `bg-gradient-to-r ${item.color} bg-opacity-10`
              : "hover:bg-gray-700/30"
          }`}
        >
          <div className="flex items-center gap-5">
            <div
              className={`flex-shrink-0 p-3 bg-gradient-to-br ${item.color} rounded-lg shadow-lg`}
            >
              <div className="w-12 h-12 flex items-center justify-center bg-gray-900 rounded-md p-2 text-white">
                {item.icon}
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                {item.title}
              </h3>
            </div>
            <motion.div
              animate={{ rotate: isExpanded ? 90 : 0 }}
              transition={{ duration: 0.2 }}
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

        {/* Expanded Content */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35 }}
              className="overflow-hidden"
            >
              <div className="p-6 pt-0 border-t border-gray-700/30">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  {item.details.map((detail, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-start p-4 rounded-lg bg-gray-800 border border-gray-700/50 hover:border-gray-500/50 transition-all"
                    >
                      <span
                        className={`text-gradient bg-clip-text text-transparent bg-gradient-to-r ${item.color} mr-3 mt-0.5`}
                      >
                        {React.cloneElement(detail.icon, { size: 16 })}
                      </span>
                      <span className="text-sm text-gray-300 leading-relaxed">
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
