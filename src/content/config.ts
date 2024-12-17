// 1. Import utilities from `astro:content`
import { z, defineCollection } from 'astro:content';

// 2. Define a `type` and `schema` for each collection
const blogCollection = defineCollection({
  type: "content", // v2.5.0 and later
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      draft: z.boolean().optional().default(false),
      tags: z.array(z.string()),
      summary: z.string().max(40),
      description: z.string(),
      preview: image().optional(),
      category: z.enum(['technique', 'test', 'other']),
    }),
});

// 3. Export a single `collections` object to register your collection(s)
export const collections = {
  'blog': blogCollection,
};
