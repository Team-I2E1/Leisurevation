/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["src/pages/**/*.{js,ts,jsx,tsx}", "src/components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      primary: "#529B03",
      secondary: "#E9E92F",
      accent: "#F6F9C8",
      neutral: "#191A3E",
      "base-100": "#FFFFFF",
      info: "#CAE2E8",
      success: "#DFF2A1",
      warning: "#F7E488",
      error: "#F2B6B5",
    },
    fontWeight: {
      normal: 400,
      semibold: 600,
      bold: 700,
    },
    extend: {},
  },
  plugins: [],
}
