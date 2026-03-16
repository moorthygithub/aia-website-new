// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";
// import tailwindcss from "@tailwindcss/vite";
// import path from "path";
// import { fileURLToPath } from "url";
// import { sitemapMiddleware } from "./generate-sitemap.js";

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// export default defineConfig({
//   plugins: [
//     tailwindcss(),
//     react(),

//     {
//       name: "sitemap-dev-middleware",
//       configureServer(server) {
//         server.middlewares.use(sitemapMiddleware());
//       },
//     },
//   ],
//   resolve: {
//     alias: {
//       "@": path.resolve(__dirname, "src"),
//     },
//   },
// });
// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";
// import tailwindcss from "@tailwindcss/vite";
// import path from "path";
// import { fileURLToPath } from "url";
// import viteCompression from "vite-plugin-compression";

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// export default defineConfig({
//   plugins: [tailwindcss(), react()],
//   resolve: {
//     alias: {
//       "@": path.resolve(__dirname, "src"),
//     },
//   },
// });
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import { fileURLToPath } from "url";
import viteCompression from "vite-plugin-compression";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  root: process.cwd(),
  base: "/",
  plugins: [
    tailwindcss(),
    react(),

    viteCompression({
      algorithm: "gzip",
      ext: ".gz",
    }),

    viteCompression({
      algorithm: "brotliCompress",
      ext: ".br",
    }),
  ],

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },

  build: {
    outDir: "dist",
    emptyOutDir: true,
    chunkSizeWarningLimit: 1000,

    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            // Core React stuff together
            if (
              id.includes("/node_modules/react/") ||
              id.includes("/node_modules/react-dom/") ||
              id.includes("/node_modules/react-router-dom/") ||
              id.includes("/node_modules/scheduler/")
            ) {
              return "react-core";
            }
            
            // Larger libraries isolated
            if (id.includes("lucide-react") || id.includes("react-icons")) {
              return "icons";
            }
            if (id.includes("framer-motion")) {
              return "animation";
            }
            if (id.includes("leaflet") || id.includes("react-leaflet")) {
              return "map";
            }
            if (id.includes("swiper") || id.includes("embla-carousel")) {
              return "carousel";
            }
            if (id.includes("@tanstack/react-query")) {
              return "query";
            }
            if (id.includes("axios") || id.includes("date-fns")) {
              return "utils";
            }

            // Everything else into vendor
            return "vendor";
          }
        },
      },
    },
  },
});
