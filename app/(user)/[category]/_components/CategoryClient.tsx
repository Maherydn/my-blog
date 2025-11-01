"use client";

import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchPostsByCategory } from "../_lib/api/post";
import { Post, PostSection } from "./PostSection/PostSection";
import { Title } from "./Title";
import { TagsFilter } from "./TagsFilter";
import { TrendingPost } from "./trendingPost/TrendingPost";

export interface InitialData {
  categoryTags: string[];
  posts: Post[];
  success: boolean;
}

interface CategoryClientProps {
  category: string;
}

export default function CategoryClient({ category }: CategoryClientProps) {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  // ✅ Suppression de initialData inexistant
  const { data, isLoading, isError } = useQuery<InitialData>({
    queryKey: ["posts", category],
    queryFn: () => fetchPostsByCategory(category),
    staleTime: 1000 * 60 * 5,
    retry: 1, // Optionnel : réessaie une fois en cas d’erreur réseau
  });

  if (isLoading) {
    return (
      <div className="w-full h-fit py-4 md:py-12 md:px-24 px-4 flex flex-col md:flex-row gap-6 items-start justify-center">
        {/* Skeleton Loading */}
        <div className="w-full md:flex-1 flex flex-col gap-4 p-4 md:p-6 border border-slate-200 rounded-lg shadow-sm">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="w-full h-32 bg-gray-300 animate-pulse rounded-lg shadow"
            />
          ))}
        </div>
        <aside className="w-full md:w-96 flex flex-col gap-6">
          <div className="w-full h-60 bg-gray-300 animate-pulse rounded-lg shadow" />
          <div className="w-full h-96 bg-gray-300 animate-pulse rounded-lg shadow" />
        </aside>
      </div>
    );
  }

  if (isError || !data) {
    return (
      <div className="flex justify-center items-center h-60">
        <p className="text-red-500 text-lg">
          Impossible de charger les articles pour cette catégorie.
        </p>
      </div>
    );
  }

  const filteredPosts = selectedTag
    ? data.posts.filter((post) => post.tags?.includes(selectedTag))
    : data.posts;

  return (
    <div className="w-full h-fit py-4 md:py-12 md:px-24 px-4 flex flex-col md:flex-row gap-6 items-start justify-center">
      {filteredPosts.length > 0 ? (
        <PostSection posts={filteredPosts} />
      ) : (
        <div className="flex flex-col justify-center items-center gap-8 border border-slate-400/30 shadow-lg rounded-lg md:w-4xl w-full py-12 px-4">
          <Title title="latest posts" />
          <p className="text-6xl text-slate-400 capitalize">Empty!</p>
        </div>
      )}

      <aside className="flex flex-col md:w-96 gap-12">
        <TagsFilter
          tags={data.categoryTags}
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
