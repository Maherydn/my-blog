'use client'

import { useRouter } from "next/navigation"; 

export const Logo = () => {
  const router = useRouter();
  return (
    <div className="w-32  h-full flex items-center justify-between uppercase">
      <h2 className="text-xl font-bold  text-slate-800">blog</h2>
      <div className="bg-slate-200 w-px h-full"></div>
      <p
        onClick={() => router.push("/")}
        className="text-lg font-semibold text-slate-500 cursor-pointer"
      >
        home
      </p>
    </div>
  );
};
