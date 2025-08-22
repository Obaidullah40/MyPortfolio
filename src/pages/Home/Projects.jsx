import { motion, AnimatePresence } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import BD from "../../assets/blood-donation.png";
import GL from "../../assets/garilagbe.png";
import FMP from "../../assets/freelancemarketplace.png";

const projects = [
    {
        name: "🩸 Blood Donation",
        image: BD,
        techStack: [
            "React", "Tailwind CSS", "DaisyUI", "Express.js",
            "MongoDB", "Firebase Auth", "Stripe Payments",
        ],
        description:
            "A MERN stack web application connecting blood donors with recipients. Features include dashboards, secure authentication, donation management, blogs, and Stripe funding.",
        challenges: [
            "Implementing secure Firebase authentication with JWT verification in the backend.",
            "Designing dependent dropdowns for Division → District → Upazila dynamically.",
            "Handling role-based access control with different dashboards.",
            "Integrating Stripe securely for donations and ensuring smooth payment flow.",
        ],
        improvements: [
            "Add SMS/email notifications when a donation request is accepted.",
            "Build an AI-powered donor recommendation system (location & blood type).",
            "Add a mobile app version for easier donor access.",
            "Improve UI animations and accessibility (dark mode, ARIA roles).",
        ],
        liveLink: "https://blood-donation-91267.web.app/",
        githubLink: "https://github.com/Obaidullah40/blood-donation-client",
    },
    {
        name: "🚗 GariLagbe",
        image: GL,
        techStack: [
            "React", "Tailwind CSS", "DaisyUI", "Express.js",
            "MongoDB", "Firebase", "JWT", "Axios",
        ],
        description:
            "Full-stack car rental & job platform. Users can browse, book, and manage cars; recruiters can post jobs and track applicants. Features Firebase auth, JWT-secured APIs, and responsive UI.",
        challenges: [
            "Integrating Firebase auth with backend JWT verification.",
            "Managing tokens in HTTP-only cookies securely.",
            "Designing dynamic dashboards for different roles.",
        ],
        improvements: [
            "Add advanced analytics dashboards for admins.",
            "Implement real-time booking availability with socket.io.",
            "Integrate payment gateway (Stripe) for bookings.",
        ],
        liveLink: "https://assignment-11-garilagbe.web.app",
        githubLink: "https://github.com/Obaidullah40/GariLagbe-client",
    },
    {
        name: "Freelance Task Marketplace",
        image: FMP,
        techStack: [
            "React", "Tailwind CSS", "DaisyUI", "Firebase Auth",
            "Node.js", "Express.js", "MongoDB",
        ],
        description:
            "Full-stack freelance marketplace where users can post, browse, and bid on tasks. Includes authentication, role-based access, and CRUD operations.",
        challenges: [
            "Integrating Firebase auth with private routes.",
            "Handling MongoDB queries securely for user-specific tasks.",
        ],
        improvements: [
            "Add secure payment gateway (Stripe).",
            "Implement user profile system and review/rating features.",
            "Real-time notifications for bids or updates.",
        ],
        liveLink: "https://a10-freelancemarketplace.web.app/",
        githubLink: "https://github.com/your-username/freelance-task-marketplace",
    },
];

