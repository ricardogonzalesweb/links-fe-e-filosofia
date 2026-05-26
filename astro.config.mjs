import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import partytown from "@astrojs/partytown";

export default defineConfig({
  site: "https://ricardogonzales.com",
  integrations: [
    sitemap(),
    partytown({
      config: {
        forward: ["dataLayer.push"],
      },
    }),
  ],
  server: {
    host: true,
    port: 4321
  }
});
