import { api } from '../../../_lib/axios';

// Fonction de fetch déplacée ici (ou bien dans un fichier séparé que tu importes)
export const fetchPostsByCategory = async (slug: string | string[]) => {
  const { data } = await api.get(`/user/categories/${slug}/posts`);
  return data;
};