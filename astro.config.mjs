// @ts-check
import { defineConfig } from 'astro/config';
import icon from 'astro-icon';
import remarkToc from 'remark-toc';
import { remarkReadingTime } from './remark-reading-time.mjs';
import {remarkModifiedTime} from './remark-modified-time.mjs';

import vue from '@astrojs/vue';
import tailwind from '@astrojs/tailwind';

import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  prefetch: {
    defaultStrategy: 'viewport'
  },
  markdown: {
    syntaxHighlight: 'prism',
    remarkPlugins: [[remarkToc, {maxDepth:2}],remarkReadingTime,remarkModifiedTime]
  },
  integrations: [vue(), tailwind(), mdx(), icon({
    iconDir: "src/assets/icons"
  })],

});
