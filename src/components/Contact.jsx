import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';
import { HiLocationMarker, HiPaperAirplane } from 'react-icons/hi';
import Section from './Section';
import { SectionTitle } from './About';
import { personalInfo } from '../data';

const Contact = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | sent

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');
    // Simulate send
    setTimeout(() => {
      setStatus('sent');
      setForm({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 4000);
    }, 1500);
  };

  const socials = [
    { icon: FaGithub, label: 'GitHub', href: personalInfo.github, color: '#00d4ff' },
    { icon: FaLinkedin, label: 'LinkedIn', href: personalInfo.linkedin, color: '#9b59ff' },
    { icon: FaEnvelope, label: 'Email', href: `mailto:${personalInfo.email}`, color: '#ff2d78' },
  ];

  const contactInfo = [
    { icon: FaEnvelope, label: 'Email', value: personalInfo.email, href: `mailto:${personalInfo.email}` },
    { icon: FaPhone, label: 'Phone', value: personalInfo.phone, href: `tel:${personalInfo.phone}` },
    { icon: HiLocationMarker, label: 'Location', value: personalInfo.location, href: '#' },
  ];

  return (
    <Section id="contact" className="py-24 lg:py-32">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute left-1/4 bottom-0 w-96 h-96 opacity-5 rounded-full blur-3xl"
          style={{ background: 'radial-gradient(#9b59ff, transparent)' }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative" ref={ref}>
        <SectionTitle label="Get In Touch" title="Contact Me" />

        <div className="grid lg:grid-cols-2 gap-14">
          {/* Left: info */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 }}
              className="font-body text-white/50 text-base leading-relaxed mb-10"
            >
              I'm currently open to new opportunities and collaborations. Whether you have a project in
              mind, a question, or just want to say hi — feel free to reach out!
            </motion.p>

            {/* Contact details */}
            <div className="space-y-5 mb-10">
              {contactInfo.map(({ icon: Icon, label, value, href }, i) => (
                <motion.a
                  key={label}
                  href={href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  whileHover={{ x: 6 }}
                  className="flex items-center gap-4 group"
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel="noreferrer"
                >
                  <div className="w-10 h-10 flex items-center justify-center glass rounded border border-white/5 group-hover:border-cyan-400/30 transition-all duration-300 shrink-0">
                    <Icon size={14} className="text-cyan-400/60 group-hover:text-cyan-400 transition-colors" />
                  </div>
                  <div>
                    <p className="font-mono text-xs text-white/30 tracking-widest uppercase">{label}</p>
                    <p className="font-body text-sm text-white/60 group-hover:text-white/80 transition-colors">{value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 }}
            >
              <p className="font-mono text-xs text-white/30 tracking-widest uppercase mb-4">Find me on</p>
              <div className="flex gap-3">
                {socials.map(({ icon: Icon, label, href, color }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ scale: 1.15, y: -4 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-11 h-11 flex items-center justify-center glass rounded border border-white/5 transition-all duration-300"
                    style={{ '--hover-color': color }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = `${color}50`; e.currentTarget.style.boxShadow = `0 8px 24px ${color}20`; }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)'; e.currentTarget.style.boxShadow = 'none'; }}
                    title={label}
                  >
                    <Icon size={16} style={{ color }} />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
          >
            <form onSubmit={handleSubmit} className="glass rounded p-8 border border-white/5 space-y-5">
              {/* Name + Email row */}
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { name: 'name', placeholder: 'Your Name', type: 'text' },
                  { name: 'email', placeholder: 'Your Email', type: 'email' },
                ].map((field) => (
                  <div key={field.name}>
                    <label className="font-mono text-xs text-white/30 tracking-widest uppercase block mb-2">
                      {field.name}
                    </label>
                    <input
                      type={field.type}
                      name={field.name}
                      value={form[field.name]}
                      onChange={handleChange}
                      placeholder={field.placeholder}
                      required
                      className="w-full bg-white/4 border border-white/8 rounded px-4 py-3 font-body text-sm text-white/80 placeholder-white/20 focus:outline-none focus:border-cyan-400/40 transition-colors duration-300"
                      style={{ background: 'rgba(255,255,255,0.04)' }}
                    />
                  </div>
                ))}
              </div>

              {/* Subject */}
              <div>
                <label className="font-mono text-xs text-white/30 tracking-widest uppercase block mb-2">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="What's this about?"
                  required
                  className="w-full border border-white/8 rounded px-4 py-3 font-body text-sm text-white/80 placeholder-white/20 focus:outline-none focus:border-cyan-400/40 transition-colors duration-300"
                  style={{ background: 'rgba(255,255,255,0.04)' }}
                />
              </div>

              {/* Message */}
              <div>
                <label className="font-mono text-xs text-white/30 tracking-widest uppercase block mb-2">Message</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  required
                  rows={5}
                  className="w-full border border-white/8 rounded px-4 py-3 font-body text-sm text-white/80 placeholder-white/20 focus:outline-none focus:border-cyan-400/40 transition-colors duration-300 resize-none"
                  style={{ background: 'rgba(255,255,255,0.04)' }}
                />
              </div>

              {/* Submit */}
              <motion.button
                type="submit"
                disabled={status !== 'idle'}
                whileHover={status === 'idle' ? { scale: 1.02, y: -2 } : {}}
                whileTap={status === 'idle' ? { scale: 0.97 } : {}}
                className="w-full btn-primary text-white flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === 'idle' && (
                  <>
                    <HiPaperAirplane size={16} />
                    Send Message
                  </>
                )}
                {status === 'sending' && (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 0.8, repeat: Infinity, ease: 'linear' }}
                      className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                    />
                    Sending...
                  </>
                )}
                {status === 'sent' && (
                  <>
                    <span>✅</span>
                    Message Sent!
                  </>
                )}
              </motion.button>

              {status === 'sent' && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="font-mono text-xs text-green-400 text-center"
                >
                  Thanks! I'll get back to you shortly.
                </motion.p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
