import React from 'react';
import {
  FaEnvelope,
  FaWhatsapp,
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaMapMarkerAlt,
  FaInstagram,
} from 'react-icons/fa';
import { SiHashnode, SiLeetcode } from "react-icons/si";
import snapchatQr from "../Components/snapchat-qr.png"


const ContactUs = () => {
  return (
    <section
      id="contact"
      className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center py-16 px-4"
    >
      <div className="w-full max-w-5xl px-6 md:px-12 py-12 md:py-16 relative overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500 rounded-full opacity-10 -mr-32 -mt-32"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-600 rounded-full opacity-10 -ml-40 -mb-40"></div>

        {/* Header */}
        <div className="text-4xl md:text-5xl font-extrabold text-gray-100 mb-6 text-center relative z-10">
          <span
            className="block bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-500 mb-2"
            style={{ fontFamily: "'Roboto Slab', serif" }}
          >
            Let's Connect
          </span>
          <p className="text-lg md:text-xl text-gray-400 font-normal mt-4">
            Whether it’s tech talk, project collaboration, or just to say hi —
            my inbox and DMs are always open!
          </p>
        </div>

        {/* Location & Email */}
        <div className="bg-gray-800 bg-opacity-80 p-6 rounded-lg shadow-md border-l-4 border-indigo-500 mb-8 text-center md:text-left">
          <div className="flex flex-col md:flex-row justify-center md:justify-start items-center mb-4 text-gray-300">
            <span className="inline-flex items-center">
              <FaMapMarkerAlt className="text-indigo-400 mr-2" />
              Vadodara, Gujarat - 391760
            </span>
            <span className="hidden md:inline text-gray-500 mx-4">•</span>
            <span className="inline-flex items-center">
              <FaEnvelope className="text-indigo-400 mr-2" />
              <a
                href="mailto:prasadshaswat9265@gmail.com"
                className="text-indigo-300 hover:underline"
              >
                prasadshaswat9265@gmail.com
              </a>
            </span>
          </div>
        </div>

        {/* Contact Options Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {/* WhatsApp */}
          <ContactCard
            icon={<FaWhatsapp className="text-green-400 text-xl mr-3" />}
            title="WhatsApp"
            color="green"
            description="Drop a quick message and let's chat directly."
            href="https://wa.me/9265318481"
            label="Message on WhatsApp"
            bgColor="from-green-600 to-green-500"
            borderColor="border-green-500"
            textColor="text-green-400"
            hoverShadow="shadow-green-500/20"
          />

          {/* Twitter */}
          <ContactCard
            icon={<FaTwitter className="text-sky-400 text-xl mr-3" />}
            title="Twitter"
            color="sky"
            description="Catch up with thoughts, dev insights, and updates."
            href="https://x.com/prasadshaswat1"
            label="Follow on Twitter"
            bgColor="from-sky-600 to-sky-500"
            borderColor="border-sky-500"
            textColor="text-sky-400"
            hoverShadow="shadow-sky-500/20"
          />

          {/* LinkedIn */}
          <ContactCard
            icon={<FaLinkedin className="text-blue-400 text-xl mr-3" />}
            title="LinkedIn"
            description="Let's grow our professional network."
            href="https://linkedin.com/in/shaswat-prasad-14b147266/"
            label="Connect on LinkedIn"
            bgColor="from-blue-600 to-blue-500"
            borderColor="border-blue-500"
            textColor="text-blue-400"
            hoverShadow="shadow-blue-500/20"
          />

          {/* GitHub */}
          <ContactCard
            icon={<FaGithub className="text-white text-xl mr-3" />}
            title="GitHub"
            description="Explore my open-source contributions and projects."
            href="https://github.com/shaswat2031"
            label="View GitHub Profile"
            bgColor="from-gray-600 to-gray-500"
            borderColor="border-gray-500"
            textColor="text-gray-200"
            hoverShadow="shadow-gray-500/20"
          />

          {/* Instagram */}
          <ContactCard
            icon={<FaInstagram className="text-pink-400 text-xl mr-3" />}
            title="Instagram"
            description="Follow my creative journey and daily updates."
            href="https://www.instagram.com/prasad_shaswat"
            label="Follow on Instagram"
            bgColor="from-pink-600 via-purple-500 to-orange-500"
            borderColor="border-pink-500"
            textColor="text-pink-400"
            hoverShadow="shadow-pink-500/20"
          />

          {/* LeetCode */}
          <ContactCard
            icon={<SiLeetcode className="text-yellow-400 text-xl mr-3" />}
            title="LeetCode"
            description="Check out my coding solutions and programming skills."
            href="https://leetcode.com/u/prasadshaswat9265/"
            label="View LeetCode Profile"
            bgColor="from-yellow-600 to-yellow-500"
            borderColor="border-yellow-500"
            textColor="text-yellow-400"
            hoverShadow="shadow-yellow-500/20"
          />

          {/* Hashnode */}
          <ContactCard
            icon={<SiHashnode className="text-purple-400 text-xl mr-3" />}
            title="Hashnode"
            description="Check out my technical blogs and dev articles."
            href="https://hashnode.com/@prasadshaswat"
            label="Read on Hashnode"
            bgColor="from-purple-600 to-purple-500"
            borderColor="border-purple-500"
            textColor="text-purple-400"
            hoverShadow="shadow-purple-500/20"
          />

          {/* Snapchat */}
          <div className="bg-gray-800 bg-opacity-80 p-6 rounded-lg shadow-md border-l-4 border-yellow-500 hover:shadow-lg transition duration-300 transform hover:-translate-y-1 hover:shadow-yellow-500/20 flex flex-col items-center group">
            <h4 className="font-bold text-yellow-400 mb-3 flex items-center self-start">
              <span className="text-xl mr-3 group-hover:animate-bounce">👻</span> Snapchat
            </h4>
            <p className="text-gray-400 mb-4 self-start">Scan and connect with me on Snapchat!</p>
            <div className="flex justify-center">
              <img
                src={snapchatQr}
                alt="Snapchat QR"
                className="w-32 h-32 rounded-lg shadow-lg hover:shadow-yellow-500/20 transition duration-300 transform group-hover:scale-105"
              />
            </div>
          </div>
        </div>

        {/* Closing Message */}
        <div className="mt-10 bg-gray-800 bg-opacity-80 p-5 rounded-lg shadow-md border-l-4 border-purple-500 text-center">
          <p className="text-gray-300 mb-4">
            Thanks for visiting — let’s build, share, and grow together.
          </p>
          <span className="font-bold text-xl md:text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400">
            See you on the other side 🚀
          </span>
        </div>
      </div>
    </section>
  );
};

