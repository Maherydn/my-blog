export const categories = [
  { id: "1", name: "Food" },
  { id: "2", name: "Lifestyle" },
  { id: "3", name: "Tech" },
  { id: "4", name: "Money" },
];

export const tagsByCategory: Record<string, { id: string; name: string }[]> = {
  1: [
    { id: "1", name: "Recipes" },
    { id: "2", name: "Nutrition" },
    { id: "3", name: "Vegan" },
    { id: "4", name: "Healthy Eating" },
  ],
  2: [
    { id: "5", name: "Fitness" },
    { id: "6", name: "Mindfulness" },
    { id: "7", name: "Home Decor" },
    { id: "8", name: "Self Care" },
  ],
  3: [
    { id: "9", name: "JavaScript" },
    { id: "10", name: "React" },
    { id: "11", name: "Gadgets" },
    { id: "12", name: "AI" },
  ],
  4: [
    { id: "13", name: "Saving Tips" },
    { id: "14", name: "Investing" },
    { id: "15", name: "Freelancing" },
    { id: "16", name: "Budgeting" },
  ],
};

export type Tag = {
  id: number;
  name: string;
};

export type Category = {
  id: number;
  name: string;
  slug: string;
  tags: Tag[];
};

export const dataCategories: Category[] = [
  {
    id: 1,
    name: "Food",
    slug: "food",
    tags: [
      {
        id: 1,
        name: "Recipes",
      },
      {
        id: 2,
        name: "Nutrition",
      },
      {
        id: 3,
        name: "Vegan",
      },
      {
        id: 4,
        name: "Healthy Eating",
      },
    ],
  },
  {
    id: 2,
    name: "Lifestyle",
    slug: "lifestyle",
    tags: [
      {
        id: 5,
        name: "Fitness",
      },
      {
        id: 6,
        name: "Mindfulness",
      },
      {
        id: 7,
        name: "Home Decor",
      },
      {
        id: 8,
        name: "Self Care",
      },
    ],
  },
  {
    id: 3,
    name: "Tech",
    slug: "tech",
    tags: [
      {
        id: 9,
        name: "JavaScript",
      },
      {
        id: 10,
        name: "React",
      },
      {
        id: 11,
        name: "Gadgets",
      },
      {
        id: 12,
        name: "AI",
      },
    ],
  },
  {
    id: 4,
    name: "Money",
    slug: "money",
    tags: [
      {
        id: 13,
        name: "Saving Tips",
      },
      {
        id: 14,
        name: "Investing",
      },
      {
        id: 15,
        name: "Freelancing",
      },
      {
        id: 16,
        name: "Budgeting",
      },
    ],
  },
];
