import { motion } from 'framer-motion';
import { useTyping } from '@/hooks/useTyping';
import { HeroProfileVisual } from './HeroProfileVisual';
import { SocialLinks } from './SocialLinks';

const TITLE =
  'Cybersecurity Specialist | Full Stack Developer | Red Team Leader';

const PROFILE_IMG = '/profile.jpeg';

export function Hero() {
  const { display: typed, done } = useTyping(TITLE, 38, 500);

  return (
    <section className="relative flex min-h-[100dvh] flex-col justify-center overflow-hidden px-4 pb-28 pt-[7.25rem] sm:px-6 lg:pb-24 lg:pt-28 lg:px-8">
      <div className="relative mx-auto w-full max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(240px,320px)] lg:gap-x-10 xl:gap-x-14 xl:grid-cols-[minmax(0,1fr)_360px]">
          <motion.div
            className="relative max-w-3xl lg:max-w-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <HeroProfileVisual
              compact
              className="mx-auto mb-10 aspect-[3/4] w-full max-w-[280px] lg:hidden"
              profileSrc={PROFILE_IMG}
              profileAlt="Mohammed Tarek"
              priority
            />
            <motion.p
              className="font-mono text-xs tracking-[0.25em] text-emerald-400/90 sm:text-sm"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              MOHAMMED TAREK
            </motion.p>
            <motion.h1
              className="mt-5 text-[clamp(1.75rem,4.5vw,3.75rem)] font-extrabold leading-[1.08] tracking-tight text-white"
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              Building secure{' '}
              <span className="text-gradient">digital systems</span>
              <br className="hidden sm:block" />
              that scale with confidence.
            </motion.h1>
            <motion.div
              className="mt-8 min-h-[3rem] max-w-[40ch] font-mono text-[0.9375rem] leading-relaxed text-slate-300 sm:text-lg md:text-xl md:max-w-2xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <span className="text-cyan-100/95">
                {typed}
                {!done ? (
                  <span className="ml-1 inline-block h-[1.1em] w-[3px] animate-pulse bg-cyan-400 align-middle" />
                ) : null}
              </span>
            </motion.div>
            <motion.div
              className="mt-10 flex flex-col gap-6 sm:flex-row sm:flex-wrap sm:items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.85, duration: 0.6 }}
            >
              <div className="flex flex-wrap gap-4">
                <a
                  href="#projects"
                  className="inline-flex justify-center rounded-xl bg-gradient-to-r from-cyan-500 to-emerald-500 px-8 py-3.5 text-sm font-semibold text-slate-950 shadow-neon-sm transition hover:scale-[1.02] hover:brightness-110"
                >
                  View projects
                </a>
                <a
                  href="#contact"
                  className="inline-flex justify-center rounded-xl border border-white/15 px-8 py-3.5 text-sm font-semibold text-slate-200 backdrop-blur-sm transition hover:border-cyan-500/40 hover:bg-white/5"
                >
                  Get in touch
                </a>
                <motion.a
                  href="#"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-red-500/30 bg-red-500/5 px-6 py-3.5 text-xs font-bold uppercase tracking-widest text-red-400 backdrop-blur-sm transition hover:bg-red-500/10"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="h-2 w-2 rounded-full bg-red-500 animate-pulse" />
                  Audit Report (CV)
                </motion.a>
              </div>
              <div className="lg:hidden">
                <div className="mb-3 font-mono text-[10px] uppercase tracking-[0.2em] text-slate-500">
                  Connect
                </div>
                <SocialLinks variant="hero" />
              </div>
            </motion.div>
          </motion.div>

          <div className="relative hidden flex-col items-center gap-8 lg:flex">
            <HeroProfileVisual
              className="h-[min(440px,52vh)] w-full max-w-[320px]"
              profileSrc={PROFILE_IMG}
              profileAlt="Mohammed Tarek"
              priority
            />
            <div className="flex w-full flex-col items-center gap-4">
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-slate-500">
                Connect
              </p>
              <SocialLinks variant="hero" />
            </div>
          </div>
        </div>
      </div>

      <motion.div
        className="pointer-events-none absolute bottom-8 left-1/2 hidden -translate-x-1/2 md:block"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ delay: 1.5 }}
      >
        <motion.div
          className="h-10 w-[1px] bg-gradient-to-b from-cyan-400/70 to-transparent"
          animate={{ scaleY: [1, 0.55, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </motion.div>
    </section>
  );
}
