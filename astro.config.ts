//changed .mjs to .ts

import { defineConfig } from 'astro/config';
import UnoCSS from 'unocss/astro';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://glenn.jp',

  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'hover' // Instantly preloads pages when a user hovers over a link
  },

  integrations: [
    mdx(),
    sitemap(),
    UnoCSS(),
  ],
});