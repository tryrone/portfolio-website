import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { socialLinks } from "../constants";

const TITLES = [
  "Full-Stack Engineer",
  "Mobile Architect",
  "Backend Developer",
  "React Native Expert",
  "Tech Lead",
];

const useTypewriter = (words, typingSpeed = 80, deletingSpeed = 40, pauseTime = 2000) => {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    let timeout;

    if (!isDeleting && text === currentWord) {
      timeout = setTimeout(() => setIsDeleting(true), pauseTime);
    } else if (isDeleting && text === "") {
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length);
    } else {
      timeout = setTimeout(
        () => {
          setText(
            isDeleting
              ? currentWord.substring(0, text.length - 1)
              : currentWord.substring(0, text.length + 1)
          );
        },
        isDeleting ? deletingSpeed : typingSpeed
      );
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, pauseTime]);

  return text;
};

const AnimatedCounter = ({ target, suffix = "", duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const startTime = Date.now();
          const animate = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * target));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, duration, hasAnimated]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
};

const Hero = () => {
  const typedText = useTypewriter(TITLES);

  return (
    <>
      <div className="grain-overlay"></div>
      <main className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-24 pb-20 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 hero-glow -z-10"></div>
        <div className="absolute inset-0 grid-bg-hero -z-10"></div>

        {/* Decorative floating elements */}
        <div className="absolute top-32 left-[10%] w-2 h-2 bg-primary/30 rounded-full animate-float hidden lg:block"></div>
        <div className="absolute top-48 right-[15%] w-1.5 h-1.5 bg-primary/20 rounded-full animate-float hidden lg:block" style={{ animationDelay: "2s" }}></div>
        <div className="absolute bottom-40 left-[20%] w-1 h-1 bg-white/10 rounded-full animate-float hidden lg:block" style={{ animationDelay: "4s" }}></div>

        <div className="max-w-5xl w-full text-center relative z-10">
          {/* Profile Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="mx-auto mb-8 w-24 h-24 rounded-full overflow-hidden border-2 border-white/10 shadow-glow"
          >
            <img
              src="https://media.licdn.com/dms/image/v2/D4D03AQEY0bh3MTXvHg/profile-displayphoto-scale_400_400/B4DZsiZFGhJAAk-/0/1765808567689?e=1776297600&v=beta&t=rF5Ehuj251T0lVdaMgFj46aqrGN4xvYZ3RcMoQyMB9c"
              alt="Tega Oboraruvwe"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-sm mb-10"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
            </span>
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/50">
              Building What's Next
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-display font-bold tracking-tight leading-[0.95] mb-6">
              <span className="text-white">Hi, I'm </span>
              <span className="text-gradient-primary">Tega</span>
            </h1>
          </motion.div>

          {/* Typewriter Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mb-8"
          >
            <div className="text-xl sm:text-2xl lg:text-3xl font-display font-medium text-white/60 h-10">
              {typedText}
              <span className="typewriter-cursor"></span>
            </div>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-base sm:text-lg text-white/35 max-w-2xl mx-auto mb-12 leading-relaxed font-medium"
          >
            Senior Software Engineer with 8+ years building scalable web and mobile 
            applications. From fintech to e-commerce, I architect solutions that 
            handle millions of transactions.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20"
          >
            <a
              href="#projects"
              className="btn-primary px-8 py-3.5 text-sm font-bold tracking-wide flex items-center gap-2"
            >
              View My Work
              <span className="material-symbols-outlined text-lg">arrow_forward</span>
            </a>
            <a
              href="#contact"
              className="btn-outline px-8 py-3.5 text-sm font-bold tracking-wide flex items-center gap-2"
            >
              Get In Touch
              <span className="material-symbols-outlined text-lg">mail</span>
            </a>
          </motion.div>

          {/* Stats Row */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="flex flex-wrap items-center justify-center gap-8 sm:gap-16"
          >
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-display font-black text-white">
                <AnimatedCounter target={8} suffix="+" />
              </div>
              <div className="text-[10px] font-bold text-white/25 uppercase tracking-[0.2em] mt-1">
                Years Exp
              </div>
            </div>
            <div className="w-px h-10 bg-white/10 hidden sm:block"></div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-display font-black text-white">
                <AnimatedCounter target={120} suffix="+" />
              </div>
              <div className="text-[10px] font-bold text-white/25 uppercase tracking-[0.2em] mt-1">
                Projects
              </div>
            </div>
            <div className="w-px h-10 bg-white/10 hidden sm:block"></div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-display font-black text-white">
                <AnimatedCounter target={12} suffix="+" />
              </div>
              <div className="text-[10px] font-bold text-white/25 uppercase tracking-[0.2em] mt-1">
                Companies
              </div>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="flex items-center justify-center gap-3 mt-12"
          >
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/30 hover:text-primary hover:border-primary/30 transition-all duration-300"
              aria-label="GitHub"
            >
              <span className="material-symbols-outlined text-lg">code</span>
            </a>
            <a
              href={socialLinks.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/30 hover:text-primary hover:border-primary/30 transition-all duration-300"
              aria-label="Twitter/X"
            >
              <span className="material-symbols-outlined text-lg">tag</span>
            </a>
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/30 hover:text-primary hover:border-primary/30 transition-all duration-300"
              aria-label="LinkedIn"
            >
              <span className="material-symbols-outlined text-lg">person</span>
            </a>
            <a
              href={`mailto:${socialLinks.email}`}
              className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/30 hover:text-primary hover:border-primary/30 transition-all duration-300"
              aria-label="Email"
            >
              <span className="material-symbols-outlined text-lg">mail</span>
            </a>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
        >
          <span className="text-[9px] uppercase tracking-[0.6em] font-semibold text-white/50">
            Scroll
          </span>
          <div className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center p-1">
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              className="w-1 h-1.5 bg-white/40 rounded-full"
            />
          </div>
        </motion.div>
      </main>
    </>
  );
};

export default Hero;
