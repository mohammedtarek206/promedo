import { useState } from 'react';
import { motion } from 'framer-motion';

export function SplashScreen({ onComplete }: { onComplete: () => void }) {
  const [status, setStatus] = useState<'locked' | 'scanning' | 'granted'>('locked');
  const [progress, setProgress] = useState(0);

  const startScan = () => {
    setStatus('scanning');
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(interval);
          setStatus('granted');
          setTimeout(onComplete, 800);
          return 100;
        }
        return p + 2;
      });
    }, 30);
  };

  return (
    <motion.div
      exit={{ opacity: 0, scale: 1.1 }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#030712] font-mono"
    >
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-20" 
           style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #10b981 1px, transparent 0)', backgroundSize: '40px 40px' }} />

      <motion.div 
        className="relative z-10 flex flex-col items-center text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="mb-8 rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-2">
          <span className="animate-pulse text-xs font-bold tracking-[0.3em] text-red-500">
            {status === 'granted' ? 'ACCESS GRANTED' : 'RESTRICTED AREA'}
          </span>
        </div>

        <h1 className="mb-12 text-2xl font-bold tracking-tighter text-white sm:text-4xl">
          {status === 'granted' ? 'IDENTITY VERIFIED' : 'BIOMETRIC AUTHENTICATION'}
        </h1>

        <div className="relative mb-12">
          {/* Fingerprint Icon Container */}
          <motion.button
            onMouseDown={startScan}
            onTouchStart={startScan}
            className={`group relative flex h-32 w-32 items-center justify-center rounded-full border-2 transition-colors duration-500 ${
              status === 'scanning' ? 'border-emerald-500' : 'border-white/20 hover:border-white/40'
            }`}
          >
            <svg 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="1" 
              className={`h-16 w-16 transition-colors duration-500 ${status === 'scanning' ? 'text-emerald-500' : 'text-white/40'}`}
            >
              <path d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.005-4.668A10.039 10.039 0 0 1 3 12c0-5.523 4.477-10 10-10s10 4.477 10 10a9.985 9.985 0 0 1-2.247 6.325m-3.005-4.668A10.039 10.039 0 0 1 15 12c0-1.657-1.343-3-3-3s-3 1.343-3 3c0 .599.176 1.157.479 1.624" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>

            {/* Scanning Line */}
            {status === 'scanning' && (
              <motion.div
                className="absolute inset-x-0 top-0 h-1 bg-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.8)]"
                animate={{ top: ['0%', '100%', '0%'] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
              />
            )}
          </motion.button>
          
          <p className="mt-4 text-[10px] text-slate-500 uppercase tracking-widest">
            {status === 'locked' ? 'Press and hold to scan' : status === 'scanning' ? 'Scanning...' : 'Complete'}
          </p>
        </div>

        {/* Progress Bar */}
        <div className="w-64 h-1 bg-white/5 rounded-full overflow-hidden">
          <motion.div 
            className="h-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
          />
        </div>

        <div className="mt-20 space-y-2 text-[8px] text-emerald-500/40 uppercase tracking-widest">
          <p>Local IP: 192.168.1.104</p>
          <p>System: Cyber Portfolio OS</p>
          <p>Encryption: AES-256</p>
        </div>
      </motion.div>
    </motion.div>
  );
}
