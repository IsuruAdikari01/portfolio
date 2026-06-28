import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from 'react-icons/fa';
import { personalInfo } from '../data';

const Footer = () => {
  const scrollTo = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const links = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="relative z-10 border-t border-white/5">
      {/* Top gradient line */}
      <div className="h-px w-full" style={{ background: 'linear-gradient(90deg, transparent, #00d4ff40, #9b59ff40, transparent)' }} />

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid sm:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 relative rounded border border-cyan-400/30 flex items-center justify-center">
                <span className="font-display text-sm font-bold gradient-text">IA</span>
              </div>
              <span className="font-display text-sm font-semibold text-white/60 tracking-widest">ISURU.DEV</span>
            </div>
            <p className="font-body text-xs text-white/30 leading-relaxed max-w-48">
              IT Undergraduate & Software Developer building modern web solutions.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-display text-xs font-semibold text-white/40 tracking-widest uppercase mb-4">Quick Links</h4>
            <div className="grid grid-cols-2 gap-2">
              {links.map(link => (
                <button
                  key={link.label}
                  onClick={() => scrollTo(link.href)}
                  className="font-mono text-xs text-white/30 hover:text-cyan-400 transition-colors text-left"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Socials */}
          <div>
            <h4 className="font-display text-xs font-semibold text-white/40 tracking-widest uppercase mb-4">Connect</h4>
            <div className="flex gap-3">
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
                  whileHover={{ y: -3, scale: 1.1 }}
                  className="w-9 h-9 flex items-center justify-center glass rounded border border-white/5 hover:border-cyan-400/30 text-white/40 hover:text-cyan-400 transition-all duration-300"
                  title={label}
                >
                  <Icon size={14} />
                </motion.a>
              ))}
            </div>
            <p className="font-mono text-xs text-white/20 mt-4">{personalInfo.email}</p>
          </div>
        </div>

        {/* Bottom */}
        <div
          className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3"
          style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}
        >
          <p className="font-mono text-xs text-white/20">
            © {new Date().getFullYear()} Isuru Adikari. All rights reserved.
          </p>
          <p className="font-mono text-xs text-white/20 flex items-center gap-1.5">
            Made with <FaHeart className="text-pink-500" size={10} /> using React & Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
