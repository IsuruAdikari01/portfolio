import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Section from './Section';
import { SectionTitle } from './About';
import { skillCategories, techBadges, softSkills } from '../data';

const SkillBar = ({ name, level, color, inView, delay }) => (
  <div className="mb-4">
    <div className="flex justify-between mb-2">
      <span className="font-body text-sm text-white/70">{name}</span>
      <span className="font-mono text-xs" style={{ color }}>{level}%</span>
    </div>
    <div className="h-1.5 bg-white/5 rounded-full overflow-hidden relative">
      <motion.div
        initial={{ width: 0 }}
        animate={inView ? { width: `${level}%` } : { width: 0 }}
        transition={{ duration: 1.3, delay, ease: [0.16, 1, 0.3, 1] }}
        className="h-full rounded-full relative"
        style={{ background: `linear-gradient(90deg, ${color}, ${color}aa)` }}
      >
        <div
          className="absolute right-0 top-0 w-3 h-full blur-sm"
          style={{ background: color }}
        />
      </motion.div>
    </div>
  </div>
);

const Skills = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <Section id="skills" className="py-24 lg:py-32">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute right-0 top-1/2 w-80 h-80 opacity-5 rounded-full blur-3xl"
          style={{ background: 'radial-gradient(#9b59ff, transparent)' }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative" ref={ref}>
        <SectionTitle label="What I Know" title="Technical Skills" />

        {/* Skill categories */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {skillCategories.map((cat, ci) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: ci * 0.1 }}
              className="glass rounded p-6 border border-white/5 hover:border-white/10 transition-all duration-300 scanline"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl">{cat.icon}</span>
                <div>
                  <h3 className="font-display text-sm font-bold text-white tracking-wider">{cat.category}</h3>
                  <div className="w-8 h-0.5 mt-1" style={{ background: cat.color }} />
                </div>
              </div>

              <div>
                {cat.skills.map((skill, si) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    color={cat.color}
                    inView={inView}
                    delay={0.3 + ci * 0.1 + si * 0.07}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech badge cloud */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          className="mb-16"
        >
          <h3 className="font-display text-sm font-semibold text-white/40 tracking-[0.3em] uppercase mb-6 text-center">
            Technologies & Tools
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {techBadges.map((badge, i) => (
              <motion.span
                key={badge}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.5 + i * 0.04 }}
                whileHover={{ scale: 1.1, y: -4 }}
                className="skill-badge px-4 py-2 glass rounded border border-white/5 hover:border-cyan-400/30 font-mono text-xs text-white/60 hover:text-cyan-400 cursor-default transition-all duration-300"
              >
                {badge}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Soft skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7 }}
        >
          <h3 className="font-display text-sm font-semibold text-white/40 tracking-[0.3em] uppercase mb-6 text-center">
            Soft Skills
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {softSkills.map((skill, i) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.7 + i * 0.08 }}
                whileHover={{ scale: 1.05, y: -6 }}
                className="glass rounded p-4 border border-white/5 hover:border-purple-500/20 text-center transition-all duration-300 cursor-default"
              >
                <div className="text-2xl mb-2">{skill.icon}</div>
                <p className="font-body text-xs text-white/50">{skill.name}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </Section>
  );
};

export default Skills;
