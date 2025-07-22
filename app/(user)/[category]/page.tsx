"use client";

import { useState } from "react";
import { notFound, useParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";

import { Post, PostSection } from "./_components/PostSection/PostSection";
import { TagsFilter } from "./_components/TagsFilter";
import { TrendingPost } from "./_components/trendingPost/TrendingPost";
import { fetchPostsByCategory } from "./_lib/api/post";
import { Title } from "./_components/Title";

export default function Category() {
  const params = useParams();
  const category = params?.category ?? "";

  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const { data, isLoading, isError } = useQuery({
    queryKey: ["posts", category],
    queryFn: () => fetchPostsByCategory(category),
    staleTime: 1000 * 60 * 5,
    enabled: !!category,
  });

  if (!category) {
    return <p className="text-center text-gray-500">Catégorie non trouvée.</p>;
  }

  if (isError) {
    notFound();
    return (
      <p className="text-center text-red-500">Erreur lors du chargement</p>
    );
  }

  const filteredPosts = selectedTag
    ? data?.posts.filter((post: Post) =>
        post.tags?.some((tag: string) => tag === selectedTag)
      )
    : data?.posts ?? [];

  return (
    <div className="w-full h-fit py-4 md:py-12 md:px-24 px-4 flex flex-col md:flex-row gap-6 items-start justify-center">
      {isLoading ? (
        // skelet ou previsualisation de la page
        <>
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
        </>
      ) : (
        <>
          {filteredPosts && filteredPosts.length > 0 ? (
            <PostSection posts={filteredPosts} />
          ) : (
            <div className="flex flex-col justify-center items-center gap-8 border border-slate-400/30 shadow-lg rounded-lg md:w-4xl w-full py-12 px-4">
              <Title title="latest posts" />
              <div className="flex items-center justify-center w-full h-96 ">
                <p className="text-6xl text-slate-400 capitalize">Empty!</p>
              </div>
            </div>
          )}
          <aside className="flex flex-col md:w-96 gap-12">
            <TagsFilter
              tags={data?.categoryTags ?? []}
              selectedTag={selectedTag}
              onTagClick={(tag) =>
                setSelectedTag((prev) => (prev === tag ? null : tag))
              }
            />
            <TrendingPost />
          </aside>
        </>
      )}
    </div>
  );
}
