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

export const createComment = async (
  slug: string | string[],
  commentData: { content: string }
) => {
  const { data } = await api.post(`/user/posts/${slug}/comments`, commentData);
  return data;
};

export interface SlugItem {
  slug: string;
}

export interface SlugsResponse {
  success: boolean;
  slugs: SlugItem[];
}

export async function fetchAllPostSlugs(): Promise<string[]> {
  const res = await api.get<SlugsResponse>("/posts/slugs");
  const data = res.data;

  if (!data.success) return [];
  return data.slugs.map((item) => item.slug);
}

interface LikeResponse {
  message: string;
}

export async function toggleLike(postId: number): Promise<string | null> {
  try {
    const res = await api.post<LikeResponse>(`/user/posts/${postId}/like`);
    return res.data.message;
  } catch (error) {
    console.error("Erreur lors du toggle du like :", error);
    return null;
  }
}

