import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import Section from './Section';
import { SectionTitle } from './About';
import { projects } from '../data';
import { PetCareSVG, CanteenSVG, HealthSVG, AdsSVG, TourSVG } from './ProjectSVGs';

const svgMap = {
  pet: PetCareSVG,
  canteen: CanteenSVG,
  health: HealthSVG,
  ads: AdsSVG,
  tour: TourSVG,
};

const ProjectCard = ({ project, index, inView }) => {
  const [hovered, setHovered] = useState(false);
  const SVGComponent = svgMap[project.svgScene];

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: 0.1 + index * 0.1, duration: 0.6, ease: 'easeOut' }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="project-card glass rounded border border-white/5 overflow-hidden group"
      style={{
        borderColor: hovered ? `${project.color}30` : 'rgba(255,255,255,0.05)',
        boxShadow: hovered ? `0 20px 60px ${project.accentColor}` : 'none',
      }}
    >
      {/* Project image/SVG */}
      <div className="relative overflow-hidden" style={{ height: '200px' }}>
        <div
          className="absolute inset-0 opacity-60"
          style={{ background: `linear-gradient(135deg, ${project.color}15, transparent)` }}
        />
        <SVGComponent />

        {/* Overlay on hover */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 flex items-center justify-center gap-4"
          style={{ background: 'rgba(2,2,9,0.75)', backdropFilter: 'blur(4px)' }}
        >
          <motion.a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-12 h-12 flex items-center justify-center rounded glass border transition-all duration-300"
            style={{ borderColor: `${project.color}50` }}
          >
            <FaGithub size={20} style={{ color: project.color }} />
          </motion.a>
          <motion.a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-12 h-12 flex items-center justify-center rounded glass border transition-all duration-300"
            style={{ borderColor: `${project.color}50` }}
          >
            <FaExternalLinkAlt size={18} style={{ color: project.color }} />
          </motion.a>
        </motion.div>

        {/* Project number */}
        <div className="absolute top-3 left-3">
          <span className="font-display text-xs font-bold opacity-40" style={{ color: project.color }}>
            0{project.id}
          </span>
        </div>

        {/* Icon badge */}
        <div
          className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center rounded glass text-sm"
          style={{ border: `1px solid ${project.color}30` }}
        >
          {project.icon}
        </div>
      </div>

      {/* Card content */}
      <div className="p-5">
        <h3 className="font-display font-bold text-white text-sm tracking-wide mb-2 group-hover:text-opacity-100 transition-colors"
          style={{ color: hovered ? project.color : 'white' }}>
          {project.title}
        </h3>
        <p className="font-body text-white/50 text-sm leading-relaxed mb-4 line-clamp-2">
          {project.description}
        </p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map(t => (
            <span
              key={t}
              className="px-2.5 py-1 font-mono text-xs rounded border transition-all duration-300"
              style={{
                borderColor: `${project.color}25`,
                color: `${project.color}cc`,
                background: `${project.color}08`,
              }}
            >
              {t}
            </span>
          ))}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-3 border-t border-white/5">
          <motion.a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            whileHover={{ x: 4 }}
            className="flex items-center gap-2 font-mono text-xs transition-colors"
            style={{ color: `${project.color}80` }}
          >
            <FaGithub size={12} />
            View Code
          </motion.a>
          <div
            className="w-6 h-px"
            style={{ background: `linear-gradient(90deg, transparent, ${project.color})` }}
          />
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <Section id="projects" className="py-24 lg:py-32">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute left-0 top-1/3 w-72 h-72 opacity-5 rounded-full blur-3xl"
          style={{ background: 'radial-gradient(#ff2d78, transparent)' }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative" ref={ref}>
        <SectionTitle label="What I've Built" title="Featured Projects" />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} inView={inView} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-14"
        >
          <p className="font-body text-white/40 text-sm mb-5">
            More projects available on GitHub
          </p>
          <motion.a
            href="https://github.com/IsuruAdikari01"
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 btn-secondary"
          >
            <FaGithub size={16} />
            View All on GitHub
          </motion.a>
        </motion.div>
      </div>
    </Section>
  );
};

export default Projects;
