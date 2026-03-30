import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github.css";
import matter from "gray-matter";

/* ─── types ─────────────────────────────────────────────────────────────── */
  type PostMeta = {
    slug: string;
    title?: string;
    date?: string;
    excerpt?: string;
    banner?: string;
  };

/* ─── tiny icon helpers (no extra dep) ──────────────────────────────────── */
  const ArrowLeft = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M19 12H5M12 5l-7 7 7 7"/>
    </svg>
  );

  const CalendarIcon = () => (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
    </svg>
  );

/* ─── sub-components ─────────────────────────────────────────────────────── */

  function PostCard({ post, isActive, onClick, }: { post: PostMeta; isActive: boolean; onClick: () => void; }) {
    return (
      <li>
        <a
          href="#"
          onClick={(e) => { e.preventDefault(); onClick(); }}
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
            <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
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

/* ─── main component ─────────────────────────────────────────────────────── */
  export const Blog: React.FC<{ visible?: string }> = ({ visible }) => {
    const isActive = visible === "Blog";

    const [posts, setPosts] = useState<PostMeta[] | null>(null);
    const [loadingIndex, setLoadingIndex] = useState(false);
    const [indexError, setIndexError] = useState<string | null>(null);

    const [selectedSlug, setSelectedSlug] = useState<string | null>(null);
    const [selectedMd, setSelectedMd] = useState<string | null>(null);
    const [selectedMeta, setSelectedMeta] = useState<PostMeta | null>(null);
    const [loadingPost, setLoadingPost] = useState(false);
    const [postError, setPostError] = useState<string | null>(null);

    /* fetch index */
    useEffect(() => {
      setLoadingIndex(true);
      setIndexError(null);
      fetch("/assets/blogposts/posts.json", { cache: "no-cache" })
        .then((res) => {
          if (!res.ok) throw new Error(`${res.status}`);
          return res.json();
        })
        .then((data: PostMeta[]) => setPosts(data))
        .catch(() => {
          setIndexError("Could not load posts. Make sure /assets/blogposts/posts.json exists.");
          setPosts([]);
        })
        .finally(() => setLoadingIndex(false));
    }, []);

    /* fetch post */
    useEffect(() => {
      if (!selectedSlug) {
        setSelectedMd(null);
        setSelectedMeta(null);
        setPostError(null);
        return;
      }
      setLoadingPost(true);
      setPostError(null);

      fetch(`/assets/blogposts/${selectedSlug}.md`, { cache: "no-cache" })
        .then((res) => {
          if (!res.ok) throw new Error(`${res.status}`);
          return res.text();
        })
        .then((raw) => {
          try {
            const parsed = matter(raw);
            setSelectedMd(parsed.content ?? raw);
            const fm = parsed.data ?? {};
            setSelectedMeta({
              slug: selectedSlug,
              title: fm.title,
              date: fm.date,
              excerpt: fm.excerpt,
              banner: fm.banner,
            });
          } catch {
            setSelectedMd(raw);
            setSelectedMeta({ slug: selectedSlug });
          }
        })
        .catch(() => {
          setPostError("Could not load this post.");
          setSelectedMd(null);
          setSelectedMeta(null);
        })
        .finally(() => setLoadingPost(false));
    }, [selectedSlug]);

    const resolvedTitle =
      selectedMeta?.title ?? posts?.find((x) => x.slug === selectedSlug)?.title ?? selectedSlug ?? "";
    const resolvedDate =
      selectedMeta?.date ?? posts?.find((x) => x.slug === selectedSlug)?.date;

    return (
      <>
        {/* ── scoped styles ── */}
        <style>{`
          /* ── layout ─────────────────────────────────────── */
          .blog-layout {
            display: grid;
            grid-template-columns: 260px 1fr;
            gap: 24px;
            align-items: start;
          }
          @media (max-width: 700px) {
            .blog-layout {
              grid-template-columns: 1fr;
            }
            /* hide sidebar when a post is open on mobile */
            .blog-layout--post-open .blog-sidebar { display: none; }
            /* hide reader when no post on mobile */
            .blog-layout--no-post .blog-reader  { display: none; }
          }

          /* ── sidebar ─────────────────────────────────────── */
          .blog-sidebar__heading {
            font-size: 11px;
            font-weight: 700;
            letter-spacing: .1em;
            text-transform: uppercase;
            color: var(--light-gray, #8a9ab0);
            margin: 0 0 14px;
          }
          .blog-posts-list {
            list-style: none;
            margin: 0;
            padding: 0;
            display: flex;
            flex-direction: column;
            gap: 8px;
          }

          /* ── post card ───────────────────────────────────── */
          .blog-card {
            display: flex;
            gap: 12px;
            align-items: flex-start;
            padding: 10px;
            border-radius: 10px;
            border: 1.5px solid transparent;
            text-decoration: none;
            color: inherit;
            transition: background 0.15s, border-color 0.15s, transform 0.15s;
            background: transparent;
          }
          .blog-card:hover {
            background: var(--border-gradient-onyx, rgba(255,255,255,0.04));
            border-color: var(--jet, #2b2f3a);
            transform: translateX(2px);
          }
          .blog-card--active {
            background: var(--border-gradient-onyx, rgba(255,255,255,0.05));
            border-color: var(--orange-yellow-crayola, #e3a15a) !important;
          }

          /* thumbnail */
          .blog-card__thumb {
            flex-shrink: 0;
            width: 64px;
            height: 64px;
            border-radius: 7px;
            overflow: hidden;
            margin: 0;
            background: var(--jet, #2b2f3a);
          }
          .blog-card__thumb img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            display: block;
          }
          .blog-card__thumb-placeholder {
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 22px;
            font-weight: 700;
            color: var(--light-gray, #8a9ab0);
            background: linear-gradient(135deg, #1e232e 0%, #252b38 100%);
          }

          /* card body */
          .blog-card__body {
            flex: 1;
            min-width: 0;
          }
          .blog-card__date {
            display: flex;
            align-items: center;
            gap: 5px;
            font-size: 11px;
            color: var(--light-gray, #8a9ab0);
            margin-bottom: 4px;
          }
          .blog-card__title {
            margin: 0 0 4px;
            font-size: 13.5px;
            font-weight: 600;
            line-height: 1.35;
            /* clamp to 2 lines */
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }
          .blog-card__excerpt {
            margin: 0;
            font-size: 12px;
            color: var(--light-gray, #8a9ab0);
            line-height: 1.5;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }

          /* ── reader ──────────────────────────────────────── */
          .blog-reader-empty {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 14px;
            min-height: 280px;
            color: var(--light-gray, #8a9ab0);
            text-align: center;
            border: 1.5px dashed var(--jet, #2b2f3a);
            border-radius: 14px;
          }
          .blog-reader-empty__icon {
            opacity: 0.4;
          }
          .blog-reader-empty p {
            margin: 0;
            font-size: 14px;
          }

          .blog-reader-post {
            background: #fff;
            border-radius: 14px;
            overflow: hidden;
            box-shadow: 0 4px 24px rgba(0,0,0,.08);
          }

          /* back button (mobile) */
          .blog-reader-back {
            display: none;
            align-items: center;
            gap: 6px;
            padding: 12px 20px;
            background: transparent;
            border: none;
            border-bottom: 1px solid #f0f0f0;
            cursor: pointer;
            font-size: 13px;
            color: #555;
            width: 100%;
            text-align: left;
          }
          @media (max-width: 700px) {
            .blog-reader-back { display: flex; }
          }

          /* banner hero */
          .blog-reader-hero {
            width: 100%;
            aspect-ratio: 21/8;
            object-fit: cover;
            display: block;
          }

          /* post meta header */
          .blog-reader-header {
            padding: 28px 32px 0;
          }
          @media (max-width: 500px) {
            .blog-reader-header { padding: 20px 18px 0; }
          }
          .blog-reader-date {
            display: flex;
            align-items: center;
            gap: 6px;
            font-size: 12px;
            color: #888;
            margin-bottom: 10px;
          }
          .blog-reader-title {
            margin: 0 0 20px;
            font-size: clamp(20px, 4vw, 30px);
            font-weight: 700;
            line-height: 1.25;
            color: #111;
          }
          .blog-reader-divider {
            border: none;
            border-top: 1px solid #ebebeb;
            margin: 0;
          }

          /* prose */
          .blog-reader-prose {
            padding: 24px 32px 36px;
            color: #1a1a1a;
            font-size: 15.5px;
            line-height: 1.75;
          }
          @media (max-width: 500px) {
            .blog-reader-prose { padding: 18px 18px 28px; }
          }
          .blog-reader-prose h1,.blog-reader-prose h2,.blog-reader-prose h3,
          .blog-reader-prose h4,.blog-reader-prose h5 {
            color: #111;
            line-height: 1.3;
            margin-top: 1.8em;
            margin-bottom: .5em;
          }
          .blog-reader-prose h2 { font-size: 1.25em; }
          .blog-reader-prose h3 { font-size: 1.1em; }
          .blog-reader-prose p  { margin: 0 0 1.1em; }
          .blog-reader-prose a  { color: #0070f3; text-decoration: underline; }
          .blog-reader-prose code {
            font-size: .875em;
            background: #f5f5f5;
            padding: 2px 5px;
            border-radius: 4px;
          }
          .blog-reader-prose pre {
            background: #f5f5f5;
            border-radius: 8px;
            padding: 16px;
            overflow-x: auto;
            font-size: .85em;
            line-height: 1.6;
            margin: 0 0 1.2em;
          }
          .blog-reader-prose pre code { background: none; padding: 0; }
          .blog-reader-prose blockquote {
            border-left: 3px solid #0070f3;
            margin: 0 0 1.2em;
            padding: 4px 0 4px 18px;
            color: #555;
          }
          .blog-reader-prose img {
            max-width: 100%;
            border-radius: 8px;
            margin: .5em 0;
          }
          .blog-reader-prose ul,.blog-reader-prose ol {
            padding-left: 1.4em;
            margin: 0 0 1em;
          }
          .blog-reader-prose li { margin-bottom: .35em; }
          .blog-reader-prose table {
            border-collapse: collapse;
            width: 100%;
            font-size: .9em;
            margin-bottom: 1.2em;
          }
          .blog-reader-prose th,.blog-reader-prose td {
            border: 1px solid #e5e5e5;
            padding: 8px 12px;
            text-align: left;
          }
          .blog-reader-prose th { background: #f9f9f9; font-weight: 600; }

          /* ── error ───────────────────────────────────────── */
          .blog-error {
            padding: 14px 18px;
            background: #fff5f5;
            border: 1px solid #fcd0d0;
            border-radius: 8px;
            color: #c0392b;
            font-size: 13px;
          }

          /* ── spinner ─────────────────────────────────────── */
          .blog-spinner {
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 24px 0;
            color: var(--light-gray, #8a9ab0);
            font-size: 13px;
          }
          .blog-spinner__ring {
            width: 18px;
            height: 18px;
            border: 2px solid currentColor;
            border-top-color: transparent;
            border-radius: 50%;
            animation: blogSpin .7s linear infinite;
            flex-shrink: 0;
          }
          @keyframes blogSpin { to { transform: rotate(360deg); } }
        `}</style>

        <article className={`blog${isActive ? " active" : ""}`} data-page="blog">
          <header>
            <h2 className="h2 article-title">Blog</h2>
          </header>

          <section className="blog-posts">
            <div
              className={`blog-layout${selectedSlug ? " blog-layout--post-open" : " blog-layout--no-post"}`}
            >
              {/* ── sidebar ── */}
              <aside className="blog-sidebar">
                <p className="blog-sidebar__heading">All posts</p>

                {loadingIndex && <LoadingSpinner label="Loading posts…" />}
                {indexError  && <div className="blog-error">{indexError}</div>}

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

              {/* ── reader ── */}
              <section className="blog-reader" aria-live="polite" aria-atomic="true">
                {!selectedSlug && <EmptyReader />}

                {selectedSlug && loadingPost && <LoadingSpinner label="Loading post…" />}

                {postError && <div className="blog-error">{postError}</div>}

                {selectedSlug && selectedMd && !loadingPost && (
                  <div className="blog-reader-post">
                    {/* back button — visible on mobile only */}
                    <button
                      className="blog-reader-back"
                      onClick={() => setSelectedSlug(null)}
                      aria-label="Back to post list"
                    >
                      <ArrowLeft />
                      All posts
                    </button>

                    {/* hero banner */}
                    {selectedMeta?.banner && (
                      <img
                        className="blog-reader-hero"
                        src={selectedMeta.banner}
                        alt={resolvedTitle}
                      />
                    )}

                    {/* header */}
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

                    {/* prose */}
                    <div className="blog-reader-prose">
                      <ReactMarkdown
                        remarkPlugins={[remarkGfm]}
                        rehypePlugins={[rehypeRaw as any, rehypeHighlight as any]}
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
      </>
    );
  };

export default Blog;