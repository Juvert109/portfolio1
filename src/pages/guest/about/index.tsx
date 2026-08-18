import { AboutHero } from "@/components/features/about/about";
import { SkillsSection } from "@/components/features/about/skillsection";

export default function AboutPage() {
  return (
    <main className="w-full">
      <AboutHero />
      <SkillsSection />
    </main>
  );
}