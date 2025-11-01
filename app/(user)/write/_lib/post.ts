import { api } from "../../_lib/axios";

export interface CreatePostType {
  title: string;
  description: string;
  categoryId: number;
  content: string;
  tagsIds: number[];
  imageFile?: File | null;
}

export const createPost = async (data: CreatePostType) => {
  const formData = new FormData();

  formData.append("title", data.title);
  formData.append("description", data.description);
  formData.append("categoryId", data.categoryId.toString());
  formData.append("content", data.content);

  data.tagsIds.forEach((id, index) => {
    formData.append(`tagsIds[${index}]`, id.toString());
  });

  if (data.imageFile) {
    formData.append("imageFile", data.imageFile);
  }

  const { data: response } = await api.post("/user/posts", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return response;
};
