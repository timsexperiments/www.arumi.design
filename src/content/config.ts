import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  type: 'content',
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    description: z.string(),
    // Transform string to Date object
    order: z.number().int(),
    categories: z.string().array().min(1),
    client: z.string().optional(),
    role: z.string(),
    protected: z.boolean().optional(),
  }),
});

export const collections = { projects };
