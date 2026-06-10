import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

export default defineConfig({
  plugins: [react()],
  base: "./",
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
