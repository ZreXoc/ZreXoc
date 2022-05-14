const { createGlobPatternsForDependencies } = require('@nrwl/next/tailwind');
const { workspaceRoot } = require('@nrwl/workspace/src/utils/app-root');
const path = require('path');

module.exports = {
  mode: 'jit',

  content: [
    path.join(__dirname, './**/*.{js,ts,jsx,tsx}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  presets: [
    require(path.resolve(workspaceRoot, 'tailwind-workspace-preset.js')),
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
