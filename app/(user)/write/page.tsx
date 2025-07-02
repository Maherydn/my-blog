"use client";

import { useState } from "react";
import CategorySelector from "./_components/forms/CategorySelector";
import TagSelector from "./_components/forms/TagSelector";
import ImageUploader from "./_components/forms/ImageUploader";
import MarkdownEditor from "./_components/forms/MarkdownEditor";

export default function WritePage() {

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [selectedTagIds, setSelectedTagIds] = useState<string[]>([]);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [content, setContent] = useState("");

  const handleImageChange = (file: File) => {
    setImageFile(file);
    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  const handleTagChange = (tagId: string) => {
    setSelectedTagIds((prev) =>
      prev.includes(tagId)
        ? prev.filter((id) => id !== tagId)
        : [...prev, tagId]
    );
  };


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const formData = {
      title,
      description,
      categoryId,
      tagIds: selectedTagIds,
      content,
      imageFile
    };

    console.log("Données à envoyer :", formData);
    // TODO: appel API
  };

  return (
   <div className="max-w-2xl mx-auto px-4 py-8 font-sans text-gray-900">
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Title */}
        <div>
          <label htmlFor="title" className="block text-2xl font-medium text-gray-700 mb-1">
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
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
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full text-xl text-gray-600 px-2 py-1 border-b border-gray-300 outline-none"
            placeholder="Write a short description..."
          />
        </div>

        {/* Category */}
        <CategorySelector selectedId={categoryId} onChange={(id) => {
          setCategoryId(id);
          setSelectedTagIds([]); // Reset des tags
        }} />

        {/* Tags */}
        {categoryId && (
          <TagSelector
            categoryId={categoryId}
            selectedTagIds={selectedTagIds}
            onChange={handleTagChange}
          />
        )}

        {/* Image */}
        <ImageUploader preview={imagePreview} onChange={handleImageChange} />

        {/* Markdown */}
        <MarkdownEditor content={content} onChange={setContent} />

        {/* Submit */}
        <div className="text-center pt-6">
          <button
            type="submit"
            className="bg-black text-white font-semibold text-xl px-12 py-2 rounded-md hover:bg-gray-700 transition duration-300"
          >
            PUBLISH BLOG
          </button>
        </div>
      </form>
    </div>
  );
}