/** @type {import('tailwindcss').Config} */
export default {
  content: ['./dist/*.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '1.25rem',
      },
      colors: {
        clifford: '#da373d',
      },
    },
  },
  plugins: [],
};
