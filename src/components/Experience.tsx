import { motion } from 'framer-motion';
import { SectionTitle } from './SectionTitle';

const items = [
  {
    role: 'Red Team Leader / Cybersecurity Specialist',
    summary:
      'Offensive security drills, vulnerability assessment, and secure architecture advocacy — aligning technical rigor with business risk.',
    period: 'Current focus',
  },
  {
    role: 'Freelance Full Stack Developer',
    summary:
      'End-to-end product delivery — secure APIs, reactive frontends, and deployment pipelines that recruiters can visit and evaluate instantly.',
    period: 'Ongoing',
  },
];

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-28 px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="04 — TRACK RECORD"
          title="Experience"
          subtitle="Roles that combine hands-on security work with shipping full stack software."
        />
        <div className="relative mx-auto max-w-3xl">
          <div className="absolute left-[11px] top-2 bottom-2 w-px bg-gradient-to-b from-cyan-500/50 via-emerald-500/30 to-transparent md:left-4" />
          <ul className="space-y-12">
            {items.map((item, i) => (
              <motion.li
                key={item.role}
                className="relative pl-10 md:pl-14"
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <span className="absolute left-0 top-1.5 flex h-6 w-6 items-center justify-center rounded-full border border-cyan-500/50 bg-cyber-bg md:left-1">
                  <span className="h-2 w-2 rounded-full bg-gradient-to-r from-cyan-400 to-emerald-400 shadow-neon-sm" />
                </span>
                <p className="font-mono text-xs uppercase tracking-widest text-emerald-400/90">
                  {item.period}
                </p>
                <h3 className="mt-2 text-xl font-bold text-white sm:text-2xl">{item.role}</h3>
                <p className="mt-3 text-slate-400 leading-relaxed">{item.summary}</p>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
