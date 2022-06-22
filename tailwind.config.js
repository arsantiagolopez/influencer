const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#080708",
        secondary: "#2e2b2d",
        tertiary: "#5f5757",
      },
      fontFamily: {
        Basic: ["Basic", "sans-serif"],
      },
      display: ["group-hover"],
      screens: {
        xs: "500px",
      },
    },
  },
};
