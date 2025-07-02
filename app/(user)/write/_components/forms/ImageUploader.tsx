"use client";
import React, { useRef } from "react";
import Image from "next/image";

interface Props {
  preview: string | null;
  onChange: (file: File) => void;
}

export default function ImageUploader({ preview, onChange }: Props) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) onChange(file);
  };

  return (
    <>
      <div
        className="w-full bg-black text-white h-64 flex items-center justify-center rounded-md overflow-hidden cursor-pointer relative"
        onClick={() => fileInputRef.current?.click()}
      >
        {preview ? (
          <Image
            src={preview}
            alt="Preview"
            fill
            className="object-cover w-full h-full"
          />
        ) : (
          <span className="text-lg">IMAGE HERE : )</span>
        )}
      </div>
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={handleFile}
      />
    </>
  );
}

