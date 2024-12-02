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
      screens: {
        sm: "600px",
        md: "728px",
        lg: "984px",
        xl: "1200px",
        "2xl": "1200px",
      },
    },
    extend: {
      colors: {
        primary: "#EF9635",
        black: {
          200: "#E8E8E8",
          300: "#BABABA",
        },
        brand: {
          100: "#FCDF58",
          400: "#64270C",
        },
      },
    },
  },
  plugins: [],
};
