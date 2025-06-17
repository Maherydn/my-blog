import { Title } from "./Title";

const tags = ["non_veg", "dessert", "popular"];

export const TagsFilter = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-8 p-16 border border-slate-400/30 shadow-lg rounded-lg  w-full h-fit">
      <Title title="tags" />
      <div className="w-full flex flex-wrap items-center md:justify-start justify-center gap-8">
        {tags.map((tag, index) => (
          <div
            key={index}
            className="w-fit px-6 py-2 rounded-full text-lg text-center shadow-lg border border-slate-400/20"
          >
            {tag}
          </div>
        ))}
      </div>
    </div>
  );
};
