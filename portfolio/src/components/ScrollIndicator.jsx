import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiArrowUp } from 'react-icons/hi';

const ScrollIndicator = () => {
  const [progress, setProgress] = useState(0);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const el = document.documentElement;
      const scrollTop = el.scrollTop || document.body.scrollTop;
      const scrollHeight = el.scrollHeight - el.clientHeight;
      const pct = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
      setProgress(pct);
      setShowTop(scrollTop > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Progress bar */}
      <div className="scroll-progress" style={{ width: `${progress}%` }} />

      {/* Back to top */}
      <AnimatePresence>
        {showTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0, y: 20 }}
            whileHover={{ scale: 1.1, y: -4 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-40 w-11 h-11 flex items-center justify-center glass rounded"
            style={{ border: '1px solid rgba(0, 212, 255, 0.3)' }}
          >
            <HiArrowUp className="text-cyan-400" size={18} />
            <div className="absolute inset-0 rounded opacity-0 hover:opacity-100 transition-opacity"
              style={{ background: 'rgba(0, 212, 255, 0.1)' }} />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
};

export default ScrollIndicator;
