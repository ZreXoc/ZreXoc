const { createGlobPatternsForDependencies } = require('@nrwl/next/tailwind');
const { join, resolve } = require('path');
const { workspaceRoot } = require('@nrwl/workspace/src/utils/app-root');

module.exports = {
  // content: [join('./**/*.{js,ts,jsx,tsx}')],
  content: [
    join(__dirname, './src/**/*!(*.stories|*.spec).{ts,tsx,html}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  presets: [require(resolve(workspaceRoot, 'tailwind-workspace-preset.js'))],
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
