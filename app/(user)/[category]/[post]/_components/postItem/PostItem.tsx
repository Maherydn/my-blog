"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import TextMarkdown from "../TextMarkdown";
import { PostItemAuthor } from "./PostItemAuthor";
import { PostItemActionBar } from "./PostItemActionsBar";
import { useCounterStore } from "../../_store/useCounterStore";
import { toggleLike } from "../../_lib/api/post";

export interface PostData {
  post: {
    title: string;
    id: number;
    description: string;
    imageUrl: string;
    content: string;
  };
  author: {
    name: string;
    avatarUrl: string;
    date: string;
  };
  stats: {
    likes: number;
    comments: number;
    shares: number;
  };
  userHasLiked: boolean;
}

interface PostItemProps {
  data: PostData;
}

export const PostItem = ({ data }: PostItemProps) => {
  const [liked, setLiked] = useState(data.userHasLiked);
  const [likeCount, setLikeCount] = useState(data.stats.likes);

  const { setCount, count } = useCounterStore();

  useEffect(() => {
    setCount(data.stats.comments);
  }, [data.stats.comments, setCount]);

  const handleLike = async (postId: number) => {
    const message = await toggleLike(postId);
    if (message) console.log(message);
    setLiked(!liked);
    setLikeCount((prev) => prev + (liked ? -1 : 1));
  };

  const handleScrollToComments = () => {
    const commentsSection = document.getElementById("comments");
    if (commentsSection) {
      commentsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex flex-col gap-4 w-full">
      <PostItemAuthor
        title={data.post.title}
        subtitle={data.post.description}
        authorName={data.author.name}
        avatarUrl={data.author.avatarUrl}
      />

      <PostItemActionBar
        likeCount={likeCount}
        commentCount={count}
        shareCount={data.stats.shares}
        isLiked={liked}
        onLike={() => handleLike(data.post.id)}
        onComment={handleScrollToComments}
        onShare={() => console.log("Shared!")}
      />

      <div className="w-full md:h-96 h-48 relative">
        <Image
          src={data.post.imageUrl}
          fill
          alt="cookies"
          className="inset-0"
        />
      </div>

      <div className="w-full text-start space-y-4">
        <TextMarkdown content={data.post.content} />
      </div>
    </div>
  );
};
