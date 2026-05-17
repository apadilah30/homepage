"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1 * i,
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

const stats = [
  { value: "5+", label: "Years building" },
  { value: "Full-stack", label: "Web & APIs" },
  { value: "Docker", label: "Ship-ready" },
] as const;

export function HeroSection() {
  return (
    <section className="relative">
      <div className="glass-card relative overflow-hidden rounded-3xl p-8 md:p-12 lg:p-14">
        <motion.div
          className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl"
          aria-hidden
          animate={{ opacity: [0.4, 0.7, 0.4], scale: [1, 1.08, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="pointer-events-none absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-violet-500/15 blur-3xl"
          aria-hidden
          animate={{ opacity: [0.3, 0.55, 0.3], scale: [1, 1.05, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(34,211,238,0.08),transparent_50%)]"
          aria-hidden
        />

        <div className="relative grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end lg:gap-12">
          <div className="max-w-2xl space-y-7">
            <motion.div
              custom={0}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="inline-flex items-center gap-2 rounded-full border border-cyan-500/25 bg-cyan-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-cyan-300"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-400" />
              </span>
              Available for collaboration
            </motion.div>

            <motion.h1
              custom={1}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="text-4xl font-bold leading-[1.1] tracking-tight text-white md:text-5xl lg:text-[3.25rem]"
            >
              Full-stack developer crafting{" "}
              <span className="text-gradient-hero">reliable systems</span>{" "}
              end to end.
            </motion.h1>

            <motion.p
              custom={2}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="text-lg leading-relaxed text-slate-400 md:text-xl"
            >
              I ship performant backends, polished frontends, and deployment
              pipelines — Laravel & Go APIs, React experiences, and containerized
              infrastructure.
            </motion.p>

            <motion.div
              custom={3}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="flex flex-wrap gap-3 pt-1"
            >
              <a
                href="/resume.pdf"
                className="btn-primary inline-flex h-12 items-center justify-center rounded-full px-8 text-sm font-semibold text-slate-950 transition hover:brightness-110"
              >
                Download resume
              </a>
              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 text-sm font-medium text-slate-200 backdrop-blur-sm transition hover:border-cyan-500/40 hover:bg-white/10 hover:text-white"
              >
                GitHub
                <span aria-hidden>↗</span>
              </a>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 text-sm font-medium text-slate-200 backdrop-blur-sm transition hover:border-violet-500/40 hover:bg-white/10 hover:text-white"
              >
                LinkedIn
                <span aria-hidden>↗</span>
              </a>
            </motion.div>
          </div>

          <motion.div
            custom={4}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-3 gap-3 lg:grid-cols-1 lg:gap-4"
          >
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-white/10 bg-slate-950/50 p-4 text-center backdrop-blur-sm lg:text-left"
              >
                <p className="text-2xl font-bold text-white md:text-3xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-xs font-medium uppercase tracking-wider text-slate-500">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
