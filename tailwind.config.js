/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-dark": "url('./src/assets/images/bg-desktop-dark.jpg')",
        "hero-light": "url('./src/assets/images/bg-desktop-light.jpg')",
      },
      letterSpacing: {
        tightest: "-.075em",
        tighter: "-.05em",
        tight: "-.025em",
        normal: "0",
        wide: ".025em",
        wider: ".05em",
        widest: ".5em",
        // widest: ".25em",
      },
      fontFamily: {
        sans: ["Josefin// Sans", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        "dark-bg": "hsl(235, 21%, 11%)",
        "item-dark-bg": " hsl(235, 24%, 19%)",
        "light-bg": "hsl(0, 0%, 98%)",
        "items-light-bg": "hsl(236, 33%, 92%)",
        "all-blue": "hsl(220, 98%, 61%)",
      },
    },
  },
  plugins: [],
};
