import type {Config} from "tailwindcss";
import colors from "tailwindcss/colors";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // width: {},
      maxWidth: {
        page: "64rem",
      },
      backgroundImage: {
        box: "url('/images/box.svg')",
        shape: "url('/images/shape2.svg')",
        undraw: "url('/images/undraw.svg')",
      },
      colors: {
        gray: colors.zinc,
        main: colors.emerald,
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
export default config;
