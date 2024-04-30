const { createGlobPatternsForDependencies } = require('@nx/angular/tailwind');
const { join } = require('path');
// const sharedTailwindConfig = require('../../libs/tailwind-preset/tailwind.config');

/** @type {import('tailwindcss').Config} */
module.exports = {  
  content: [
    join(__dirname, 'src/**/!(*.stories|*.spec).{ts,html}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
