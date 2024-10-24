/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundImage:{
        background: "linear-gradient(180deg, rgba(50, 75, 84, 0.80) 0%, rgba(50, 75, 84, 0.80) 50.01%, rgba(255, 255, 255, 0.80) 100%)"
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
};
