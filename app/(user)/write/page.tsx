"use client";

import { useState, FormEvent } from "react";
import CategorySelector from "./_components/forms/CategorySelector";
import TagSelector from "./_components/forms/TagSelector";
import ImageUploader from "./_components/forms/ImageUploader";
import MarkdownEditor from "./_components/forms/MarkdownEditor";
import { useMutation } from "@tanstack/react-query";
import { createPost, CreatePostType } from "./_lib/post";
import { AxiosError } from "axios";
import toast from "react-hot-toast";

interface CreatePostResponse {
  id: number;
  title: string;
  description: string;
  content: string;
  imageUrl?: string;
  categoryId: number;
  tags: { id: number; name: string }[];
  createdAt: string;
}

export default function WritePage() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [categoryId, setCategoryId] = useState<number>();
  const [selectedTagIds, setSelectedTagIds] = useState<number[]>([]);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [content, setContent] = useState("");

  const handleImageChange = (file: File) => {
    setImageFile(file);
    const reader = new FileReader();
    reader.onloadend = () => setImagePreview(reader.result as string);
    reader.readAsDataURL(file);
  };

  const resetForm = () => {
    setTitle("");
    setDescription("");
    setCategoryId(undefined);
    setSelectedTagIds([]);
    setImagePreview(null);
    setImageFile(null);
    setContent("");
  };

  const handleTagChange = (tagId: number) => {
    setSelectedTagIds((prev) =>
      prev.includes(tagId)
        ? prev.filter((id) => id !== tagId)
        : [...prev, tagId]
    );
  };

  // ✅ Mutation typée avec CreatePostType
  const mutation = useMutation<CreatePostResponse, AxiosError, CreatePostType>({
    mutationFn: (variables) => createPost(variables),
    onSuccess: () => {
      // console.log("✅ Post créé avec succès :", data);
      toast.success("Post créé avec succès ");
      resetForm();
    },
    onError: () => {
      // console.error("❌ Erreur API :", error);
      // console.log("Détails :", error.response?.data);
      toast.error("Une erreur est survenue");
    },
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!categoryId) return;

    const postData: CreatePostType = {
      title,
      description,
      categoryId,
      content,
      tagsIds: selectedTagIds,
      imageFile,
    };

    mutation.mutate(postData);

  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-8 font-sans text-gray-900">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label
            htmlFor="title"
            className="block text-2xl font-medium text-gray-700 mb-1"
          >
            Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full text-2xl font-bold px-2 py-1 border-b border-gray-300 outline-none"
            placeholder="Enter your blog title..."
          />
        </div>

        <div>
          <label
            htmlFor="description"
            className="block text-xl font-medium text-gray-700 mb-1"
          >
            Description
          </label>
          <input
            type="text"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full text-xl text-gray-600 px-2 py-1 border-b border-gray-300 outline-none"
            placeholder="Write a short description..."
          />
        </div>

        <CategorySelector
          selectedId={categoryId}
          onChange={(id) => {
            setCategoryId(id);
            setSelectedTagIds([]);
          }}
        />

        {categoryId && (
          <TagSelector
            categoryId={categoryId}
            selectedTagIds={selectedTagIds}
            onChange={handleTagChange}
          />
        )}

        <ImageUploader preview={imagePreview} onChange={handleImageChange} />

        <MarkdownEditor content={content} onChange={setContent} />

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
