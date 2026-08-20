import { useState, useEffect } from "react";

export type PostMeta = {
  slug: string;
  title?: string;
  date?: string;
  excerpt?: string;
  banner?: string;
};

export const useBlogPosts = () => {
  const [posts, setPosts] = useState<PostMeta[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);

    fetch("/assets/blogposts/posts.json", { signal: controller.signal, cache: "no-cache" })
      .then((res) => {
        if (!res.ok) throw new Error(`${res.status}`);
        return res.json();
      })
      .then((data: PostMeta[]) => setPosts(data))
      .catch((err) => {
        if (err.name !== "AbortError") {
          setError("Could not load posts. Make sure /assets/blogposts/posts.json exists.");
          setPosts([]);
        }
      })
      .finally(() => setLoading(false));

    return () => controller.abort();
  }, []);

  return { posts, loading, error };
};