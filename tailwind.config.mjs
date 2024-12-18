import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        kingsgmb: ['kingsgmb'],
        HYAlzheimer: ['HYAlzheimer'],
        broken: ['kingsgmb', 'HYAlzheimer'],
        code: [
          'Cascadia Code',
          'ui-monospace',
          'SFMono-Regular',
          'Menlo',
          'Monaco',
          'Consolas',
          '"Liberation Mono"',
          'Courier New',
          'monospace',
        ],
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            code: {
              'font-family':
                'Cascadia Code, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',

              //color:theme('colors.slate.200')
            },

            // ...
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
