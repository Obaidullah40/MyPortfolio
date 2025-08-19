import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-tr from-indigo-400 via-purple-400 to-indigo-500  dark:from-gray-900 dark:via-gray-800 dark:to-black text-gray-300 py-10 px-5 transition-colors duration-500">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Brand */}
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 animate-pulse">
            My<span className="text-primary dark:text-primary-focus">Portfolio</span>
          </h1>
          <p className="text-sm">
            Crafting beautiful and functional web experiences with passion and dedication.
          </p>
        </div>

        {/* Links */}
        <div>
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Quick Links</h2>
          <ul className="space-y-2">
            {["Home", "Projects", "About", "Contact"].map((link, idx) => (
              <li
                key={idx}
                className="hover:text-primary dark:hover:text-primary-focus transition-all duration-300 cursor-pointer hover:translate-x-1"
              >
                {link}
              </li>
            ))}
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Follow Me</h2>
          <div className="flex space-x-4 text-lg">
            <a
              href="#"
              className="hover:text-primary dark:hover:text-primary-focus transition-transform transform hover:scale-125"
            >
              <FaFacebook />
            </a>
            <a
              href="#"
              className="hover:text-primary dark:hover:text-primary-focus transition-transform transform hover:scale-125"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              className="hover:text-primary dark:hover:text-primary-focus transition-transform transform hover:scale-125"
            >
              <FaLinkedin />
            </a>
            <a
              href="#"
              className="hover:text-primary dark:hover:text-primary-focus transition-transform transform hover:scale-125"
            >
              <FaGithub />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-10 border-t border-gray-300 dark:border-gray-700 pt-5 text-center text-sm text-gray-600 dark:text-gray-400">
        © {new Date().getFullYear()} MyPortfolio. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
