import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { SectionTitle } from './SectionTitle';
import { SocialLinks } from './SocialLinks';
import { useCyberMode } from '../hooks/useCyberMode';

export function Contact() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle');
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const { theme } = useCyberMode();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('sending');
    window.setTimeout(() => {
      setStatus('sent');
      window.setTimeout(() => setStatus('idle'), 4000);
    }, 2000);
  }

  const isCyber = theme === 'cyber';

  return (
    <section id="contact" className="scroll-mt-28 px-4 pb-28 pt-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow={isCyber ? "ENCRYPTED CHANNEL — 07" : "07 — LET'S TALK"}
          title={isCyber ? "Transmit Data" : "Contact"}
          subtitle={isCyber ? "Establishing secure connection for incoming transmissions." : "Fast responses on WhatsApp, socials, or through the form below."}
        />
        <div className="grid gap-12 lg:grid-cols-2">
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <form
              onSubmit={handleSubmit}
              className={`glass-strong space-y-6 rounded-3xl p-8 sm:p-10 border transition-colors duration-500 ${
                isCyber ? 'border-emerald-500/20' : 'border-white/10'
              }`}
            >
              {isCyber && (
                <div className="flex items-center gap-2 mb-6">
                  <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="font-mono text-[10px] text-emerald-400 tracking-widest uppercase">Encryption: AES-256 Enabled</span>
                </div>
              )}
              
              <div className="space-y-2">
                <label htmlFor="name" className="block text-xs font-mono uppercase tracking-wider text-slate-400">
                  {isCyber ? "Sender ID / Name" : "Name"}
                </label>
                <input
                  id="name"
                  required
                  value={form.name}
                  onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-slate-100 outline-none transition-all focus:border-[var(--cyber-primary)]/50 focus:ring-2 focus:ring-[var(--cyber-primary)]/10"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="block text-xs font-mono uppercase tracking-wider text-slate-400">
                  {isCyber ? "Response Node / Email" : "Email"}
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-slate-100 outline-none transition-all focus:border-[var(--cyber-primary)]/50 focus:ring-2 focus:ring-[var(--cyber-primary)]/10"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="block text-xs font-mono uppercase tracking-wider text-slate-400">
                  {isCyber ? "Payload / Message" : "Message"}
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                  className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-slate-100 outline-none transition-all focus:border-[var(--cyber-primary)]/50 focus:ring-2 focus:ring-[var(--cyber-primary)]/10"
                />
              </div>

              <motion.button
                type="submit"
                disabled={status !== 'idle'}
                className="w-full rounded-xl bg-gradient-to-r from-[var(--cyber-primary)] to-[var(--cyber-secondary)] py-3.5 text-sm font-bold text-slate-950 shadow-lg transition-all disabled:opacity-50"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {status === 'idle' && (isCyber ? "INITIALIZE TRANSMISSION" : "Send Message")}
                {status === 'sending' && "ENCRYPTING..."}
                {status === 'sent' && "TRANSMISSION COMPLETE"}
              </motion.button>
            </form>

            <AnimatePresence>
              {isCyber && status === 'sending' && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 z-10 flex items-center justify-center rounded-3xl bg-slate-950/40 backdrop-blur-sm"
                >
                   <div className="h-12 w-12 rounded-full border-2 border-emerald-500 border-t-transparent animate-spin" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          <motion.div
            className="flex flex-col justify-center gap-8 lg:pl-12"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <div>
               <h4 className="font-mono text-sm font-bold text-white uppercase tracking-[0.2em] mb-4">Direct Access</h4>
               <p className="text-slate-400 leading-relaxed mb-6">
                {isCyber 
                  ? "Manual override protocols for direct communication via established nodes."
                  : "Connect with me through these social channels — response time is usually under 24 hours."}
              </p>
              <SocialLinks variant="contact" />
            </div>
            
            {isCyber && (
              <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-6 font-mono">
                <p className="text-[10px] text-emerald-400/70 mb-2">NETWORK_LOG.txt</p>
                <div className="space-y-1 text-[9px] text-emerald-500/50">
                  <p>{">"} Establishing secure tunnel...</p>
                  <p>{">"} PING 127.0.0.1: [OK]</p>
                  <p>{">"} SOCKET: CONNECTED</p>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
