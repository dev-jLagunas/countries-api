/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "src/app/app.component.html",
    "src/countries-home/countries-home.component.html",
  ],
  darkMode: "class",
  theme: {
    extend: {
      placeholderColor: ["active", "focus"],
      colors: {
        "dark-blue": "hsl(209, 23%, 22%)",
        "very-dark-blue-dark": "hsl(207, 26%, 17%)",
        "very-dark-blue-light": "hsl(200, 15%, 8%)",
        "dark-gray": "hsl(0, 0%, 52%)",
        light: "#F6F5F5",
        "very-light-gray": "#B5C0D0",
      },
      width: {
        "90vw": "90vw",
      },
      screens: {
        xs: "425px",
        Llaptop: "1440px",
      },
    },
  },
  plugins: [],
};
