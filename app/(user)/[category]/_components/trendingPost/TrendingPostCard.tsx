import { useParams, useRouter } from "next/navigation";

type TrendingPostCardProps = {
  id: string;
  author: string;
  description: string;
  avatarUrl: string;
};

export const TrendingPostCard = ({
  // id,
  author,
  description,
}: // avatarUrl,
TrendingPostCardProps) => {
  const router = useRouter();
  const params = useParams();

  const href = `/${params.category}/is-trending`;
  const handleClick = () => {
    router.push(href);
  };
  return (
    <div onClick={handleClick} className="w-full flex flex-col gap-1 cursor-pointer hover:border-slate-300/60 hover:border border-transparent border rounded-lg duration-300 px-8 py-1">
      <div className="flex items-center justify-between w-32">
        <div className="h-16 w-16 bg-slate-200 rounded-full">
          {/* <img src={avatarUrl} alt="" /> */}
        </div>
        <h3 className="text-2xl text-slate-400 capitalize">{author} </h3>
      </div>
      <p className="text-slate-800 text-2xl font-semibold">{description}</p>
    </div>
  );
};
