import { TrendingPostCard } from "./TrendingPostCard";

export const TrendingPost = () => {
  const tab1 = [
  {
    "id": "1",
    "author": "Nami",
    "description": "Exploring the world of cookies and baking.",
    "avatarUrl": "/image/avatar1.png"
  },
  {
    "id": "2",
    "author": "Luffy",
    "description": "Adventures in the Grand Line and favorite meals.",
    "avatarUrl": "/image/avatar2.png"
  },
  {
    "id": "3",
    "author": "Zoro",
    "description": "Discipline, training, and samurai lifestyle insights.",
    "avatarUrl": "/image/avatar3.png"
  },
]
;

  return (
    <div className="flex flex-col justify-center items-center gap-8 py-16 px-8 border border-slate-400/30 shadow-lg rounded-lg  w-full h-fit">
      <h2 className="capitalize font-bold text-4xl text-slate-400">trending post</h2>
      <div className="w-full flex flex-col p-4 gap-6 min-h-96">
        {tab1.map((item) => (
          <TrendingPostCard key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};
