import { motion } from "framer-motion";
import { FaEnvelope, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";
import { useState } from "react";

export default function Contact() {
  const contacts = [
    {
      icon: FaEnvelope,
      titles: ["Email", "Reach Me via Email", "Send Me a Message"],
      value: "sheikhmuhammadobaidullah@gmail.com",
      link: "mailto:sheikhmuhammadobaidullah@gmail.com",
      color: "text-yellow-400",
    },
    {
      icon: FaPhoneAlt,
      titles: ["Phone", "Call Me", "Let's Talk"],
      value: "+8801838-113030",
      link: "tel:+8801838113030",
      color: "text-green-400",
    },
    {
      icon: FaWhatsapp,
      titles: ["WhatsApp", "Message Me", "Let's Chat"],
      value: "+8801838-113030",
      link: "https://wa.me/8801838113030",
      color: "text-green-500",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0); // Track which title is active per card

  return (
    <section
      id="contact"
      className="py-24 relative bg-gradient-to-br from-indigo-600 via-purple-500 to-indigo-500 dark:from-gray-900 dark:via-gray-800 dark:to-black text-white"
    >
      <div className="w-11/12 md:w-9/12 mx-auto px-4 text-center">
        <h2 className="text-5xl font-extrabold mb-3">
          Contact <span className="text-yellow-400">Me</span>
        </h2>
        <p className="text-lg md:text-xl text-white/80 font-medium mb-10">
          Let’s collaborate and create something amazing
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {contacts.map((c, i) => {
            const Icon = c.icon;
            return (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="p-6 rounded-2xl bg-white/10 backdrop-blur-lg shadow-lg hover:shadow-yellow-300/40 transition flex flex-col items-center"
              >
                <motion.div
                  animate={{
                    scale: [1, 1.3, 1],
                    rotate: [0, 15, -15, 0],
                    boxShadow: [
                      "0 0 10px rgba(0,0,0,0)",
                      `0 0 20px ${c.color}`,
                      `0 0 15px ${c.color}`,
                      "0 0 10px rgba(0,0,0,0)",
                    ],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 2,
                    repeatDelay: 0.5,
                  }}
                  className={`text-4xl ${c.color} mb-4`}
                >
                  <Icon />
                </motion.div>

                <h3 className="font-semibold text-center">
                  <Typewriter
                    words={c.titles}
                    loop={true}
                    cursor
                    cursorStyle="_"
                    typeSpeed={50}
                    deleteSpeed={30}
                    delaySpeed={2000}
                    onLoopDone={() => setActiveIndex(i)}
                  />
                </h3>

                <a
                  href={c.link}
                  target="_blank"
                  className="hover:underline mt-2 text-white/80"
                >
                  {c.value}
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
