import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import robotsTxt from "astro-robots-txt";

// https://astro.build/config
export default defineConfig({
  image: {
    domains: ["images.ctfassets.net"],
  },
  site: "http://kralfoto.cz/",
  integrations: [sitemap(), robotsTxt()],
});
