import { motion } from "framer-motion";
import { FaEnvelope, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 relative bg-gradient-to-br from-indigo-600 via-purple-500 to-indigo-500 dark:from-gray-900 dark:via-gray-800 dark:to-black text-white"
    >
      <div className="w-11/12 md:w-9/12 mx-auto px-4 text-center">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-14"
        >
          <motion.h2
            className="text-5xl font-extrabold drop-shadow-lg"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Contact<span className="text-yellow-400"> Me</span>
          </motion.h2>
          <p className="mt-3 text-lg md:text-xl text-white/80 font-medium">
            Let’s collaborate and create something amazing
          </p>
          <div className="mt-4 w-24 h-1 mx-auto rounded-full bg-yellow-300/70" />
        </motion.div>

        {/* Contact Cards */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {/* Email Card */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-6 rounded-2xl bg-white/10 backdrop-blur-lg shadow-lg hover:shadow-yellow-300/40 transition"
          >
            <FaEnvelope className="text-4xl text-yellow-400 mx-auto mb-4 animate-bounce" />
            <p className="font-semibold">Email</p>
            <a
              href="mailto:sheikhmuhammadobaidullah@gmail.com"
              className="hover:underline block mt-1"
            >
              sheikhmuhammadobaidullah@gmail.com
            </a>
          </motion.div>

          {/* Phone Card */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-6 rounded-2xl bg-white/10 backdrop-blur-lg shadow-lg hover:shadow-yellow-300/40 transition"
          >
            <FaPhoneAlt className="text-4xl text-green-400 mx-auto mb-4 animate-bounce" />
            <p className="font-semibold">Phone</p>
            <a href="tel:+8801838113030" className="hover:underline block mt-1">
              +8801838-113030
            </a>
          </motion.div>

          {/* WhatsApp Card */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-6 rounded-2xl bg-white/10 backdrop-blur-lg shadow-lg hover:shadow-yellow-300/40 transition"
          >
            <FaWhatsapp className="text-4xl text-green-500 mx-auto mb-4 animate-bounce" />
            <p className="font-semibold">WhatsApp</p>
            <a
              href="https://wa.me/8801838113030"
              target="_blank"
              className="hover:underline block mt-1"
            >
              +8801838-113030
            </a>
          </motion.div>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-12"
        >
          <a
            href="mailto:sheikhmuhammadobaidullah@gmail.com"
            className="inline-block px-8 py-4 bg-yellow-400 text-black font-bold rounded-full shadow-lg hover:bg-yellow-300 transition"
          >
            Let’s Talk ✨
          </a>
        </motion.div>
      </div>
    </section>
  );
}
