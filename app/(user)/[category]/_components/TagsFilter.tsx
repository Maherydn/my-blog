"use client";

import { Title } from "./Title";


type TagsFilterProps = {
  tags: string[];
  selectedTag?: string | null;
  onTagClick?: (tag: string) => void;
};

export const TagsFilter = ({ tags, selectedTag, onTagClick }: TagsFilterProps) => {
  return (
    <div className="flex flex-col justify-center items-center gap-8 p-4 border border-slate-400/30 shadow-lg rounded-lg w-full h-fit">
      <Title title="tags" />
      <div className="w-full flex flex-wrap items-center md:justify-evenly justify-center gap-2">
        {tags.map((tag, index) => (
          <button
            key={index}
            onClick={() => onTagClick?.(tag)}
            className={`px-6 py-2 rounded-full text-lg text-center shadow-lg border transition ${
              tag === selectedTag
                ? "bg-slate-800 text-white"
                : "border-slate-400/20 hover:bg-slate-100"
            }`}
          >
            {tag}
          </button>
        ))}
      </div>
    </div>
  );
};
