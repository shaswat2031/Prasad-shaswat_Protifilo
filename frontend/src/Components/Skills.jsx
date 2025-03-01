import React from 'react';
import {
  FaGitAlt, FaGithub,  FaJsSquare, FaPython, FaLinux, FaWindows,
  FaReact, FaNodeJs, FaCloud
} from 'react-icons/fa';
import {
  SiFlask, SiMongodb, SiMysql, SiExpress, SiTailwindcss,SiTypescript, SiNextdotjs,
} from 'react-icons/si';

const Skills = () => {
  return (
    <section id="skills" className="p-10 bg-gray-100 min-h-screen">
      <h2 className="text-5xl font-extrabold text-gray-900 mb-12 text-center">Technical Skills</h2>

      {/* Skill Icons Grid */}
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-8 justify-items-center mb-12">
        {/* Programming Languages */}
        <FaPython size={60} className="text-blue-500 hover:scale-110 transition-transform" />
        <FaJsSquare size={60} className="text-yellow-500 hover:scale-110 transition-transform" />
        <SiTypescript size={60} className="text-blue-700 hover:scale-110 transition-transform" />

        {/* Frontend */}
        <FaReact size={60} className="text-blue-400 hover:scale-110 transition-transform" />
        <SiNextdotjs size={60} className="text-black hover:scale-110 transition-transform" />
        <SiTailwindcss size={60} className="text-teal-400 hover:scale-110 transition-transform" />

        {/* Backend */}
        <FaNodeJs size={60} className="text-green-500 hover:scale-110 transition-transform" />
        <SiExpress size={60} className="text-gray-900 hover:scale-110 transition-transform" />
        <SiFlask size={60} className="text-black hover:scale-110 transition-transform" />

        {/* Databases */}
        <SiMongodb size={60} className="text-green-600 hover:scale-110 transition-transform" />
        <SiMysql size={60} className="text-blue-600 hover:scale-110 transition-transform" />

        {/* DevOps & Cloud */}
        <FaCloud size={60} className="text-gray-400 hover:scale-110 transition-transform" />
        
        {/* Tools & Platforms */}
        <FaLinux size={60} className="text-black hover:scale-110 transition-transform" />
        <FaWindows size={60} className="text-blue-500 hover:scale-110 transition-transform" />
        <FaGitAlt size={60} className="text-red-600 hover:scale-110 transition-transform" />
        <FaGithub size={60} className="text-black hover:scale-110 transition-transform" />
      </div>

      {/* Skill Categories */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <SkillCard title="Programming Languages" skills="Java, Python, JavaScript, TypeScript" borderColor="border-blue-600" />
        <SkillCard title="Frontend Development" skills="React.js, Next.js, Tailwind CSS" borderColor="border-indigo-500" />
        <SkillCard title="Backend Development" skills="Node.js, Express.js, Flask" borderColor="border-green-600" />
        <SkillCard title="Databases & Cloud" skills="MongoDB, MySQL" borderColor="border-yellow-500" />
        <SkillCard title="DevOps & Cloud Platforms" skills=" Cloud" borderColor="border-teal-500" />
        <SkillCard title="Tools & Platforms" skills="Git, GitHub, Linux, Windows" borderColor="border-gray-700" />
      </div>

      {/* Currently Learning Section */}
      <div className="max-w-4xl mx-auto mt-12 p-6 bg-white shadow-lg rounded-lg border-l-4 border-purple-600">
        <h3 className="font-bold text-2xl text-gray-900 mb-2">Currently Learning</h3>
        <p className="text-lg text-gray-700">TypeScript, Next.js</p>
      </div>
    </section>
  );
};

const SkillCard = ({ title, skills, borderColor }) => (
  <div className={`p-6 bg-white shadow-lg rounded-lg border-l-4 ${borderColor}`}>
    <h3 className="font-bold text-2xl text-gray-900 mb-2">{title}</h3>
    <p className="text-lg text-gray-700">{skills}</p>
  </div>
);

export default Skills;
