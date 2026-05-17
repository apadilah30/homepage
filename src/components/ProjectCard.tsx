"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type ProjectCardProps = {
  title: string;
  description: string;
  tags: string[];
  href?: string;
  icon?: ReactNode;
  accent?: "cyan" | "violet" | "fuchsia";
};

const accents = {
  cyan: {
    bar: "from-cyan-400 to-cyan-600",
    glow: "group-hover:shadow-cyan-500/20",
    tag: "group-hover:border-cyan-500/30 group-hover:text-cyan-200",
    icon: "text-cyan-300 border-cyan-500/20 bg-cyan-500/10",
  },
  violet: {
    bar: "from-violet-400 to-violet-600",
    glow: "group-hover:shadow-violet-500/20",
    tag: "group-hover:border-violet-500/30 group-hover:text-violet-200",
    icon: "text-violet-300 border-violet-500/20 bg-violet-500/10",
  },
  fuchsia: {
    bar: "from-fuchsia-400 to-fuchsia-600",
    glow: "group-hover:shadow-fuchsia-500/20",
    tag: "group-hover:border-fuchsia-500/30 group-hover:text-fuchsia-200",
    icon: "text-fuchsia-300 border-fuchsia-500/20 bg-fuchsia-500/10",
  },
};

export function ProjectCard({
  title,
  description,
  tags,
  href = "#",
  icon,
  accent = "cyan",
}: ProjectCardProps) {
  const a = accents[accent];

  return (
    <motion.a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 380, damping: 24 }}
      className={`group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-slate-900/50 p-6 shadow-xl shadow-black/20 outline-none backdrop-blur-sm transition-shadow hover:border-white/20 hover:shadow-2xl ${a.glow} focus-visible:ring-2 focus-visible:ring-cyan-500/50`}
    >
      <div
        className={`absolute inset-x-0 top-0 h-1 bg-linear-to-r ${a.bar} opacity-80`}
        aria-hidden
      />
      <div className="space-y-4 pt-2">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-xl font-bold text-white transition group-hover:text-cyan-100">
            {title}
          </h3>
          {icon ? (
            <span
              className={`shrink-0 rounded-xl border p-2.5 ${a.icon}`}
            >
              {icon}
            </span>
          ) : null}
        </div>
        <p className="text-sm leading-relaxed text-slate-400">{description}</p>
      </div>
      <div className="mt-6 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className={`rounded-full border border-white/10 bg-slate-950/60 px-3 py-1 text-xs font-medium text-slate-400 transition ${a.tag}`}
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.a>
  );
}
