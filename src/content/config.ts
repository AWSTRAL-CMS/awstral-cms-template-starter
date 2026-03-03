import { z } from "astro:content";

const requiredString = (field: string) =>
  z.preprocess(
    (value) => (typeof value === "string" ? value : ""),
    z.string().min(1, `${field} is required`)
  );

export const blockSchema = z.object({
  id: requiredString("Block id"),
  type: requiredString("Block type"),
  props: z.record(z.unknown()).default({}),
  styles: z.record(z.unknown()).optional(),
});

export const seoMetadataSchema = z.object({
  title: z.string().optional(),
  description: z.string().optional(),
  ogTitle: z.string().optional(),
  ogDescription: z.string().optional(),
  ogImage: z.string().optional(),
  canonicalUrl: z.string().optional(),
  robots: z.string().default("index, follow"),
});

export const pageLayoutSchema = z.object({
  slug: z.string().optional(),
  title: requiredString("Page title"),
  meta: seoMetadataSchema.optional(),
  blocks: z.array(blockSchema).default([]),
  createdAt: z.string().datetime().optional(),
  updatedAt: z.string().datetime().optional(),
});

export const themeSchema = z.object({
  primaryColor: requiredString("Theme primaryColor"),
  secondaryColor: requiredString("Theme secondaryColor"),
  fontFamily: requiredString("Theme fontFamily"),
  baseFontSize: requiredString("Theme baseFontSize"),
  spacingUnit: requiredString("Theme spacingUnit"),
  borderRadius: requiredString("Theme borderRadius"),
});

export type PageLayout = z.infer<typeof pageLayoutSchema>;
export type ThemeTokens = z.infer<typeof themeSchema>;
export type Block = z.infer<typeof blockSchema>;
export type SeoMetadata = z.infer<typeof seoMetadataSchema>;
