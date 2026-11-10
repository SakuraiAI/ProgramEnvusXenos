import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

const technologyDetailEntries = {
  "/technologie/konstrukce": "/technology-engineering.html",
  "/technologie/vykon-a-chlazeni": "/technology-performance.html",
  "/technologie/elektronika": "/technology-electronics.html",
  "/technologie/vlastni-komponenty": "/technology-components.html",
};

// Serve page-specific technology metadata before React runs, in dev and preview.
function technologyHtmlEntry() {
  const rewrite = (request, response, next) => {
    const requestUrl = request.url || "/";
    const pathname = requestUrl.split("?", 1)[0];
    const detailEntry = technologyDetailEntries[pathname.replace(/\/$/, "")];
    const entry = detailEntry || (/^\/(?:technologie|technology|portfolio)\/?$/.test(pathname) ? "/portfolio.html" : null);
    if (["GET", "HEAD"].includes(request.method) && entry) {
      request.url = `${entry}${requestUrl.slice(pathname.length)}`;
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
        technologyEngineering: resolve(__dirname, "technology-engineering.html"),
        technologyPerformance: resolve(__dirname, "technology-performance.html"),
        technologyElectronics: resolve(__dirname, "technology-electronics.html"),
        technologyComponents: resolve(__dirname, "technology-components.html"),
        marika: resolve(__dirname, "marika.html"),
        contact: resolve(__dirname, "contact.html"),
        portfolioUnreal: resolve(__dirname, "portfolio-unreal.html"),
        portfolioBlender: resolve(__dirname, "portfolio-blender.html"),
        portfolioVscode: resolve(__dirname, "portfolio-vscode.html"),
      },
    },
  },
});
