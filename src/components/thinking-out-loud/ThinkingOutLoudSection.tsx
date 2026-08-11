import { Icon } from "@/components/Icon";
import { Reveal } from "@/components/Reveal";
import {
  thinkingOutLoudEssays,
  thinkingOutLoudIntro,
} from "@/content/thinkingOutLoud";

export function ThinkingOutLoudSection() {
  return (
    <section
      id="thinking-out-loud"
      className="thinking-out-loud scroll-mt-[var(--site-header-height)]"
      aria-labelledby="thinking-out-loud-title"
    >
      <div className="thinking-out-loud__inner px-[var(--grid-margin)]">
        <header className="thinking-out-loud__intro">
          <Reveal>
            <h2 id="thinking-out-loud-title" className="section-title">
              {thinkingOutLoudIntro.titleLines[0]}
              <br />
              {thinkingOutLoudIntro.titleLines[1]}
            </h2>
            <p className="thinking-out-loud__description">
              {thinkingOutLoudIntro.description}
            </p>
          </Reveal>
        </header>

        <div className="thinking-out-loud__grid">
          {thinkingOutLoudEssays.map((essay, index) => (
            <Reveal key={essay.id} delay={0.08 + index * 0.08}>
              <article className="thinking-out-loud__essay">
                <h3 className="thinking-out-loud__essay-title">{essay.title}</h3>
                <p className="thinking-out-loud__essay-description">
                  {essay.description}
                </p>
                <a
                  href={essay.learnMoreHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="thinking-out-loud__learn-more"
                >
                  {essay.learnMoreLabel ?? "Learn more"}
                  <Icon name="north_east" size={18} />
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
