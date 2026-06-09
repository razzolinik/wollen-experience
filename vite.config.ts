import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    server: {
      // Redirect TanStack Start's bundled server entry to src/server.ts
      entry: "server",
      // Set the Nitro preset specifically for Netlify
      preset: "netlify",
    },
  },
});