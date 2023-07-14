/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          basic: "#101B21",
          dark: "#161E23",
          light: "#203038"
        },
        secondary: "#F9E700",
      }
    },
  },
  plugins: [],
}
