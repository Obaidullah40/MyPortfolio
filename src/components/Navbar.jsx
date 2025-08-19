import { useState } from "react";
import {
  FaHome,
  FaUserAlt,
  FaBriefcase,
  FaEnvelope,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import DarkModeToggle from "./DarkModeToggle";
import { Link as ScrollLink } from "react-scroll";
import Logo from "../assets/bg-logo.png"


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "Home", path: "home", icon: <FaHome /> },
    { name: "About", path: "about", icon: <FaUserAlt /> },
    { name: "Projects", path: "projects", icon: <FaBriefcase /> },
    { name: "Contact", path: "contact", icon: <FaEnvelope /> },
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="bg-gradient-to-br from-indigo-400 via-purple-400 to-indigo-400 dark:from-gray-900 dark:via-gray-800 dark:to-gray-800 text-white shadow-lg fixed top-0 left-0 w-full z-50"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 lg:px-8 py-3">
        {/* Brand */}
        <motion.div
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.96 }}
          className="flex items-center gap-2 cursor-pointer text-gray-900 dark:text-white"
        >
          <ScrollLink
            to="home"
            smooth={true}
            duration={600}
            offset={-70}
          >
            
            <img className="h-16 animate-pulse" src={Logo} alt="" />
          </ScrollLink>
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 items-center">
          {menuItems.map((item, index) => (
            <motion.div
              key={item.name}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.96 }}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <ScrollLink
                to={item.path}
                smooth={true}
                duration={600}
                offset={-70}
                className="flex items-center gap-2 px-3 py-2 rounded-md text-gray-800 dark:text-gray-200 hover:bg-primary hover:text-white dark:hover:bg-primary-focus transition duration-300 cursor-pointer"
              >
                {item.icon} {item.name}
              </ScrollLink>
            </motion.div>
          ))}

          {/* Right side (Desktop only) */}
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
            href="/cv.pdf"
            download
            className="bg-primary text-white px-4 py-2 rounded-lg shadow-md hover:bg-primary-focus dark:hover:bg-primary-content transition duration-300 whitespace-nowrap"
          >
            Download CV
          </motion.a>
          <DarkModeToggle />
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-3 md:hidden">
          <DarkModeToggle />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-2xl text-gray-900 dark:text-gray-200 focus:outline-none"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-white dark:bg-gray-800 w-full shadow-inner"
          >
            <div className="flex flex-col px-4 py-3 space-y-2">
              {menuItems.map((item) => (
                <ScrollLink
                  key={item.name}
                  to={item.path}
                  smooth={true}
                  duration={600}
                  offset={-70}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-2 px-3 py-2 rounded-md text-gray-800 dark:text-gray-200 hover:bg-primary hover:text-white dark:hover:bg-primary-focus transition duration-300 cursor-pointer"
                >
                  {item.icon} {item.name}
                </ScrollLink>
              ))}

              <a
                href="/cv.pdf"
                download
                onClick={() => setIsOpen(false)}
                className="block bg-primary text-white px-4 py-2 rounded-lg shadow-md hover:bg-primary-focus dark:hover:bg-primary-content transition duration-300 text-center font-semibold"
              >
                Download CV
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
