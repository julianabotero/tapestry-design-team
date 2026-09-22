import type { CSSProperties } from "react";

export type HeroV5Phase = "bloom" | "cursors" | "settled";

export type HeroV5CursorSide = "left" | "right";
export type HeroV5CursorText = "white" | "black";

export type HeroV5CursorDriftPoint = { x: number; y: number };

export type HeroV5CursorDrift = {
  /** Waypoints as % of the hero frame (0–100). First point should match last for a seamless loop. */
  path: HeroV5CursorDriftPoint[];
  durationSec: number;
};

export type HeroV5CursorConfig = {
  id: string;
  name: string;
  fill: string;
  border: string;
  shadow: string;
  text: HeroV5CursorText;
  side: HeroV5CursorSide;
  x: number;
  y: number;
  enter: { x: number; y: number };
  order: number;
  drift: HeroV5CursorDrift;
};

export const heroV5Copy = {
  line1: "Building What’s Next",
  line2: "for Coach & Kate\u00A0Spade",
  subheadLine1: "We’re Tapestry’s in-house strategy and experience team",
  subheadLine2:
    "Bringing together brand, product, customer insight, and design to turn ambitious ideas into world-class retail\u00A0experiences.",
} as const;

export const heroV5Motion = {
  bloomDurationMs: 1100,
  bloomDelayMs: 80,
  textStartMs: 885,
  phases: [
    { at: 0, phase: "bloom" as const },
    { at: 885, phase: "cursors" as const },
    { at: 2085, phase: "settled" as const },
  ],
  wordRotateIntervalMs: 1500,
  wordRotateInitialDelayMs: 750,
  cursorEnterDurationMs: 650,
  cursorEnterStaggerMs: 70,
  cursorDriftStartOffsetMs: 200,
} as const;

const PATH_CENTER = { x: 50, y: 50 };

export function scaleCursorPath(
  path: HeroV5CursorDriftPoint[],
  scale: number,
  center = PATH_CENTER,
) {
  if (scale === 1) return path;
  return path.map((point) => ({
    x: Number((center.x + (point.x - center.x) * scale).toFixed(1)),
    y: Number((center.y + (point.y - center.y) * scale).toFixed(1)),
  }));
}

function pathPoint(x: number, y: number): HeroV5CursorDriftPoint {
  return { x, y };
}

export function heroV5CursorPathAnchor(cursorId: string): HeroV5CursorDriftPoint {
  const anchors: Record<string, HeroV5CursorDriftPoint> = {
    juliana: { x: 5, y: 68 },
    johnny: { x: 50, y: 12 },
    cong: { x: 16, y: 80 },
    mitra: { x: 88, y: 36 },
    sean: { x: 66, y: 80 },
    wendy: { x: 86, y: 60 },
    gulsheen: { x: 34, y: 80 },
  };
  return anchors[cursorId] ?? PATH_CENTER;
}

