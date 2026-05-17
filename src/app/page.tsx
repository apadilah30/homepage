import { ExperienceTimeline } from "@/components/ExperienceTimeline";
import { FeaturedProjects } from "@/components/FeaturedProjects";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { TechStackBento } from "@/components/TechStackBento";

const navLinks = [
  { href: "#stack", label: "Stack" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
] as const;

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-x-hidden text-slate-100">
      <div className="page-mesh pointer-events-none fixed inset-0 -z-20" aria-hidden />
      <div className="page-grid pointer-events-none fixed inset-0 -z-10" aria-hidden />

      <header className="sticky top-0 z-30 border-b border-white/5 bg-slate-950/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:px-8">
          <a
            href="#"
            className="group flex items-center gap-2 text-sm font-semibold tracking-tight text-white"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-linear-to-br from-cyan-400 to-violet-500 text-xs font-bold text-slate-950 shadow-lg shadow-cyan-500/20">
              AP
            </span>
            Agus Padilah
          </a>
          <nav className="flex gap-1 rounded-full border border-white/10 bg-slate-900/50 p-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-full px-4 py-1.5 text-sm text-slate-400 transition hover:bg-white/5 hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main className="relative mx-auto max-w-6xl space-y-24 px-4 py-14 md:space-y-32 md:px-8 md:py-20">
        <HeroSection />
        <TechStackBento />
        <FeaturedProjects />
        <ExperienceTimeline />
      </main>

      <Footer />
    </div>
  );
}
