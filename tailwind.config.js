/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html','./src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      spacing: {
        '100':'25rem',
        '128': '32rem',
        
      }
    },
  },
  plugins: [],
}

