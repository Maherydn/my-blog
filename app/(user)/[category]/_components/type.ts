// types.ts
export interface Post {
  id: number;
  title: string;
  slug: string;
  author: string;
  avatarUrl: string;
  date: string;
  timeToRead: string;
  description: string;
  tags: string[];
  imageUrl: string;
}

export interface InitialData {
  categoryTags: string[];
  posts: Post[];
  success: boolean;
}
