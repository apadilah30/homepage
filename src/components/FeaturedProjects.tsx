"use client";

import { motion } from "framer-motion";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionHeader } from "@/components/SectionHeader";

const list = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const row = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function FeaturedProjects() {
  return (
    <section id="projects" className="scroll-mt-28 space-y-10">
      <SectionHeader
        index="02 — Work"
        title="Featured projects"
        description="Selected builds across auctions, research platforms, and edge deployments."
      />

      <motion.div
        variants={list}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        className="grid gap-5 md:grid-cols-3"
      >
        <motion.div variants={row} className="h-full">
          <ProjectCard
            title="SPARC"
            description="Research and collaboration tooling with a focus on clarity, performance, and maintainable architecture."
            tags={["Web platform", "API design", "Team workflows"]}
            href="#"
            accent="cyan"
            icon={
              <svg
                className="h-6 w-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
              >
                <path d="M4 19V5M4 19h16M8 15V9M12 17V7M16 13v-2M20 9v6" />
              </svg>
            }
          />
        </motion.div>
        <motion.div variants={row} className="h-full">
          <ProjectCard
            title="Persib Jersey Auction"
            description="Interactive auction experience with real-time bidding flows and resilient checkout."
            tags={["E-commerce", "Realtime UX", "Payments"]}
            href="#"
            accent="violet"
            icon={
              <svg
                className="h-6 w-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
              >
                <path d="M6 3h12v6l-6 4-6-4V3Z" />
                <path d="M9 21h6M12 13v8" />
              </svg>
            }
          />
        </motion.div>
        <motion.div variants={row} className="h-full">
          <ProjectCard
            title="Petikteh Edge Computing"
            description="Edge workloads with observability hooks and deployment patterns tuned for low latency."
            tags={["Edge", "IoT-adjacent", "Infra"]}
            href="#"
            accent="fuchsia"
            icon={
              <svg
                className="h-6 w-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
              >
                <circle cx="12" cy="12" r="3" />
                <path d="M12 5v2M12 17v2M5 12h2M17 12h2M7.05 7.05l1.42 1.42M15.54 15.54l1.41 1.41M7.05 16.95l1.42-1.42M15.54 8.46l1.41-1.41" />
              </svg>
            }
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
