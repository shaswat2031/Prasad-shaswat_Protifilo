
import React, { useState } from 'react';
import { FaEnvelope, FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

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
      const response = await fetch('https://prasad-shaswat-protifilo-fcs8.onrender.com/api/contact', { // Ensure the endpoint is correct
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
        setStatus('Error sending message.');
      }
    } catch (error) {
      console.error('Error:', error);
      setStatus('Error sending message.');
    }
  };

  return (
    <section id="contact" className="min-h-screen flex flex-col items-center p-12 ">
      <div className="w-full max-w-lg bg-orange-100 p-8 rounded-lg shadow-lg">
        {/* Contact Form */}
        <div>
          <h2 className="text-3xl font-bold text-black-800 mb-6 text-center">Contact Us</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-black-700 text-sm font-semibold mb-2">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 border border-black-300 rounded-md"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-black-700 text-sm font-semibold mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border border-black-300 rounded-md"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-black-700 text-sm font-semibold mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-3 border border-black-300 rounded-md"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-orange-600 text-white p-3 rounded-md hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500"
            >
              Send
            </button>
          </form>
          {status && <p className="mt-4 text-center text-black-600">{status}</p>}
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