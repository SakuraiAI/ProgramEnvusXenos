import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

// Reuse the existing technology HTML entry so metadata is available before React runs.
function technologyHtmlEntry() {
  const rewrite = (request, response, next) => {
    const requestUrl = request.url || "/";
    const pathname = requestUrl.split("?", 1)[0];
    if (["GET", "HEAD"].includes(request.method) && /^\/(?:technologie|technology|portfolio)\/?$/.test(pathname)) {
      request.url = `/portfolio.html${requestUrl.slice(pathname.length)}`;
    }
    next();
  };
  return {
    name: "pgex-technology-html-entry",
    configureServer(server) { server.middlewares.use(rewrite); },
    configurePreviewServer(server) { server.middlewares.use(rewrite); },
  };
}

export default defineConfig({
  plugins: [technologyHtmlEntry(), react()],
  base: "/",
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        systems: resolve(__dirname, "systems.html"),
        portfolio: resolve(__dirname, "portfolio.html"),
        marika: resolve(__dirname, "marika.html"),
        contact: resolve(__dirname, "contact.html"),
        portfolioUnreal: resolve(__dirname, "portfolio-unreal.html"),
        portfolioBlender: resolve(__dirname, "portfolio-blender.html"),
        portfolioVscode: resolve(__dirname, "portfolio-vscode.html"),
      },
    },
  },
});
