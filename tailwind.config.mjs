/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    fontFamily: {
      display: [
        'DM Serif Display',
        'ui-serif',
        'Georgia',
        'Cambria',
        'Times New Roman',
        'Times',
        'serif',
      ],
      serif: [
        'Playfair Display',
        'ui-serif',
        'Georgia',
        'Cambria',
        'Times New Roman',
        'Times',
        'serif',
      ],
    },
    extend: {
      colors: {
        congress: {
          50: '#edf9ff',
          100: '#d6f1ff',
          200: '#b6e7ff',
          300: '#83dbff',
          400: '#49c4ff',
          500: '#1fa4ff',
          600: '#0885ff',
          700: '#016ef4',
          800: '#0957c4',
          900: '#0e4c9a',
          950: '#0e2f5d',
        },
        autumn: {
          50: '#fcf7f0',
          100: '#f8ebdc',
          200: '#efd4b9',
          300: '#e5b68c',
          400: '#da905d',
          500: '#d1743e',
          600: '#c35e33',
          700: '#a2492c',
          800: '#823d2a',
          900: '#693325',
          950: '#381912',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
