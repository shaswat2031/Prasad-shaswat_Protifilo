import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import "./Home.css";

const Home = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [animateClass, setAnimateClass] = useState("");

  const words = [
    "Frontend Developer",
    "Backend Developer",
    "Full Stack Developer",
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimateClass("falling-text bold-text");
    }, 900);
  
    const animationDuration = 3000;
  
    const resetAnimation = () => {
      setAnimateClass("");
      setTimeout(() => {
        setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        setAnimateClass("shake-text");
      }, animationDuration);
    };
  
    const interval = setInterval(resetAnimation, animationDuration);
  
    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, [currentWordIndex, words.length]);  // Added words.length to the dependency array
  

    
  return (
    <section id="about" className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="w-full max-w-5xl px-6 md:px-12 py-12 md:py-16">
        {/* Introduction Section */}
        <motion.div
          className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4 text-center md:text-left"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <motion.span
            className="block text-5xl md:text-6xl text-orange-600"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6, ease: "easeInOut" }}
            style={{ fontFamily: "'Roboto Slab', serif" }}
          >
            HELLO WORLD! 🌏
          </motion.span>
          <span>
            I AM <span className="text-orange-600">Prasad Shaswat</span>
          </span>
        </motion.div>

        {/* Contact Info */}
        <div className="text-gray-500 text-center md:text-left mb-4 text-sm md:text-base">
          <p>Vadodara, 391760 | (+91) 9265-18481 | prasadshaswat9265@gmail.com</p>
        </div>

        {/* Dynamic Title Animation */}
        <motion.div
          className="text-gray-600 text-center md:text-left text-lg md:text-xl mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6, ease: "easeInOut" }}
        >
          <p>
            Greetings! I'm a dedicated{" "}
            <span className={`${animateClass} text-orange-600 font-semibold`}>
              {words[currentWordIndex]}
            </span>{" "}
            with expertise in JavaScript, and frameworks such as React and Node.js.
            My technical skill set includes HTML, CSS, Python, Java, and Data Structures and Algorithms (DSA).
          </p>
        </motion.div>

        {/* Social Links */}
        <motion.div
          className="flex justify-center md:justify-start space-x-6 mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6, ease: "easeInOut" }}
        >
          <a
            href="https://www.linkedin.com/in/shaswat-prasad-14b147266/?originalSubdomain=in"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={35} className="text-blue-600 cursor-pointer hover:scale-110 transition-transform" />
          </a>
          <a
            href="https://github.com/shaswat2031"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={35} className="text-gray-800 cursor-pointer hover:scale-110 transition-transform" />
          </a>
        </motion.div>

        {/* Download Resume Button */}
        <motion.div
          className="mt-6 flex justify-center md:justify-start"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.6, ease: "easeInOut" }}
        >
          <a
            href="https://drive.google.com/uc?export=download&id=1z-HEsyCKudk9_HIZZxkz2ObZ2x4D9j4K"
            download="Prasadshaswatresume.pdf"
            className="px-6 py-3 text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
          >
            📄 Download Resume
          </a>
        </motion.div>

        {/* Availability and Interests */}
        <motion.div
          className="mt-6 text-gray-600 text-center md:text-left text-sm md:text-base leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6, ease: "easeInOut" }}
        >
          <p>
            <strong>Available for internships or part-time roles starting January 15, 2024 🚀</strong>  
            — Eager to bring my skills in frontend and backend development to a dynamic team!
          </p>
          <p>
            <strong>
              Seeking opportunities in Web Development, Backend Engineering, and Software Development 🌟.  
              Ready to learn, contribute, and grow in a real-world setting!
            </strong>
            <br />
          </p>
          <p>
            <strong>
              Passionate about coding, problem-solving, and exploring new technologies.  
              Let’s create something amazing together! 💻✨
            </strong>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
