import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";
import Logo from "../assets/bg-logo.png";

const Footer = () => {
  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "Projects", href: "#projects" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="relative bg-gradient-to-tr from-indigo-400 via-purple-400 to-indigo-500 
                       dark:from-gray-900 dark:via-gray-800 dark:to-black text-gray-300 
                       py-12 px-6 transition-colors duration-500 backdrop-blur-md">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* Brand */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <img
            className="h-20 mb-3 hover:scale-105 transition-transform"
            src={Logo}
            alt="Logo"
          />
          <p className="text-sm text-gray-800 dark:text-gray-300 font-medium">
            Crafting <span className="bg-gradient-to-r from-yellow-400 to-pink-500 bg-clip-text text-transparent font-semibold">beautiful</span> 
            {" "}and functional web experiences with passion.
          </p>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            Quick Links
          </h2>
          <ul className="space-y-2">
            {quickLinks.map((link, idx) => (
              <li key={idx}>
                <a
                  href={link.href}
                  className="hover:text-yellow-400 dark:hover:text-yellow-500 transition-all duration-300 cursor-pointer hover:translate-x-1 block"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Social Media */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            Follow Me
          </h2>
          <div className="flex space-x-5 text-xl">
            <a
              href="https://facebook.com/obaidullah.40"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition-transform transform hover:scale-125"
            >
              <FaFacebook />
            </a>
            <a
              href="https://x.com/mdobaidullah30"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-sky-400 transition-transform transform hover:scale-125"
            >
              <FaTwitter />
            </a>
            <a
              href="https://linkedin.com/in/obaidullah30"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 transition-transform transform hover:scale-125"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/obaidullah40"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400 transition-transform transform hover:scale-125"
            >
              <FaGithub />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Bottom */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="mt-12 border-t border-transparent bg-clip-border rounded-2xl 
                   bg-gradient-to-r from-yellow-400 via-purple-500 to-indigo-500 
                   py-3 text-center text-sm text-gray-700 dark:text-gray-400"
      >
        © {new Date().getFullYear()}{" "}
        <span className="font-semibold text-gray-900 dark:text-white">
          Obaidullah
        </span>
        . All rights reserved. 💻
      </motion.div>
    </footer>
  );
};

export default Footer;
