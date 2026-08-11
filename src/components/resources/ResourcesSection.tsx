import { Reveal } from "@/components/Reveal";
import { resourcesIntro } from "@/content/resources";
import { ResourcesBrandPanel } from "./ResourcesBrandPanel";
import { ResourcesYellowIcon } from "./ResourcesYellowIcon";

export function ResourcesSection() {
  return (
    <section
      id="resources"
      className="resources scroll-mt-[var(--site-header-height)]"
      aria-labelledby="resources-title"
    >
      <div className="resources__layout px-[var(--grid-margin)]">
        <header className="resources__intro">
          <Reveal>
            <h2 id="resources-title" className="resources__title">
              <span className="resources__title-line">Save</span>
              <span className="resources__title-line">Collaborate</span>
              <span className="resources__title-line resources__title-line--share">
                <ResourcesYellowIcon />
                <span>& Share</span>
              </span>
            </h2>
            <p className="resources__description">{resourcesIntro.description}</p>
          </Reveal>
        </header>

        <div className="resources__brands-wrap">
          <Reveal delay={0.1}>
            <ResourcesBrandPanel />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
