import { motion } from 'framer-motion';
import { SectionTitle } from './SectionTitle';

const roles = [
  {
    title: 'President — Switch Code Community',
    body: 'Leadership for a thriving technical community: strategic direction, member growth, and high-impact events that connect learners with industry practice.',
    tags: ['Coordination', 'Events', 'Mentorship'],
  },
  {
    title: 'Member — Creativa Beni Suef Team',
    body: 'Collaborative building within a regional innovation team — contributing to technical delivery while supporting cross-functional creativity and outreach.',
    tags: ['Teamwork', 'Innovation', 'Regional impact'],
  },
];

export function Leadership() {
  return (
    <section id="leadership" className="scroll-mt-28 px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="02 — LEADERSHIP"
          title="Leadership & roles"
          subtitle="Driving communities forward with clear ownership, dependable coordination, and a builder’s mindset."
        />
        <div className="grid gap-8 lg:grid-cols-2">
          {roles.map((r, idx) => (
            <motion.article
              key={r.title}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] p-8 sm:p-10"
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.55, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-emerald-500/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="relative">
                <span className="font-mono text-xs text-emerald-400/90">{String(idx + 1).padStart(2, '0')}</span>
                <h3 className="mt-4 text-2xl font-bold text-white sm:text-3xl">{r.title}</h3>
                <p className="mt-5 leading-relaxed text-slate-400">{r.body}</p>
                <div className="mt-8 flex flex-wrap gap-2">
                  {r.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-cyan-500/25 bg-cyan-500/5 px-3 py-1 text-xs font-medium text-cyan-200/90"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
