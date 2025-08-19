import { motion } from "framer-motion";
import { useState } from "react";
import BD from "../../assets/blood-donation.png"
import GL from "../../assets/garilagbe.png"
import FMP from "../../assets/freelancemarketplace.png"

const projects = [
    {
        name: "🩸 Blood Donation",
        image: BD,
        techStack: [
            "React",
            "Tailwind CSS",
            "DaisyUI",
            "Express.js",
            "MongoDB",
            "Firebase Authentication",
            "Stripe Payments"
        ],
        description:
            "A MERN stack web application that connects blood donors with recipients. Features include role-based dashboards (Admin, Volunteer, Donor), secure authentication, donation request management, blog/content publishing, and funding through Stripe.",
        liveLink: "https://blood-donation-91267.web.app/",
        githubLink: "https://github.com/Obaidullah40/blood-donation-client",
        challenges: [
            "Implementing secure Firebase authentication with JWT verification in the backend.",
            "Designing dependent dropdowns for Division → District → Upazila dynamically.",
            "Handling role-based access control (Admin, Volunteer, Donor) with different dashboards.",
            "Integrating Stripe securely for donations and ensuring smooth payment flow."
        ],
        improvements: [
            "Add SMS/email notifications when a donation request is accepted.",
            "Build an AI-powered donor recommendation system (matching based on location & blood type).",
            "Add a mobile app version for easier donor access.",
            "Improve UI animations and accessibility (dark mode, ARIA roles)."
        ]
    },
    {
        name: "🚗 GariLagbe",
        image: GL,
        techStack: ["React", "Tailwind CSS", "DaisyUI", "Express.js", "MongoDB", "Firebase", "JWT", "Axios"],
        description:
            "GariLagbe is a full-stack car rental and job application platform where users can browse, book, and manage cars securely, while recruiters can post jobs and track applicants. It features Firebase authentication, JWT-secured APIs, and a modern responsive UI.",
        liveLink: "https://assignment-11-garilagbe.web.app",
        githubLink: "https://github.com/Obaidullah40/GariLagbe-client",
        challenges:
            "Integrating Firebase authentication with backend JWT verification was tricky, especially managing tokens in HTTP-only cookies. Designing dynamic dashboards for different roles (users vs recruiters) also required careful routing and state management.",
        improvements:
            "Add advanced analytics dashboards for admins, real-time booking availability with socket.io, and payment gateway integration (Stripe) to make bookings more practical."
    },
    {
        name: "Freelance Task Marketplace",
        image: FMP,
        techStack: [
            "React",
            "Tailwind CSS",
            "DaisyUI",
            "Firebase Auth",
            "Node.js",
            "Express.js",
            "MongoDB"
        ],
        description:
            "A full-stack freelance task marketplace where users can post tasks, browse available tasks, bid on them, and manage their own posted work. It includes authentication, protected routes, and CRUD operations.",
        liveLink: "https://a10-freelancemarketplace.web.app/",
        githubLink: "https://github.com/your-username/freelance-task-marketplace",
        challenges:
            "Integrating Firebase Authentication with private routes and role-based access control was tricky. Handling MongoDB queries for user-specific tasks and implementing delete/update securely was also challenging.",
        improvements:
            "Plan to add a secure payment gateway (Stripe), user profile system, review & rating system, and real-time notifications for new bids or updates."
    },
];

export default function Projects() {
    const [selectedProject, setSelectedProject] = useState(null);

    return (
        <section id="projects" className="relative bg-gradient-to-tr from-indigo-600 via-purple-500 to-indigo-500  dark:from-gray-900 dark:via-gray-800 dark:to-black py-24 text-white overflow-hidden">
            <div className="w-10/12 mx-auto px-4">
                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-12"
                >
                    <motion.h2
                  className="text-5xl font-extrabold text-center drop-shadow-lg relative z-10"
                  initial={{ opacity: 0, y: -30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  My <span className="text-yellow-400">Projects</span>
          </motion.h2>
                    <p className="mt-3 text-lg md:text-xl text-white/80 font-medium">
                        A selection of my best work
                    </p>
                    <div className="mt-4 w-24 h-1 mx-auto rounded-full bg-yellow-300/70" />
                </motion.div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: idx * 0.2 }}
                            className="relative group rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 bg-white/10 backdrop-blur-md border border-white/20"
                        >
                            {/* Project Image */}
                            <img
                                src={project.image}
                                alt={project.name}
                                className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                            />

                            {/* Hover Overlay: Title + Short Description */}
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-center items-center px-4 text-center pointer-events-none">
                                <h3 className="text-xl font-bold text-yellow-300 mb-2">{project.name}</h3>
                                <p className="text-white/80 text-sm">{project.description.slice(0, 60)}...</p>
                            </div>

                            <div className="p-6 flex flex-col">
                                <h3 className="text-xl font-semibold mb-4">{project.name}</h3>
                                <button
                                    onClick={() => setSelectedProject(project)}
                                    className="mt-auto bg-gradient-to-r from-yellow-300 to-pink-400 text-gray-900 font-semibold px-4 py-2 rounded-lg text-center hover:scale-105 transition-transform duration-300 pointer-events-auto"
                                >
                                    View More / Details
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Project Modal */}
                {selectedProject && (
                    <div
                        className="fixed inset-0 flex justify-center items-center z-50 p-4
               bg-black/50 dark:bg-black/70 transition-colors duration-300"
                    >
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            className="bg-white dark:bg-gray-900 rounded-3xl max-w-2xl w-full p-8 relative shadow-2xl border border-gray-200 dark:border-gray-700 transition-colors duration-300"
                        >
                            {/* Close Button */}
                            <button
                                onClick={() => setSelectedProject(null)}
                                className="absolute top-4 right-4 text-gray-700 dark:text-gray-200 text-3xl font-bold hover:text-red-500 transition"
                            >
                                &times;
                            </button>

                            {/* Animated Heading */}
                            <motion.h3
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 via-pink-500 to-purple-500"
                            >
                                {selectedProject.name}
                            </motion.h3>

                            {/* Tech Stack Tags */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.3, staggerChildren: 0.2 }}
                                className="flex flex-wrap gap-2 mb-4"
                            >
                                {selectedProject.techStack.map((tech, idx) => (
                                    <motion.span
                                        key={idx}
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        transition={{ delay: idx * 0.1 }}
                                        className="bg-yellow-300/20 text-yellow-600 dark:text-yellow-300 dark:bg-yellow-300/20 px-3 py-1 rounded-full text-sm font-medium"
                                    >
                                        {tech}
                                    </motion.span>
                                ))}
                            </motion.div>

                            {/* Fade-in content */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.5 }}
                                className="space-y-2 text-gray-800 dark:text-gray-200"
                            >
                                <p><strong>Description:</strong> {selectedProject.description}</p>
                                <p><strong>Challenges:</strong> {selectedProject.challenges}</p>
                                <p><strong>Future Plans:</strong> {selectedProject.improvements}</p>
                            </motion.div>

                            {/* Links */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.7 }}
                                className="mt-6 flex gap-4 flex-wrap"
                            >
                                <a
                                    href={selectedProject.liveLink}
                                    target="_blank"
                                    className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
                                >
                                    Live Project
                                </a>
                                <a
                                    href={selectedProject.githubLink}
                                    target="_blank"
                                    className="bg-gray-900 dark:bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-gray-700 dark:hover:bg-gray-600 transition"
                                >
                                    GitHub
                                </a>
                            </motion.div>
                        </motion.div>
                    </div>
                )}

            </div>
        </section>
    );
}
