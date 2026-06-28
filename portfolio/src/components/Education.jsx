import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Section from './Section';
import { SectionTitle } from './About';
import { education } from '../data';

const Education = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <Section id="education" className="py-24 lg:py-32">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute right-1/4 top-1/4 w-64 h-64 opacity-5 rounded-full blur-3xl"
          style={{ background: 'radial-gradient(#00d4ff, transparent)' }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative" ref={ref}>
        <SectionTitle label="My Background" title="Education" />

        <div className="max-w-3xl mx-auto relative">
          {/* Vertical timeline line */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={inView ? { scaleY: 1 } : {}}
            transition={{ duration: 1.2, ease: 'easeOut' }}
            className="absolute left-6 top-8 bottom-8 w-px origin-top timeline-line"
          />

          <div className="space-y-10">
            {education.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -40 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.2, duration: 0.6 }}
                className="relative pl-20"
              >
                {/* Timeline dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={inView ? { scale: 1 } : {}}
                  transition={{ delay: 0.4 + i * 0.2, type: 'spring', stiffness: 200 }}
                  className="absolute left-0 top-6 w-12 h-12 flex items-center justify-center"
                >
                  {/* Outer glow ring */}
                  <div
                    className="absolute inset-0 rounded-full animate-pulse-slow"
                    style={{
                      background: item.current
                        ? 'rgba(0, 212, 255, 0.15)'
                        : 'rgba(155, 89, 255, 0.1)',
                    }}
                  />
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-xl glass"
                    style={{
                      border: `1px solid ${item.current ? 'rgba(0,212,255,0.4)' : 'rgba(155,89,255,0.3)'}`,
                    }}
                  >
                    {item.icon}
                  </div>
                </motion.div>

                {/* Card */}
                <motion.div
                  whileHover={{ x: 6, scale: 1.01 }}
                  className="glass rounded p-6 border border-white/5 hover:border-cyan-400/15 transition-all duration-300 cursor-default"
                >
                  {/* Top row */}
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                    <div>
                      <h3 className="font-display font-bold text-white text-base tracking-wide mb-0.5">
                        {item.institution}
                      </h3>
                      <p className="font-body text-white/60 text-sm">{item.degree}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      {item.current && (
                        <span className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono"
                          style={{ background: 'rgba(0,212,255,0.1)', border: '1px solid rgba(0,212,255,0.2)', color: '#00d4ff' }}>
                          <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                          Current
                        </span>
                      )}
                      <span className="font-mono text-xs text-white/30 px-3 py-1 rounded glass border border-white/5">
                        {item.period}
                      </span>
                    </div>
                  </div>

                  {/* Details */}
                  <p className="font-mono text-xs text-white/40">{item.details}</p>

                  {/* Bottom accent line */}
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={inView ? { scaleX: 1 } : {}}
                    transition={{ delay: 0.6 + i * 0.2, duration: 0.8 }}
                    className="mt-4 h-px origin-left"
                    style={{
                      background: item.current
                        ? 'linear-gradient(90deg, rgba(0,212,255,0.4), transparent)'
                        : 'linear-gradient(90deg, rgba(155,89,255,0.3), transparent)',
                    }}
                  />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Education;