// Reusable Contact Card Component
const ContactCard = ({ 
  icon, 
  title, 
  description, 
  href, 
  label, 
  bgColor, 
  borderColor, 
  textColor, 
  hoverShadow 
}) => {
  const [isHovered, setIsHovered] = React.useState(false);
  const [isClicked, setIsClicked] = React.useState(false);
  
  const handleClick = () => {
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 1000);
  };
  
  return (
    <div
      className={`bg-gray-800 bg-opacity-80 p-6 rounded-lg shadow-md border-l-4 ${borderColor} 
        hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:${hoverShadow} 
        h-full flex flex-col group backdrop-blur-sm hover:bg-opacity-90 
        ${isHovered ? 'scale-[1.01]' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      role="article"
      aria-labelledby={`card-title-${title.toLowerCase().replace(/\s/g, '-')}`}
    >
      <div className="relative overflow-hidden w-12 h-12 rounded-full mb-4 bg-gray-700 flex items-center justify-center">
        <div className={`absolute inset-0 bg-gradient-to-r ${bgColor} opacity-20 group-hover:opacity-40 transition-opacity rounded-full`}></div>
        <span className={`${isHovered ? 'animate-pulse' : ''} transition-all duration-300 transform group-hover:scale-110 z-10`}>
          {icon}
        </span>
      </div>
      
      <h4 
        id={`card-title-${title.toLowerCase().replace(/\s/g, '-')}`}
        className={`font-bold ${textColor} text-lg mb-3 flex items-center group-hover:translate-x-1 transition-transform duration-300`}
      >
        {title}
      </h4>
      
      <p className="text-gray-400 mb-6 flex-grow group-hover:text-gray-300 transition-colors duration-300">{description}</p>
      
      <div className="relative">
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-block px-6 py-3 text-white bg-gradient-to-r ${bgColor} 
            rounded-lg shadow-lg hover:${hoverShadow} transition-all duration-300 w-full text-center
            relative overflow-hidden group-hover:shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:${borderColor}`}
          onClick={handleClick}
          aria-label={`${label} for ${title}`}
        >
          <span className={`inline-flex items-center justify-center transition-all duration-500 ${isClicked ? 'scale-95' : 'scale-100'}`}>
            {label}
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className={`h-4 w-4 ml-2 transform transition-transform ${isHovered ? 'translate-x-1' : ''}`} 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </span>
          <span className={`absolute inset-0 w-full h-full bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300 ${isClicked ? 'animate-ping' : ''}`}></span>
        </a>
      </div>
    </div>
  );
};

export default ContactUs;
