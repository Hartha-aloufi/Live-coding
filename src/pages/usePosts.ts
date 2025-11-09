export interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
  tags: string[];
  reactions: number;
}

export interface PostsResponse {
  posts: Post[];
  total: number;
  skip: number;
  limit: number;
}

export async function fetchPosts({ page = 1, limit = 10 }) {
  const skip = (page - 1) * limit;

  const res = await fetch(
    `https://dummyjson.com/posts?limit=${limit}&skip=${skip}`
  );

  if (!res.ok) throw new Error("Failed to fetch posts");

  return res.json();
}

import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface UsePostsProps {
  page?: number;
  limit?: number;
}

export function usePosts({ page = 1, limit = 10 }: UsePostsProps = {}) {
  const { data, isLoading, isError } = useQuery<PostsResponse>({
    queryKey: ["posts", page, limit],
    queryFn: async () => {
      const res = await axios.get(`https://dummyjson.com/posts`, {
        params: { limit, skip: (page - 1) * limit },
      });
      return res.data;
    },
  });

  return {
    data,
    isLoading,
    isError,
  };
}
