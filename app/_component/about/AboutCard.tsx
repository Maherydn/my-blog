"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

type AboutCardProps = {
  href: string;
  imageUrl: string;
};

const AboutCard = ({ href, imageUrl }: AboutCardProps) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(href);
  };

  return (
    <div className="h-56 w-60 p-4 flex flex-col justify-between items-center">
      <div className="h-32 w-32 relative rounded-full overflow-hidden">
        <Image
          src={imageUrl}
          alt="Avatar"
          fill
          className="object-cover rounded-full"
        />
      </div>
      <button
        onClick={handleClick}
        className="w-44 py-1 text-center text-black capitalize bg-slate-400 rounded-full hover:bg-slate-600 transition duration-300 cursor-pointer"
      >
        select
      </button>
    </div>
  );
};

export default AboutCard;
