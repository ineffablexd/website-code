// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        // Define custom font families here
        oduda: ['Oduda', 'sans-serif'], // For headings and big texts
        fuek: ['Fuek', 'sans-serif'],   // For other texts
      },
      // You can define your palette colors here as well for direct use with Tailwind if needed elsewhere
      colors: {
        'ph-primary-dark': '#464c7e',
        'ph-secondary-dark': '#4f658e',
        'ph-accent-dark': '#6379a2',
        'ph-card-light1': '#e1acc3',
        'ph-card-light2': '#8ab3c9',
      }
    },
  },
  plugins: [],
}