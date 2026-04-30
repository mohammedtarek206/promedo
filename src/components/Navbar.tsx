import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { useCyberMode } from '../hooks/useCyberMode';
import { sounds } from '../utils/sounds';

const links = [
  { href: '#about', label: 'About' },
  { href: '#leadership', label: 'Leadership' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const { theme, toggleTheme } = useCyberMode();

  return (
    <motion.header
      className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-cyber-bg/75 backdrop-blur-xl"
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href="#" className="group flex items-center gap-2 font-semibold tracking-tight text-white">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-[var(--cyber-primary)]/20 to-[var(--cyber-secondary)]/20 ring-1 ring-[var(--cyber-primary)]/30 transition group-hover:shadow-neon-sm">
            <span className="font-mono text-sm text-[var(--cyber-primary)]">MT</span>
          </span>
          <span className="hidden sm:inline">Mohammed Tarek</span>
        </a>
        
        <div className="flex items-center gap-4 lg:gap-8">
          <ul className="hidden items-center gap-1 md:flex">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="rounded-lg px-3 py-2 text-sm text-slate-400 transition hover:bg-white/5 hover:text-[var(--cyber-primary)]"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <button
            onClick={() => {
              toggleTheme();
              sounds.playBeep(theme === 'cyber' ? 440 : 880, 0.1, 0.05);
            }}
            className={`group relative flex h-9 w-20 items-center rounded-full p-1 transition-colors duration-500 ${
              theme === 'cyber' ? 'bg-emerald-500/20' : 'bg-cyan-500/20'
            } border border-white/10`}
          >
            <motion.div
              layout
              className={`h-7 w-7 rounded-full shadow-lg flex items-center justify-center ${
                theme === 'cyber' ? 'bg-emerald-500 shadow-emerald-500/40' : 'bg-cyan-500 shadow-cyan-500/40'
              }`}
            >
              <span className="text-[10px] text-white">
                {theme === 'cyber' ? 'H' : 'D'}
              </span>
            </motion.div>
            <span className="ml-2 text-[8px] font-bold uppercase tracking-widest text-slate-400 group-hover:text-white transition-colors">
              {theme === 'cyber' ? 'Cyber' : 'Dev'}
            </span>
          </button>

          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 md:hidden"
            aria-label="Menu"
            onClick={() => setOpen((o) => !o)}
          >
            <span className="font-mono text-xs text-[var(--cyber-primary)]">{open ? '✕' : '≡'}</span>
          </button>
        </div>
      </nav>
      {open ? (
        <motion.div
          className="border-t border-white/5 bg-cyber-bg/95 px-4 py-4 md:hidden"
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
        >
          <ul className="flex flex-col gap-1">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="block rounded-lg px-3 py-2 text-slate-300 hover:bg-white/5 hover:text-[var(--cyber-primary)]"
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      ) : null}
    </motion.header>
  );
}
