import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./index.html",
    "./App.tsx",
    "./components/**/*.{ts,tsx}",
    "./services/**/*.{ts,tsx}",
    "./index.tsx",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Sora", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Fraunces", "ui-serif", "serif"],
      },
      colors: {
        lexi: {
          ink: "#0b0f14",
          panel: "#111825",
          mist: "#f4f6f8",
          slate: "#9aa3b2",
          sun: "#f6bf4d",
          aqua: "#3dd6c6",
        },
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        bounceShort: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        "fade-in-up": "fadeInUp 0.5s ease-out",
        "bounce-short": "bounceShort 1s ease-in-out 1",
      },
    },
  },
  plugins: [],
};

export default config;
