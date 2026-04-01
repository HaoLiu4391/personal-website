import type { Metadata } from "next";

export const siteConfig: Metadata = {
  title: "Hao Liu | Cognitive Scientist & AI Researcher",
  description:
    "Personal website of Hao Liu — PhD student in Cognitive Sciences at UC Irvine, researching computational memory models, multi-agent systems, and the intersection of AI and cognitive science.",
  keywords: [
    "Hao Liu",
    "cognitive science",
    "AI researcher",
    "computational neuroscience",
    "UCI",
    "NYU",
    "Tsinghua",
    "memory models",
    "multi-agent systems",
    "NeurIPS",
    "machine learning",
    "neuroscience",
    "portfolio",
  ] as Array<string>,
  authors: {
    name: "Hao Liu",
    url: "https://github.com/haoliu4391",
  },
} as const;
