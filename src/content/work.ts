export const workIntro = {
  subheader: "Design. Strategy. Execution.",
  title: "Our Work",
} as const;

export type WorkProject = {
  id: string;
  title: string;
  image: string;
  alt: string;
  aspectRatio: number;
};

/** Figma "Our work" frames — 2240×1792 (5:4). */
export const workProjects: WorkProject[] = [
  {
    id: "coach-woven-tote",
    title: "Project Name",
    image: "/work/coach-woven-tote.png",
    alt: "Coach woven tote campaign photography",
    aspectRatio: 5 / 4,
  },
  {
    id: "coach-heritage-trio",
    title: "Project Name",
    image: "/work/coach-heritage-trio.png",
    alt: "Coach heritage handbag collection",
    aspectRatio: 5 / 4,
  },
  {
    id: "coach-tabby-cherries",
    title: "Project Name",
    image: "/work/coach-tabby-cherries.png",
    alt: "Coach Tabby bag with cherry charm",
    aspectRatio: 5 / 4,
  },
  {
    id: "coach-tabby-library",
    title: "Project Name",
    image: "/work/coach-tabby-library.png",
    alt: "Coach Tabby bag on vintage books",
    aspectRatio: 5 / 4,
  },
  {
    id: "coach-monogram-street",
    title: "Project Name",
    image: "/work/coach-monogram-street.png",
    alt: "Coach monogram bag street style",
    aspectRatio: 5 / 4,
  },
  {
    id: "coach-stripe-tote",
    title: "Project Name",
    image: "/work/coach-stripe-tote.png",
    alt: "Coach striped crochet tote",
    aspectRatio: 5 / 4,
  },
];
