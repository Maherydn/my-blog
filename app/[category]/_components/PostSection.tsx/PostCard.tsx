"use client";

import Image from "next/image";
import React from "react";
import { PostTag } from "./PostTag";
import { useRouter } from "next/navigation"; 
import { useParams } from "next/navigation"; 

type PostCardProps = {
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

export const PostCard = ({
  slug,
  title,
  author,
  date,
  timeToRead,
  description,
  tags,
  imageUrl,
  // avatarUrl
}: PostCardProps) => {
  const router = useRouter();
  const params = useParams();

  const href = `/${params.category}/${slug}`;

  const handleClick = () => {
    router.push(href);
  };

  return (
    <div
      onClick={handleClick}
      className="p-4 md:h-60 w-full flex md:flex-row flex-col items-center justify-center gap-4 cursor- hover:border-slate-300/60 hover:border border-transparent border rounded-lg duration-300"
    >
      <div className="md:h-full md:w-64 h-48 w-full rounded-lg bg-slate-200 relative">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="h-full w-full object-cover rounded-lg"
        />
      </div>

      <div className="flex-1 h-full flex flex-col justify-between gap-2">
        <div className="h-8 w-80 py-2 flex items-center justify-between">
          <div className="flex items-center justify-between w-24">
            <div className="h-8 w-8 bg-slate-200 rounded-full relative">
              {/* <Image
                src={avatarUrl}
                alt=""
                fill
                className="h-full w-full object-cover rounded-lg"
              /> */}
            </div>
            <h3 className="text-lg text-slate-400 capitalize">{author}</h3>
          </div>
          <div className="w-px h-full bg-slate-200"></div>
          <p className="text-lg text-slate-400 capitalize">{date}</p>
          <div className="w-px h-full bg-slate-200"></div>
          <p className="text-lg text-slate-400 capitalize">{timeToRead}</p>
        </div>

        <h3 className="text-2xl font-bold capitalize">{title}</h3>

        <p className="text-lg text-slate-400 w-full">{description}</p>

        <div className="w-full h-12 flex items-center justify-start gap-4">
          {tags.map((tag, index) => (
            <PostTag key={index} label={tag} />
          ))}
        </div>
      </div>
    </div>
  );
};
