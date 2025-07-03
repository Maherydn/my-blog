"use client";

import { useState } from "react";
import { PostSection } from "./_components/PostSection.tsx/PostSection";
import { TagsFilter } from "./_components/TagsFilter";
import { TrendingPost } from "./_components/trendingPost/TrendingPost";

const categoryData = {
  categoryTags: ["non_veg", "dessert", "popular", "japanese"],
  posts: [
    {
      id: "1",
      title: "Taste my delightful cookie",
      slug: "taste-my-delightful-cookie",
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
      slug: "spicy-ramen-recipe",
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
      slug: "taste-my-delightful-cookie",
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
      slug: "spicy-ramen-recipe",
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
      slug: "taste-my-delightful-cookie",
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
      slug: "spicy-ramen-recipe",
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
      slug: "taste-my-delightful-cookie",
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
      slug: "spicy-ramen-recipe",
      author: "Zoro",
      date: "Apr 05",
      timeToRead: "5 min read",
      description: "Discover the secrets of traditional Japanese ramen...",
      tags: ["noodle", "spicy", "japanese"],
      imageUrl: "/image/Food2.png",
      avatarUrl: "/image/avatar2.png",
    },
  ],
};

export default function Category() {
   const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const filteredPosts = selectedTag
    ? categoryData.posts.filter((post) => post.tags.includes(selectedTag))
    : categoryData.posts;

  return (
    <div className="w-full h-fit py-4 md:py-12 md:px-24 flex md:flex-row flex-col-reverse items-start justify-center gap-4">
      <PostSection posts={filteredPosts} />
      <aside className="flex flex-col md:w-lg gap-12">
        <TagsFilter
          tags={categoryData.categoryTags}
          selectedTag={selectedTag}
          onTagClick={(tag) =>
            setSelectedTag((prev) => (prev === tag ? null : tag))
          }
        />
        <TrendingPost />
      </aside>
    </div>
  );
}
