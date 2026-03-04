import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import bridge from "@awstral-cms/bridge";

export default defineConfig({
  integrations: [bridge()],
  vite: {
    plugins: [tailwindcss()],
  },
});
