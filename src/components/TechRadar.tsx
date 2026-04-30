import { motion } from 'framer-motion';

const SKILLS = [
  { name: 'OFF-SEC', value: 95 },
  { name: 'DEV-OPS', value: 90 },
  { name: 'AI / ML', value: 85 },
  { name: 'FULL-STACK', value: 92 },
  { name: 'ARCH-SEC', value: 88 },
];

export function TechRadar() {
  const center = 100;
  const radius = 80;

  const getPoint = (i: number, total: number, value: number) => {
    const angle = (Math.PI * 2 * i) / total - Math.PI / 2;
    const r = (radius * value) / 100;
    return {
      x: center + r * Math.cos(angle),
      y: center + r * Math.sin(angle),
    };
  };

  const points = SKILLS.map((s, i) => getPoint(i, SKILLS.length, s.value));
  const pathData = points.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`).join(' ') + ' Z';

  return (
    <div className="flex flex-col items-center">
      <svg width="200" height="200" viewBox="0 0 200 200" className="drop-shadow-[0_0_15px_rgba(16,185,129,0.3)]">
        {/* Background Circles */}
        {[0.2, 0.4, 0.6, 0.8, 1].map((r) => (
          <circle
            key={r}
            cx={center}
            cy={center}
            r={radius * r}
            fill="none"
            stroke="rgba(255,255,255,0.05)"
            strokeWidth="1"
          />
        ))}
        
        {/* Axis Lines */}
        {SKILLS.map((_, i) => {
          const p = getPoint(i, SKILLS.length, 100);
          return (
            <line
              key={i}
              x1={center}
              y1={center}
              x2={p.x}
              y2={p.y}
              stroke="rgba(255,255,255,0.1)"
              strokeWidth="1"
            />
          );
        })}

        {/* Data Shape */}
        <motion.path
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: 'easeInOut' }}
          d={pathData}
          fill="rgba(16,185,129,0.2)"
          stroke="#10b981"
          strokeWidth="2"
        />

        {/* Labels */}
        {SKILLS.map((s, i) => {
          const p = getPoint(i, SKILLS.length, 115);
          return (
            <text
              key={i}
              x={p.x}
              y={p.y}
              fill="rgba(255,255,255,0.4)"
              fontSize="8"
              textAnchor="middle"
              className="font-mono uppercase"
            >
              {s.name}
            </text>
          );
        })}
      </svg>
    </div>
  );
}
