"use client";

import { useRef, useState } from "react";
import TextMarkdown from "../[category]/[post]/_components/TextMarkdown";
import Image from "next/image";

export default function WritePage() {
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [content, setContent] = useState("");
  const [category, setCategory] = useState(""); // 🆕 catégorie sélectionnée

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-8 font-sans text-gray-900">
      <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
        {/* Title */}
        <div>
          <label htmlFor="title" className="block text-2xl font-medium text-gray-700 mb-1">
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            className="w-full text-2xl font-bold px-2 py-1 border-b border-gray-300 outline-none"
            placeholder="Enter your blog title..."
          />
        </div>

        {/* Description */}
        <div>
          <label htmlFor="description" className="block text-xl font-medium text-gray-700 mb-1">
            Description
          </label>
          <input
            type="text"
            id="description"
            name="description"
            className="w-full text-xl text-gray-600 px-2 py-1 border-b border-gray-300 outline-none"
            placeholder="Write a short description..."
          />
        </div>

        {/* Category Radio Buttons */}
        <div>
          <p className="text-xl font-medium text-gray-700 mb-2">Select a Category</p>
          <div className="flex gap-6">
            {["tech", "lifestyle", "travel"].map((cat) => (
              <label key={cat} className="flex items-center gap-2">
                <input
                  type="radio"
                  name="category"
                  value={cat}
                  checked={category === cat}
                  onChange={(e) => setCategory(e.target.value)}
                  className="accent-black"
                />
                <span className="capitalize">{cat}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Image */}
        <div
          className="w-full bg-black text-white h-64 flex items-center justify-center rounded-md overflow-hidden cursor-pointer relative"
          onClick={() => fileInputRef.current?.click()}
        >
          {imagePreview ? (
            <Image src={imagePreview} alt="Preview" fill className="object-cover w-full h-full" />
          ) : (
            <span className="text-lg">IMAGE HERE : )</span>
          )}
        </div>
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleImageChange}
        />

        {/* Content */}
        <div className="space-y-6">
          <div className="space-y-2">
            <label htmlFor="content" className="block text-xl font-medium text-gray-700">
              Content{" "}
              <span className="text-sm text-slate-400">
                (Utilise Word pour formater ton texte afin d'obtenir un rendu similaire à l'exemple)
              </span>
            </label>
            <textarea
              id="content"
              name="content"
              rows={10}
              placeholder="Write your content here..."
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-full border-b-2 border-gray-300 focus:outline-none px-3 py-2 rounded-md transition-colors duration-200 min-h-52 max-h-96"
            />
          </div>

          <div>
            <p className="text-lg font-semibold text-gray-700">Preview :</p>
            <TextMarkdown content={content} />
          </div>
        </div>

        {/* Submit */}
        <div className="text-center pt-6">
          <button className="bg-black text-white font-semibold text-2xl px-6 py-2 rounded-md hover:bg-gray-800 transition">
            PUBLISH BLOG
          </button>
        </div>
      </form>
    </div>
  );
}
