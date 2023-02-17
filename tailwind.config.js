// const {colors} = require("tailwindcss/colors")
const {fontFamily} = require("tailwindcss/defaultTheme")

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", ...fontFamily.sans],
      },
      backgroundImage: {
        "hero-pattern": "url('/mong.jpg')",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
}
