import { motion } from 'framer-motion';
import { SocialLinks } from './SocialLinks';

export function Footer() {
  return (
    <footer className="border-t border-white/5 px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 sm:flex-row sm:gap-6">
        <motion.p
          className="order-2 text-center font-mono text-sm text-slate-500 sm:order-1 sm:text-start"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          © {new Date().getFullYear()} Mohammed Tarek.
        </motion.p>
        <div className="order-1 flex flex-col items-center gap-4 sm:order-2 sm:flex-row sm:gap-8">
          <SocialLinks variant="footer" />
          <div className="flex gap-6 text-sm text-slate-500">
            <a href="#projects" className="transition hover:text-cyan-400">
              Projects
            </a>
            <a href="#contact" className="transition hover:text-cyan-400">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
