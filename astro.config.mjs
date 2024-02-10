import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "The Data Engineer's Handbook",
      social: {
        github: "https://github.com/sdairs/data_engineering_handbook",
      },
      sidebar: [
        { label: "Introduction", link: "/introduction" },
        {
          label: "Concepts",
          autogenerate: { directory: "concepts" },
        },
        {
          label: "Tools",
          autogenerate: { directory: "tools" },
        },
      ],
    }),
  ],
});
