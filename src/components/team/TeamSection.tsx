import { Reveal } from "@/components/Reveal";
import { TeamGallery } from "./TeamGallery";

export function TeamSection() {
  return (
    <section
      id="team"
      className="scroll-mt-[var(--site-header-height)] bg-white px-[var(--grid-margin)] pt-[80px] pb-[clamp(2rem,5vw,4rem)]"
      aria-labelledby="the-team"
    >
      <Reveal>
        <h2 id="the-team" className="section-title">
          The Team
        </h2>
      </Reveal>

      <TeamGallery className="mt-[clamp(3rem,6vw,5rem)]" />
    </section>
  );
}
