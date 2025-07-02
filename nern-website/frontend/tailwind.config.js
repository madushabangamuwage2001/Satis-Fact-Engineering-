/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        red: {
          900: '#8b0000', // Deep maroon/burgundy color that matches your design
        }
      },
      fontFamily: {
        serif: ['Times New Roman', 'serif'],
        sans: ['Arial', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
