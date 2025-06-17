import { PostSection } from "./_components/PostSection.tsx/PostSection";
import { TagsFilter } from "./_components/TagsFilter";
import { TrendingPost } from "./_components/trendingPost/TrendingPost";

export default function Category() {
  // const tab = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  // const tab1 = [1, 2];
  return (
    <div className="w-full h-fit py-4 md:py-12 md:px-24 flex md:flex-row flex-col-reverse items-start justify-center gap-4 ">
      <PostSection />

      <div className="flex flex-col md:w-lg gap-12 ">
        <TagsFilter />
        <TrendingPost />
      </div>
    </div>
  );
}
