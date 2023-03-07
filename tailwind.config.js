/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        arcade_gamer: ["var(--my-arcade-gamer)"],
        mon: "var(--my-mon)"
      },
      colors: {
        PUR1: "#6888FF",
        GREY1: "#D9D9D9",
        GREY2: "#545454",
        GREEN1: "#CDEFE8",
        GREEN2: "#00C49C",
      }
    },
  },
  plugins: [],
}
