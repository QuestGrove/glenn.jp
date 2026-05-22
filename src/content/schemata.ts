// 1. Import utilities from `astro:zod`
import { z } from 'astro/zod';

export const baseSchema = z.object({
title: z
    .string()
    .max(60)
    .describe('**Required**. The main title displayed on the site and used for search engines (SEO). Keep under 60 characters.'),
  
  description: z
    .string()
    .default('')
    .describe('A brief summary used for previews, list cards, and search snippets. Defaults to empty if left out.'),
  
  pubDate: z.coerce
    .date()
    .describe('**Required**. The initial creation or publication date. Used to sort items chronologically.'),
  
  lastModDate: z.coerce
    .date()
    .optional()
    .describe('Optional. Tracks when you last updated or revised this item—essential for living manuals.'),
  
  draft: z
    .boolean()
    .default(false)
    .describe('If set to true, this item will hide on your live site and only show up while you are testing locally.'),
});