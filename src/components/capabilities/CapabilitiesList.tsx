"use client";

import { useState, type PointerEvent } from "react";

type CapabilitiesListProps = {
  items: string[];
};

export function CapabilitiesList({ items }: CapabilitiesListProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const handlePointerEnter = (
    index: number,
    event: PointerEvent<HTMLLIElement>,
  ) => {
    if (event.pointerType === "touch") {
      return;
    }

    setHoveredIndex(index);
  };

  const handlePointerLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <ul className="capabilities__list">
      {items.map((item, index) => {
        const isHovered = hoveredIndex === index;

        return (
          <li
            key={item}
            className="capabilities__list-item"
            data-hovered={isHovered ? "true" : undefined}
            onPointerEnter={(event) => handlePointerEnter(index, event)}
            onPointerLeave={handlePointerLeave}
          >
            <span className="capabilities__list-label">{item}</span>
          </li>
        );
      })}
    </ul>
  );
}
