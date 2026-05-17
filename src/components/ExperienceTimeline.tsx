"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/SectionHeader";

type Role = {
  company: string;
  title: string;
  period: string;
  summary: string;
};

const roles: Role[] = [
  {
    company: "PT Makerindo",
    title: "Full-stack Engineer",
    period: "Earlier tenure",
    summary:
      "Built and maintained product features across the stack, collaborating closely with stakeholders to ship iterative releases.",
  },
  {
    company: "PT Lintas Media Danawa",
    title: "Full-stack / Platform",
    period: "Recent roles",
    summary:
      "Focused on deployment consistency with Docker, service reliability, and performance tuning across web and API layers.",
  },
];

export function ExperienceTimeline() {
  return (
    <section id="experience" className="scroll-mt-28 space-y-10">
      <SectionHeader
        index="03 — Journey"
        title="Experience"
        description="A concise timeline from PT Makerindo through PT Lintas Media Danawa."
      />

      <div className="relative pl-2 md:pl-4">
        <div
          className="absolute left-[15px] top-3 bottom-3 w-px bg-linear-to-b from-cyan-400 via-violet-500/50 to-transparent md:left-[19px]"
          aria-hidden
        />

        <ol className="space-y-6">
          {roles.map((role, index) => (
            <motion.li
              key={role.company}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="relative pl-12 md:pl-14"
            >
              <span
                className="absolute left-0 top-5 flex h-8 w-8 items-center justify-center rounded-full border border-cyan-500/40 bg-slate-950 shadow-[0_0_20px_rgba(34,211,238,0.25)]"
                aria-hidden
              >
                <span className="h-2.5 w-2.5 rounded-full bg-linear-to-br from-cyan-300 to-violet-400" />
              </span>

              <article className="glass-card group rounded-2xl p-6 transition hover:border-cyan-500/25">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-cyan-400">
                      {role.period}
                    </p>
                    <h3 className="mt-1 text-xl font-bold text-white">
                      {role.company}
                    </h3>
                  </div>
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-300">
                    {role.title}
                  </span>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-slate-400">
                  {role.summary}
                </p>
              </article>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
