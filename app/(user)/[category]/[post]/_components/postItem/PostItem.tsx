"use client";

import { useState } from "react";
import Image from "next/image";
import TextMarkdown from "../TextMarkdown";
import { PostItemAuthor } from "./PostItemAuthor";
import { PostItemActionBar } from "./PostItemActionsBar";

type PostData = {
  title: string;
  subtitle: string;
  author: {
    name: string;
    avatarUrl: string;
    date: string;
  };
  image: string;
  stats: {
    likes: number;
    comments: number;
    shares: number;
  };
  userHasLiked: boolean;
  description: string;
};

type PostItemProps = {
  data: PostData;
};

export const PostItem = ({ data }: PostItemProps) => {
  const [liked, setLiked] = useState(data.userHasLiked);
  const [likeCount, setLikeCount] = useState(data.stats.likes);

  const handleLike = () => {
    setLiked(!liked);
    setLikeCount((prev) => prev + (liked ? -1 : 1));
  };

  return (
      <div className="flex flex-col gap-4 w-full">
        {/* Auteur */}
        <PostItemAuthor
          title={data.title}
          subtitle={data.subtitle}
          authorName={data.author.name}
          avatarUrl={data.author.avatarUrl}
        />

        {/* Barre d'action */}
        <PostItemActionBar
          likeCount={likeCount}
          commentCount={data.stats.comments}
          shareCount={data.stats.shares}
          isLiked={liked}
          onLike={handleLike}
          onComment={() => console.log("Comment clicked")}
          onShare={() => console.log("Shared!")}
        />

        {/* Image */}
        <div className="w-full md:h-96 h-48 relative">
          <Image
            src={data.image}
            fill
            alt="cookies"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Contenu markdown */}
        <div className="w-full text-start space-y-4">
          <TextMarkdown content={data.description} />
        </div>
      </div>
    
  );
};
