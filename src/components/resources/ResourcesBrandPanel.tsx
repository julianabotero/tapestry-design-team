"use client";

import { useId, useState } from "react";
import { Icon } from "@/components/Icon";
import {
  resourceBrands,
  type ResourceBrandId,
} from "@/content/resources";

export function ResourcesBrandPanel() {
  const baseId = useId();
  const [activeBrandId, setActiveBrandId] = useState<ResourceBrandId>(
    resourceBrands[0]?.id ?? "coach",
  );

  const activeBrand =
    resourceBrands.find((brand) => brand.id === activeBrandId) ??
    resourceBrands[0];

  if (!activeBrand) {
    return null;
  }

  return (
    <div className="resources-brands">
      <div
        className="resources-brands__toggle"
        role="tablist"
        aria-label="Brand assets"
      >
        {resourceBrands.map((brand) => {
          const isActive = brand.id === activeBrandId;
          const tabId = `${baseId}-tab-${brand.id}`;
          const panelId = `${baseId}-panel-${brand.id}`;

          return (
            <button
              key={brand.id}
              type="button"
              role="tab"
              id={tabId}
              aria-selected={isActive}
              aria-controls={panelId}
              tabIndex={isActive ? 0 : -1}
              className="resources-brands__toggle-btn"
              data-active={isActive ? "true" : undefined}
              onClick={() => setActiveBrandId(brand.id)}
            >
              {brand.label}
            </button>
          );
        })}
      </div>

      <div
        id={`${baseId}-panel-${activeBrand.id}`}
        role="tabpanel"
        aria-labelledby={`${baseId}-tab-${activeBrand.id}`}
        className="resources-brands__panel"
      >
        <ul className="resources-brands__list">
          {activeBrand.assets.map((asset) => {
            const isComingSoon = Boolean(asset.comingSoon);
            const hasLink = Boolean(asset.href);

            return (
              <li key={asset.id} className="resources-brands__item">
                {isComingSoon ? (
                  <span className="resources-brands__row resources-brands__row--soon">
                    <span className="resources-brands__label">{asset.label}</span>
                    <span className="resources-brands__soon">Coming Soon</span>
                  </span>
                ) : hasLink ? (
                  <a
                    href={asset.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="resources-brands__row resources-brands__row--link"
                  >
                    <span className="resources-brands__label">{asset.label}</span>
                    <Icon name="north_east" size={18} />
                  </a>
                ) : (
                  <span className="resources-brands__row resources-brands__row--pending">
                    <span className="resources-brands__label">{asset.label}</span>
                    <Icon name="north_east" size={18} />
                  </span>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
