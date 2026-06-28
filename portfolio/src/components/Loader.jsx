import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

const Loader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState(0);
  const phases = ['Initializing...', 'Loading Assets...', 'Compiling...', 'Ready'];

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 400);
          return 100;
        }
        return prev + Math.random() * 4 + 1;
      });
    }, 40);
    return () => clearInterval(interval);
  }, [onComplete]);

  useEffect(() => {
    if (progress < 30) setPhase(0);
    else if (progress < 60) setPhase(1);
    else if (progress < 90) setPhase(2);
    else setPhase(3);
  }, [progress]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center"
      style={{ background: '#020209' }}
      exit={{ opacity: 0, scale: 1.1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Animated logo */}
      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: 'spring', stiffness: 200, damping: 20 }}
        className="mb-10"
      >
        <div className="relative w-24 h-24">
          <div className="absolute inset-0 rounded-full border-2 border-cyan-400/30 animate-spin-slow" />
          <div className="absolute inset-2 rounded-full border border-purple-500/40" style={{ animation: 'spin 8s linear infinite reverse' }} />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-display text-4xl font-black gradient-text">IA</span>
          </div>
        </div>
      </motion.div>

      {/* Name */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="font-display text-2xl font-bold text-white mb-2 tracking-widest"
      >
        ISURU ADIKARI
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="font-mono text-xs text-cyan-400/70 tracking-widest mb-12"
      >
        IT UNDERGRADUATE / SOFTWARE DEVELOPER
      </motion.p>

      {/* Progress bar */}
      <div className="w-64 relative">
        <div className="flex justify-between mb-2">
          <motion.span
            key={phase}
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-mono text-xs text-cyan-400/60"
          >
            {phases[phase]}
          </motion.span>
          <span className="font-mono text-xs text-purple-400/60">{Math.min(Math.floor(progress), 100)}%</span>
        </div>

        <div className="h-1 bg-white/5 rounded-full overflow-hidden">
          <motion.div
            className="h-full rounded-full"
            style={{
              width: `${Math.min(progress, 100)}%`,
              background: 'linear-gradient(90deg, #00d4ff, #9b59ff, #ff2d78)',
            }}
            initial={{ width: '0%' }}
          />
        </div>

        {/* Scanning line effect */}
        <div
          className="absolute top-0 left-0 h-1 w-10 blur-sm opacity-80"
          style={{
            background: 'linear-gradient(90deg, transparent, #00d4ff, transparent)',
            left: `${Math.min(progress, 100)}%`,
            transform: 'translateX(-50%)',
            top: '18px',
          }}
        />
      </div>

      {/* Grid background */}
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
    </motion.div>
  );
};

export default Loader;
