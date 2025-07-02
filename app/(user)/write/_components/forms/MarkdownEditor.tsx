"use client";
import React from "react";
import MarkdownHelpModal from "../MarkdownHelpModal";
import TextMarkdown from "@/app/(user)/[category]/[post]/_components/TextMarkdown";

interface Props {
  content: string;
  onChange: (content: string) => void;
}

export default function MarkdownEditor({ content, onChange }: Props) {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <div className="w-full flex items-center justify-between">
          <label htmlFor="content" className="block text-xl font-medium text-gray-700">
            Content
          </label>
          <MarkdownHelpModal />
        </div>
        <textarea
          id="content"
          name="content"
          rows={10}
          placeholder="Write your content here..."
          value={content}
          onChange={(e) => onChange(e.target.value)}
          className="w-full border-b-2 border-gray-300 focus:outline-none px-3 py-2 rounded-md transition-colors duration-200 min-h-52 max-h-96"
        />
      </div>

      <div>
        <p className="text-lg font-semibold text-gray-700">Preview :</p>
        <TextMarkdown content={content} />
      </div>
    </div>
  );
}
