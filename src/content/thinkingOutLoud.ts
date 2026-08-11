export const thinkingOutLoudIntro = {
  titleLines: ["Thinking", "Out Loud"] as const,
  description:
    "A growing library of essays from our designers on the practices behind good work.",
} as const;

export type ThinkingOutLoudEssay = {
  id: string;
  title: string;
  description: string;
  learnMoreHref: string;
  learnMoreLabel?: string;
};

export const thinkingOutLoudEssays: ThinkingOutLoudEssay[] = [
  {
    id: "professional-accountability",
    title: "Professional Accountability",
    description:
      "Standards and expectations for design excellence, ownership, and delivery across Tapestry brands.",
    learnMoreHref:
      "https://ourtapestry-my.sharepoint.com/:w:/r/personal/skelly1_tapestry_com/_layouts/15/Doc.aspx?action=edit&sourcedoc=%7B3d8be927-2bde-4900-a8bf-e997a3655c40%7D&wdExp=TEAMS-TREATMENT&web=1",
    learnMoreLabel: "What we hold ourselves to",
  },
  {
    id: "feedback-management",
    title: "Feedback Management",
    description:
      "Guides for giving and receiving feedback with clarity, so collaboration stays constructive and actionable.",
    learnMoreHref:
      "https://ourtapestry-my.sharepoint.com/:w:/r/personal/skelly1_tapestry_com/_layouts/15/Doc.aspx?action=edit&sourcedoc=%7Bfb0da20e-3e7b-4efe-8e09-4d1a9afad93a%7D&wdExp=TEAMS-TREATMENT&web=1",
    learnMoreLabel: "See how we do it",
  },
  {
    id: "writing-as-a-thinking-tool",
    title: "Writing as a Thinking Tool",
    description:
      "Why scripting your thoughts sharpens presentations, feedback, and decision-making, not just documentation.",
    learnMoreHref:
      "https://ourtapestry-my.sharepoint.com/:w:/r/personal/skelly1_tapestry_com/_layouts/15/Doc.aspx?sourcedoc=%7B3884F7E6-BA9B-4F3C-8F70-F194F299CDD3%7D&file=Write%20More!.docx&action=default&mobileredirect=true",
    learnMoreLabel: "Try the exercise",
  },
];
