"use client";
import React from "react";
import { dataCategories } from "../../data/categories";

type Props = {
  selectedId: number | undefined;
  onChange: (id: number) => void;
};

export default function CategorySelector({ selectedId, onChange }: Props) {
  return (
    <div>
      <p className="text-xl font-medium text-gray-700 mb-2">
        Select a Category
      </p>
      <div className="flex gap-6">
        {dataCategories.map((data) => (
          <label key={data.id} className="flex items-center gap-2">
            <input
              type="radio"
              name="category"
              value={data.id}
              checked={selectedId === data.id}
              onChange={() => onChange(data.id)}
              className="accent-black"
            />
            <span className="capitalize">{data.name}</span>
          </label>
        ))}
      </div>
    </div>
  );
}
