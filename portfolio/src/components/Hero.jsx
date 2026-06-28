import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload } from 'react-icons/fa';
import { HiLocationMarker } from 'react-icons/hi';
import { personalInfo } from '../data';
import profileImage from '../assets/profile.jpg';

const roles = ["IT Undergraduate", "Software Developer", "MERN Stack Engineer", "Problem Solver"];

const TypingText = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout;

    if (!deleting && charIndex < current.length) {
      timeout = setTimeout(() => setCharIndex(c => c + 1), 80);
    } else if (!deleting && charIndex === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && charIndex > 0) {
      timeout = setTimeout(() => setCharIndex(c => c - 1), 40);
    } else if (deleting && charIndex === 0) {
      setDeleting(false);
      setRoleIndex(i => (i + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, roleIndex]);

  return (
    <span className="text-cyan-400 typing-cursor">
      {roles[roleIndex].slice(0, charIndex)}
    </span>
  );
};


const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-10 blur-3xl animate-float"
        style={{ background: 'radial-gradient(circle, #00d4ff, transparent)' }} />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full opacity-10 blur-3xl"
        style={{ background: 'radial-gradient(circle, #9b59ff, transparent)', animation: 'float 8s ease-in-out infinite reverse' }} />
      <div className="absolute top-1/2 left-1/2 w-64 h-64 rounded-full opacity-5 blur-3xl"
        style={{ background: 'radial-gradient(circle, #ff2d78, transparent)', animation: 'float 10s ease-in-out infinite' }} />

      {/* Grid bg */}
      <div className="absolute inset-0 grid-bg opacity-40" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 lg:py-0 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left: Text content */}
        <div>
          {/* Status badge */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 mb-6 px-4 py-2 glass rounded-full border border-cyan-400/20"
          >
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="font-mono text-xs text-white/60 tracking-widest">AVAILABLE FOR WORK</span>
          </motion.div>

          {/* Name */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <p className="font-mono text-cyan-400/70 text-sm tracking-[0.3em] uppercase mb-3">Hello, I'm</p>
            <h1 className="font-display font-black text-white leading-none">
              <span className="block text-4xl sm:text-5xl lg:text-6xl xl:text-7xl mb-1">ISURU</span>
              <span className="block text-4xl sm:text-5xl lg:text-6xl xl:text-7xl gradient-text">ADIKARI</span>
            </h1>
          </motion.div>

          {/* Typing role */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex items-center gap-3 mt-4 mb-6"
          >
            <div className="w-8 h-px" style={{ background: '#00d4ff' }} />
            <p className="font-body text-lg sm:text-xl text-white/70">
              <TypingText />
            </p>
          </motion.div>

          {/* Location */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="flex items-center gap-2 mb-8 text-white/40"
          >
            <HiLocationMarker size={14} className="text-cyan-400" />
            <span className="font-mono text-xs tracking-widest">{personalInfo.location}</span>
          </motion.div>

          {/* Summary */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="font-body text-white/60 text-base leading-relaxed max-w-lg mb-10"
          >
            {personalInfo.summary}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="flex flex-wrap gap-4 mb-10"
          >
            <a
              href="mailto:isuruadikari2001@gmail.com"
              className="btn-primary text-white flex items-center gap-2"
            >
              <FaEnvelope size={14} />
              Contact Me
            </a>
            {/* Download CV removed per request */}
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="flex items-center gap-5"
          >
            {[
              { icon: FaGithub, href: personalInfo.github, label: 'GitHub' },
              { icon: FaLinkedin, href: personalInfo.linkedin, label: 'LinkedIn' },
              { icon: FaEnvelope, href: `mailto:${personalInfo.email}`, label: 'Email' },
            ].map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                whileHover={{ y: -4, scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 flex items-center justify-center glass rounded border border-white/5 hover:border-cyan-400/40 transition-all duration-300 text-white/50 hover:text-cyan-400"
                title={label}
              >
                <Icon size={16} />
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Right: Avatar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8, type: 'spring', stiffness: 100 }}
          className="flex justify-center items-center"
        >
          <div className="relative w-72 h-72 lg:w-96 lg:h-96">
            {/* Rotating rings */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-0 rounded-full border border-dashed border-cyan-400/15"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-4 rounded-full border border-dashed border-purple-500/15"
            />
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-8 rounded-full border border-dashed border-pink-500/10"
            />

            {/* Glow ring with avatar */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute inset-10 glow-ring"
            >
              <div className="w-full h-full rounded-full overflow-hidden">
                <img 
                  src={profileImage} 
                  alt="Profile" 
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            {/* Floating badges */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              className="absolute top-4 right-0 glass rounded px-3 py-1.5 border border-cyan-400/20"
            >
              <span className="font-mono text-xs text-cyan-400">MERN Stack</span>
            </motion.div>

            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="absolute bottom-8 left-0 glass rounded px-3 py-1.5 border border-purple-500/20"
            >
              <span className="font-mono text-xs text-purple-400">3rd Year SLIIT</span>
            </motion.div>

            <motion.div
              animate={{ x: [0, 6, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.7 }}
              className="absolute bottom-20 right-2 glass rounded px-3 py-1.5 border border-pink-500/20"
            >
              <span className="font-mono text-xs text-pink-400">Open Source</span>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-mono text-xs text-white/30 tracking-widest">SCROLL</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-px h-8 bg-gradient-to-b from-cyan-400/60 to-transparent"
        />
      </motion.div>
    </section>
  );
};

export default Hero;
