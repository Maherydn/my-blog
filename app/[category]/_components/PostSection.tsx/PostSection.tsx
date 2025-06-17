"use client";

import { Title } from "../Title";
import { PostCard } from "./PostCard";

type Post = {
  id: string;
  title: string;
  author: string;
  date: string;
  timeToRead: string;
  description: string;
  tags: string[];
  imageUrl: string;
  avatarUrl: string;
};

const fakePosts: Post[] = [
  {
    id: "1",
    title: "Taste my delightful cookie",
    author: "Nami",
    date: "Mar 10",
    timeToRead: "7 min read",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    tags: ["non_veg", "dessert", "popular"],
    imageUrl: "/Slider.png",
    avatarUrl: "/image/avatar1.png",
  },
  {
    id: "2",
    title: "Spicy ramen recipe",
    author: "Zoro",
    date: "Apr 05",
    timeToRead: "5 min read",
    description: "Discover the secrets of traditional Japanese ramen...",
    tags: ["noodle", "spicy", "japanese"],
    imageUrl: "/image/Food2.png",
    avatarUrl: "/image/avatar2.png",
  },
  {
    id: "3",
    title: "Taste my delightful cookie",
    author: "Nami",
    date: "Mar 10",
    timeToRead: "7 min read",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    tags: ["non_veg", "dessert", "popular"],
    imageUrl: "/image/Food.png",
    avatarUrl: "/image/avatar1.png",
  },
  {
    id: "4",
    title: "Spicy ramen recipe",
    author: "Zoro",
    date: "Apr 05",
    timeToRead: "5 min read",
    description: "Discover the secrets of traditional Japanese ramen...",
    tags: ["noodle", "spicy", "japanese"],
    imageUrl: "/image/Food2.png",
    avatarUrl: "/image/avatar2.png",
  },
  {
    id: "5",
    title: "Taste my delightful cookie",
    author: "Nami",
    date: "Mar 10",
    timeToRead: "7 min read",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    tags: ["non_veg", "dessert", "popular"],
    imageUrl: "/image/Food.png",
    avatarUrl: "/image/avatar1.png",
  },
  {
    id: "6",
    title: "Spicy ramen recipe",
    author: "Zoro",
    date: "Apr 05",
    timeToRead: "5 min read",
    description: "Discover the secrets of traditional Japanese ramen...",
    tags: ["noodle", "spicy", "japanese"],
    imageUrl: "/image/Food2.png",
    avatarUrl: "/image/avatar2.png",
  },
  {
    id: "7",
    title: "Taste my delightful cookie",
    author: "Nami",
    date: "Mar 10",
    timeToRead: "7 min read",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    tags: ["non_veg", "dessert", "popular"],
    imageUrl: "/image/Food.png",
    avatarUrl: "/image/avatar1.png",
  },
  {
    id: "8",
    title: "Spicy ramen recipe",
    author: "Zoro",
    date: "Apr 05",
    timeToRead: "5 min read",
    description: "Discover the secrets of traditional Japanese ramen loremq kjfq lmqj fmljsq fh fjd qkjf mqjqf iojq lj...",
    tags: ["noodle", "spicy", "japanese"],
    imageUrl: "/image/Food2.png",
    avatarUrl: "/image/avatar2.png",
  },
  // ➕ ajoute autant que tu veux...
];

export const PostSection = () => {

  // const tab = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <div className="flex flex-col justify-center items-center gap-8 border border-slate-400/30 shadow-lg rounded-lg md:w-4xl w-full py-12 px-4">
      <Title title="latest posts" />
      <div className="w-full max-h-screen h-fit overflow-y-scroll  flex flex-col items-start justify-start gap-10">
        {fakePosts.map((post) => (
          <PostCard key={post.id} {...post} />
        ))}
      </div>
    </div>
  );
};
