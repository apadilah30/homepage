import { ExperienceTimeline } from "@/components/ExperienceTimeline";
import { FeaturedProjects } from "@/components/FeaturedProjects";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { TechStackBento } from "@/components/TechStackBento";
import { ThemeToggle } from "@/components/ThemeToggle";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { Nav } from "@/components/Nav";
import { Navbar } from "@/components/Navbar";

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

      <Navbar />

      <main className="relative mx-auto max-w-6xl space-y-24 px-4 py-28 md:space-y-32 md:px-8 md:py-20">
        <HeroSection />
        <TechStackBento />
        <FeaturedProjects />
        <ExperienceTimeline />
      </main>

      <Footer />
    </div>
  );
}
