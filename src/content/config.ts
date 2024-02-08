import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  type: 'content',
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    description: z.string(),
    // Transform string to Date object
    order: z.number().int(),
    updatedDate: z.coerce.date().optional(),
    categories: z.string().array().min(1),
    client: z.string().optional(),
  }),
});

export const collections = { projects };
