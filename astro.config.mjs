import { defineConfig } from "astro/config";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  image: {
    domains: ["images.ctfassets.net"],
  },
  site: "https://stargazers.club",
  integrations: [sitemap()],
});
