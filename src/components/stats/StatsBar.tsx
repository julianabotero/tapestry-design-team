"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { statsItems } from "@/content/stats";
import { StatsCounter } from "./StatsCounter";

function StatsBarItem({
  stat,
  index,
}: {
  stat: (typeof statsItems)[number];
  index: number;
}) {
  const reduceMotion = useReducedMotion();
  const [counterActive, setCounterActive] = useState(false);

  useEffect(() => {
    if (reduceMotion) setCounterActive(true);
  }, [reduceMotion]);

  return (
    <motion.article
      className={`stats-bar__item stats-bar__item--${stat.foreground}`}
      style={{ backgroundColor: stat.background }}
      initial={reduceMotion ? false : { opacity: 0, y: 28 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.45 }}
      transition={{
        duration: 0.55,
        delay: index * 0.12,
        ease: [0.22, 1, 0.36, 1],
      }}
      onAnimationComplete={() => {
        if (!reduceMotion) setCounterActive(true);
      }}
    >
      <p className="stats-bar__value">
        <StatsCounter value={stat.value} active={counterActive} />
      </p>
      <p className="stats-bar__label">{stat.label}</p>
    </motion.article>
  );
}

export function StatsBar() {
  return (
    <section className="stats-bar" aria-label="Team impact statistics">
      {statsItems.map((stat, index) => (
        <StatsBarItem key={stat.label} stat={stat} index={index} />
      ))}
    </section>
  );
}
