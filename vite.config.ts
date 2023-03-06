import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import Pages from "vite-plugin-pages";
import { resolve } from "path";
import fs from "fs-extra";
import matter from "gray-matter";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [{ find: "@/", replacement: `${resolve(__dirname, "src")}/` }],
  },
  plugins: [
    react(),
    Pages({
      extensions: ["tsx", "md"],
      extendRoute(routes) {
        function addMeta(route) {
          const path = resolve(__dirname, route.element.slice(1));
          if (path.includes("posts")) {
            const md = fs.readFileSync(path, "utf-8");
            const { data } = matter(md);
            route.meta = Object.assign(route.meta || {}, { frontmatter: data });
          }
        }
        if (routes.children) {
          routes.children.forEach(addMeta);
        } else {
          addMeta(routes);
        }
        return routes;
      },
    }),
  ],
});
