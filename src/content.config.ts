import { defineCollection, z } from "astro:content";

const products = defineCollection({
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    featured: z.boolean().default(false),
    applicationTags: z.array(z.string()).default([]),
    formatLabels: z.array(z.string()).default([]),
    downloads: z.array(z.object({
      label: z.string(),
      href: z.string(),
    })).default([]),
    heroImage: z.string().optional(),
  }),
});

const resources = defineCollection({
  schema: z.object({
    title: z.string(),
    documentType: z.enum(["Brochure", "Spec Sheet", "Installation Guide", "Warranty", "Adhesive Guide"]),
    product: z.string(),
    href: z.string(),
    summary: z.string(),
    featured: z.boolean().default(false),
  }),
});

export const collections = {
  products,
  resources,
};