import React, { useState } from 'react';
import { FaEnvelope, FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

const ContactUs = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://prasad-shaswat-protifilo-fcs8.onrender.com/api/contact', { // Ensure the endpoint is correct
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        const errorData = await response.json();
<<<<<<< HEAD
        setStatus({ type: 'error', message: errorData.message || 'Error sending message. Please try again.' });
=======
        setStatus(errorData.message || 'Error sending message.');
>>>>>>> 9847d3c19ccd4f8045e3a4b265f2106dff54b38a
      }
    } catch (error) {
      console.error('Error:', error);
      setStatus('An unexpected error occurred. Please try again later.');
    }
  };

  return (
    <section id="contact" className="min-h-screen flex flex-col items-center p-12">
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
                aria-label="Your Name"
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
                aria-label="Your Email"
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
                aria-label="Your Message"
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

        {/* Social Media Links */}
        <div className="flex justify-center space-x-6 mt-8">
          <a href="https://github.com/prasadshaswat" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub size={30} className="text-gray-800 hover:text-gray-600 transition-colors duration-300" />
          </a>
          <a href="https://www.linkedin.com/in/shaswat-prasad-14b147266/?originalSubdomain=in" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin size={30} className="text-blue-600 hover:text-blue-400 transition-colors duration-300" />
          </a>
          <a href="https://x.com/pr17745?t=fAajl19pfFzI-91IvOUmOA&s=09" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <FaTwitter size={30} className="text-blue-400 hover:text-blue-300 transition-colors duration-300" />
          </a>
          <a href="https://www.instagram.com/prasadshaswat/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FaInstagram size={30} className="text-pink-500 hover:text-pink-400 transition-colors duration-300" />
          </a>
          <a href="mailto:hbvgsjhf@gmail.com" aria-label="Email">
            <FaEnvelope size={30} className="text-gray-600 hover:text-gray-400 transition-colors duration-300" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
