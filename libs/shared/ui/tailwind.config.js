const { createGlobPatternsForDependencies } = require('@nrwl/next/tailwind');
const { join, resolve } = require('path');
const { workspaceRoot } = require('@nrwl/workspace/src/utils/app-root');

module.exports = {
  mode: 'jit',
  // content: [join('./**/*.{js,ts,jsx,tsx}')],
  content: [
    join(__dirname, './src/**/*!(*.stories|*.spec).{ts,tsx,html}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  presets: [require(resolve(workspaceRoot, 'tailwind-workspace-preset.js'))],
  theme: {
    extend: {
      backgroundImage:{
        "nav-0": "url('/Navigator-0.svg')",
        "nav-1": "url('/Navigator-1.svg')",
        "nav-2": "url('/Navigator-2.svg')",
        "nav-3": "url('/Navigator-3.svg')",
        "nav-4": "url('/Navigator-4.svg')",
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
