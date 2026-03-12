import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import { fileURLToPath } from "url";
import { sitemapBuildPlugin, sitemapMiddleware } from "./generate-sitemap.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  plugins: [
    tailwindcss(),
    react(),

    // Writes dist/sitemap.xml during `vite build`
    sitemapBuildPlugin(),

    // Serves /sitemap.xml on localhost during `vite dev`
    {
      name: "sitemap-dev-middleware",
      configureServer(server) {
        server.middlewares.use(sitemapMiddleware());
      },
    },
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});
