import React, { useEffect, useRef } from "react";
import { FaGithub, FaLinkedin, FaFacebook, FaMapMarkerAlt, FaLaptopCode, FaProjectDiagram, FaClock } from "react-icons/fa";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import img from "../../assets/hero1.png";

const HeroSection = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let particlesArray = [];
    const numberOfParticles = 60;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const mouse = { x: null, y: null };
    window.addEventListener("mousemove", (e) => {
      mouse.x = e.x;
      mouse.y = e.y;
    });

    class Particle {
      constructor(x, y, size, color, speedX, speedY) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.color = color;
        this.speedX = speedX;
        this.speedY = speedY;
      }
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.x > canvas.width || this.x < 0) this.speedX *= -1;
        if (this.y > canvas.height || this.y < 0) this.speedY *= -1;

        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < 100) {
          this.x -= dx / 10;
          this.y -= dy / 10;
        }
      }
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
      }
    }

    const init = () => {
      particlesArray = [];
      for (let i = 0; i < numberOfParticles; i++) {
        const size = Math.random() * 3 + 1;
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const speedX = (Math.random() - 0.5) * 1.5;
        const speedY = (Math.random() - 0.5) * 1.5;
        particlesArray.push(new Particle(x, y, size, "rgba(255,255,255,0.3)", speedX, speedY));
      }
    };

    const connectParticles = () => {
      for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a; b < particlesArray.length; b++) {
          const dx = particlesArray[a].x - particlesArray[b].x;
          const dy = particlesArray[a].y - particlesArray[b].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < 120) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(255,255,255,${1 - distance / 120})`;
            ctx.lineWidth = 1;
            ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
            ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
            ctx.stroke();
            ctx.closePath();
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

  const infoItems = [
    { icon: <FaLaptopCode />, title: "Frontend Developer", desc: "React.js, Next.js, Tailwind, Firebase" },
    { icon: <FaProjectDiagram />, title: "15+ Projects", desc: "Real-world, client-based & personal" },
    { icon: <FaClock />, title: "4+ Years Experience", desc: "Building responsive & user-friendly apps" },
    { icon: <FaMapMarkerAlt />, title: "Location", desc: "Dhaka, Bangladesh" },
  ];

  const socials = [
    { icon: <FaGithub />, link: "https://github.com/obaidullah40" },
    { icon: <FaLinkedin />, link: "https://linkedin.com/in/obaidullah30" },
    { icon: <FaFacebook />, link: "https://facebook.com/obaidullah.40" },
  ];

  return (
    <section
      id="home"
      className="relative pt-8 flex items-center min-h-screen
                 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500
                 dark:from-gray-900 dark:via-gray-800 dark:to-black
                 text-gray-900 dark:text-gray-100 overflow-hidden w-full"
    >
      {/* Particle Canvas */}
      <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full z-0" />

      <div className="w-11/12 md:w-10/12 mx-auto px-4 sm:px-6 lg:px-16 flex flex-col md:flex-row items-center justify-center gap-10 z-10">
        {/* Text Section */}
        <motion.div
          className="flex-1 max-w-xl space-y-6 text-center md:text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <p className="text-indigo-200 font-semibold text-base sm:text-lg">🚀 MERN Stack Web Developer</p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-yellow-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
              Muhammad Obaidullah
            </span>
          </h1>

          <h3 className="text-lg sm:text-xl font-medium text-yellow-300">
            <Typewriter
              words={["Frontend Developer", "MERN Stack Developer", "Freelancer"]}
              loop
              cursor
              cursorStyle="|"
              typeSpeed={80}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </h3>

          <p className="text-gray-100 text-sm sm:text-base md:text-lg max-w-lg mx-auto md:mx-0">
            I build modern, responsive, and accessible web applications using React, Node.js, and Firebase. Passionate about clean code and user-focused designs.
          </p>

          {/* Resume & Socials */}
          <div className="flex flex-wrap justify-center md:justify-start items-center gap-4">
            <motion.a
              href="/Resume.pdf"
              download
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 15px rgba(255, 223, 0, 0.7)",
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-yellow-400 text-gray-900 px-5 py-3 rounded-lg font-semibold shadow-md hover:bg-yellow-300 transition text-sm sm:text-base"
            >
              View / Download Resume
            </motion.a>
            <div className="flex space-x-5 text-2xl">
              {socials.map((item, i) => (
                <motion.a
                  key={i}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.3, y: -3, textShadow: "0 0 8px #FFD700" }}
                  whileTap={{ scale: 0.9 }}
                  className="text-white hover:text-yellow-300 transition"
                >
                  {item.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Info Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mt-8">
            {infoItems.map((item, i) => (
              <motion.div
                key={i}
                className="flex items-start gap-3 bg-white/10 dark:bg-gray-800/40 p-4 rounded-xl backdrop-blur-md hover:bg-white/20 hover:shadow-lg transition"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 20px rgba(255, 223, 0, 0.6)",
                }}
              >
                <span className="text-yellow-300 text-2xl">{item.icon}</span>
                <div>
                  <h4 className="font-semibold text-white text-base">{item.title}</h4>
                  <p className="text-gray-200 text-sm">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Image Section */}
        <motion.div
          className="flex-1 flex justify-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <img
            src={img}
            alt="Muhammad Obaidullah"
            className="w-56 h-52 sm:w-56 sm:h-72 md:w-72 md:h-[420px] lg:w-[450px] lg:h-[600px] object-cover rounded-2xl border-4 border-yellow-300 shadow-2xl hover:shadow-yellow-400/50 transition"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
