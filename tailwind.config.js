/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["src/app/app.component.html"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "dark-blue": "hsl(209, 23%, 22%)",
        "very-dark-blue-dark": "hsl(207, 26%, 17%)",
        "very-dark-blue-light": "hsl(200, 15%, 8%)",
        "dark-gray": "hsl(0, 0%, 52%)",
        "very-light-gray": "hsl(0, 0%, 98%)",
      },
      width: {
        "90vw": "90vw",
      },
    },
  },
  plugins: [],
};
