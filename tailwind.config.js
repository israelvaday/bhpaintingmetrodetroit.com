/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brass: {
          50:  "#FAF4E6",
          100: "#F2E3B8",
          200: "#E8CB7E",
          300: "#D9AE4A",
          400: "#C9962E",
          500: "#B8862B",
          600: "#9A6F23",
          700: "#75541B",
          800: "#523B13",
          900: "#33240C",
        },
        ink: {
          50:  "#F5F6F7",
          100: "#E5E7EA",
          200: "#C2C7CD",
          300: "#9098A2",
          400: "#5E6772",
          500: "#3B434C",
          600: "#262C33",
          700: "#1A1F25",
          800: "#13171C",
          900: "#0B0E12",
          950: "#070A0D",
        },
        danger: "#E11D2A",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-jakarta)", "var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      borderRadius: {
        "4xl": "2rem",
      },
      keyframes: {
        "pulse-ring": {
          "0%":   { boxShadow: "0 0 0 0 rgba(34,197,94,0.55)" },
          "70%":  { boxShadow: "0 0 0 12px rgba(34,197,94,0)" },
          "100%": { boxShadow: "0 0 0 0 rgba(34,197,94,0)" },
        },
        "marquee": {
          "0%":   { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "shimmer": {
          "0%":   { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        "pulse-ring": "pulse-ring 2s cubic-bezier(0.4,0,0.6,1) infinite",
        "marquee":     "marquee 40s linear infinite",
        "shimmer":     "shimmer 3s linear infinite",
      },
    },
  },
  plugins: [],
};