const BASE_CURSORS: HeroV5CursorConfig[] = [
  {
    id: "johnny",
    name: "Johnny Martinez",
    fill: "#9747FF",
    border: "#7939CC",
    shadow: "rgba(151,71,255,0.25)",
    text: "white",
    side: "left",
    x: 50,
    y: 12,
    enter: { x: 24, y: -220 },
    order: 2,
    drift: {
      path: [
        pathPoint(46, 10),
        pathPoint(48, 17),
        pathPoint(54, 14),
        pathPoint(52, 9),
        pathPoint(43, 11),
        pathPoint(46, 10),
      ],
      durationSec: 30,
    },
  },
  {
    id: "mitra",
    name: "Mitra Raveendran",
    fill: "#0D99FF",
    border: "#0A7ACC",
    shadow: "rgba(13,153,255,0.25)",
    text: "white",
    side: "left",
    x: 73.2,
    y: 29.8,
    enter: { x: 260, y: -35 },
    order: 4,
    drift: {
      path: [
        pathPoint(86, 28),
        pathPoint(80, 30),
        pathPoint(82, 38),
        pathPoint(90, 44),
        pathPoint(92, 34),
        pathPoint(86, 28),
      ],
      durationSec: 31,
    },
  },
  {
    id: "wendy",
    name: "Wendy Chan",
    fill: "#F24822",
    border: "#C23A1B",
    shadow: "rgba(242,72,34,0.25)",
    text: "white",
    side: "left",
    x: 77.8,
    y: 64.9,
    enter: { x: 235, y: -150 },
    order: 6,
    drift: {
      path: [
        pathPoint(84, 54),
        pathPoint(86, 48),
        pathPoint(92, 52),
        pathPoint(90, 66),
        pathPoint(82, 64),
        pathPoint(84, 54),
      ],
      durationSec: 33,
    },
  },
  {
    id: "sean",
    name: "Sean Kelly",
    fill: "#FFA629",
    border: "#CC8521",
    shadow: "rgba(255,166,41,0.25)",
    text: "black",
    side: "left",
    x: 62.9,
    y: 82.9,
    enter: { x: -20, y: 235 },
    order: 5,
    drift: {
      path: [
        pathPoint(62, 76),
        pathPoint(68, 70),
        pathPoint(72, 78),
        pathPoint(66, 86),
        pathPoint(58, 82),
        pathPoint(62, 76),
      ],
      durationSec: 28,
    },
  },
  {
    id: "cong",
    name: "Cong Kim",
    fill: "#FFCD29",
    border: "#CCA421",
    shadow: "rgba(255,205,41,0.25)",
    text: "black",
    side: "right",
    x: 26.3,
    y: 81.5,
    enter: { x: 210, y: 200 },
    order: 3,
    drift: {
      path: [
        pathPoint(14, 72),
        pathPoint(16, 66),
        pathPoint(22, 70),
        pathPoint(24, 82),
        pathPoint(16, 86),
        pathPoint(10, 78),
        pathPoint(14, 72),
      ],
      durationSec: 30,
    },
  },
  {
    id: "gulsheen",
    name: "Gulsheen Bhatia",
    fill: "#0D99FF",
    border: "#0A7ACC",
    shadow: "rgba(13,153,255,0.25)",
    text: "white",
    side: "right",
    x: 40.7,
    y: 67,
    enter: { x: -235, y: 95 },
    order: 7,
    drift: {
      path: [
        pathPoint(30, 74),
        pathPoint(36, 72),
        pathPoint(40, 80),
        pathPoint(34, 86),
        pathPoint(26, 82),
        pathPoint(30, 74),
      ],
      durationSec: 31,
    },
  },
  {
    id: "juliana",
    name: "Juliana Botero",
    fill: "#9747FF",
    border: "#7939CC",
    shadow: "rgba(151,71,255,0.25)",
    text: "white",
    side: "right",
    x: 5,
    y: 68,
    enter: { x: 8, y: 215 },
    order: 1,
    drift: {
      path: [
        pathPoint(4, 64),
        pathPoint(6, 58),
        pathPoint(10, 62),
        pathPoint(9, 72),
        pathPoint(3, 70),
        pathPoint(4, 64),
      ],
      durationSec: 29,
    },
  },
];

export function heroV5CursorDriftDelaySec(order: number) {
  const {
    cursorEnterDurationMs,
    cursorEnterStaggerMs,
    cursorDriftStartOffsetMs,
  } = heroV5Motion;

  return (
    (order * cursorEnterStaggerMs + cursorEnterDurationMs + cursorDriftStartOffsetMs) / 1000
  );
}

export function heroV5CursorDriftTimes(pointCount: number) {
  if (pointCount <= 1) return [0];
  return Array.from({ length: pointCount }, (_, index) => index / (pointCount - 1));
}

export const heroV5Cursors: HeroV5CursorConfig[] = BASE_CURSORS.map((cursor) => ({
  ...cursor,
  x: cursor.drift.path[0].x,
  y: cursor.drift.path[0].y,
}));

export const heroV5CssVars = {
  "--hero-v5-bloom-duration": `${heroV5Motion.bloomDurationMs}ms`,
  "--hero-v5-bloom-delay": `${heroV5Motion.bloomDelayMs}ms`,
  "--hero-v5-text-start": `${heroV5Motion.textStartMs}ms`,
} as CSSProperties;
