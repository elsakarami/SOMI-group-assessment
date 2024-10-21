/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    fontFamily: {
      poppinsRegular: ["PoppinsRegular", "sans-serif"],
      poppinsSemiBold: ["PoppinsSemiBold", "sans-serif"],
      poppinsSemiBoldItalic: ["PoppinsSemiBoldItalic", "sans-serif"],
      poppinsItalic: ["PoppinsItalic", "sans-serif"],
    },
    container: {
      center: true,
    },
    extend: {
      screens: {
        xs: { max: "375px" },
        sm: { min: "375px", max: "641px" },
        md: { min: "641px", max: "1024px" },
        lg: { min: "1025px" },
      },
      colors: {
        somiDeepBlue: "#2E598E", 
        somiDarkDeepBlue: "#2E3A4F",
        somiLightBlue: "#568AB6",
        somiCyan: "#008996",
        somiDarkCyan: "#1E3A4C",
        somiOrange: "#F1974C",
        somiDarkOrange: "#4a2d0f",
        somiMagenta: "#A22E5C",
        somiDarkMagenta:"#4b0d23"
      },
    },
  },
  plugins: [],
};
