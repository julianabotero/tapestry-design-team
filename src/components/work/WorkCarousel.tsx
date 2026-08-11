"use client";

import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useCallback, useEffect, useMemo, useState } from "react";
import { workProjects } from "@/content/work";

const AUTO_ADVANCE_MS = 3600;
const CUBE_TILT_X = -14;
const CUBE_SPRING = {
  type: "spring" as const,
  stiffness: 190,
  damping: 24,
  mass: 0.95,
};

function wrapIndex(index: number, length: number) {
  return ((index % length) + length) % length;
}

/** translateZ for a regular n-gon prism so face width equals cube size */
function prismDepthCss(faceCount: number) {
  const step = 360 / faceCount;
  const half = step / 2;
  return `calc(var(--our-work-cube-size) / (2 * tan(${half}deg)))`;
}

export function WorkCarousel() {
  const reduceMotion = useReducedMotion();
  const [activeIndex, setActiveIndex] = useState(0);
  const count = workProjects.length;
  const faceAngle = 360 / count;
  const faceDepth = useMemo(() => prismDepthCss(count), [count]);

  const advance = useCallback(() => {
    setActiveIndex((current) => wrapIndex(current + 1, count));
  }, [count]);

  useEffect(() => {
    if (reduceMotion) return;
    const timer = window.setInterval(advance, AUTO_ADVANCE_MS);
    return () => window.clearInterval(timer);
  }, [advance, reduceMotion]);

  const activeProject = workProjects[activeIndex];

  if (reduceMotion) {
    return (
      <div className="our-work__carousel our-work__carousel--static">
        <ul className="our-work__carousel-static-grid">
          {workProjects.map((project) => (
            <li key={project.id}>
              <article className="our-work__carousel-static-card" aria-label={project.title}>
                <div
                  className="our-work__carousel-media"
                  style={{ aspectRatio: project.aspectRatio }}
                >
                  <Image
                    src={project.image}
                    alt={project.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="our-work__carousel-image"
                  />
                </div>
                <p className="our-work__carousel-title">{project.title}</p>
              </article>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  return (
    <div className="our-work__carousel our-work__carousel--cube">
      <div
        className="our-work__cube-scene"
        style={{ ["--our-work-cube-depth" as string]: faceDepth }}
      >
        <motion.div
          className="our-work__cube"
          style={{ transformStyle: "preserve-3d" }}
          initial={false}
          animate={{
            rotateX: CUBE_TILT_X,
            rotateY: -activeIndex * faceAngle,
          }}
          transition={CUBE_SPRING}
        >
          {workProjects.map((project, index) => (
            <article
              key={project.id}
              className="our-work__cube-face"
              style={{
                transform: `rotateY(${index * faceAngle}deg) translateZ(var(--our-work-cube-depth))`,
              }}
              aria-hidden={index !== activeIndex}
              aria-label={index === activeIndex ? project.title : undefined}
            >
              <Image
                src={project.image}
                alt={index === activeIndex ? project.alt : ""}
                fill
                sizes="(max-width: 768px) 72vw, 17.5rem"
                className="our-work__cube-face-image"
                priority={index === 0}
              />
            </article>
          ))}
        </motion.div>
      </div>

      <AnimatePresence mode="wait">
        <motion.p
          key={activeProject.id}
          className="our-work__carousel-title"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
        >
          {activeProject.title}
        </motion.p>
      </AnimatePresence>
    </div>
  );
}
