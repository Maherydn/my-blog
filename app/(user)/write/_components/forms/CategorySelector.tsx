"use client";
import React from "react";
import { categories } from "../../data/categories";

type Props = {
  selectedId: string;
  onChange: (id: string) => void;
};

export default function CategorySelector({ selectedId, onChange }: Props) {
  return (
    <div>
      <p className="text-xl font-medium text-gray-700 mb-2">Select a Category</p>
      <div className="flex gap-6">
        {categories.map(({ id, name }) => (
          <label key={id} className="flex items-center gap-2">
            <input
              type="radio"
              name="category"
              value={id}
              checked={selectedId === id}
              onChange={() => onChange(id)}
              className="accent-black"
            />
            <span className="capitalize">{name}</span>
          </label>
        ))}
      </div>
    </div>
  );
}
