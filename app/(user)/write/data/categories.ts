export const categories = [
  { id: "cat1", name: "tech" },
  { id: "cat2", name: "lifestyle" },
  { id: "cat3", name: "travel" },
];

export const tagsByCategory: Record<string, { id: string; name: string }[]> = {
  cat1: [
    { id: "tag1", name: "JavaScript" },
    { id: "tag2", name: "React" },
    { id: "tag3", name: "Next.js" },
    { id: "tag4", name: "DevOps" },
  ],
  cat2: [
    { id: "tag5", name: "Nutrition" },
    { id: "tag6", name: "Fitness" },
    { id: "tag7", name: "Mindfulness" },
  ],
  cat3: [
    { id: "tag8", name: "Europe" },
    { id: "tag9", name: "Asia" },
    { id: "tag10", name: "Budget" },
    { id: "tag11", name: "Adventure" },
  ],
};