import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { pageLayoutSchema, themeSchema } from "./content/config";

const pages = defineCollection({
  loader: glob({ base: "./src/content/pages", pattern: "**/*.json" }),
  schema: pageLayoutSchema,
});

const theme = defineCollection({
  loader: glob({ base: "./src/content", pattern: "theme.json" }),
  schema: themeSchema,
});

export const collections = { pages, theme };
