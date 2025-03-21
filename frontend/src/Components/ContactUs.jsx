import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaGithub, FaInstagram, FaLinkedin, FaTwitter, 
         FaPaperPlane, FaUser, FaMapMarkerAlt, FaPhone, FaRegCommentAlt, FaStar } from 'react-icons/fa';

const ContactUs = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');
  const [sending, setSending] = useState(false);
  const formRef = useRef(null);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    
    try {
      const response = await fetch('https://prasad-shaswat-protifilo-fcs8.onrender.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus({ type: 'success', message: 'Message sent successfully!' });
        setFormData({ name: '', email: '', message: '' });
        formRef.current.reset();
      } else {
        setStatus({ type: 'error', message: 'Error sending message. Please try again.' });
      }
    } catch (error) {
      console.error('Error:', error);
      setStatus({ type: 'error', message: 'Error sending message. Please try again.' });
    } finally {
      setSending(false);
      setTimeout(() => setStatus(''), 5000);
    }
  };

  return (
    <section id="contact" className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-10 -right-10 w-64 h-64 bg-indigo-600 opacity-10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-32 -left-20 w-80 h-80 bg-blue-600 opacity-10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-600 opacity-5 rounded-full blur-3xl"></div>
        
        {/* Animated stars */}
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-white opacity-20"
            initial={{ 
              x: Math.random() * window.innerWidth, 
              y: Math.random() * window.innerHeight,
              scale: Math.random() * 0.5 + 0.5
            }}
            animate={{ 
              opacity: [0.1, 0.4, 0.1],
              scale: [1, 1.2, 1],
            }}
            transition={{ 
              repeat: Infinity, 
              duration: Math.random() * 3 + 2,
              ease: "easeInOut"
            }}
          >
            <FaStar />
          </motion.div>
        ))}
        
        <div className="absolute bottom-10 right-10 w-64 h-64">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="text-indigo-500 opacity-5 w-full h-full">
            <path fill="currentColor" d="M46.5,-76.5C59.1,-67.6,67.6,-52.6,74.9,-37.2C82.2,-21.7,88.3,-5.9,84.8,7.3C81.4,20.5,68.5,31.1,56.8,41.5C45.1,51.9,34.7,62.2,22.1,67.7C9.6,73.3,-4.9,74.1,-20.5,71.5C-36.1,68.9,-52.7,63,-62.1,51.1C-71.5,39.2,-73.7,21.5,-74.1,4.1C-74.6,-13.3,-73.5,-30.3,-65.3,-42.3C-57.1,-54.2,-41.9,-61.1,-27.6,-69C-13.3,-76.8,0.2,-85.5,14.7,-86.9C29.3,-88.3,43.8,-82.5,46.5,-76.5Z" transform="translate(100 100)" />
          </svg>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            className="inline-flex items-center justify-center mb-4 space-x-2"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
          >
            <span className="w-12 h-1 bg-indigo-400 rounded-full"></span>
            <div className="w-14 h-14 bg-indigo-600 rounded-full flex items-center justify-center text-white transform rotate-12 shadow-lg">
              <FaRegCommentAlt size={24} />
            </div>
            <span className="w-12 h-1 bg-indigo-400 rounded-full"></span>
          </motion.div>
          
          <motion.h2 
            className="text-5xl md:text-6xl font-extrabold mb-4 text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Let's <span className="text-indigo-400">Connect</span>
          </motion.h2>
          
          <motion.p 
            className="text-slate-400 max-w-2xl mx-auto text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Ready to collaborate or have questions? Reach out through any of these channels.
          </motion.p>
        </motion.div>
        
        {/* Contact Content */}
        <div className="flex flex-col lg:flex-row items-stretch gap-10">
          {/* Contact Methods Card */}
          <motion.div 
            className="flex-1 relative"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="h-full relative z-10 rounded-3xl backdrop-blur-xl p-8 border border-slate-700 bg-slate-800/50 overflow-hidden group">
              {/* Card Header */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-white mb-4">Ways to reach me</h3>
                <div className="h-1 w-16 bg-indigo-500 rounded-full"></div>
              </div>
              
              {/* Contact Methods */}
              <div className="space-y-8">
                <motion.a 
                  href="mailto:Prasadshaswat9265@gmail.com"
                  className="flex items-center p-4 rounded-xl bg-slate-700/50 hover:bg-indigo-600/20 transition-colors border border-slate-600 group-hover:border-indigo-500/30"
                  whileHover={{ x: 5 }}
                >
                  <div className="w-12 h-12 rounded-full bg-indigo-600/20 flex items-center justify-center text-indigo-400 mr-4">
                    <FaEnvelope size={18} />
                  </div>
                  <div>
                    <h4 className="text-white font-medium">Email</h4>
                    <p className="text-slate-400 text-sm">prasadshaswat9265@gmail.com</p>
                  </div>
                </motion.a>
                
                <motion.div 
                  className="flex items-center p-4 rounded-xl bg-slate-700/50 border border-slate-600 group-hover:border-indigo-500/30"
                  whileHover={{ x: 5 }}
                >
                  <div className="w-12 h-12 rounded-full bg-indigo-600/20 flex items-center justify-center text-indigo-400 mr-4">
                    <FaMapMarkerAlt size={18} />
                  </div>
                  <div>
                    <h4 className="text-white font-medium">Location</h4>
                    <p className="text-slate-400 text-sm">Vadodara, Gujarat, India</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex items-center p-4 rounded-xl bg-slate-700/50 border border-slate-600 group-hover:border-indigo-500/30"
                  whileHover={{ x: 5 }}
                >
                  <div className="w-12 h-12 rounded-full bg-indigo-600/20 flex items-center justify-center text-indigo-400 mr-4">
                    <FaPhone size={18} />
                  </div>
                  <div>
                    <h4 className="text-white font-medium">Phone</h4>
                    <p className="text-slate-400 text-sm">+91 92653 18481</p>
                  </div>
                </motion.div>
              </div>
              
              {/* Social Links */}
              <div className="mt-10">
                <h4 className="text-white font-medium mb-4">Connect on social platforms</h4>
                <div className="flex flex-wrap gap-3">
                  <motion.a 
                    href="https://github.com/prasadshaswat" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-slate-700 hover:bg-slate-600 text-white rounded-full flex items-center justify-center transition-all"
                    whileHover={{ y: -5, backgroundColor: "#333" }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaGithub size={18} />
                  </motion.a>
                  
                  <motion.a 
                    href="https://www.linkedin.com/in/shaswat-prasad-14b147266/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-slate-700 hover:bg-slate-600 text-white rounded-full flex items-center justify-center transition-all"
                    whileHover={{ y: -5, backgroundColor: "#0077b5" }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaLinkedin size={18} />
                  </motion.a>
                  
                  <motion.a 
                    href="https://twitter.com/pr17745" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-slate-700 hover:bg-slate-600 text-white rounded-full flex items-center justify-center transition-all"
                    whileHover={{ y: -5, backgroundColor: "#1DA1F2" }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaTwitter size={18} />
                  </motion.a>
                  
                  <motion.a 
                    href="https://www.instagram.com/prasadshaswat/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-slate-700 hover:bg-slate-600 text-white rounded-full flex items-center justify-center transition-all"
                    whileHover={{ y: -5, backgroundColor: "#E1306C" }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaInstagram size={18} />
                  </motion.a>
                </div>
              </div>
              
              {/* Background Decoration */}
              <div className="absolute -bottom-16 -right-16 w-32 h-32 bg-indigo-600 opacity-20 rounded-full blur-2xl"></div>
              <div className="absolute -top-16 -left-16 w-32 h-32 bg-blue-600 opacity-20 rounded-full blur-2xl"></div>
            </div>
          </motion.div>
          
          {/* Contact Form Card */}
          <motion.div 
            className="flex-1 relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="h-full relative z-10 rounded-3xl backdrop-blur-xl p-8 border border-slate-700 bg-slate-800/50">
              {/* Card Header */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-white mb-4">Send a message</h3>
                <div className="h-1 w-16 bg-indigo-500 rounded-full"></div>
              </div>
              
              {/* Contact Form */}
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-slate-300 text-sm font-medium mb-2">
                    Your Name
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-slate-700/50 border border-slate-600 text-white placeholder-slate-400 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                    />
                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400">
                      <FaUser size={16} />
                    </div>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-slate-300 text-sm font-medium mb-2">
                    Your Email
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="example@email.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-slate-700/50 border border-slate-600 text-white placeholder-slate-400 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                    />
                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400">
                      <FaEnvelope size={16} />
                    </div>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-slate-300 text-sm font-medium mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    placeholder="Hi, I'm interested in discussing a project..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full bg-slate-700/50 border border-slate-600 text-white placeholder-slate-400 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all resize-none"
                  ></textarea>
                </div>
                
                <div className="flex justify-between items-center">
                  <motion.button
                    type="submit"
                    disabled={sending}
                    className={`px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-xl flex items-center space-x-2 transition-all ${sending ? 'opacity-70 cursor-not-allowed' : ''}`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {sending ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <FaPaperPlane className="mr-2" />
                        <span>Send Message</span>
                      </>
                    )}
                  </motion.button>
                  
                  {status && (
                    <motion.div 
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className={`px-4 py-2 rounded-lg ${
                        status.type === 'success' 
                          ? 'bg-green-900/30 text-green-400 border border-green-800' 
                          : 'bg-red-900/30 text-red-400 border border-red-800'
                      }`}
                    >
                      {status.message}
                    </motion.div>
                  )}
                </div>
              </form>
              
              {/* Background Decoration */}
              <div className="absolute -bottom-16 -right-16 w-32 h-32 bg-indigo-600 opacity-20 rounded-full blur-2xl"></div>
            </div>
          </motion.div>
        </div>
        
        {/* Bottom Decoration */}
        <motion.div 
          className="mt-12 flex items-center justify-center opacity-60"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <div className="w-16 h-1 bg-gradient-to-r from-transparent via-indigo-500 to-transparent rounded-full"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactUs;