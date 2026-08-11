import { Reveal } from "@/components/Reveal";
import { workIntro } from "@/content/work";
import { WorkCarousel } from "./WorkCarousel";

export function WorkSection() {
  return (
    <section
      id="work"
      className="our-work scroll-mt-[var(--site-header-height)]"
      aria-labelledby="work-title"
    >
      <header className="our-work__header px-[var(--grid-margin)]">
        <Reveal>
          <p className="our-work__subheader">{workIntro.subheader}</p>
          <h2 id="work-title" className="section-title">
            {workIntro.title}
          </h2>
        </Reveal>
      </header>

      <div className="our-work__showcase px-[var(--grid-margin)]">
        <Reveal delay={0.08}>
          <WorkCarousel />
        </Reveal>
      </div>
    </section>
  );
}
