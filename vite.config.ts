import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { TanStackRouterVite } from '@tanstack/router-plugin/vite';
import path from "path";

export default defineConfig({
  plugins: [
    // Enable file-based routing
    TanStackRouterVite(),
    // Enable React support
    react(),
    // Enable Tailwind CSS v4
    tailwindcss(),
  ],
  resolve: {
    alias: {
      // Setup path alias for imports
      "@": path.resolve(__dirname, "./src"),
    },
  },
});