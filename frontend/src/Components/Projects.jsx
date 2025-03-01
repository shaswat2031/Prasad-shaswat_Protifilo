import { motion } from 'framer-motion';
import React from 'react';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import universityConnectImage from '../Assets/university-connect.png';
import inventoryImage from '../Assets/image.png';
import ecommerceImage from '../Assets/Ecommerce.png';

const projects = [
  {
    title: "University Connect",
    description:
      "A student-driven platform enabling users to create profiles, showcase skills, and connect for collaboration. Developed a dynamic UI, integrated student profiles, messaging, and a certification system with secure authentication and optimized data handling.",
    date: "Jan 2025 – Feb 2025",
    githubLink: "https://github.com/shaswat2031/Minor-Project-University-Connect.git",
    image: universityConnectImage,
    alignment: "left",
  },
  {
    title: "Flask Inventory Management System",
    description:
      "A personal project focused on authentication, inventory & sales management, and billing. Features secure login/logout with hashed passwords, user-specific access control, invoice generation, and real-time stock analytics.",
    date: "Feb 2025 – Present",
    githubLink: "https://github.com/shaswat2031/Flask-Inventory-Management",
    image: inventoryImage,
    alignment: "right",
  },
  {
    title: "E-commerce Platform (MERN Stack)",
    description:
      "A fully functional e-commerce platform built using the MERN stack. Features include user authentication, product management, shopping cart, order processing, and payment gateway integration.",
    date: "March 2025",
    githubLink: "https://github.com/shaswat2031/ecommerce",
    image: ecommerceImage,
    alignment: "left",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="min-h-screen bg-white p-8">
      <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">Projects</h2>

      <div className="w-full max-w-5xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className={`mb-12 flex flex-col ${project.alignment === "left" ? "md:flex-row" : "md:flex-row-reverse"} items-center bg-gray-50 p-6 rounded-lg shadow-lg`}
            whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
          >
            <img
              src={project.image}
              alt={`${project.title} Screenshot`}
              className="w-full md:w-1/2 h-auto rounded-lg mb-6 md:mb-0"
            />
            <div className="w-full md:w-1/2 md:px-6 text-center md:text-left">
              <h3 className="text-3xl font-semibold text-gray-700 mb-3">{project.title}</h3>
              <p className="text-gray-600 mb-5 text-lg leading-relaxed">{project.description}</p>
              <p className="text-gray-500 text-sm mb-5"><strong>{project.date}</strong></p>
              <div className="flex justify-center md:justify-start space-x-4">
                {project.liveLink && (
                  <motion.a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition-transform transform-gpu"
                    whileHover={{ scale: 1.1, boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.3)', transition: { duration: 0.3 } }}
                  >
                    <FaExternalLinkAlt size={18} className="inline-block mr-2" />
                    Live View
                  </motion.a>
                )}
                <motion.a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 text-white px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition-transform transform-gpu"
                  whileHover={{ scale: 1.1, boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.3)', transition: { duration: 0.3 } }}
                >
                  <FaGithub size={18} className="inline-block mr-2" />
                  GitHub
                </motion.a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
