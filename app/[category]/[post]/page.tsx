"use client";

import { PostComments } from "./_components/PostComments";
import { PostItem } from "./_components/postItem/PostItem";

const postData = {
  title: "Taste my delightful cookie.",
  subtitle: "Explore the recipe of best chocolate chip cookies",
  author: {
    name: "John Doe",
    avatarUrl: "", // tu peux ajouter une URL vers une image ici si besoin
    date: "2025-06-18",
  },
  image: "/image/coockies.png",
  stats: {
    likes: 25,
    comments: 10,
    shares: 5,
  },
  userHasLiked: false, // ✅ état initial du like par l'utilisateur
  description: `# What is a Chocolate Chip Cookie?

A chocolate chip cookie is a sweet baked treat that is recognized by its butter flavor and the inclusion of chocolate chips. Some variations can include nuts, oatmeal or raisins as well. Commercially available formats of chocolate chips cookies include:

- Fresh  
- Packaged  
- Frozen dough

## Common variations of chocolate chip cookies include:

- Chewy  
- Crispy  
- Chunky

## Commercial production

Chocolate chip cookies are commercially produced through the following process:

- Scaling and weighing ingredients separately  
- First stage mixing: fat, sugars, water, salt, eggs, vanilla and leavening agent are mixed in a horizontal or vertical mixer  
- Second stage mixing: flour is added and mixing continues till homogeneous  
- Chocolate chip addition  
- Forming: dough is fed to the hopper of a wire cut machine, and the cut dough pieces are placed on a greased baking tray  
- Baking: cookie dough is baked at 180 – 220 °C (356 – 428 °F) for 7 min  
- Cooling: cookies are cooled down for 5 min  
- Packaging and storage`,
};

export default function PostPage() {
  // const res = await fetch("https://api.example.com/posts/123", {
  //   cache: "no-store",
  // });
  // const postData = await res.json();

  return (
    <div className="flex flex-col w-full justify-start items-center py-12">
      <div className="md:w-2xl w-full px-2 flex flex-col justify-between gap-8">
        <PostItem data={postData} />
        <div className="w-full h-px bg-slate-400/50"></div>
        <PostComments />
      </div>
    </div>
  );
}
