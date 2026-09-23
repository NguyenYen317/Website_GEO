/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          50: "#eef4ff",
          100: "#dce8ff",
          200: "#bfd3ff",
          300: "#92b3ff",
          400: "#5b87ff",
          500: "#335fff",
          600: "#2147e6",
          700: "#1d37b4",
          800: "#1c3191",
          900: "#162966",
        },
      },
      boxShadow: {
        soft: "0 10px 30px rgba(15, 23, 42, 0.08)",
      },
      backgroundImage: {
        "tech-grid":
          "radial-gradient(circle at 1px 1px, rgba(51, 95, 255, 0.15) 1px, transparent 0)",
      },
    },
  },
  plugins: [],
};