const About = () => {
    const canvasRef = useRef(null);
    const [selectedIndex, setSelectedIndex] = useState(null);
    const project = selectedIndex !== null ? projects[selectedIndex] : null;

    const prevProject = () =>
        setSelectedIndex((selectedIndex - 1 + projects.length) % projects.length);
    const nextProject = () =>
        setSelectedIndex((selectedIndex + 1) % projects.length);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        let particlesArray = [];
        const numberOfParticles = 70;

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const mouse = { x: null, y: null };
        window.addEventListener("mousemove", (e) => {
            mouse.x = e.x;
            mouse.y = e.y;
        });

        const colors = [
            "rgba(99,102,241,0.8)", // indigo-500
            "rgba(168,85,247,0.8)", // purple-500
            "rgba(236,72,153,0.8)", // pink-500
        ];

        class Particle {
            constructor(x, y, size, color, speedX, speedY) {
                this.x = x;
                this.y = y;
                this.size = size;
                this.baseSize = size;
                this.color = color;
                this.speedX = speedX;
                this.speedY = speedY;
                this.opacity = Math.random() * 0.5 + 0.5;
            }
            update() {
                this.x += this.speedX;
                this.y += this.speedY;

                if (this.x > canvas.width || this.x < 0) this.speedX *= -1;
                if (this.y > canvas.height || this.y < 0) this.speedY *= -1;

                // repel effect
                const dx = mouse.x - this.x;
                const dy = mouse.y - this.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                if (distance < 120) {
                    this.x -= dx / 20;
                    this.y -= dy / 20;
                }

                // pulse effect
                this.size = this.baseSize + Math.sin(Date.now() / 500 + this.x) * 1.2;
            }
            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fillStyle = this.color;
                ctx.shadowBlur = 20;
                ctx.shadowColor = this.color;
                ctx.globalAlpha = this.opacity;
                ctx.fill();
                ctx.globalAlpha = 1;
            }
        }

        const init = () => {
            particlesArray = [];
            for (let i = 0; i < numberOfParticles; i++) {
                const size = Math.random() * 2 + 1.5;
                const x = Math.random() * canvas.width;
                const y = Math.random() * canvas.height;
                const speedX = (Math.random() - 0.5) * 0.7;
                const speedY = (Math.random() - 0.5) * 0.7;
                const color = colors[Math.floor(Math.random() * colors.length)];
                particlesArray.push(new Particle(x, y, size, color, speedX, speedY));
            }
        };

        const connectParticles = () => {
            for (let a = 0; a < particlesArray.length; a++) {
                for (let b = a; b < particlesArray.length; b++) {
                    const dx = particlesArray[a].x - particlesArray[b].x;
                    const dy = particlesArray[a].y - particlesArray[b].y;
                    const distance = Math.sqrt(dx * dx + dy * dy);
                    if (distance < 130) {
                        const gradient = ctx.createLinearGradient(
                            particlesArray[a].x,
                            particlesArray[a].y,
                            particlesArray[b].x,
                            particlesArray[b].y
                        );
                        gradient.addColorStop(0, particlesArray[a].color);
                        gradient.addColorStop(1, particlesArray[b].color);

                        ctx.beginPath();
                        ctx.strokeStyle = gradient;
                        ctx.lineWidth = 0.6;
                        ctx.globalAlpha = 0.6 - distance / 130;
                        ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
                        ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
                        ctx.stroke();
                        ctx.closePath();
                        ctx.globalAlpha = 1;
                    }
                }
            }
        };

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particlesArray.forEach((p) => {
                p.update();
                p.draw();
            });
            connectParticles();
            requestAnimationFrame(animate);
        };

        init();
        animate();

        window.addEventListener("resize", () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            init();
        });
    }, []);

    return (
        <section
            id="projects"
            className="relative bg-gradient-to-tr from-indigo-600 via-purple-500 to-indigo-500 dark:from-gray-900 dark:via-gray-800 dark:to-black py-24 text-white overflow-hidden"
        >
            {/* Canvas Background */}
            <canvas
                ref={canvasRef}
                className="absolute inset-0 w-full h-full pointer-events-none"
            />

            <div className="relative z-10 w-10/12 mx-auto px-4">
                {/* Heading */}
                <motion.div
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.h2
                        className="text-5xl font-extrabold drop-shadow-lg relative z-10"
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
                    {projects.map((proj, idx) => (
                        <motion.div
                            key={idx}
                            className="relative group rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 bg-white/10 backdrop-blur-md border border-transparent cursor-pointer"
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

                {/* Modal */}
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
                                className="bg-white dark:bg-gray-900 rounded-3xl max-w-5xl w-full p-6 md:p-8 relative shadow-2xl border border-gray-200 dark:border-gray-700 transition-colors duration-300 overflow-y-auto max-h-[90vh] flex flex-col md:flex-row gap-6"
                                onClick={(e) => e.stopPropagation()}
                                drag="x"
                                dragConstraints={{ left: 0, right: 0 }}
                                dragElastic={0.3}
                                onDragEnd={(e, info) => {
                                    if (info.offset.x < -50) nextProject();
                                    if (info.offset.x > 50) prevProject();
                                }}
                            >
                                {/* Close Button */}
                                <button
                                    onClick={() => setSelectedIndex(null)}
                                    className="absolute top-4 right-4 text-gray-700 dark:text-gray-200 text-3xl font-bold hover:text-red-500 transition"
                                >
                                    &times;
                                </button>

                                {/* Left: Project Image */}
                                <div className="flex-shrink-0 w-full md:w-1/2 cursor-pointer">
                                    <img
                                        src={project.image}
                                        alt={project.name}
                                        className="w-full h-64 md:h-full object-cover rounded-2xl transition-transform duration-300 hover:scale-105"
                                        onClick={() => window.open(project.image, "_blank")}
                                    />
                                </div>

                                {/* Right: Project Details */}
                                <div className="flex flex-col w-full md:w-1/2 overflow-y-auto">
                                    <h3 className="text-3xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 via-pink-500 to-purple-500">
                                        {project.name}
                                    </h3>
                                    <p className="text-center text-gray-500 dark:text-gray-400 text-sm mb-4 md:mb-6 md:text-left">
                                        ⬅️ Swipe left/right on mobile to navigate ➡️
                                    </p>
                                    <div className="mb-4 text-gray-800 dark:text-gray-200">
                                        <h4 className="font-semibold mb-1">Description:</h4>
                                        <p>{project.description}</p>
                                    </div>
                                    <div className="mb-4 text-gray-800 dark:text-gray-200">
                                        <h4 className="font-semibold mb-1">Challenges:</h4>
                                        <ul className="list-disc list-inside space-y-1">
                                            {project.challenges.map((c, idx) => (
                                                <li key={idx}>{c}</li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="mb-4 text-gray-800 dark:text-gray-200">
                                        <h4 className="font-semibold mb-1">Future Improvements:</h4>
                                        <ul className="list-disc list-inside space-y-1">
                                            {project.improvements.map((i, idx) => (
                                                <li key={idx}>{i}</li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {project.techStack.map((tech, idx) => (
                                            <span
                                                key={idx}
                                                className="bg-yellow-300/20 text-yellow-600 dark:text-yellow-300 dark:bg-yellow-300/20 px-3 py-1 rounded-full text-sm font-medium"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                                        <div className="flex gap-2">
                                            <button
                                                onClick={prevProject}
                                                className="bg-gray-800 dark:bg-gray-700 px-4 py-2 rounded-lg hover:bg-gray-700 dark:hover:bg-gray-600 transition"
                                            >
                                                ← Previous
                                            </button>
                                            <button
                                                onClick={nextProject}
                                                className="bg-gray-800 dark:bg-gray-700 px-4 py-2 rounded-lg hover:bg-gray-700 dark:hover:bg-gray-600 transition"
                                            >
                                                Next →
                                            </button>
                                        </div>
                                        <div className="flex gap-4">
                                            <a
                                                href={project.liveLink}
                                                target="_blank"
                                                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
                                            >
                                                Live
                                            </a>
                                            <a
                                                href={project.githubLink}
                                                target="_blank"
                                                className="bg-gray-900 dark:bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-gray-700 dark:hover:bg-gray-600 transition"
                                            >
                                                GitHub
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
};

export default About;
