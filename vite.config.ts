import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteStaticCopy } from 'vite-plugin-static-copy'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        {
          src: 'src/assets/images', // Source folder
          dest: 'assets' // Destination folder in dist
        },
        {
          src: 'src/assets/blogposts',
          dest: 'assets'
        }
      ]
    })
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // React core dependencies
          vendor: ["react", "react-dom"],
          // Ionic UI framework components
          ionic: ["@ionic/react", "ionicons"],
          // Code highlighting library (heavy dependency)
          highlight: ["highlight.js"],
          // Markdown parser and rehype/remark plugins
          markdown: [
            "react-markdown",
            "remark-gfm",
            "rehype-raw",
            "rehype-sanitize",
            "rehype-highlight",
            "gray-matter",
          ],
          // Image viewer component
          viewer: ["react-viewer"],
        },
      },
    },
  },
})