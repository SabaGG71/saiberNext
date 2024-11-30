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
        primary: {
          50: "#f3f5fc",
          100: "#e1e5f7",
          200: "#c1c9ed",
          300: "#96a2e0",
          400: "#775ada",
          500: "#0e153a",
          600: "#0c1232",
          700: "#0a0f28",
          800: "#080c1f",
          900: "#060819",
        },
        accent: {
          50: "#F4F2FE", // Lightest tint
          100: "#E7E3FD", // Very light
          200: "#C7C0FA", // Light tint
          300: "#A59DF5", // Mid-light
          400: "#8A7FF0", // Soft purple
          500: "#775ADA", // Base color
          600: "#654BC0", // Slightly darker
          700: "#503A99", // Darker purple
          800: "#392A73", // Deep purple
          900: "#271C4D", // Darkest
        },
      },
    },
  },
  plugins: [],
};
