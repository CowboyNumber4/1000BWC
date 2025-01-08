// Add env.d.ts type declaration
/// <reference types="vite/client" />

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { viteStaticCopy } from "vite-plugin-static-copy";
import path from "path";

export default defineConfig({
  root: ".", // The root directory for the client-side app
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        {
          src: "public/*", // Copy all files from /client/public
          dest: "", // Copy to the root of the dist folder
        },
        {
          src: "../server/assets/**/*", // Copy all files in /server/assets
          dest: "assets", // Copy to /dist/assets
        },
      ],
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"), // Alias for cleaner imports
    },
    dedupe: ["react", "react-dom"],
  },
  build: {
    outDir: "../dist/client", // Output directory at project-root/dist/client
    emptyOutDir: true, // Clear dist folder before each build
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, "index.html"),
      },
      output: {
        assetFileNames: "assets/[name].[hash][extname]", // Organize CSS/images in /assets
      },
    },
    commonjsOptions: {
      transformMixedEsModules: true,
    },
    sourcemap: true, // Generate source maps
  },
  publicDir: "public", // Static files location
  base: "/", // Base URL
  server: {
    proxy: {
      "/socket.io": {
        target: process.env.VITE_API_URL || "http://localhost:3000",
        ws: true,
      },
      "/api": {
        target: process.env.VITE_API_URL || "http://localhost:3000",
      }
    },
  },
});
