"use client";
import React, { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { FaBars, FaTimes, FaDownload } from "react-icons/fa";
import { motion } from "framer-motion";
import Logo from "../assets/bg-logo.png"


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Scroll shadow effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  const navItems = [
    { name: "Home", path: "home" },
    { name: "About", path: "about" },
    { name: "Skills", path: "skills" },
    { name: "Projects", path: "projects" },
    { name: "Contact", path: "contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all ${
        scrolled
          ? "bg-white/70 dark:bg-gray-900/70 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between pt-1.5 px-6">
        {/* Logo */}
        <motion.h1
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
            <img className="h-16 animate-pulse" src={Logo} alt="" />
        </motion.h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <ScrollLink
                to={item.path}
                smooth={true}
                duration={600}
                offset={-70}
                spy={true}
                activeClass="text-primary dark:text-pink-400 font-semibold border-b-2 border-primary dark:border-pink-400"
                className="cursor-pointer px-2 py-1 rounded-md text-gray-800 dark:text-gray-200 hover:text-primary dark:hover:text-pink-400 transition"
              >
                {item.name}
              </ScrollLink>
            </motion.div>
          ))}

          {/* Download CV */}
          <motion.a
            href="/cv.pdf"
            download
            whileHover={{ scale: 1.1 }}
            className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg shadow-md hover:bg-pink-500 transition"
          >
            <FaDownload /> CV
          </motion.a>

          {/* Dark Mode Toggle */}
          <button
            onClick={toggleDarkMode}
            className="ml-4 px-3 py-2 rounded-full bg-gray-200 dark:bg-gray-700"
          >
            {darkMode ? "🌙" : "☀️"}
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-2xl text-gray-800 dark:text-gray-200"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-lg"
        >
          <div className="flex flex-col items-center space-y-6 py-6">
            {navItems.map((item, index) => (
              <ScrollLink
                key={index}
                to={item.path}
                smooth={true}
                duration={600}
                offset={-70}
                spy={true}
                activeClass="text-primary dark:text-pink-400 font-semibold border-b-2 border-primary dark:border-pink-400"
                onClick={() => setIsOpen(false)}
                className="cursor-pointer text-gray-800 dark:text-gray-200 hover:text-primary dark:hover:text-pink-400 transition"
              >
                {item.name}
              </ScrollLink>
            ))}
            <a
              href="/cv.pdf"
              download
              className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg shadow-md hover:bg-pink-500 transition"
            >
              <FaDownload /> CV
            </a>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
