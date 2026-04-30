import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCyberMode } from '../hooks/useCyberMode';
import { sounds } from '../utils/sounds';

interface HistoryItem {
  type: 'input' | 'output' | 'error';
  content: string;
}

export function Terminal() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<HistoryItem[]>([
    { type: 'output', content: 'RED TEAM OPERATIONAL CONSOLE v2.4.1' },
    { type: 'output', content: 'Authorized Access Only. Type "help" for protocols.' },
  ]);

  const { theme } = useCyberMode();
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) sounds.playSuccess();
  }, [isOpen]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history, isOpen]);

  const handleCommand = (cmd: string) => {
    const cleanCmd = cmd.toLowerCase().trim();
    setHistory(prev => [...prev, { type: 'input', content: cmd }]);
    sounds.playClick();
    setInput('');

    switch (cleanCmd) {
      case 'help':
        setHistory(prev => [...prev, { type: 'output', content: 'Protocols: help, skills, projects, whoami, clear, crack, hack, exit' }]);
        break;
      case 'whoami':
        setHistory(prev => [...prev, { type: 'output', content: 'Agent: Mohammed Tarek\nClearance: Level 5 (Red Team Lead)\nLocation: Hidden' }]);
        break;
      case 'skills':
        setHistory(prev => [...prev, { type: 'output', content: 'Offensive: Pentesting, SQLi, XSS, Social Engineering\nDefensive: Hardening, WAF, Incident Response' }]);
        break;
      case 'projects':
        setHistory(prev => [...prev, { type: 'output', content: 'Classified Projects:\n1. IT-SPARK (Security Audit)\n2. Arqam (Encrypted Backend)\n3. Cyber-Shield (Active Monitoring)' }]);
        break;
      case 'crack':
        setHistory(prev => [...prev, { type: 'output', content: 'INITIALIZING BRUTE FORCE ATTACK...' }]);
        let progress = 0;
        const interval = setInterval(() => {
          progress += 10;
          setHistory(prev => [...prev, { type: 'output', content: `[${'#'.repeat(progress/10)}${'.'.repeat(10-progress/10)}] ${progress}%` }]);
          sounds.playBeep(200 + progress * 5, 0.05, 0.02);
          if (progress >= 100) {
            clearInterval(interval);
            setHistory(prev => [...prev, { type: 'output', content: 'TARGET COMPROMISED. PASSWORD EXTRACTED.' }]);
            sounds.playSuccess();
          }
        }, 300);
        break;
      case 'hack':
        setHistory(prev => [...prev, { type: 'output', content: 'Bypassing Firewall... [OK]\nInjecting Payload... [OK]\nRoot Access Granted.' }]);
        break;
      case 'clear':
        setHistory([]);
        break;
      case 'exit':
        setIsOpen(false);
        break;
      default:
        setHistory(prev => [...prev, { type: 'error', content: `Unknown Protocol: ${cleanCmd}` }]);
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 z-[60] flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-slate-900 border border-red-500/50 text-red-500 shadow-2xl shadow-red-500/20 transition-transform hover:scale-110 active:scale-95"
        title="Cyber Console"
      >
        <span className="font-mono text-lg sm:text-xl">☠</span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed inset-x-4 bottom-20 top-20 z-[60] sm:inset-auto sm:bottom-24 sm:right-6 sm:h-[400px] sm:w-[500px] flex flex-col overflow-hidden rounded-xl border border-red-500/20 bg-slate-950/90 shadow-2xl backdrop-blur-2xl"
          >
            <div className="flex items-center justify-between border-b border-red-500/20 bg-red-500/5 px-4 py-2">
              <div className="flex gap-1.5">
                <div className="h-2.5 w-2.5 rounded-full bg-red-500" />
                <div className="h-2.5 w-2.5 rounded-full bg-red-500/50" />
              </div>
              <span className="font-mono text-[10px] text-red-500 uppercase tracking-widest font-bold">Red Team Console</span>
              <button onClick={() => setIsOpen(false)} className="h-8 w-8 flex items-center justify-center text-slate-500 hover:text-white transition-colors">✕</button>
            </div>

            <div 
              ref={scrollRef}
              className="flex-1 overflow-y-auto p-4 font-mono text-xs scrollbar-hide"
              onClick={() => inputRef.current?.focus()}
            >
              {history.map((item, i) => (
                <div key={i} className="mb-1">
                  {item.type === 'input' && (
                    <div className="flex gap-2">
                      <span className="text-red-500">root@cyber:~$</span>
                      <span className="text-white break-all">{item.content}</span>
                    </div>
                  )}
                  {item.type === 'output' && (
                    <div className="whitespace-pre-wrap text-slate-300">{item.content}</div>
                  )}
                  {item.type === 'error' && (
                    <div className="text-red-400">{item.content}</div>
                  )}
                </div>
              ))}
              
              <div className="flex gap-2">
                <span className="text-red-500 shrink-0">root@cyber:~$</span>
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleCommand(input)}
                  className="flex-1 bg-transparent text-white outline-none"
                  autoFocus
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
