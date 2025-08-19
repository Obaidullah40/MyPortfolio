import { motion } from "framer-motion";
import { FaCode, FaUsers, FaCalendarAlt } from "react-icons/fa";
import CountUp from "react-countup";
import { Typewriter } from "react-simple-typewriter";
import img from "../../assets/obaidullah1.png";

export default function AboutMe() {
  const stats = [
    { icon: <FaCode />, label: "Projects Completed", value: 15 },
    { icon: <FaUsers />, label: "Happy Clients", value: 5 },
    { icon: <FaCalendarAlt />, label: "Years Experience", value: 4 },
  ];

  const skills = [
    "React", "Next.js", "Node.js", "Express", "MongoDB",
    "Firebase", "TailwindCSS", "Framer Motion"
  ];

  return (
    <section
      id="about"
      className="relative bg-gradient-to-bl from-pink-500 via-purple-500 to-indigo-600 
                 dark:from-gray-900 dark:via-gray-800 dark:to-black py-24 text-white overflow-hidden"
    >
      {/* Floating Background Orbs */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.15, scale: [1, 1.2, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-[900px] h-[900px] rounded-full bg-white/10 blur-3xl top-[-250px] left-[-200px]"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1, scale: [1, 1.3, 1] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-[1100px] h-[1100px] rounded-full bg-yellow-400/10 blur-3xl bottom-[-300px] right-[-300px]"
      />

      <div className="w-11/12 md:w-10/12 mx-auto px-4 relative z-10">
        {/* Heading with Typewriter */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2
                  className="text-5xl font-extrabold text-center drop-shadow-lg relative z-10"
                  initial={{ opacity: 0, y: -30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  About <span className="text-yellow-400">Me</span>
          </motion.h2>
          
          <p className="mt-4 text-xl md:text-2xl font-semibold text-yellow-300">
            <Typewriter
              words={["Hi, I'm Obaidullah", "Full Stack Developer", "Creative Thinker"]}
              loop={true}
              cursor
              cursorStyle="_"
              typeSpeed={60}
              deleteSpeed={40}
              delaySpeed={2000}
            />
          </p>
        </motion.div>

        {/* Content Row */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Profile Image Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            whileHover={{ scale: 1.05 }}
            className="relative group rounded-3xl overflow-hidden shadow-2xl max-w-sm mx-auto"
          >
            <img
              src={img}
              alt="Profile"
              className="w-full h-auto object-cover rounded-3xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 
                            group-hover:opacity-100 transition duration-500 flex items-end justify-center pb-6">
              <p className="text-lg font-medium text-yellow-300">🚀 Passionate about Innovation</p>
            </div>
          </motion.div>

          {/* About Me Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left space-y-6 text-lg md:text-xl text-white/90 leading-relaxed"
          >
            <p>
              I am a passionate developer who loves transforming ideas into real-world applications. 
              From simple web pages to complex platforms, my goal is to build 
              <span className="text-yellow-300 font-semibold"> clean, scalable, and intuitive </span> 
              digital experiences.
            </p>
            <p>
              Every project is an opportunity to combine 
              <span className="text-yellow-300 font-semibold"> technical skill </span> 
              with <span className="text-yellow-300 font-semibold"> creative vision</span>, 
              ensuring a seamless user experience and maintainable code.
            </p>
            <p>
              Outside of coding, I explore emerging tech trends, play football, and sketch new ideas — 
              keeping creativity and innovation at the heart of everything I do.
            </p>

            {/* Skills Tags */}
            <div className="flex flex-wrap gap-3 mt-6">
              {skills.map((skill, i) => (
                <span
                  key={i}
                  className="px-4 py-2 bg-white/10 backdrop-blur-lg rounded-full border border-white/20 
                             text-sm md:text-base text-yellow-200 hover:bg-yellow-400 hover:text-black transition"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.2 }}
              whileHover={{ scale: 1.08 }}
              className="flex flex-col items-center bg-gradient-to-tr from-white/10 via-white/5 to-white/5 
                         dark:from-black/20 dark:via-black/10 dark:to-black/10 rounded-3xl p-8 shadow-xl 
                         backdrop-blur-lg border border-white/10 hover:shadow-2xl transition-all duration-500"
            >
              <motion.div
                initial={{ rotate: 0 }}
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="text-6xl md:text-5xl text-yellow-300 mb-5"
              >
                {stat.icon}
              </motion.div>
              <CountUp
                end={stat.value}
                duration={3}
                className="text-4xl md:text-3xl font-bold"
              />
              <p className="mt-3 text-white/80 text-lg font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
