import { motion } from 'framer-motion';
import { DecryptText } from './DecryptText';

type Props = {
  eyebrow: string;
  title: string;
  subtitle?: string;
};

export function SectionTitle({ eyebrow, title, subtitle }: Props) {
  return (
    <motion.div
      className="mb-14 max-w-3xl"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <p className="font-mono text-sm tracking-widest text-cyan-400/90">{eyebrow}</p>
      <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
        <DecryptText text={title} revealDelay={300} />
      </h2>
      {subtitle ? (
        <p className="mt-4 text-lg text-slate-400 leading-relaxed">{subtitle}</p>
      ) : null}
    </motion.div>
  );
}
