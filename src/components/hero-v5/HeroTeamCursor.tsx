"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useMemo, useState, type CSSProperties } from "react";
import {
  heroV5CursorDriftDelaySec,
  heroV5CursorDriftTimes,
  heroV5CursorPathAnchor,
  scaleCursorPath,
  type HeroV5CursorConfig,
} from "@/content/heroV5";

type HeroTeamCursorProps = {
  cursor: HeroV5CursorConfig;
  active: boolean;
};

const MOBILE_PATH_SCALE = 0.94;
const MOBILE_MAX_WIDTH = 640;

function CursorArrow({ color }: { color: string }) {
  return (
    <svg
      className="hero-v5__cursor-svg"
      width="26"
      height="28"
      viewBox="0 0 26 28"
      fill="none"
      aria-hidden
    >
      <path
        d="M3 2.5 L3 22 L8.4 16.6 L12 24.8 L15.6 23.2 L12 15 L19.6 15 Z"
        fill={color}
        stroke="#ffffff"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function useDocumentVisible() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const updateVisibility = () => setVisible(!document.hidden);
    updateVisibility();
    document.addEventListener("visibilitychange", updateVisibility);
    return () => document.removeEventListener("visibilitychange", updateVisibility);
  }, []);

  return visible;
}

function useMobilePathScale() {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const query = window.matchMedia(`(max-width: ${MOBILE_MAX_WIDTH}px)`);
    const updateScale = () => setScale(query.matches ? MOBILE_PATH_SCALE : 1);

    updateScale();
    query.addEventListener("change", updateScale);
    return () => query.removeEventListener("change", updateScale);
  }, []);

  return scale;
}

export function HeroTeamCursor({ cursor, active }: HeroTeamCursorProps) {
  const reduceMotion = useReducedMotion();
  const documentVisible = useDocumentVisible();
  const mobilePathScale = useMobilePathScale();
  const shouldAnimatePath = active && !reduceMotion && documentVisible;

  const path = useMemo(
    () =>
      scaleCursorPath(
        cursor.drift.path,
        mobilePathScale,
        heroV5CursorPathAnchor(cursor.id),
      ),
    [cursor.drift.path, cursor.id, mobilePathScale],
  );

  const pathAnimation = useMemo(
    () => ({
      left: path.map((point) => `${point.x}%`),
      top: path.map((point) => `${point.y}%`),
      times: heroV5CursorDriftTimes(path.length),
    }),
    [path],
  );

  const pathTransition = useMemo(
    () => ({
      duration: cursor.drift.durationSec,
      repeat: Infinity,
      ease: "easeInOut" as const,
      delay: heroV5CursorDriftDelaySec(cursor.order),
      times: pathAnimation.times,
    }),
    [cursor.drift.durationSec, cursor.order, pathAnimation.times],
  );

  const pillStyle = {
    "--order": cursor.order,
    "--pill-fill": cursor.fill,
    "--pill-border": cursor.border,
    "--pill-shadow": cursor.shadow,
  } as CSSProperties;

  const enterStyle = {
    "--enter-x": `${cursor.enter.x}px`,
    "--enter-y": `${cursor.enter.y}px`,
    "--order": cursor.order,
  } as CSSProperties;

  const restPosition = {
    left: `${cursor.x}%`,
    top: `${cursor.y}%`,
  };

  return (
    <motion.div
      className="hero-v5__cursor"
      data-side={cursor.side}
      data-active={active ? "true" : "false"}
      data-text={cursor.text}
      style={pillStyle}
      animate={
        shouldAnimatePath
          ? { left: pathAnimation.left, top: pathAnimation.top }
          : restPosition
      }
      transition={shouldAnimatePath ? pathTransition : { duration: 0 }}
    >
      <div className="hero-v5__cursor-enter" data-active={active ? "true" : "false"} style={enterStyle}>
        <div className="hero-v5__cursor-body">
          <span className="hero-v5__cursor-arrow">
            <CursorArrow color={cursor.fill} />
          </span>
          <span className="hero-v5__cursor-pill">{cursor.name}</span>
        </div>
      </div>
    </motion.div>
  );
}
