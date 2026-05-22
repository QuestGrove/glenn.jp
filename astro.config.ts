//changed .mjs to .ts

import { defineConfig } from 'astro/config';
import UnoCSS from 'unocss/astro';
import mdx from '@astrojs/mdx';

export default defineConfig({
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'hover' // Instantly preloads pages when a user hovers over a link
  },

  integrations: [
    mdx(),
    UnoCSS({
      injectReset: true,
    }),
  ],
});