// src/content.config.ts
import { defineCollection, z } from 'astro:content'
import { glob } from 'astro/loaders'

const writings = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/writings' }),
  schema: z.object({
    title:       z.string(),
    date:        z.coerce.date(),
    tags:        z.array(z.string()).default([]),
    description: z.string().optional(),
    draft:       z.boolean().default(false),
  }),
})

const endeavors = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/endeavors' }),
  schema: z.object({
    title:        z.string(),
    description:  z.string(),
    status:       z.enum(['active', 'paused', 'complete']).default('active'),
    currentStage: z.string(),
    stages: z.array(z.object({
      name: z.string(),
      done: z.boolean().default(false),
    })),
    startDate: z.coerce.date(),
    icon:      z.string().optional(),
  }),
})

const manuals = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/manuals' }),
  schema: z.object({
    title:       z.string(),
    description: z.string().optional(),
    lastTended:  z.coerce.date().optional(),
    phases: z.array(z.object({
      name:  z.string(),
      pages: z.array(z.string()),
    })).optional(),
    phase: z.string().optional(),
    order: z.number().default(0),
  }),
})

export const collections = { writings, endeavors, manuals }