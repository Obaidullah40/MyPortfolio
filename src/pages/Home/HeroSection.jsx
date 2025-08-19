import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaMapMarkerAlt,
  FaLaptopCode,
  FaProjectDiagram,
  FaClock,
} from "react-icons/fa";
import { motion } from "framer-motion";
import img from "../../assets/obaidullah1.png";

const HeroSection = () => {
  const infoItems = [
    {
      icon: <FaLaptopCode />,
      title: "Frontend Developer",
      desc: "React.js, Next.js, Tailwind, Firebase",
    },
    {
      icon: <FaProjectDiagram />,
      title: "15+ Projects",
      desc: "Real-world, client-based, & personal",
    },
    {
      icon: <FaClock />,
      title: "4+ Years Experience",
      desc: "Building responsive & user-friendly apps",
    },
    { icon: <FaMapMarkerAlt />, title: "Location", desc: "Dhaka, Bangladesh" },
  ];

  return (
    <section
      id="home"
      className="relative flex items-center min-h-screen
        bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 
        dark:from-gray-900 dark:via-gray-800 dark:to-black
        text-gray-900 dark:text-gray-100 overflow-hidden w-full"
    >
      {/* Animated Background Glow */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.15, scale: [1, 1.3, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-[750px] md:w-[950px] h-[750px] md:h-[950px] rounded-full bg-white/10 blur-3xl"
      ></motion.div>

      {/* Content Wrapper */}
      <div className="w-11/12 md:w-10/12 mx-auto px-4 sm:px-6 lg:px-16 flex flex-col md:flex-row items-center justify-center gap-10">
        {/* Text Content */}
        <motion.div
          className="flex-1 max-w-xl space-y-6 z-10 text-center md:text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <p className="text-indigo-200 font-semibold text-base sm:text-lg">
            🚀 MERN Stack Web Developer
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-white">
            Hi, I'm{" "}
            <span className="text-yellow-300">Muhammad Obaidullah</span>
          </h1>
          <p className="text-gray-100 text-sm sm:text-base md:text-lg max-w-lg mx-auto md:mx-0">
            I build modern, responsive, and accessible web applications using
            React, Node.js, and Firebase. Passionate about clean code and
            user-focused designs.
          </p>

          {/* Resume + Socials */}
          <div className="flex flex-wrap justify-center md:justify-start items-center gap-4">
            <a
              href="/resume.pdf"
              download
              className="bg-yellow-400 text-gray-900 px-4 sm:px-5 py-2 sm:py-3 rounded-lg font-semibold shadow-md
                hover:bg-yellow-300 transition text-sm sm:text-base"
            >
              View / Download Resume
            </a>
            <div className="flex space-x-4 text-xl sm:text-2xl">
              {[
                { icon: <FaGithub />, link: "https://github.com/obaidullh40" },
                { icon: <FaLinkedin />, link: "https://linkedin.com/in/obaidullh30" },
                { icon: <FaFacebook />, link: "https://facebook.com/obaidullah.40" },
              ].map((item, i) => (
                <motion.a
                  key={i}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-white hover:text-yellow-300 transition"
                >
                  {item.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Info Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mt-6 sm:mt-8">
            {infoItems.map((item, i) => (
              <motion.div
                key={i}
                className="flex items-start gap-3 bg-white/10 p-3 sm:p-4 rounded-lg backdrop-blur-md hover:bg-white/20 transition"
                whileHover={{ scale: 1.05 }}
              >
                <span className="text-yellow-300 text-xl sm:text-2xl">
                  {item.icon}
                </span>
                <div>
                  <h4 className="font-semibold text-white text-sm sm:text-base">
                    {item.title}
                  </h4>
                  <p className="text-gray-200 text-xs sm:text-sm">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Image */}
        <motion.div
          className="flex-1 flex justify-center z-10"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <img
            src={img}
            alt="Muhammad Obaidullah"
            className="w-40 h-52 sm:w-56 sm:h-72 md:w-72 md:h-[420px] lg:w-80 lg:h-[500px] object-cover rounded-2xl border-4 border-yellow-300 shadow-2xl"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
