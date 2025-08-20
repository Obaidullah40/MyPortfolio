import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGithub,
} from "react-icons/fa";
import { SiMongodb, SiExpress, SiFirebase } from "react-icons/si";
import { BiLogoVisualStudio } from "react-icons/bi";

const skills = {
  Frontend: [
    { name: "HTML", level: 95, icon: <FaHtml5 className="text-orange-500" /> },
    { name: "CSS", level: 90, icon: <FaCss3Alt className="text-blue-500" /> },
    { name: "JavaScript", level: 85, icon: <FaJs className="text-yellow-400" /> },
    { name: "React", level: 90, icon: <FaReact className="text-cyan-400" /> },
  ],
  Backend: [
    { name: "Node.js", level: 85, icon: <FaNodeJs className="text-green-500" /> },
    { name: "Express", level: 80, icon: <SiExpress className="text-gray-300" /> },
    { name: "MongoDB", level: 80, icon: <SiMongodb className="text-green-400" /> },
  ],
  Tools: [
    { name: "Git & GitHub", level: 85, icon: <FaGithub className="text-gray-200" /> },
    { name: "Firebase", level: 80, icon: <SiFirebase className="text-yellow-400" /> },
    { name: "VS Code", level: 90, icon: <BiLogoVisualStudio className="text-blue-400" /> },
  ],
};

// Floating Icon Component
const FloatingIcon = ({ icon, style, glow }) => (
  <motion.div
    className={`absolute text-3xl transition-all duration-300 ${glow ? "text-yellow-300 opacity-100 scale-125" : "opacity-30"}`}
    style={style}
    animate={{ rotate: [0, 15, -15, 0] }}
    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
  >
    {icon}
  </motion.div>
);

const SkillsSection = () => {
  const sectionRef = useRef();
  const [hoveredCard, setHoveredCard] = useState(null);

  // Generate random positions for floating icons
  const floatingIcons = Object.entries(skills).flatMap(([cat, list]) =>
    list.map((skill) => ({
      icon: skill.icon,
      top: `${Math.random() * 80 + 10}%`,
      left: `${Math.random() * 80 + 10}%`,
      category: cat,
    }))
  );

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative py-20 px-6 md:px-16 bg-gradient-to-br from-indigo-600 via-purple-600 to-indigo-700 dark:from-gray-900 dark:via-gray-800 dark:to-black text-white overflow-hidden"
    >
      {/* Background Glow Blobs */}
      <motion.div className="absolute top-20 left-10 w-72 h-72 bg-pink-500/30 rounded-full blur-3xl animate-pulse" />
      <motion.div className="absolute bottom-10 right-10 w-72 h-72 bg-indigo-500/30 rounded-full blur-3xl animate-pulse" />

      <motion.h2
        className="text-5xl font-extrabold text-center mb-16 drop-shadow-lg relative z-10"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <span className="text-yellow-400">My </span>Skills
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto relative z-10">
        {Object.entries(skills).map(([category, skillList], idx) => (
          <motion.div
            key={category}
            className="skill-card relative p-6 rounded-2xl backdrop-blur-md bg-white/10 shadow-xl hover:scale-105 hover:shadow-pink-500/30 transition-all duration-300"
            onMouseEnter={() => setHoveredCard(category)}
            onMouseLeave={() => setHoveredCard(null)}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.2, duration: 0.6 }}
          >
            <h3 className="text-2xl font-semibold mb-6 text-pink-400">{category}</h3>
            <div className="space-y-5 relative">
              {skillList.map((skill, i) => (
                <div key={i}>
                  <div className="flex justify-between items-center mb-2 z-10 relative">
                    <div className="flex items-center gap-2">
                      <span className="text-xl">{skill.icon}</span>
                      <span className="text-gray-200 font-medium">{skill.name}</span>
                    </div>
                    <span className="text-gray-300 text-sm font-semibold">
                      <CountUp end={skill.level} duration={1.5} />%
                    </span>
                  </div>
                  <div className="w-full bg-gray-700/40 rounded-full h-3 overflow-hidden">
                    <motion.div
                      className="h-3 rounded-full bg-gradient-to-r from-pink-500 to-indigo-500"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1.2 }}
                      viewport={{ once: true }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Floating Icons */}
      {floatingIcons.map((icon, i) => (
        <FloatingIcon
          key={i}
          icon={icon.icon}
          style={{ top: icon.top, left: icon.left }}
          glow={hoveredCard === icon.category}
        />
      ))}
    </section>
  );
};

export default SkillsSection;
