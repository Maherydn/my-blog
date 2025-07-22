"use client";

import { Title } from "../Title";
import { PostCard } from "./PostCard";

export type Post = {
  id: string;
  slug: string;
  title: string;
  author: string;
  date: string;
  timeToRead: string;
  description: string;
  tags: string[];
  imageUrl: string;
  avatarUrl: string;
};

type Props = {
  posts: Post[];
};

export const PostSection = ({ posts }: Props) => {
  return (
    <div className="flex flex-col justify-center items-center gap-8 border border-slate-400/30 shadow-lg rounded-lg md:w-4xl w-full py-12 px-4">
      <Title title="latest posts" />
      <div className="w-full min-h-96 max-h-screen overflow-y-scroll flex flex-col items-start justify-start gap-10">
        {posts.map((post) => (
          <PostCard key={post.id} {...post} />
        ))}
      </div>
    </div>
  );
};
