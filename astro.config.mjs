// @ts-check
import rehypeTypst from '@myriaddreamin/rehype-typst';
import { defineConfig } from 'astro/config';
import icon from 'astro-icon';
import remarkMath from 'remark-math';
import remarkGfm from 'remark-gfm';
import remarkToc from 'remark-toc';
import remarkRuby from 'remark-ruby';
import rehypeJargon from 'rehype-jargon';
import { jargon } from './src/content/jargon.mjs';
import rehypeCallouts from 'rehype-callouts';
import { remarkReadingTime } from './remark-reading-time.mjs';
import { remarkModifiedTime } from './remark-modified-time.mjs';
import rehypeParse from 'rehype-parse';
import {
  remarkExtendedTable,
  extendedTableHandlers,
} from 'remark-extended-table';

import { typst } from 'astro-typst';
import vue from '@astrojs/vue';
import tailwind from '@astrojs/tailwind';

import pdf from 'astro-pdf';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  site: 'http://www.zrex.top',
  prefetch: {
    defaultStrategy: 'viewport',
  },
  vite: {
    ssr: {
      external: ['@myriaddreamin/typst-ts-node-compiler'],
    },
  },
  markdown: {
    remarkPlugins: [
      remarkMath,
      remarkGfm,
      [
        remarkExtendedTable,
        {
          colspanWithEmpty: true,
        },
      ],
      //remarkRuby,
      [remarkToc, { heading: '目录', maxDepth: 3 }],
      remarkReadingTime,
      remarkModifiedTime,
    ],

    remarkRehype: {
      handlers: {
        ...extendedTableHandlers,
      },
    },

    rehypePlugins: [
      rehypeTypst,
      [
        rehypeCallouts,
        {
          callouts: {
            quote: {
              color: '#64748b',
            },
            question: {
              color: '#f59e0b',
            },
          },
        },
      ],
      [rehypeJargon, { jargon: jargon }],
    ],
    syntaxHighlight: 'shiki',
    shikiConfig: {
      theme: 'vitesse-light',
    },
  },
  integrations: [
    //vue(),
    tailwind(),
    mdx(),
    typst(),
    icon({
      iconDir: 'src/assets/icons',
    }),
    pdf({
      baseOptions: {
        maxRetries: 2,
        throwOnFail: true
      },
      //maxConcurrent: 2,

      pages: {
        //'/blog': true, // output path
        '/blog/course/discrete/terms': true,
        '/blog/riscv/commands/riscv_learn': true,
        '/blog/riscv/misc/notice': true,
        /*
         *fallback: (pathname) => {
         *  if (pathname.startsWith('/blog/riscv')) {
         *    return pathname.replace(/^\/blog/, '/generated');
         *  }
         *},
         */
      },
    }),
  ],
});
