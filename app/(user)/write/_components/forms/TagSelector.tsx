"use client";
import React from "react";
import { dataCategories } from "../../data/categories";

interface Props {
  categoryId: number;
  selectedTagIds: number[];
  onChange: (tagId: number) => void;
}

export default function TagSelector({ categoryId, selectedTagIds, onChange }: Props) {
  // const tags = tagsByCategory[categoryId] || [];

  return (
    <div>
      <p className="text-xl font-medium text-gray-700 mt-4 mb-2">
        Select Tags for <span className="capitalize">{categoryId}</span>
      </p>
      <div className="flex flex-wrap gap-4">
        {dataCategories[categoryId - 1].tags.map((data) => (
          <label key={data.id} className="flex items-center gap-2">
            <input
              type="checkbox"
              value={data.id}
              checked={selectedTagIds.includes(data.id)}
              onChange={() => onChange(data.id)}
              className="accent-black"
            />
            <span>{data.name}</span>
          </label>
        ))}
      </div>
    </div>
  );
}