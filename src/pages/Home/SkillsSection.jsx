import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const skills = {
  Frontend: [
    { name: "HTML", level: 95 },
    { name: "CSS", level: 90 },
    { name: "JavaScript", level: 85 },
    { name: "React", level: 80 },
  ],
  Backend: [
    { name: "Node.js", level: 75 },
    { name: "Express.js", level: 70 },
    { name: "MongoDB", level: 80 },
  ],
  Tools: [
    { name: "Git & GitHub", level: 85 },
    { name: "Firebase", level: 80 },
    { name: "VS Code", level: 95 },
  ],
};

const CircularProgress = ({ level, name }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let start = 0;
    const timer = setInterval(() => {
      start += 1;
      if (start > level) clearInterval(timer);
      else setProgress(start);
    }, 20);
    return () => clearInterval(timer);
  }, [level]);

  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      className="flex flex-col items-center"
    >
      <div className="relative w-24 h-24">
        <svg className="w-24 h-24">
          <circle
            cx="48"
            cy="48"
            r="40"
            stroke="#e5e7eb"
            strokeWidth="6"
            fill="transparent"
          />
          <motion.circle
            cx="48"
            cy="48"
            r="40"
            stroke="#3b82f6"
            strokeWidth="6"
            fill="transparent"
            strokeDasharray={2 * Math.PI * 40}
            strokeDashoffset={2 * Math.PI * 40 * (1 - progress / 100)}
            strokeLinecap="round"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center font-semibold">
          {progress}%
        </div>
      </div>
      <p className="mt-2 text-sm font-medium">{name}</p>
    </motion.div>
  );
};

const SkillsSection = () => {
  return (
    <section id="skills" className="relative px-3 xs:px-4 sm:px-8 md:px-16 lg:px-24 py-12 xs:py-16 sm:py-20 
      bg-gradient-to-br from-indigo-600 via-purple-500 to-indigo-500 
      dark:from-gray-900 dark:via-gray-800 dark:to-black text-gray-100">
      {/* Title */}
      <motion.h2
        className="text-4xl font-bold mb-4 text-center"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        My Skills
      </motion.h2>
      <p className="text-center mb-12 max-w-2xl text-lg">
        I have experience across frontend, backend, and tools that help me build
        beautiful, scalable, and user-friendly web applications.
      </p>

      {/* Skills Categories */}
      <div className="grid md:grid-cols-3 gap-12">
        {Object.entries(skills).map(([category, skillList]) => (
          <motion.div
            key={category}
            className="bg-base-200 rounded-2xl p-6 shadow-lg"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl font-semibold mb-6 text-center">{category}</h3>
            <div className="grid grid-cols-2 gap-6">
              {skillList.map((skill, i) => (
                <CircularProgress key={i} level={skill.level} name={skill.name} />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
