'use client'

import React from "react";

type PostItemActionProps = {
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  count: string | number;
  isLiked: boolean ,
  onClick?: () => void; 
};

export const PostItemAction = ({ icon: Icon, count, onClick, isLiked }: PostItemActionProps) => {
    
  return (
    <div className="flex gap-2 w-12 h-4 items-center">
      <button onClick={onClick} className={`focus:outline-none duration-300 cursor-pointer ${
          isLiked ? "text-blue-700" : "text-slate-700 "
        }`}>
        <Icon />
      </button>
      <p>{count}</p>
    </div>
  );
};
