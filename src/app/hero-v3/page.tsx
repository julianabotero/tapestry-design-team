import { EssenceSection } from "@/components/essence/EssenceSection";
import { HowWeDoItSection } from "@/components/how-we-do-it/HowWeDoItSection";
import { HeroSectionV3 } from "@/components/hero-v3/HeroSection";
import { StatementRevealSection } from "@/components/statement/StatementRevealSection";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { ResourcesSection } from "@/components/resources/ResourcesSection";
import { StatsBar } from "@/components/stats/StatsBar";
import { TeamSection } from "@/components/team/TeamSection";
import { ThinkingOutLoudSection } from "@/components/thinking-out-loud/ThinkingOutLoudSection";

export default function HeroV3Page() {
  return (
    <>
      <HeroSectionV3 />
      <StatementRevealSection />
      <TeamSection />
      <StatsBar />
      <EssenceSection />
      <HowWeDoItSection />
      <ResourcesSection />
      <ThinkingOutLoudSection />
      <SiteFooter />
    </>
  );
}
