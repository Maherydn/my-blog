import { api } from "../../_lib/axios";

export const createPost = async (formData: any) => {
  const { data } = await api.post(`/user/posts`, formData);
  return data;
};
