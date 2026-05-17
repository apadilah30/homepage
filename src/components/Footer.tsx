"use client";

import { motion } from "framer-motion";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative mt-8 border-t border-white/5">
      <div className="pointer-events-none absolute inset-x-0 -top-px h-px bg-linear-to-r from-transparent via-cyan-500/50 to-transparent" />
      <div className="mx-auto max-w-6xl px-4 py-14 md:px-8">
        <div className="glass-card flex flex-col gap-8 rounded-3xl p-8 md:flex-row md:items-center md:justify-between">
          <div className="space-y-2">
            <p className="text-lg font-bold text-white">Agus Padilah</p>
            <p className="max-w-sm text-sm leading-relaxed text-slate-400">
              Full-stack developer — open to meaningful collaborations and
              challenging product work.
            </p>
            <p className="text-xs text-slate-600">© {year} Agus Padilah</p>
          </div>
          <motion.a
            href="mailto:hello@example.com"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="btn-primary inline-flex w-fit items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-slate-950"
          >
            <span>hello@example.com</span>
            <span aria-hidden>→</span>
          </motion.a>
        </div>
      </div>
    </footer>
  );
}
