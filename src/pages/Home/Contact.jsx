import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 bg-gradient-to-br from-indigo-600 via-purple-500 to-indigo-500  dark:from-gray-900 dark:via-gray-800 dark:to-black text-white"
    >
      <div className="w-10/12 mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
              <motion.h2
                  className="text-5xl font-extrabold text-center drop-shadow-lg relative z-10"
                  initial={{ opacity: 0, y: -30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  Contact<span className="text-yellow-400"> Me</span>
          </motion.h2>
          <p className="mt-3 text-lg md:text-xl text-white/80 font-medium">
            Get in touch with me directly
          </p>
          <div className="mt-4 w-24 h-1 mx-auto rounded-full bg-yellow-300/70" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row justify-center items-center gap-8 text-lg"
        >
          <div>
            <p className="font-semibold">Email:</p>
            <a href="mailto:sheikhmuhammadobaidullah@gmail.com" className="hover:underline">
              sheikhmuhammadobaidullah@gmail.com
            </a>
          </div>
          <div>
            <p className="font-semibold">Phone:</p>
            <a href="tel:+8801838113030" className="hover:underline">
              +8801838-113030
            </a>
          </div>
          <div>
            <p className="font-semibold">WhatsApp:</p>
            <a href="https://wa.me/8801838113030" target="_blank" className="hover:underline">
              +8801838-113030
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
