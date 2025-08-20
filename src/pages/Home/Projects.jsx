import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import BD from "../../assets/blood-donation.png";
import GL from "../../assets/garilagbe.png";
import FMP from "../../assets/freelancemarketplace.png";

const projects = [
  {
    name: "🩸 Blood Donation",
    image: BD,
    techStack: ["React", "Tailwind CSS", "DaisyUI", "Express.js", "MongoDB", "Firebase Authentication", "Stripe Payments"],
    description: "A MERN stack web application connecting blood donors with recipients. Includes dashboards, authentication, donation management, blogs, and Stripe funding.",
    liveLink: "https://blood-donation-91267.web.app/",
    githubLink: "https://github.com/Obaidullah40/blood-donation-client"
  },
  {
    name: "🚗 GariLagbe",
    image: GL,
    techStack: ["React", "Tailwind CSS", "DaisyUI", "Express.js", "MongoDB", "Firebase", "JWT", "Axios"],
    description: "Full-stack car rental & job platform. Features Firebase auth, JWT APIs, modern responsive UI.",
    liveLink: "https://assignment-11-garilagbe.web.app",
    githubLink: "https://github.com/Obaidullah40/GariLagbe-client"
  },
  {
    name: "Freelance Task Marketplace",
    image: FMP,
    techStack: ["React", "Tailwind CSS", "DaisyUI", "Firebase Auth", "Node.js", "Express.js", "MongoDB"],
    description: "Full-stack freelance task marketplace. Post, browse, bid on tasks, with authentication and CRUD operations.",
    liveLink: "https://a10-freelancemarketplace.web.app/",
    githubLink: "https://github.com/your-username/freelance-task-marketplace"
  }
];

export default function Projects() {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const project = selectedIndex !== null ? projects[selectedIndex] : null;

  const prevProject = () => setSelectedIndex((selectedIndex - 1 + projects.length) % projects.length);
  const nextProject = () => setSelectedIndex((selectedIndex + 1) % projects.length);

  return (
    <section className="relative bg-gradient-to-tr from-indigo-600 via-purple-500 to-indigo-500 dark:from-gray-900 dark:via-gray-800 dark:to-black py-24 text-white">
      <div className="w-10/12 mx-auto px-4">
        <motion.div className="text-center mb-12" initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
          <motion.h2 className="text-5xl font-extrabold drop-shadow-lg relative z-10" initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            My <span className="text-yellow-400">Projects</span>
          </motion.h2>
          <p className="mt-3 text-lg md:text-xl text-white/80 font-medium">A selection of my best work</p>
          <div className="mt-4 w-24 h-1 mx-auto rounded-full bg-yellow-300/70" />
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((proj, idx) => (
            <motion.div
              key={idx}
              className="relative group rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 bg-white/10 backdrop-blur-md border border-transparent"
              whileHover={{ scale: 1.05, rotate: [0, 2, -2, 0] }}
              onClick={() => setSelectedIndex(idx)}
            >
              <img src={proj.image} alt={proj.name} className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500 rounded-3xl" />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-center items-center px-4 text-center pointer-events-none">
                <h3 className="text-xl font-bold text-yellow-300 mb-2">{proj.name}</h3>
                <p className="text-white/80 text-sm">{proj.description.slice(0, 60)}...</p>
              </div>
              <div className="p-6 flex flex-col">
                <h3 className="text-xl font-semibold mb-4">{proj.name}</h3>
                <button className="mt-auto bg-gradient-to-r from-yellow-300 to-pink-400 text-gray-900 font-semibold px-4 py-2 rounded-lg text-center hover:scale-105 transition-transform duration-300">
                  View Details
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal with Swipe */}
        <AnimatePresence>
          {project && (
            <motion.div
              key={project.name}
              className="fixed inset-0 flex justify-center items-center z-50 p-4 bg-black/50 dark:bg-black/70 transition-colors duration-300"
              onClick={() => setSelectedIndex(null)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="bg-white dark:bg-gray-900 rounded-3xl max-w-2xl w-full p-8 relative shadow-2xl border border-gray-200 dark:border-gray-700 transition-colors duration-300"
                onClick={(e) => e.stopPropagation()}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                onDragEnd={(e, info) => {
                  if (info.offset.x < -100) nextProject();
                  if (info.offset.x > 100) prevProject();
                }}
              >
                <button onClick={() => setSelectedIndex(null)} className="absolute top-4 right-4 text-gray-700 dark:text-gray-200 text-3xl font-bold hover:text-red-500 transition">&times;</button>

                <h3 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 via-pink-500 to-purple-500">
                  {project.name}
                </h3>

                <p className="mb-4 text-gray-800 dark:text-gray-200">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech, idx) => (
                    <span key={idx} className="bg-yellow-300/20 text-yellow-600 dark:text-yellow-300 dark:bg-yellow-300/20 px-3 py-1 rounded-full text-sm font-medium">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between mt-6">
                  <button onClick={prevProject} className="bg-gray-800 dark:bg-gray-700 px-4 py-2 rounded-lg hover:bg-gray-700 dark:hover:bg-gray-600 transition">
                    Previous
                  </button>
                  <div className="flex gap-4">
                    <a href={project.liveLink} target="_blank" className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">Live</a>
                    <a href={project.githubLink} target="_blank" className="bg-gray-900 dark:bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-gray-700 dark:hover:bg-gray-600 transition">GitHub</a>
                  </div>
                  <button onClick={nextProject} className="bg-gray-800 dark:bg-gray-700 px-4 py-2 rounded-lg hover:bg-gray-700 dark:hover:bg-gray-600 transition">
                    Next
                  </button>
                </div>
                <p className="text-center mt-2 text-gray-500 dark:text-gray-400 text-sm">Swipe left/right on mobile to navigate</p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
