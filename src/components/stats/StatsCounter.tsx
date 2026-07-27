"use client";

import { useEffect, useRef } from "react";
import {
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion";

type StatsCounterProps = {
  value: number;
  active: boolean;
};

export function StatsCounter({ value, active }: StatsCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const reduceMotion = useReducedMotion();
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, {
    damping: 30,
    stiffness: 100,
    mass: 0.8,
  });

  useEffect(() => {
    if (!active) return;
    motionValue.set(value);
  }, [active, motionValue, value]);

  useEffect(() => {
    if (reduceMotion) {
      if (ref.current) {
        ref.current.textContent = String(value);
      }
      return;
    }

    return spring.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = String(Math.round(latest));
      }
    });
  }, [spring, value, reduceMotion]);

  const display = reduceMotion ? value : active ? undefined : 0;

  return (
    <span ref={ref} className="stats-bar__counter">
      {display ?? 0}
    </span>
  );
}
