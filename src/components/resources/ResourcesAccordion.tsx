"use client";

import { useId, useState } from "react";
import { Icon } from "@/components/Icon";
import type { ResourceAccordionItem } from "@/content/resources";

type ResourcesAccordionProps = {
  items: ResourceAccordionItem[];
};

export function ResourcesAccordion({ items }: ResourcesAccordionProps) {
  const baseId = useId();
  const [openId, setOpenId] = useState<string | null>(items[0]?.id ?? null);

  const handleToggle = (id: string) => {
    setOpenId((current) => (current === id ? null : id));
  };

  return (
    <div className="resources-accordion">
      {items.map((item) => {
        const isOpen = openId === item.id;
        const panelId = `${baseId}-${item.id}-panel`;

        return (
          <div
            key={item.id}
            className="resources-accordion__item"
            data-open={isOpen ? "true" : undefined}
          >
            <button
              type="button"
              className="resources-accordion__trigger"
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => handleToggle(item.id)}
            >
              <span className="resources-accordion__trigger-text">{item.title}</span>
              <span className="resources-accordion__icon" aria-hidden="true">
                <span className="resources-accordion__icon-line" />
                <span className="resources-accordion__icon-line resources-accordion__icon-line--vertical" />
              </span>
            </button>

            <div
              id={panelId}
              className="resources-accordion__panel"
              hidden={!isOpen}
            >
              <p className="resources-accordion__description">{item.description}</p>
              <a
                href={item.learnMoreHref}
                target="_blank"
                rel="noopener noreferrer"
                className="resources-accordion__learn-more"
              >
                {item.learnMoreLabel ?? "Learn more"}
                <Icon name="north_east" size={18} />
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
}
