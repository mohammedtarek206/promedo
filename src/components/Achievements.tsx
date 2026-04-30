import { motion } from 'framer-motion';
import { SectionTitle } from './SectionTitle';

const list = [
  {
    title: 'Huawei Ambassador — Beni Suef University',
    detail: 'Representing Huawei programs on campus and connecting peers with cutting-edge tech initiatives.',
  },
  {
    title: 'Cybersecurity & technical training',
    detail: 'Hands-on facilitation — workshops, labs, and practical pathways into security fundamentals.',
  },
  {
    title: 'Active tech community contributor',
    detail: 'Consistent participation in builds, knowledge sharing, and elevating others in developer spaces.',
  },
];

export function Achievements() {
  return (
    <section className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="06 — IMPACT"
          title="Achievements"
          subtitle="Recognition and momentum that complement the work behind the deployments."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {list.map((item, i) => (
            <motion.div
              key={item.title}
              className="glass group relative overflow-hidden rounded-2xl p-7 transition hover:border-emerald-500/25"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -6 }}
            >
              <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-emerald-500/10 blur-2xl transition group-hover:bg-emerald-500/20" />
              <h3 className="relative text-lg font-semibold text-white">{item.title}</h3>
              <p className="relative mt-4 text-sm leading-relaxed text-slate-400">{item.detail}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
