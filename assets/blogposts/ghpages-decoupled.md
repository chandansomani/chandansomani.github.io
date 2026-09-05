---
title: "Why GitHub Pages Gave Me a 404: The Hidden Jekyll Frontmatter Trap"
date: "2026-09-05"
category: "Web Development"
excerpt: "How Jekyll's automatic build step on GitHub Pages breaks raw Markdown asset fetches when frontmatter and dated filenames are used."
---

When building modern static sites or Single Page Applications (SPAs)—like React or Vite apps hosted on GitHub Pages—it's common to store blog posts as raw `.md` (Markdown) files in an `assets/` directory and fetch them dynamically at runtime.

Recently, I ran into a strange issue: fetching `assets/blogposts/another-post.md` worked perfectly, but fetching `assets/blogposts/2025-11-21-hello-world.md` threw a **404 Not Found** error, even though the file was clearly in the repository.

Here is what went wrong and how to fix it.

---

### The Cause: Default Jekyll Processing

By default, GitHub Pages doesn't just host your raw files as a simple web server—it automatically runs a static site generator called **Jekyll** behind the scenes.

When Jekyll processes a repository, it looks for two specific traits:

1. **Frontmatter Metadata:** Block text wrapped in triple dashes (`---`) at the top of a file containing metadata like title, date, or tags.
2. **Dated Filenames:** Files named using the `YYYY-MM-DD-title.md` convention.

```markdown
---
title: "Hello World"
date: 2025-11-21
---