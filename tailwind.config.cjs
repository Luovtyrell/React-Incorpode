/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        customYellow: "#ffd35a",
        green: "#D2F898",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
