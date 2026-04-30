import type { ProjectItem } from '@/data/projects';
import { defaultGithubProfile, previewImageUrl } from '@/data/projects';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import Tilt from 'react-parallax-tilt';
import { useCyberMode } from '../hooks/useCyberMode';

type Props = {
  project: ProjectItem;
  index: number;
};

export function ProjectCard({ project, index }: Props) {
  const [imgError, setImgError] = useState(false);
  const [showArch, setShowArch] = useState(false);
  const { theme } = useCyberMode();
  const githubHref = project.githubUrl ?? defaultGithubProfile;
  const preview = previewImageUrl(project.liveUrl);

  const primaryColor = theme === 'cyber' ? '#10b981' : '#22d3ee';

  return (
    <motion.div
      initial={{ opacity: 0, y: 48 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.55, delay: Math.min(index * 0.06, 0.4), ease: [0.22, 1, 0.36, 1] }}
    >
      <Tilt
        tiltMaxAngleX={10}
        tiltMaxAngleY={10}
        perspective={1200}
        glareEnable
        glareMaxOpacity={0.18}
        glareColor={primaryColor}
        scale={1.02}
        transitionSpeed={1800}
        className="h-full"
      >
        <div className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-slate-900/40 shadow-xl transition-all duration-500 hover:scale-[1.02] ${
          theme === 'cyber' ? 'hover:border-emerald-400/35 hover:shadow-[0_0_30px_rgba(16,185,129,0.2)]' : 'hover:border-cyan-400/35 hover:shadow-neon'
        }`}>
          <div
            className={`relative aspect-[16/10] overflow-hidden bg-gradient-to-br ${project.accent}`}
          >
            {!imgError ? (
              <img
                src={preview}
                alt=""
                className="h-full w-full object-cover object-top opacity-95 transition duration-500 group-hover:scale-105 group-hover:opacity-100"
                loading="lazy"
                decoding="async"
                onError={() => setImgError(true)}
              />
            ) : (
              <div className="flex h-full items-center justify-center">
                <span className="font-mono text-3xl font-bold text-white/25">
                  {project.name.split(' ').slice(0, 2).map((w) => w[0]).join('')}
                </span>
              </div>
            )}
            
            <div className="absolute inset-0 bg-gradient-to-t from-cyber-bg via-cyber-bg/20 to-transparent opacity-90" />
            
            {/* Architecture Overlay */}
            <AnimatePresence>
              {showArch && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 z-20 bg-slate-950/90 p-6 backdrop-blur-md"
                >
                  <p className="font-mono text-[10px] uppercase tracking-widest text-[var(--cyber-primary)] mb-4">System Architecture</p>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="h-6 w-6 rounded bg-white/5 border border-white/10 flex items-center justify-center text-[8px] font-bold">FE</div>
                      <div className="h-[1px] flex-1 bg-gradient-to-r from-white/20 to-transparent" />
                      <span className="text-[10px] text-slate-300">React / Next.js / Tailwind</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="h-6 w-6 rounded bg-white/5 border border-white/10 flex items-center justify-center text-[8px] font-bold">BE</div>
                      <div className="h-[1px] flex-1 bg-gradient-to-r from-white/20 to-transparent" />
                      <span className="text-[10px] text-slate-300">Node.js / Express / MongoDB</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="h-6 w-6 rounded bg-white/5 border border-white/10 flex items-center justify-center text-[8px] font-bold">SEC</div>
                      <div className="h-[1px] flex-1 bg-gradient-to-r from-white/20 to-transparent" />
                      <span className="text-[10px] text-emerald-400">JWT / Rate Limiting / SSL</span>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <button 
              onClick={() => setShowArch(!showArch)}
              className="absolute top-4 right-4 z-30 flex h-8 w-8 items-center justify-center rounded-lg bg-slate-950/50 border border-white/10 backdrop-blur-md text-[var(--cyber-primary)] hover:bg-slate-950 transition-colors"
            >
              <span className="font-mono text-xs font-bold">{showArch ? '✕' : '{}'}</span>
            </button>
          </div>

          <div className="flex flex-1 flex-col p-6 sm:p-7">
            <h3 className="text-xl font-bold tracking-tight text-white sm:text-2xl">{project.name}</h3>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-400 sm:text-base">
              {project.description}
            </p>
            <div className="mt-6 grid grid-cols-2 gap-3 sm:flex sm:flex-row">
              <motion.a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center rounded-xl bg-gradient-to-r from-[var(--cyber-primary)] to-[var(--cyber-secondary)] px-4 py-2.5 text-center text-xs font-semibold text-slate-950 shadow-neon-sm sm:text-sm"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                Live Demo
              </motion.a>
              <motion.a
                href={githubHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-4 py-2.5 text-center text-xs font-semibold text-slate-100 transition hover:border-[var(--cyber-primary)]/35 hover:bg-white/10 sm:text-sm"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                GitHub
              </motion.a>
            </div>
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
}
