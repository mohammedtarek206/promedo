import { motion } from 'framer-motion';

const ATTACKS = [
  { x: 30, y: 40 },
  { x: 60, y: 25 },
  { x: 80, y: 55 },
  { x: 15, y: 70 },
  { x: 45, y: 80 },
];

export function ThreatMap() {
  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-slate-950/50 border border-white/5">
      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(#10b981 0.5px, transparent 0.5px), linear-gradient(90deg, #10b981 0.5px, transparent 0.5px)', backgroundSize: '20px 20px' }} />
      
      {/* Simple World Map Silhouette (Mock) */}
      <div className="absolute inset-0 flex items-center justify-center opacity-5">
        <span className="font-mono text-8xl font-black uppercase tracking-widest text-emerald-500">World_Map</span>
      </div>

      {/* Attack Points */}
      {ATTACKS.map((p, i) => (
        <motion.div
          key={i}
          className="absolute h-1 w-1 rounded-full bg-red-500"
          style={{ left: `${p.x}%`, top: `${p.y}%` }}
        >
          <motion.div
            className="absolute -inset-2 rounded-full border border-red-500"
            initial={{ scale: 0, opacity: 1 }}
            animate={{ scale: 4, opacity: 0 }}
            transition={{ duration: 2, repeat: Infinity, delay: i * 0.4 }}
          />
          <motion.div
            className="absolute -inset-4 rounded-full border border-red-500/30"
            initial={{ scale: 0, opacity: 1 }}
            animate={{ scale: 6, opacity: 0 }}
            transition={{ duration: 2, repeat: Infinity, delay: i * 0.4 }}
          />
        </motion.div>
      ))}

      {/* Data Overlay */}
      <div className="absolute bottom-4 left-4 font-mono text-[8px] text-emerald-500/60 uppercase">
        <p className="mb-1">Active Threat Monitoring: ON</p>
        <p>Attacks Detected: 1,492 / SEC</p>
      </div>

      <div className="absolute top-4 right-4 rounded bg-red-500/10 px-2 py-1 border border-red-500/20">
        <span className="font-mono text-[8px] text-red-500 font-bold animate-pulse">LIVE FEED</span>
      </div>
    </div>
  );
}
