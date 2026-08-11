"use client";

import { useEffect, useState } from "react";
import {
  heroV5Copy,
  heroV5Cursors,
  heroV5CssVars,
  heroV5Motion,
  type HeroV5Phase,
} from "@/content/heroV5";
import { HeroTeamCursor } from "./HeroTeamCursor";
import { HeroViewport } from "./HeroViewport";
import { PillNav } from "./PillNav";

function useHeroV5Phase() {
  const [phase, setPhase] = useState<HeroV5Phase>("bloom");

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setPhase("settled");
      return;
    }

    const timers = heroV5Motion.phases.map(({ at, phase: nextPhase }) =>
      window.setTimeout(() => setPhase(nextPhase), at),
    );

    return () => {
      timers.forEach((timer) => window.clearTimeout(timer));
    };
  }, []);

  return phase;
}

function HeroCanvas() {
  return <div className="hero-v5__canvas" aria-hidden />;
}

export function HeroSectionV5() {
  const phase = useHeroV5Phase();
  const cursorsActive = phase === "cursors" || phase === "settled";

  return (
    <HeroViewport style={heroV5CssVars}>
      <PillNav phase={phase} />
      <section data-hero-section className="hero-v5" data-phase={phase} aria-label="Introduction">
        <HeroCanvas />
        <div className="hero-v5__frame">
          <div className="hero-v5__copy">
            <h1 className="hero-v5__headline">
              <span className="hero-v5__headline-line">{heroV5Copy.line1}</span>
              <span className="hero-v5__headline-line hero-v5__headline-line--nowrap">
                {heroV5Copy.line2}
              </span>
            </h1>
            <p className="hero-v5__subhead">
              <span className="hero-v5__subhead-line">{heroV5Copy.subheadLine1}</span>
              <span className="hero-v5__subhead-line">{heroV5Copy.subheadLine2}</span>
            </p>
          </div>

          <div className="hero-v5__cursors">
            {heroV5Cursors.map((cursor) => (
              <HeroTeamCursor key={cursor.id} cursor={cursor} active={cursorsActive} />
            ))}
          </div>
        </div>
      </section>
    </HeroViewport>
  );
}
