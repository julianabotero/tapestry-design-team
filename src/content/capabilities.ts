export type Capability = {
  id: string;
  title: string;
  description: string;
  iconSrc: string;
  iconColor: string;
  items: string[];
};

export const CAPABILITIES_SECTION_BG = "#F5F3EF";
export const CAPABILITIES_TEXT = "#2D2D2D";

export const capabilities: Capability[] = [
  {
    id: "experience-design",
    title: "Experience Design",
    description: "Creating intuitive, customer-centered digital experiences.",
    iconSrc: "/capabilities/experience-design.svg",
    iconColor: "#FE5D62",
    items: [
      "UX Design",
      "UI Design",
      "Interaction Design",
      "Accessibility",
      "Information Architecture",
      "Prototyping",
    ],
  },
  {
    id: "visual-brand",
    title: "Visual & Brand",
    description: "Bringing luxury brands to life through thoughtful visual craft.",
    iconSrc: "/capabilities/visual-brand.svg",
    iconColor: "#38A085",
    items: [
      "Visual Design",
      "Art Direction",
      "Motion",
      "Illustration",
      "Photography Direction",
      "Content Design",
    ],
  },
  {
    id: "commerce-innovation",
    title: "Commerce & Innovation",
    description: "Designing modern shopping experiences powered by technology.",
    iconSrc: "/capabilities/commerce-innovation.svg",
    iconColor: "#2E689E",
    items: [
      "AI Experiences",
      "Personalization",
      "Product Discovery",
      "Product Pages",
      "Checkout",
      "Omnichannel",
    ],
  },
  {
    id: "research-systems",
    title: "Research & Systems",
    description: "Scaling quality through insight and consistency.",
    iconSrc: "/capabilities/research-systems.svg",
    iconColor: "#5F3EAD",
    items: [
      "UX Research",
      "Analytics",
      "A/B Testing",
      "Design Systems",
      "Components",
      "Design Tokens",
    ],
  },
];
