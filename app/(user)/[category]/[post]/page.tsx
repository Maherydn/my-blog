"use client";

import { useParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { fetchPostsBySlug } from "./_lib/api/post";

import { PostItem } from "./_components/postItem/PostItem";
import { PostComments } from "./_components/PostComments";

export default function PostPage() {
  const params = useParams();
  const postSlug = params?.post ?? "";

  const { data, isLoading, isError } = useQuery({
    queryKey: ["posts", postSlug],
    queryFn: () => fetchPostsBySlug(postSlug),
    staleTime: 1000 * 60 * 5,
    enabled: !!postSlug,
  });

  if (isLoading) {
    return (
      <div className="flex flex-col w-full justify-start items-center py-12 px-4">
        <div className="w-full max-w-4xl flex flex-col gap-6">
          {/* Image placeholder */}
          <div className="w-full h-64 md:h-96 bg-gray-300 animate-pulse rounded-xl shadow" />

          {/* Zone de commentaires */}
          <div className="flex flex-col gap-4">
            <div className="w-1/3 h-6 bg-gray-300 animate-pulse rounded" />
            {[...Array(2)].map((_, i) => (
              <div
                key={i}
                className="w-full h-24 bg-gray-300 animate-pulse rounded-xl shadow"
              />
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex justify-center items-center h-40">
        <p className="text-red-500 text-sm">
          Une erreur est survenue lors du chargement de l article.
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col w-full justify-start items-center py-12 px-4">
      <div className="max-w-4xl w-full flex flex-col justify-between gap-8">
        <PostItem data={data} />
        <div className="w-full h-px bg-slate-400/50" />
        <PostComments />
      </div>
    </div>
  );
}
