/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {},
      fontFamily: {
        lemurmure: ["Le Murmure", "sans-serif"],
        pilowlava: ["pilowlava", "sans-serif"],
        alternates: ["Montserrat Alternates", "san-serif"],
        lato: ["Lato", "sans-serif"],
      },
      colors: {
        pistachio: "#9CD08F",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
