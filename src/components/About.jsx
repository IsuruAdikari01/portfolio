import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';
import { HiLocationMarker } from 'react-icons/hi';
import Section from './Section';
import { personalInfo, languages } from '../data';

const SectionTitle = ({ label, title }) => (
  <div className="mb-16">
    <motion.p
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="font-mono text-xs text-cyan-400/70 tracking-[0.4em] uppercase mb-3"
    >
      {label}
    </motion.p>
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.1 }}
      className="font-display font-bold text-3xl sm:text-4xl text-white"
    >
      {title}
      <span className="text-cyan-400">.</span>
    </motion.h2>
    <motion.div
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.2, duration: 0.6 }}
      className="mt-4 w-20 h-0.5 origin-left"
      style={{ background: 'linear-gradient(90deg, #00d4ff, transparent)' }}
    />
  </div>
);

export { SectionTitle };

const About = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const stats = [
    { value: '3+', label: 'Years of Coding' },
    { value: '5+', label: 'Projects Built' },
    { value: '10+', label: 'Technologies' },
    { value: '2025', label: 'Expected Grad' },
  ];

  return (
    <Section id="about" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        <SectionTitle label="Who I Am" title="About Me" />

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="font-body text-white/60 text-base leading-relaxed mb-6"
            >
              {personalInfo.summary}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="font-body text-white/50 text-base leading-relaxed mb-10"
            >
              I enjoy crafting full-stack solutions from front-end interfaces to back-end APIs,
              with a keen eye for clean code and excellent user experiences. Currently building
              real-world projects using the MERN stack and expanding into mobile development with Kotlin.
            </motion.p>

            {/* Contact info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="space-y-3 mb-10"
            >
              {[
                { icon: FaEnvelope, label: personalInfo.email, href: `mailto:${personalInfo.email}` },
                { icon: FaPhone, label: personalInfo.phone, href: `tel:${personalInfo.phone}` },
                { icon: HiLocationMarker, label: personalInfo.location, href: '#' },
                { icon: FaGithub, label: 'IsuruAdikari01', href: personalInfo.github },
                { icon: FaLinkedin, label: 'isuru-adikari', href: personalInfo.linkedin },
              ].map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel="noreferrer"
                  className="flex items-center gap-3 text-white/50 hover:text-cyan-400 transition-colors group"
                >
                  <Icon size={13} className="text-cyan-400/60 group-hover:text-cyan-400 transition-colors" />
                  <span className="font-mono text-sm">{label}</span>
                </a>
              ))}
            </motion.div>
          </div>

          {/* Right: Stats + languages */}
          <div>
            {/* Stats grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="grid grid-cols-2 gap-4 mb-10"
            >
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  whileHover={{ scale: 1.03, y: -4 }}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="glass rounded p-5 border border-white/5 hover:border-cyan-400/20 transition-all duration-300 text-center"
                >
                  <div className="font-display text-3xl font-black gradient-text mb-1">{s.value}</div>
                  <div className="font-body text-xs text-white/40 tracking-wider uppercase">{s.label}</div>
                </motion.div>
              ))}
            </motion.div>

            {/* Languages */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 }}
              className="glass rounded p-6 border border-white/5"
            >
              <h3 className="font-display text-sm font-semibold text-white/70 tracking-widest uppercase mb-5">Languages</h3>
              <div className="space-y-4">
                {languages.map((lang, i) => (
                  <div key={lang.name}>
                    <div className="flex justify-between mb-2">
                      <span className="font-body text-sm text-white/70">{lang.name}</span>
                      <span className="font-mono text-xs" style={{ color: lang.color }}>{lang.level}</span>
                    </div>
                    <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${lang.pct}%` } : { width: 0 }}
                        transition={{ duration: 1.2, delay: 0.6 + i * 0.1, ease: 'easeOut' }}
                        className="h-full rounded-full"
                        style={{ background: `linear-gradient(90deg, ${lang.color}, ${lang.color}88)` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;
