import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1a1a1a",
        secondary: "#f5f5f0",
        accent: "#c5a059",
        "accent-hover": "#b8944f",
        "text-primary": "#1a1a1a",
        "text-secondary": "#666666",
        border: "#e8e8e0",
      },
      fontFamily: {
        heading: ["Playfair Display", "serif"],
        body: ["Inter", "sans-serif"],
      },
      borderRadius: {
        sm: "0.375rem",
        md: "0.5rem",
        lg: "0.75rem",
        full: "9999px",
      },
      transitionDuration: {
        fast: "0.15s",
        base: "0.3s",
        slow: "0.5s",
      },
    },
  },
  plugins: [],
} satisfies Config;