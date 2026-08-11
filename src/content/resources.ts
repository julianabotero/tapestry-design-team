export const resourcesIntro = {
  description:
    "Our growing library of resources, best practices, and branding assets. We're adding more content soon!",
} as const;

export type ResourceBrandId = "coach" | "kate-spade";

export type BrandAssetItem = {
  id: string;
  label: string;
  /** Figma file/frame URL. Omit when comingSoon. */
  href?: string;
  comingSoon?: boolean;
};

export type ResourceBrand = {
  id: ResourceBrandId;
  label: string;
  assets: BrandAssetItem[];
};

export const resourceBrands: ResourceBrand[] = [
  {
    id: "coach",
    label: "Coach",
    assets: [
      {
        id: "grid-system",
        label: "Grid System",
        href: "",
      },
      {
        id: "logos",
        label: "Logos",
        href: "",
      },
      {
        id: "fonts",
        label: "Fonts",
        href: "",
      },
      {
        id: "imagery",
        label: "Imagery",
        href: "",
      },
      {
        id: "spacing",
        label: "Spacing",
        comingSoon: true,
      },
      {
        id: "buttons",
        label: "Buttons",
        comingSoon: true,
      },
    ],
  },
  {
    id: "kate-spade",
    label: "Kate Spade",
    assets: [
      {
        id: "grid-system",
        label: "Grid System",
        href: "",
      },
      {
        id: "logos",
        label: "Logos",
        href: "",
      },
      {
        id: "fonts",
        label: "Fonts",
        href: "",
      },
      {
        id: "imagery",
        label: "Imagery",
        href: "",
      },
      {
        id: "spacing",
        label: "Spacing",
        comingSoon: true,
      },
      {
        id: "buttons",
        label: "Buttons",
        comingSoon: true,
      },
    ],
  },
];

// Kept for ResourceLinkCard if reused elsewhere.
export type FeedbackGuide = {
  id: string;
  title: string;
  description: string;
  href: string;
};

export const feedbackGuides: FeedbackGuide[] = [
  {
    id: "give-feedback",
    title: "How to give feedback",
    description:
      "Principles and prompts for sharing constructive, actionable feedback with the team.",
    href: "https://example.com/give-feedback",
  },
  {
    id: "receive-feedback",
    title: "How to receive feedback",
    description:
      "Guidance for listening openly, asking clarifying questions, and turning input into better work.",
    href: "https://example.com/receive-feedback",
  },
];
