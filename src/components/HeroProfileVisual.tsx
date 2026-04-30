import { motion } from 'framer-motion';

type Props = {
  compact?: boolean;
  className?: string;
  profileSrc: string;
  profileAlt: string;
  priority?: boolean;
};

export function HeroProfileVisual({
  compact = false,
  className = '',
  profileSrc,
  profileAlt,
  priority = false,
}: Props) {
  const ring = compact
    ? 'ring-1 ring-cyan-400/35 shadow-[0_0_28px_-4px_rgba(34,211,238,0.45)]'
    : 'shadow-[0_0_48px_-8px_rgba(34,211,238,0.5),0_20px_40px_-18px_rgba(0,0,0,0.45)] ring-2 ring-white/15 ring-offset-[3px] ring-offset-cyber-bg';

  return (
    <div className={`relative ${className}`}>
      {/* Background Glow */}
      <div
        className="pointer-events-none absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-cyan-500/18 via-emerald-500/8 to-transparent opacity-80 blur-2xl"
        aria-hidden
      />

      {/* Floating Card 1: Full Stack */}
      <motion.div
        className={`absolute z-[30] rounded-2xl border border-white/20 bg-slate-900/40 p-4 shadow-[0_20px_50px_rgba(0,0,0,0.5)] backdrop-blur-xl ${
          compact
            ? '-left-2 top-[10%] w-24 sm:w-28'
            : '-left-4 top-[15%] w-28 sm:w-40 md:-left-24 lg:-left-32'
        }`}
        initial={{ opacity: 0, x: -30 }}
        animate={{ 
          opacity: 1, 
          x: 0,
          y: [0, -12, 0],
          rotate: [-3, 1, -3]
        }}
        transition={{ 
          opacity: { duration: 0.8, delay: 0.5 },
          x: { duration: 0.8, delay: 0.5 },
          y: { duration: 6, repeat: Infinity, ease: 'easeInOut' },
          rotate: { duration: 7, repeat: Infinity, ease: 'easeInOut' }
        }}
      >
        <div className="flex items-center gap-2 mb-2">
          <div className="flex h-6 w-6 sm:h-8 sm:w-8 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-500 to-emerald-500 shadow-lg shadow-cyan-500/20">
            <span className="text-[10px] sm:text-xs font-bold text-white">{'</>'}</span>
          </div>
        </div>
        <p className="text-[8px] sm:text-[10px] font-bold uppercase tracking-[0.15em] text-cyan-400">
          Full Stack
        </p>
      </motion.div>

      {/* Floating Card 2: Terminal */}
      <motion.div
        className={`absolute z-[30] rounded-xl border border-white/10 bg-[#0c111d]/85 shadow-[0_25px_60px_rgba(0,0,0,0.6)] backdrop-blur-xl overflow-hidden ${
          compact
            ? '-right-2 bottom-[10%] w-32 sm:w-40'
            : '-right-4 bottom-[10%] w-36 sm:w-56 md:-right-28 lg:-right-36'
        }`}
        initial={{ opacity: 0, x: 30 }}
        animate={{ 
          opacity: 1, 
          x: 0,
          y: [0, 15, 0],
          rotate: [3, -1, 3]
        }}
        transition={{ 
          opacity: { duration: 0.8, delay: 0.7 },
          x: { duration: 0.8, delay: 0.7 },
          y: { duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 0.2 },
          rotate: { duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 0.2 }
        }}
      >
        <div className="flex items-center justify-between border-b border-white/5 bg-white/5 px-2 py-1">
          <div className="flex gap-1">
            <div className="h-1.5 w-1.5 rounded-full bg-[#ff5f56]" />
            <div className="h-1.5 w-1.5 rounded-full bg-[#27c93f]" />
          </div>
          <span className="text-[7px] font-mono text-slate-500">bash</span>
        </div>
        <div className="p-2 font-mono text-[8px] sm:text-[10px]">
          <div className="flex gap-1 text-emerald-400">~ <span className="text-cyan-300">deploy</span></div>
          <div className="text-emerald-500 mt-1">✔ Success</div>
        </div>
      </motion.div>

      {/* NEW Floating Card 3: RED TEAM */}
      <motion.div
        className={`absolute z-[30] rounded-2xl border border-red-500/30 bg-slate-950/60 p-3 sm:p-4 shadow-[0_20px_50px_rgba(220,38,38,0.2)] backdrop-blur-xl ${
          compact
            ? 'right-0 top-[-10%] hidden sm:block'
            : '-right-2 top-[5%] w-28 sm:w-40 md:-right-20 lg:-right-28'
        }`}
        initial={{ opacity: 0, y: -20 }}
        animate={{ 
          opacity: 1, 
          y: 0,
          x: [0, 8, 0],
        }}
        transition={{ 
          opacity: { duration: 0.8, delay: 0.9 },
          y: { duration: 0.8, delay: 0.9 },
          x: { duration: 5, repeat: Infinity, ease: 'easeInOut' }
        }}
      >
        <div className="flex items-center gap-2 mb-1 sm:mb-2">
          <div className="flex h-5 w-5 sm:h-7 sm:w-7 items-center justify-center rounded-full bg-red-500/20 border border-red-500/50">
            <div className="h-1.5 w-1.5 rounded-full bg-red-500 animate-pulse" />
          </div>
          <span className="text-[8px] sm:text-[10px] font-bold text-red-400 tracking-tighter">RED TEAM</span>
        </div>
      </motion.div>

      {/* Main Image Container */}
      <motion.div
        className={`animate-float-slow relative mx-auto aspect-[3/4] w-full overflow-hidden rounded-3xl border border-cyan-400/45 bg-transparent ${ring}`}
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        style={window.innerWidth >= 768 ? { transformStyle: 'preserve-3d', perspective: 1200, rotateX: 4, rotateY: -8 } : {}}
      >
        <img
          src={profileSrc}
          alt={profileAlt}
          className="relative z-0 h-full w-full object-cover object-[center_20%] brightness-[1.04] saturate-[1.06] contrast-[1.02]"
          width={880}
          height={1100}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          fetchPriority={priority ? 'high' : 'low'}
        />

        <div className="pointer-events-none absolute inset-0 z-[1] rounded-[inherit] bg-gradient-to-tr from-cyan-500/[0.06] via-transparent to-emerald-500/[0.05]" />
        <div className="pointer-events-none absolute inset-0 z-[1] rounded-[inherit] bg-[radial-gradient(ellipse_90%_70%_at_50%_15%,transparent_50%,rgba(3,7,18,0.12)_100%)]" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-[28%] bg-gradient-to-t from-cyber-bg/35 via-cyber-bg/10 to-transparent" />
      </motion.div>
    </div>
  );
}
