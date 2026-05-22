/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Bebas Neue"', 'cursive'],
        body: ['"DM Sans"', 'sans-serif'],
        mono: ['"DM Mono"', 'monospace'],
      },
      colors: {
        asphalt: '#4c956c',
        chalk: '#fefae0',
        signal: '#3e4c22',
        rust: '#a68a64',
        mist: '#7f5539',
      },
    },
  },
  plugins: [],
}
