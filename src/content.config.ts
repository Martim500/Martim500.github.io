import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// 作成サイト・制作物。1件1ファイル(Markdown)。
const works = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/works' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    type: z.enum(['site', 'code', 'demo']),
    period: z.string().optional(),
    stack: z.array(z.string()).default([]),
    links: z
      .object({
        repo: z.string().url().optional(),
        demo: z.string().url().optional(),
      })
      .default({}),
    thumbnail: z.string().optional(),
    featured: z.boolean().default(false),
    order: z.number().default(100),
    draft: z.boolean().default(false),
  }),
});

export const collections = { works };
