import { motion } from 'framer-motion';
import React from 'react';
import myself from '../Assets/myself.png';

function Sidebar() {
  return (
    <motion.div
      className="h-screen w-64 bg-orange-600 text-white flex flex-col items-center py-8 fixed top-0 left-0"
      initial={{ x: '-100%' }}
      animate={{ x: 0 }}
      transition={{ type: 'spring', stiffness: 80, damping: 15 }}
    >
      <motion.img
        src={myself}
        alt="Profile"
        className="rounded-full w-40 mb-4 border-8 border-white shadow-lg"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.2, rotate: 9 }}
        transition={{ duration: 1, ease: 'easeInOut' }}
      />
      <motion.h2
        className="text-2xl font-bold mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5, ease: 'easeInOut' }}
      >
        Prasad Shaswat
      </motion.h2>
      <nav className="flex flex-col space-y-4 text-center w-full">
        {['ABOUT', 'EDUCATION', 'SKILLS', 'PROJECTS', 'EXTRA', 'CERTIFICATIONS', 'CONTACT'].map((item, index) => (
          <motion.a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="hover:bg-orange-500 py-2 rounded transition-colors duration-300"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + index * 0.2, duration: 1, ease: 'easeInOut' }}
            whileHover={{ scale: 1.05, x: 10 }}
          >
            {item}
          </motion.a>
        ))}
      </nav>
    </motion.div>
  );
}

export default Sidebar;