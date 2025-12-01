import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { createHtmlPlugin } from "vite-plugin-html";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    historyApiFallback: true, // Added fallback for SPA routing
    proxy: {
      "/server": {
        target: "https://textile-907473852.development.catalystserverless.com",
        changeOrigin: true,
        secure: true,
        rewrite: (path) => path.replace(/^\/server/, "/server"),
      },
    },
  },
  plugins: [react(), createHtmlPlugin()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
