import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import Tilt from "react-parallax-tilt";
import { Typewriter } from "react-simple-typewriter";
import profileImg from "../../assets/obaidullah1.png";
import { FaReact, FaNodeJs, FaDatabase, FaGithub } from "react-icons/fa";

export default function AboutMe() {
  const stats = [
    { label: "Projects", value: 15, description: "Full-stack apps & websites" },
    { label: "Years Exp", value: 4, description: "Hands-on coding & learning" },
    { label: "Technologies", value: 10, description: "MERN, Firebase, Tailwind & more" },
  ];

  const skills = [
    { name: "React", icon: <FaReact className="text-blue-400" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
    { name: "MongoDB", icon: <FaDatabase className="text-emerald-400" /> },
    { name: "GitHub", icon: <FaGithub className="text-gray-300" /> },
  ];

  const [count, setCount] = useState({});
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState([]);
  const canvasRef = useRef(null);

  // Initialize particles
  useEffect(() => {
    const colors = ["#facc15", "#f472b6", "#a78bfa", "#3b82f6", "#34d399", "#f87171"];
    const tempParticles = Array.from({ length: 40 }).map((_, i) => ({
      id: i,
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: Math.random() * 20 + 10,
      speedX: (Math.random() - 0.5) * 0.05,
      speedY: (Math.random() - 0.5) * 0.05,
      color: colors[Math.floor(Math.random() * colors.length)],
      dirX: Math.random() > 0.5 ? 1 : -1,
      dirY: Math.random() > 0.5 ? 1 : -1,
    }));
    setParticles(tempParticles);
  }, []);

  // Animate particles & draw connections
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update particle positions
      setParticles((prev) =>
        prev.map((p) => {
          let x = p.x + p.speedX * p.dirX;
          let y = p.y + p.speedY * p.dirY;

          if (x < 0 || x > canvas.width) p.dirX *= -1;
          if (y < 0 || y > canvas.height) p.dirY *= -1;

          return { ...p, x, y };
        })
      );

      // Draw particles
      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size / 5, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();
      });

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 150) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(255,255,255,${1 - dist / 150})`;
            ctx.lineWidth = 1;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // Cursor interaction: connect to nearest particle
      particles.forEach((p) => {
        const dx = p.x - cursorPos.x;
        const dy = p.y - cursorPos.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 200) {
          ctx.beginPath();
          ctx.strokeStyle = `rgba(255,255,0,${1 - dist / 200})`;
          ctx.lineWidth = 1.2;
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(cursorPos.x, cursorPos.y);
          ctx.stroke();
        }
      });

      requestAnimationFrame(animate);
    };
    animate();

    return () => window.removeEventListener("resize", resize);
  }, [particles, cursorPos]);

  // Animate stats counters
  useEffect(() => {
    stats.forEach((stat) => {
      let start = 0;
      const end = stat.value;
      const increment = end / 50;
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          clearInterval(timer);
          setCount((prev) => ({ ...prev, [stat.label]: end }));
        } else {
          setCount((prev) => ({ ...prev, [stat.label]: Math.floor(start) }));
        }
      }, 30);
      return () => clearInterval(timer);
    });
  }, []);

  // Cursor tracking
  useEffect(() => {
    const handleMouseMove = (e) => setCursorPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      id="about"
      className="relative py-20 px-6 md:px-16 bg-gradient-to-br from-indigo-600 via-purple-600 to-indigo-700 dark:from-gray-900 dark:via-gray-800 dark:to-black text-white overflow-hidden"
    >
      {/* Canvas for particles + connections */}
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none"
      />

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Profile Card */}
        <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gray-800/70 dark:bg-gray-900/70 backdrop-blur-lg rounded-3xl p-6 shadow-2xl relative overflow-hidden"
          >
            <img
              src={profileImg}
              alt="Profile"
              className="rounded-3xl shadow-lg mx-auto mb-4 w-64 md:w-72"
            />
            <h3 className="text-2xl font-bold text-center">Md Obaidullah</h3>
            <p className="text-center text-gray-400">MERN Stack Developer</p>
          </motion.div>
        </Tilt>

        {/* About Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-yellow-400">Me</span>
          </h2>
          <p className="text-xl md:text-2xl font-semibold text-yellow-300 mb-4">
            <Typewriter
              words={["Hi, I'm Obaidullah", "Full Stack Developer", "Creative Thinker"]}
              loop
              cursor
              cursorStyle="_"
              typeSpeed={60}
              deleteSpeed={40}
              delaySpeed={2000}
            />
          </p>
          <p className="text-gray-300 leading-relaxed mb-6">
            I’m a passionate <span className="text-yellow-400">MERN Stack Developer</span> who turns
            ideas into scalable web applications. I focus on building
            <span className="text-indigo-400"> user-friendly</span> and
            <span className="text-green-400"> performance-optimized</span> solutions.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 mb-6">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                className="flex flex-col items-center bg-white/10 dark:bg-black/20 rounded-3xl p-6 shadow-xl hover:shadow-2xl transition transform hover:scale-105"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
              >
                <h3 className="text-3xl font-bold text-yellow-400">
                  {count[stat.label] || 0}+
                </h3>
                <p className="text-sm">{stat.label}</p>
                <p className="text-xs text-gray-200 dark:text-gray-400">{stat.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Skills */}
          <div className="flex flex-wrap gap-3">
            {skills.map((skill, i) => (
              <motion.span
                key={i}
                className="flex items-center gap-2 px-4 py-2 bg-white/10 dark:bg-gray-800 rounded-full text-sm hover:bg-yellow-400 hover:text-black transition"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: i * 0.1 }}
              >
                {skill.icon} {skill.name}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
