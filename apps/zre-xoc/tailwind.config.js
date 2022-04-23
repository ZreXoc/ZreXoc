const { workspaceRoot } = require('@nrwl/workspace/src/utils/app-root');
const path = require('path');

module.exports = {
  content: ['./apps/zre-xoc/**/*.{js,ts,jsx,tsx}'],
  presets: [
    require(path.resolve(workspaceRoot, 'tailwind-workspace-preset.js')),
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
