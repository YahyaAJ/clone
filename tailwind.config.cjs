/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        "3xl": "1400px",
       
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
