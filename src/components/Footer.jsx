import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import Logo from "../assets/bg-logo.png";

const Footer = () => {
  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "Projects", href: "#projects" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="relative py-16 px-6 overflow-hidden text-gray-300 dark:text-gray-300">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-tr from-indigo-400 via-purple-400 to-indigo-500 dark:from-gray-900 dark:via-gray-800 dark:to-black animate-gradient-bg -z-10" />

      {/* Floating Semi-transparent Logo */}
      <motion.img
        src={Logo}
        className="absolute top-1/2 left-1/2 h-64 opacity-10 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
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
          <p className="text-sm text-gray-100 dark:text-gray-300 font-medium">
            Crafting{" "}
            <span className="bg-gradient-to-r from-yellow-400 to-pink-500 bg-clip-text text-transparent font-semibold">
              beautiful
            </span>{" "}
            and functional web experiences with passion.
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
              <motion.li
                key={idx}
                whileHover={{ x: 5, scale: 1.05 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <a
                  href={link.href}
                  className="hover:text-yellow-400 dark:hover:text-yellow-500 transition-all duration-300"
                >
                  {link.name}
                </a>
              </motion.li>
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
          <div className="flex space-x-5 text-2xl">
            <motion.a
              href="https://facebook.com/obaidullah.40"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.3, rotate: 10 }}
              whileTap={{ scale: 0.9 }}
              className="hover:text-blue-500 transition-transform"
            >
              <FaFacebook />
            </motion.a>
            <motion.a
              href="https://x.com/mdobaidullah30"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.3, rotate: 10 }}
              whileTap={{ scale: 0.9 }}
              className="hover:text-sky-400 transition-transform"
            >
              <FaTwitter />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/obaidullah30"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.3, rotate: 10 }}
              whileTap={{ scale: 0.9 }}
              className="hover:text-blue-600 transition-transform"
            >
              <FaLinkedin />
            </motion.a>
            <motion.a
              href="https://github.com/obaidullah40"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.3, rotate: 10 }}
              whileTap={{ scale: 0.9 }}
              className="hover:text-gray-400 transition-transform"
            >
              <FaGithub />
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Bottom Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="mt-12 text-center text-sm text-gray-100 dark:text-gray-300"
      >
        <Typewriter
          words={[
            "Building the web 💻",
            "Coding with passion ✨",
            `© Obaidullah ${new Date().getFullYear()}`,
          ]}
          loop
          cursor
          cursorStyle="_"
          typeSpeed={50}
          deleteSpeed={30}
          delaySpeed={30}
        />
      </motion.div>

      {/* Back-to-top Button */}
      <motion.a
        href="#home"
        className="fixed bottom-10 right-10 p-3 bg-yellow-400 dark:bg-yellow-500 rounded-full shadow-lg hover:bg-yellow-300 dark:hover:bg-yellow-400 text-black dark:text-black"
        whileHover={{ scale: 1.2 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        ↑
      </motion.a>

      {/* Tailwind Gradient Animation */}
      <style>{`
        .animate-gradient-bg {
          background-size: 400% 400%;
          animation: gradientMove 15s ease infinite;
        }
        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
