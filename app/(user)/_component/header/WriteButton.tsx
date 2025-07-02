"use client";

import { PencilIcon } from "../../_assets/icon";
import { useRouter } from "next/navigation";

export const WriteButton = () => {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push("/write")}
      className="group flex flex-col w-24 h-full justify-center items-center border-l border-slate-200 cursor-pointer hover:bg-slate-200/80 duration-300 rounded-lg"
    >
      <h3 className="font-semibold text-lg">Write</h3>
      <div className="w-12 h-3 transform transition-transform duration-300 group-hover:translate-x-2">
        <PencilIcon />
      </div>
    </div>
  );
};
