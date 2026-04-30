import { motion } from 'framer-motion';
import { SectionTitle } from './SectionTitle';
import { ThreatMap } from './ThreatMap';

const points = [
  'Deep passion for offensive security practice and resilient full stack engineering — bridging secure backends with polished interfaces.',
  'Hands-on experience shipping secure, scalable web systems — from architecture and hardening to performance and UX.',
  'Proven leadership in tech communities — mentoring peers, coordinating programs, and growing engaged developer ecosystems.',
];

export function About() {
  return (
    <section id="about" className="scroll-mt-28 px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="01 — PROFILE"
          title="About me"
          subtitle="A concise lens on how I work, learn, and lead in security-focused product delivery."
        />
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <motion.div
            className="glass-strong relative overflow-hidden rounded-3xl p-8 sm:p-10"
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-cyan-500/10 blur-3xl" />
            <p className="relative text-lg leading-relaxed text-slate-300 font-medium">
              I architect and ship software with a security-first mindset — whether that means
              red-team exercises, secure SDLC habits, or full stack features that hold up under
              real traffic and real adversaries.
            </p>
            <ul className="relative mt-8 space-y-5">
              {points.map((p, i) => (
                <motion.li
                  key={i}
                  className="flex gap-4 text-slate-400"
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.08 * i, duration: 0.45 }}
                >
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-gradient-to-r from-cyan-400 to-emerald-400 shadow-neon-sm" />
                  <span className="text-sm leading-relaxed">{p}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          
          <div className="flex flex-col gap-8">
            <motion.div
              className="glass-strong rounded-3xl p-6 border border-white/5"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <h4 className="mb-4 font-mono text-[10px] uppercase tracking-widest text-slate-500">Global Threat Monitoring</h4>
              <ThreatMap />
            </motion.div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'HTB Rank', value: 'Pro Hacker' },
                { label: 'THM Level', value: 'Top 1%' },
                { label: 'CVEs Found', value: '02' },
                { label: 'Uptime', value: '99.99%' },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  className="glass rounded-2xl border border-white/10 p-4 text-center"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <p className="font-mono text-[8px] uppercase tracking-widest text-slate-500 mb-1">{stat.label}</p>
                  <p className="text-lg font-bold text-[var(--cyber-primary)]">{stat.value}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
