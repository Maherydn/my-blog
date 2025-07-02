"use client";
import React from "react";
import { tagsByCategory } from "../../data/categories";

interface Props {
  categoryId: string;
  selectedTagIds: string[];
  onChange: (tagId: string) => void;
}

export default function TagSelector({ categoryId, selectedTagIds, onChange }: Props) {
  const tags = tagsByCategory[categoryId] || [];

  return (
    <div>
      <p className="text-xl font-medium text-gray-700 mt-4 mb-2">
        Select Tags for <span className="capitalize">{categoryId}</span>
      </p>
      <div className="flex flex-wrap gap-4">
        {tags.map(({ id, name }) => (
          <label key={id} className="flex items-center gap-2">
            <input
              type="checkbox"
              value={id}
              checked={selectedTagIds.includes(id)}
              onChange={() => onChange(id)}
              className="accent-black"
            />
            <span>{name}</span>
          </label>
        ))}
      </div>
    </div>
  );
}