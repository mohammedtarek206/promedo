import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LOG_MESSAGES = [
  '[INFO] System Core Initialized',
  '[SCAN] Vulnerabilities: 0 Found',
  '[NET] Port 8080: Stealth Mode',
  '[WARN] Unauthorized access attempt blocked from 142.250.190.46',
  '[AUTH] Identity Verified: Mohammed Tarek',
  '[SYS] AES-256 Encryption Active',
  '[SCAN] Integrity Check: 100%',
  '[NET] Firewall rules updated',
  '[INFO] Red Team Toolkit Loaded',
];

export function SecurityHUD() {
  const [logs, setLogs] = useState<string[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const msg = LOG_MESSAGES[Math.floor(Math.random() * LOG_MESSAGES.length)];
      setLogs(prev => [...prev.slice(-4), msg]);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed top-24 left-6 z-[40] hidden xl:block w-64">
      <div className="rounded-lg border border-white/5 bg-slate-950/40 p-4 backdrop-blur-md">
        <div className="mb-2 flex items-center justify-between">
          <span className="font-mono text-[10px] text-emerald-500 uppercase font-bold tracking-widest">System Logs</span>
          <div className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
        </div>
        <div className="space-y-1 font-mono text-[9px] text-slate-500 uppercase">
          <AnimatePresence initial={false}>
            {logs.map((log, i) => (
              <motion.div
                key={log + i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="overflow-hidden whitespace-nowrap"
              >
                {log}
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
