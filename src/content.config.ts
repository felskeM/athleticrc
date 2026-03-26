import { defineCollection} from "astro:content";
import { z } from "astro/zod";

const downloadSchema = z.object({
  label: z.string(),
  href: z.string(),
});

const variantSchema = z.object({
  color: z.string(),
  descriptor: z.string().optional(),
  size: z.string(),
  thicknesses: z.array(z.string()).default([]),
});

const productFormatSchema = z.object({
  name: z.string(),
  description: z.string().optional(),
  variants: z.array(variantSchema).default([]),
});

const products = defineCollection({
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    featured: z.boolean().default(false),
    category: z.enum(["flooring", "installation-system"]),
    applicationTags: z.array(z.string()).default([]),
    formatLabels: z.array(z.string()).default([]),
    keySpecs: z
      .array(
        z.object({
          label: z.string(),
          value: z.string(),
        }),
      )
      .default([]),
    formats: z.array(productFormatSchema).default([]),
    downloads: z.array(downloadSchema).default([]),
    heroImage: z.string().optional(),
  }),
});

const resources = defineCollection({
  schema: z.object({
    title: z.string(),
    documentType: z.enum([
      "Brochure",
      "Spec Sheet",
      "Installation Guide",
      "Warranty",
      "Adhesive Guide",
    ]),
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