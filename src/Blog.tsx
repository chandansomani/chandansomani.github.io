import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import rehypeSanitize from "rehype-sanitize";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github.css";

import { useBlogPosts, PostMeta } from "./hooks/useBlogData";
import { parseFrontmatter } from "./hooks/parseMarkdown";
import "./pages/Blog/Blog.css";

const ArrowLeft = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 12H5M12 5l-7 7 7 7" />
  </svg>
);

const CalendarIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);

export const Blog: React.FC<{ visible?: string }> = ({ visible }) => {
  const isActive = visible === "Blog";
  const { posts, loading: loadingIndex, error: indexError } = useBlogPosts();

  const [selectedSlug, setSelectedSlug] = useState<string | null>(null);
  const [selectedMd, setSelectedMd] = useState<string | null>(null);
  const [selectedMeta, setSelectedMeta] = useState<PostMeta | null>(null);
  const [loadingPost, setLoadingPost] = useState(false);
  const [postError, setPostError] = useState<string | null>(null);

  useEffect(() => {
    if (!selectedSlug) {
      setSelectedMd(null);
      setSelectedMeta(null);
      setPostError(null);
      return;
    }

    const controller = new AbortController();
    setLoadingPost(true);
    setPostError(null);

    fetch(`/assets/blogposts/${selectedSlug}.md`, { signal: controller.signal, cache: "no-cache" })
      .then((res) => {
        if (!res.ok) throw new Error(`${res.status}`);
        return res.text();
      })
      .then((raw) => {
        const { content, meta } = parseFrontmatter(raw);
        setSelectedMd(content);
        setSelectedMeta({
          slug: selectedSlug,
          title: meta.title,
          date: meta.date,
          excerpt: meta.excerpt,
          banner: meta.banner,
        });
      })
      .catch((err) => {
        if (err.name !== "AbortError") {
          setPostError("Could not load this post.");
          setSelectedMd(null);
          setSelectedMeta(null);
        }
      })
      .finally(() => setLoadingPost(false));

    return () => controller.abort();
  }, [selectedSlug]);

  const resolvedTitle = selectedMeta?.title ?? posts?.find((x) => x.slug === selectedSlug)?.title ?? selectedSlug ?? "";
  const resolvedDate = selectedMeta?.date ?? posts?.find((x) => x.slug === selectedSlug)?.date;

  return (
    <article className={`blog${isActive ? " active" : ""}`} data-page="blog">
      <header>
        <h2 className="h2 article-title">Blog</h2>
      </header>

      <section className="blog-posts">
        <div className={`blog-layout${selectedSlug ? " blog-layout--post-open" : " blog-layout--no-post"}`}>
          {/* Sidebar */}
          <aside className="blog-sidebar">
            <p className="blog-sidebar__heading">All posts</p>

            {loadingIndex && <LoadingSpinner label="Loading posts…" />}
            {indexError && <div className="blog-error">{indexError}</div>}

            {posts && posts.length === 0 && !loadingIndex && !indexError && (
              <p style={{ fontSize: 13, color: "var(--light-gray, #8a9ab0)" }}>No posts yet.</p>
            )}

            <ul className="blog-posts-list" role="list">
              {posts?.map((p) => (
                <PostCard
                  key={p.slug}
                  post={p}
                  isActive={selectedSlug === p.slug}
                  onClick={() => setSelectedSlug(p.slug)}
                />
              ))}
            </ul>
          </aside>

          {/* Reader Area */}
          <section className="blog-reader" aria-live="polite" aria-atomic="true">
            {!selectedSlug && <EmptyReader />}
            {selectedSlug && loadingPost && <LoadingSpinner label="Loading post…" />}
            {postError && <div className="blog-error">{postError}</div>}

            {selectedSlug && selectedMd && !loadingPost && (
              <div className="blog-reader-post">
                <button
                  className="blog-reader-back"
                  onClick={() => setSelectedSlug(null)}
                  aria-label="Back to post list"
                >
                  <ArrowLeft />
                  All posts
                </button>

                {selectedMeta?.banner && (
                  <img className="blog-reader-hero" src={selectedMeta.banner} alt={resolvedTitle} />
                )}

                <div className="blog-reader-header">
                  {resolvedDate && (
                    <div className="blog-reader-date">
                      <CalendarIcon />
                      <time dateTime={resolvedDate}>{resolvedDate}</time>
                    </div>
                  )}
                  <h1 className="blog-reader-title">{resolvedTitle}</h1>
                  <hr className="blog-reader-divider" />
                </div>

                <div className="blog-reader-prose">
                  <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                    rehypePlugins={[rehypeRaw, rehypeSanitize, rehypeHighlight]}
                  >
                    {selectedMd}
                  </ReactMarkdown>
                </div>
              </div>
            )}
          </section>
        </div>
      </section>
    </article>
  );
};

/* Sub-components */
function PostCard({ post, isActive, onClick }: { post: PostMeta; isActive: boolean; onClick: () => void }) {
  return (
    <li>
      <a
        href={`#${post.slug}`}
        onClick={(e) => {
          e.preventDefault();
          onClick();
        }}
        className={`blog-card${isActive ? " blog-card--active" : ""}`}
        aria-current={isActive ? "page" : undefined}
      >
        <figure className="blog-card__thumb">
          {post.banner ? (
            <img src={post.banner} alt={post.title ?? post.slug} loading="lazy" />
          ) : (
            <div className="blog-card__thumb-placeholder" aria-hidden="true">
              <span>{(post.title ?? post.slug).charAt(0).toUpperCase()}</span>
            </div>
          )}
        </figure>

        <div className="blog-card__body">
          {post.date && (
            <div className="blog-card__date">
              <CalendarIcon />
              <time dateTime={post.date}>{post.date}</time>
            </div>
          )}
          <h3 className="blog-card__title">{post.title ?? post.slug}</h3>
          {post.excerpt && <p className="blog-card__excerpt">{post.excerpt}</p>}
        </div>
      </a>
    </li>
  );
}

function EmptyReader() {
  return (
    <div className="blog-reader-empty">
      <div className="blog-reader-empty__icon" aria-hidden="true">
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
        </svg>
      </div>
      <p>Select a post to start reading</p>
    </div>
  );
}

function LoadingSpinner({ label }: { label: string }) {
  return (
    <div className="blog-spinner" role="status" aria-label={label}>
      <div className="blog-spinner__ring" />
      <span>{label}</span>
    </div>
  );
}

export default Blog;