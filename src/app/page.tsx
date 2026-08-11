import { CapabilitiesSection } from "@/components/capabilities/CapabilitiesSection";
import { EssenceSection } from "@/components/essence/EssenceSection";
import { HowWeDoItSection } from "@/components/how-we-do-it/HowWeDoItSection";
import { HeroSectionV5 } from "@/components/hero-v5/HeroSection";
import { StatementRevealSection } from "@/components/statement/StatementRevealSection";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { ResourcesSection } from "@/components/resources/ResourcesSection";
import { StatsBar } from "@/components/stats/StatsBar";
import { TeamSection } from "@/components/team/TeamSection";
import { ThinkingOutLoudSection } from "@/components/thinking-out-loud/ThinkingOutLoudSection";

export default function Home() {
  return (
    <>
      <HeroSectionV5 />
      <StatementRevealSection />
      <TeamSection />
      <CapabilitiesSection />
      <HowWeDoItSection />
      <StatsBar />
      <EssenceSection />
      <ResourcesSection />
      <ThinkingOutLoudSection />
      <SiteFooter />
    </>
  );
}
