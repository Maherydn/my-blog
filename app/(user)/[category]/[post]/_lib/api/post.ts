import { api } from "@/app/(user)/_lib/axios";

// Fonction de fetch déplacée ici (ou bien dans un fichier séparé que tu importes)
export const fetchPostsBySlug = async (slug: string | string[]) => {
  const { data } = await api.get(`/user/posts/${slug}`);
  return data;
};

export const fetchPostComment = async (slug: string | string[]) => {
  const { data } = await api.get(`/user/posts/${slug}/comments`);
  return data;
};

export const createComment = async (slug: string | string[], commentData: any) => {
  const { data } = await api.post(`/user/posts/${slug}/comments`, commentData);
  return data;
};


