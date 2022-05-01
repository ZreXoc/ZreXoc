const { join } = require('path');

module.exports = {
  'tailwindcss/nesting': {},

  plugins: {
    tailwindcss: {
      config: join(__dirname, 'tailwind.config.js'),
    },
    autoprefixer: {},
  },
};
