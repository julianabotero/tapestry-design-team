import type { CSSProperties } from "react";
import { CapabilitiesList } from "@/components/capabilities/CapabilitiesList";
import { Reveal } from "@/components/Reveal";
import {
  CAPABILITIES_SECTION_BG,
  CAPABILITIES_TEXT,
  capabilities,
} from "@/content/capabilities";

export function CapabilitiesSection() {
  return (
    <section
      id="capabilities"
      className="capabilities scroll-mt-[var(--site-header-height)]"
      aria-labelledby="capabilities-title"
      style={
        {
          "--capabilities-bg": CAPABILITIES_SECTION_BG,
          "--capabilities-text": CAPABILITIES_TEXT,
        } as CSSProperties
      }
    >
      <div className="capabilities__inner px-[var(--grid-margin)]">
        <Reveal>
          <h2 id="capabilities-title" className="section-title">
            Our
            <br />
            Capabilities
          </h2>
        </Reveal>

        <div className="capabilities__grid">
          {capabilities.map((capability, index) => (
            <Reveal key={capability.id} delay={index * 0.08}>
              <article
                className="capabilities__bucket"
                style={
                  {
                    "--capabilities-bucket-accent": capability.iconColor,
                  } as CSSProperties
                }
              >
                <img
                  src={capability.iconSrc}
                  alt=""
                  aria-hidden
                  className="capabilities__bucket-icon"
                />
                <h3 className="capabilities__bucket-title">
                  {capability.title}
                </h3>
                <p className="capabilities__bucket-description">
                  {capability.description}
                </p>
                <CapabilitiesList items={capability.items} />
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
