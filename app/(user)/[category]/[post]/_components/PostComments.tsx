import { useMutation, useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import { createComment, fetchPostComment } from "../_lib/api/post";
import { AxiosError } from "axios";
import { useState } from "react";

export const PostComments = () => {
  const [content, setContent] = useState("");
  const params = useParams();
  const postSlug = params?.post ?? "";

  const {
  data,
  isLoading,
  isError,
  refetch, // N'oublie pas d'extraire refetch ici
} = useQuery({
  queryKey: ["comments", postSlug],
  queryFn: () => fetchPostComment(postSlug),
  staleTime: 1000 * 60 * 5,
  enabled: !!postSlug,
});

const mutation = useMutation({
  mutationFn: (commentData: any) => createComment(postSlug, commentData),
  onSuccess: (data) => {
    console.log("Commentaire créé avec succès :", data);
    refetch(); // Appel direct ici, pas besoin de onClick
  },
  onError: (error: AxiosError) => {
    console.error("Erreur API :", error);
    console.log("Message d'erreur :", error.response?.data?.errors);
  },
});


  const handleClick = (e: React.FormEvent) => {
    e.preventDefault();

    mutation.mutate({content});
  };

  if (isLoading) {
    return (
      <div className="flex flex-col w-full justify-start items-center py-12 px-4 gap-6">
        {[...Array(2)].map((_, i) => (
          <div
            key={i}
            className="w-full h-24 bg-gray-300 animate-pulse rounded-xl shadow"
          />
        ))}
      </div>
    );
  }

  return (
    <div className="w-full flex flex-col gap-12">
      <h3 className="capitalize text-xl text-slate-900 px-6 py-1 rounded-lg border border-slate-200/20 shadow-lg w-fit">
        comments
      </h3>

      <div className="flex md:flex-row flex-col h-fit gap-6">
        <textarea
          rows={4}
          className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-slate-500 transition duration-150 text-lg placeholder-gray-400 resize-none min-h-36"
          placeholder="Add a comment..."
          aria-label="Comment"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />

        <button
          onClick={handleClick}
          className="text-white uppercase text-xl bg-black px-6 py-2 rounded-lg shadow-lg h-fit"
        >
          send
        </button>
      </div>

      {isError || !data?.comments?.length ? (
        <div className="w-full text-center text-slate-500 text-lg py-8">
          No comments yet.
        </div>
      ) : (
        data.comments.map((comment: any, index: number) => (
          <div
            key={index}
            className="flex flex-col gap-12 border-l-2 border-l-slate-400/40 shadow-lg w-full py-6 pl-6 md:pl-24 pr-6"
          >
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-start gap-8">
                <div className="flex gap-2 h-full items-center">
                  <div className="h-8 w-8 rounded-full bg-slate-400"></div>
                  <h3 className="text-slate-800 font-semibold text-xl">
                    {comment.user.name}
                  </h3>
                </div>
                <p className="text-slate-400 text-lg">{comment.createdAt}</p>
              </div>
              <p className="text-slate-400 text-xl">{comment.content}</p>
            </div>
          </div>
        ))
      )}
    </div>
  );
};
