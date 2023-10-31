/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./screens/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        default: "#243c5a",
        "green-soft": "#8ad9d1",
        "green-bold": "#59a59d",
        "regal-blue": "#29afa2",
      },
    },
  },
  plugins: [],
};
