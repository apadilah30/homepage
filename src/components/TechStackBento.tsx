"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/SectionHeader";
import { TechLogo } from "@/components/TechLogo";
import { techLogos, type TechLogoDef } from "@/components/tech-logos";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.07, delayChildren: 0.05 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  },
};

type Accent = "violet" | "cyan" | "amber" | "sky" | "emerald" | "orange";

type StackCell = {
  title: string;
  body: string;
  logos: TechLogoDef[];
  className: string;
  accent: Accent;
};

const accentStyles: Record<
  Accent,
  { glow: string; border: string; dot: string }
> = {
  violet: {
    glow: "from-violet-500/25 via-fuchsia-500/10",
    border: "group-hover:border-violet-500/40",
    dot: "bg-violet-400",
  },
  cyan: {
    glow: "from-cyan-500/25 via-blue-500/10",
    border: "group-hover:border-cyan-500/40",
    dot: "bg-cyan-400",
  },
  amber: {
    glow: "from-amber-500/20 via-yellow-500/10",
    border: "group-hover:border-amber-500/35",
    dot: "bg-amber-400",
  },
  sky: {
    glow: "from-sky-500/25 via-cyan-500/10",
    border: "group-hover:border-sky-500/40",
    dot: "bg-sky-400",
  },
  emerald: {
    glow: "from-emerald-500/20 via-teal-500/10",
    border: "group-hover:border-emerald-500/35",
    dot: "bg-emerald-400",
  },
  orange: {
    glow: "from-orange-500/20 via-amber-500/10",
    border: "group-hover:border-orange-500/35",
    dot: "bg-orange-400",
  },
};

const cells: StackCell[] = [
  {
    title: "PHP & Laravel",
    body: "APIs, queues, and admin tooling with the Laravel ecosystem.",
    logos: [techLogos.php, techLogos.laravel],
    className: "md:col-span-2",
    accent: "violet",
  },
  {
    title: "Go & Gin",
    body: "High-throughput services and microservices.",
    logos: [techLogos.go, techLogos.gin],
    className: "md:col-span-1",
    accent: "cyan",
  },
  {
    title: "Python",
    body: "Scripting, automation, and data-adjacent tooling.",
    logos: [techLogos.python],
    className: "md:col-span-1",
    accent: "amber",
  },
  {
    title: "React & Next.js",
    body: "Motion-rich, accessible UI with modern React patterns.",
    logos: [techLogos.react, techLogos.nextjs],
    className: "md:col-span-2",
    accent: "sky",
  },
  {
    title: "PostgreSQL",
    body: "Relational modeling, migrations, and query tuning.",
    logos: [techLogos.postgresql],
    className: "md:col-span-1",
    accent: "emerald",
  },
  {
    title: "Docker & Nginx",
    body: "Consistent environments and reverse-proxy ready deploys.",
    logos: [techLogos.docker, techLogos.nginx],
    className: "md:col-span-1",
    accent: "orange",
  },
];

export function TechStackBento() {
  return (
    <section id="stack" className="scroll-mt-28 space-y-10">
      <SectionHeader
        index="01 — Stack"
        title="Tech stack"
        description="Languages, frameworks, and platforms I use to ship production-ready software."
      />

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 md:auto-rows-fr"
      >
        {cells.map((cell) => {
          const style = accentStyles[cell.accent];
          return (
            <motion.article
              key={cell.title}
              variants={item}
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 400, damping: 28 }}
              className={`group relative flex min-h-[180px] flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-slate-900/40 p-6 backdrop-blur-sm transition-colors ${style.border} ${cell.className}`}
            >
              <motion.div
                className={`pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-linear-to-br ${style.glow} to-transparent blur-2xl transition-opacity duration-500 group-hover:opacity-100 opacity-60`}
                aria-hidden
              />

              <div className="relative space-y-3">
                <span
                  className={`inline-block h-1.5 w-1.5 rounded-full ${style.dot} shadow-[0_0_8px_currentColor]`}
                  aria-hidden
                />
                <h3 className="text-lg font-bold text-white">{cell.title}</h3>
                <p className="text-sm leading-relaxed text-slate-400">
                  {cell.body}
                </p>
              </div>

              <div className="relative mt-6 flex flex-wrap items-center gap-2">
                {cell.logos.map((logo) => (
                  <TechLogo
                    key={logo.alt}
                    logo={logo}
                    size={cell.logos.length > 1 ? "md" : "lg"}
                  />
                ))}
              </div>
            </motion.article>
          );
        })}
      </motion.div>
    </section>
  );
}
