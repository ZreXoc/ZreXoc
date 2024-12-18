import { glob } from 'astro/loaders';
import { z, defineCollection } from 'astro:content';
//console.log(glob({pattern: '**\/[^_]*.mdx', base: "./content/blog"}))

const blogCollection = defineCollection({
  loader: glob({ pattern: '**/*.(md|mdx)', base: './src/content/blog' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      draft: z.boolean().optional().default(false),
      tags: z.array(z.string()),
      summary: z.string().max(40),
      description: z.string(),
      preview: image().optional(),
      category: z.enum(['technique', 'other']),
    }),
});

export const collections = {
  blog: blogCollection,
};
