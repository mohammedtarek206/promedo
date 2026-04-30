import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCyberMode } from '../hooks/useCyberMode';

const SCAN_MESSAGES = [
  'SCANNING NETWORK TRAFFIC...',
  'FIREWALL STATUS: ACTIVE',
  'INTRUSION DETECTION: MONITORING',
  'ENCRYPTION LAYER: AES-256',
  'DDoS PROTECTION: ARMED',
  'PENTESTING MODE: ENABLED',
];

export function CyberScanner() {
  const { theme } = useCyberMode();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % SCAN_MESSAGES.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  if (theme !== 'cyber') return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed top-16 left-0 right-0 z-40 bg-emerald-500/10 border-b border-emerald-500/20 py-1.5 backdrop-blur-md"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="font-mono text-[10px] font-bold text-emerald-400 tracking-widest uppercase">
            System Security Status
          </span>
        </div>
        
        <AnimatePresence mode="wait">
          <motion.span
            key={index}
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            className="font-mono text-[9px] text-emerald-300/80"
          >
            {SCAN_MESSAGES[index]}
          </motion.span>
        </AnimatePresence>

        <div className="hidden sm:flex items-center gap-4 font-mono text-[9px] text-emerald-500/50">
          <span>Lat: 24ms</span>
          <span>Enc: OPSEC-1</span>
        </div>
      </div>
    </motion.div>
  );
}
