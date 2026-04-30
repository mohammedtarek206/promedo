/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cyber: {
          bg: '#030712',
          surface: '#0a0f1a',
          cyan: '#22d3ee',
          emerald: '#34d399',
          blue: '#38bdf8',
        },
      },
      fontFamily: {
        sans: ['Outfit', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        glow: 'linear-gradient(135deg, rgba(34,211,238,0.15) 0%, rgba(52,211,153,0.1) 100%)',
      },
      animation: {
        'pulse-glow': 'pulse-glow 4s ease-in-out infinite',
        float: 'float 6s ease-in-out infinite',
        'float-slow': 'float 12s ease-in-out infinite',
      },
      keyframes: {
        'pulse-glow': {
          '0%, 100%': { opacity: '0.4', filter: 'blur(40px)' },
          '50%': { opacity: '0.8', filter: 'blur(52px)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0) rotate(-1deg)' },
          '50%': { transform: 'translateY(-12px) rotate(1deg)' },
        },
      },
      boxShadow: {
        neon: '0 0 20px rgba(34, 211, 238, 0.35), 0 0 40px rgba(52, 211, 153, 0.15)',
        'neon-sm': '0 0 12px rgba(34, 211, 238, 0.4)',
      },
    },
  },
  plugins: [],
};
