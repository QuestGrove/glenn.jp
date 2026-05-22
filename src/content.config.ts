// 1. Import utilities from `astro:content`
import { defineCollection } from 'astro:content';
// 2. Import global loader.
import { glob } from 'astro/loaders';
// 3. Import schema(s)
import { baseSchema } from './content/schemata';


// 3. Export a single `collections` object to register your collection(s)
export const collections = { 
  writings: defineCollection({
    loader: glob({base: './src/content/writings', pattern: '**/[^_]*.{md,mdx}' }),
    schema: baseSchema,
  }),
  endeavors: defineCollection({
    loader: glob({base: './src/content/endeavors', pattern: '**/[^_]*.{md,mdx}' }),
    schema: baseSchema,
  }),
  manuals: defineCollection({
    loader: glob({base: './src/content/manuals', pattern: '**/[^_]*.{md,mdx}' }),
    schema: baseSchema,
  }),
};