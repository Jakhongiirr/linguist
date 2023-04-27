/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        header: {
          default: "#403835",
          text: "#aca3a2"
        },
        body: "#30241c",
        sidebar: "#463b3b",
        line: "#4d4541",
        hover: "#504444",
      },
    },
  },
  plugins: [],
};
