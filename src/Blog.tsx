import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github.css";
import matter from "gray-matter";

type PostMeta = {
  slug: string;
  title?: string;
  date?: string;
  excerpt?: string;
  banner?: string; // absolute or root-relative path like "/posts/images/blog-1.jpg"
};

export const Blog: React.FC<{ visible?: string }> = ({ visible }) => {
  const activeClassName = visible === "Blog" ? "active" : "";

  const [posts, setPosts] = useState<PostMeta[] | null>(null);
  const [loadingIndex, setLoadingIndex] = useState(false);
  const [indexError, setIndexError] = useState<string | null>(null);

  const [selectedSlug, setSelectedSlug] = useState<string | null>(null);
  const [selectedMd, setSelectedMd] = useState<string | null>(null);
  const [selectedMeta, setSelectedMeta] = useState<PostMeta | null>(null);
  const [loadingPost, setLoadingPost] = useState(false);
  const [postError, setPostError] = useState<string | null>(null);

  // Load posts.json from /posts/posts.json (production-safe)
  useEffect(() => {
    setLoadingIndex(true);
    setIndexError(null);
    fetch("/assets/blogposts/posts.json", { cache: "no-cache" })
      .then((res) => {
        if (!res.ok) throw new Error(`Failed to fetch posts.json: ${res.status}`);
        return res.json();
      })
      .then((data: PostMeta[]) => {
        setPosts(data);
      })
      .catch((err) => {
        console.error(err);
        setIndexError("Could not load posts index. Ensure /posts/posts.json exists.");
        setPosts([]);
      })
      .finally(() => setLoadingIndex(false));
  }, []);

  // Load selected markdown when slug picked
  useEffect(() => {
    if (!selectedSlug) {
      setSelectedMd(null);
      setSelectedMeta(null);
      setPostError(null);
      return;
    }

    setLoadingPost(true);
    setPostError(null);
    const mdPath = `/assets/blogposts/${selectedSlug}.md`;

    fetch(mdPath, { cache: "no-cache" })
      .then((res) => {
        if (!res.ok) throw new Error(`Failed to fetch ${mdPath}: ${res.status}`);
        return res.text();
      })
      .then((raw) => {
        try {
          const parsed = matter(raw);
          setSelectedMd(parsed.content ?? raw);
          const fm = parsed.data ?? {};
          setSelectedMeta({
            slug: selectedSlug,
            title: fm.title ?? undefined,
            date: fm.date ?? undefined,
            excerpt: fm.excerpt ?? undefined,
            banner: fm.banner ?? undefined,
          });
        } catch (e) {
          // gray-matter failed -> fallback to raw
          setSelectedMd(raw);
          setSelectedMeta({ slug: selectedSlug });
        }
      })
      .catch((err) => {
        console.error(err);
        setPostError("Could not load post content.");
        setSelectedMd(null);
        setSelectedMeta(null);
      })
      .finally(() => setLoadingPost(false));
  }, [selectedSlug]);

  return (
    <article className={`blog ${activeClassName}`} data-page="blog">
      <header>
        <h2 className="h2 article-title">Blog</h2>
      </header>

      <section className="blog-posts">
        <div className="blog-gallery-and-reader" 
        style={{
          display: "grid",
          gridTemplateColumns: "240px 1fr",
          gap: "20px",
          alignItems: "start"
        }}
        >
          {/* Gallery column */}
          <aside>
            <div>
              <strong>All posts</strong>
            </div>

            {loadingIndex && <div>Loading posts…</div>}
            {indexError && <div className="text-red">{indexError}</div>}

            <ul
              className="blog-posts-list p-0 m-0 g-12"
              style={{
                padding: 0,
                margin: 0,
                display: "grid",
                gridTemplateColumns: "1fr",
                gap: 12,
                listStyle: "none",
              }}
            >
              {posts?.map((p) => (
                <li
                  key={p.slug}
                  className="blog-post-item"
                  style={{
                    border: selectedSlug === p.slug ? "2px solid #0070f3" : "1px solid #1b212c",
                    borderRadius: 8,
                    overflow: "hidden",
                    cursor: "pointer"
                  }}
                >
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      setSelectedSlug(p.slug);
                    }}
                    // style={{ display: "flex", textDecoration: "none", color: "inherit" }}
                    style={{ display: "flex", alignItems: "center", gap: "10px", textDecoration: "none", color: "inherit" }}
                  >
                    <figure className="blog-banner-box" style={{ minWidth: 120, margin: 0 }}>
                      {p.banner ? (
                        // banner expected to be absolute/root relative path like "/posts/images/blog-1.jpg"
                        //<img src={p.banner} alt={p.title} style={{ width: 120, height: 80, objectFit: "cover" }} />
                        <img
                          src={p.banner}
                          alt={p.title}
                          style={{                            
                            objectFit: "cover",
                            borderRadius: 6
                          }}
                        />
                      ) : (
                        <div style={{ width: 120, height: 80, background: "#f3f4f6" }} />
                      )}
                    </figure>

                    <div className="blog-content" style={{ padding: "8px 12px", flex: 1 }}>
                      <div className="blog-meta" style={{ display: "flex", alignItems: "center", gap: 8 }}>
                        {p.date && <time dateTime={p.date} style={{ fontSize: 12, color: "#6b7280" }}>{p.date}</time>}
                      </div>
                      <h3 className="h3 blog-item-title" style={{ margin: "6px 0", fontSize: 16 }}>
                        {p.title}
                      </h3>
                      {p.excerpt && <p className="blog-text" style={{ margin: 0, fontSize: 13 }}>{p.excerpt}</p>}
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </aside>

          {/* Reader column */}
          <section style={{ overflow: "hidden" }}>
            {!selectedSlug && <div>Select a post from the left to read it here.</div>}
            {selectedSlug && loadingPost && <div>Loading post…</div>}
            {postError && <div className="text-red">{postError}</div>}

            {selectedSlug && selectedMd && (
              <section className="prose lg:prose-xl max-w-none"
              style={{

                background: "#fff",
                padding: "20px",
                borderRadius: "10px",
                overflow: "auto",
                maxHeight: "65vh",

                // darkmode theme
                // background: "#1e1e1e",
                // border: "1px solid #333",
                // color: "#fff"
              }}
              >
                {/* Prefer title/date from frontmatter; fallback to posts.json meta */}
                <h1>
                  {selectedMeta?.title ?? posts?.find((x) => x.slug === selectedSlug)?.title ?? selectedSlug}
                </h1>
                <div>
                  {selectedMeta?.date ?? posts?.find((x) => x.slug === selectedSlug)?.date}
                </div>

                <ReactMarkdown
                  children={selectedMd}
                  remarkPlugins={[remarkGfm]}
                  // SECURITY: rehypeRaw enables raw HTML in MD. Only use if you trust the markdown files.
                  rehypePlugins={[rehypeRaw as any, rehypeHighlight as any]}
                />
              </section>
            )}
          </section>
        </div>
      </section>
    </article>
  );
};

export default Blog;