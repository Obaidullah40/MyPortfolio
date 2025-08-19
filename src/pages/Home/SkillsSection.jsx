import React from "react";
import { motion } from "framer-motion";

const skills = {
  Frontend: [
    { name: "HTML", level: 95 },
    { name: "CSS", level: 90 },
    { name: "JavaScript", level: 85 },
    { name: "React", level: 80 },
  ],
  Backend: [
    { name: "Node.js", level: 75 },
    { name: "Express", level: 70 },
    { name: "MongoDB", level: 70 },
  ],
  Tools: [
    { name: "Git & GitHub", level: 85 },
    { name: "Firebase", level: 80 },
    { name: "VS Code", level: 90 },
  ],
};

const SkillsSection = () => {
  return (
    <section
      id="skills"
      className="py-20 px-6 md:px-16  bg-gradient-to-br from-indigo-600 via-purple-500 to-indigo-500  dark:from-gray-900 dark:via-gray-800 dark:to-black text-white"
    >
      <motion.h2
        className="text-4xl font-bold text-center mb-12"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        My <span className="text-indigo-600 dark:text-pink-400">Skills</span>
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {Object.entries(skills).map(([category, skillList], index) => (
          <motion.div
            key={category}
            className="text-center leading-relaxed text-lg md:text-xl text-white/90 space-y-6"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
          >
            <h3 className="text-2xl font-semibold mb-6 text-indigo-600 dark:text-pink-400">
              {category}
            </h3>
            <div className="space-y-5">
              {skillList.map((skill, i) => (
                <div key={i}>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-800 dark:text-gray-200 font-medium">
                      {skill.name}
                    </span>
                    <span className="text-gray-600 dark:text-gray-400 text-sm">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                    <motion.div
                      className="h-3 rounded-full bg-gradient-to-r from-indigo-500 to-blue-500 dark:from-purple-500 dark:to-pink-500"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1.2, delay: i * 0.15 }}
                      viewport={{ once: true }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
