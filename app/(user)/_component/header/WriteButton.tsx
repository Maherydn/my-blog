"use client";

import { PencilIcon } from "../../_assets/icon";
import { useRouter } from "next/navigation";

export const WriteButton = () => {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push("/write")}
      className="group flex flex-col w-14 h-14 justify-center items-center border-l border-slate-200 cursor-pointer hover:bg-blue-600/80 duration-300 rounded-full fixed bottom-10 right-3 bg-blue-400"
    >
      <h3 className="font-semibold text-sm">Write</h3>
      <div className="w-8 h-3 transform transition-transform duration-300 group-hover:translate-x-2">
        <PencilIcon />
      </div>
    </div>
  );
};
