import type { CSSProperties } from "react";
import { Reveal } from "@/components/Reveal";
import { ESSENCE_SECTION_BG, essenceItems } from "@/content/essence";

export function EssenceSection() {
  return (
    <section
      aria-labelledby="our-essence"
      className="essence-section"
      style={
        {
          backgroundColor: ESSENCE_SECTION_BG,
          "--essence-bg": ESSENCE_SECTION_BG,
        } as CSSProperties
      }
    >
      <div className="essence-section__content px-[var(--grid-margin)] py-[clamp(4rem,8vw,6rem)]">
        <Reveal>
          <h2 id="our-essence" className="section-title">
            Our
            <br />
            Essence
          </h2>
        </Reveal>

        <div className="essence-section__grid mt-[clamp(3.5rem,7vw,5.5rem)]">
          {essenceItems.map((item, index) => (
            <Reveal key={item.key} delay={index * 0.1}>
              <article className="essence-section__item">
                <h3
                  className="essence-section__item-title"
                  style={{ color: item.color }}
                >
                  {item.title}
                </h3>
                <p className="essence-section__item-description">
                  {item.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
