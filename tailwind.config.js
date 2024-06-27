/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/components/**/*.{js,vue,ts}",
    "./src/layouts/**/*.vue",
    "./src/pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    container: {
      // screens: {
      //   sm: "450px",
      //   md: "450px",
      //   lg: "580px",
      //   xl: "580px",
      //   "2xl": "700px",
      // },
    },
    extend: {},
  },
  plugins: [],
};
