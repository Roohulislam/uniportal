import { createRequire } from 'module';

const require = createRequire(import.meta.url);

// Rename the file to tailwind.config.mjs

/** @type {import('tailwindcss').Config} */

export default {

  content: [

    "./index.html",

    "./src/**/*.{js,ts,jsx,tsx}",

    "node_modules/flowbite-react/lib/esm/**/*.js",

  ],

  theme: {

    extend: {},

  },

  plugins: [],

};
