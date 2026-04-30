import { skills } from '@/data/skills';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { SectionTitle } from './SectionTitle';
import { useCyberMode } from '../hooks/useCyberMode';
import { TechRadar } from './TechRadar';

function SkillBar({ name, value }: { name: string; value: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-10%' });
  const { theme } = useCyberMode();

  return (
    <div ref={ref} className="space-y-2">
      <div className="flex justify-between text-sm">
        <span className="font-medium text-slate-200">{name}</span>
        <span className="font-mono text-[10px] text-[var(--cyber-primary)]/80 uppercase tracking-tighter">
          {theme === 'cyber' ? `Threat Level: ${value}%` : `Proficiency: ${value}%`}
        </span>
      </div>
      <div className="h-2.5 overflow-hidden rounded-full bg-white/5 ring-1 ring-white/10">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-[var(--cyber-primary)] via-[var(--cyber-secondary)] to-[var(--cyber-accent)]"
          initial={{ width: 0 }}
          animate={inView ? { width: `${value}%` } : { width: 0 }}
          transition={{ duration: 1.15, ease: [0.22, 1, 0.36, 1] }}
          style={{ boxShadow: `0 0 15px var(--cyber-glow)` }}
        />
      </div>
    </div>
  );
}

export function Skills() {
  const { theme } = useCyberMode();

  return (
    <section id="skills" className="scroll-mt-28 px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="05 — CAPABILITIES"
          title="Skills & Capability Map"
          subtitle="Animated proficiency signals — aligned with how I deliver in security and product teams."
        />
        <div className="grid gap-8 lg:grid-cols-[1fr_300px]">
          <motion.div
            className="glass-strong rounded-3xl p-8 sm:p-10"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <div className="space-y-8">
              {skills.map((s) => (
                <SkillBar key={s.name} name={s.name} value={s.value} />
              ))}
            </div>
          </motion.div>

          <motion.div
            className="glass-strong flex flex-col items-center justify-center rounded-3xl p-8"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h4 className="mb-6 font-mono text-[10px] uppercase tracking-widest text-slate-500">Tech Radar</h4>
            <TechRadar />
            {theme === 'cyber' && (
              <div className="mt-6 text-center font-mono text-[8px] text-emerald-500/40 uppercase animate-pulse">
                Optimization: Peak
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
