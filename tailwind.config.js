/** @type {import('tailwindcss').Config} */
const mono = [
  'ui-monospace',
  'SFMono-Regular',
  'Menlo',
  'Monaco',
  'Consolas',
  '"Liberation Mono"',
  '"Courier New"',
  'monospace',
];

module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      sans: mono,
      mono: mono,
    },
    extend: {
      colors: {
        bg: '#ffffff',
        ink: '#08090a',
        muted: '#737373',
        line: '#e5e5e5',
      },
    },
  },
  plugins: [],
};
