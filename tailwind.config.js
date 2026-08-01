/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        remax: {
          navy: "#0B1E3B",      // Navy Blue da marca RE/MAX
          "navy-dark": "#071429",
          "navy-light": "#16315C",
          red: "#E11C2A",       // Vermelho de destaque RE/MAX
          "red-hover": "#C81220",
          "red-light": "rgba(225, 28, 42, 0.08)",
          gray: "#F8FAFC",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter-tight)", "Inter Tight", "sans-serif"],
        tight: ["var(--font-inter-tight)", "Inter Tight", "sans-serif"],
      },
      boxShadow: {
        glass: "0 8px 32px 0 rgba(11, 30, 59, 0.08)",
        "glass-hover": "0 12px 40px 0 rgba(225, 28, 42, 0.15)",
        "red-glow": "0 0 20px rgba(225, 28, 42, 0.25)",
      },
    },
  },
  plugins: [],
};
