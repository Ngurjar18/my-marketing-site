/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        navy: "#001F3F", // Deep navy blue
        cream: "#FAF3E0", // Soft crea
        gold: "#C9A227", // Elegant gold for accents
        charcoal: "#2E2E2E", // Dark charcoal for contrast
        lightGray: "#E5E5E5", // Soft light gray for subtle backgrounds
        deepBlue: "#003366", // Rich deep blue, slightly different from navy
        warmWhite: "#FFF8E7", // Slightly warm white for backgrounds
        skyBlue: "#ADE1FB", // Soft sky blue for accents
        yellow: "#FFD500", 
        lbrown: "#9a7b4f",
      },
      fontFamily: {
        futurist: ['FuturistFixedWidth', 'sans-serif'],
      }
    },
  },
  plugins: [],
};
