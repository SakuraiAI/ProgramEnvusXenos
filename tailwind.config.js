/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        void: "#050507",
        ink: "#0b0b10",
        mist: "#101019",
        glass: "rgba(255,255,255,0.06)",
        neon: {
          blue: "#77e6ff",
          violet: "#8b5cf6",
          rose: "#ff4d8d",
          mint: "#9effd6",
        },
      },
      boxShadow: {
        glow: "0 0 30px rgba(119,230,255,0.18)",
        orb: "0 0 80px rgba(139,92,246,0.25)",
        panel: "0 20px 60px rgba(0,0,0,0.45)",
      },
      backgroundImage: {
        grid:
          "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        widestplus: "0.28em",
      },
      animation: {
        float: "float 8s ease-in-out infinite",
        drift: "drift 18s linear infinite",
        pulseglow: "pulseglow 4s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        drift: {
          "0%": { transform: "translate3d(0, 0, 0)" },
          "50%": { transform: "translate3d(24px, -16px, 0)" },
          "100%": { transform: "translate3d(0, 0, 0)" },
        },
        pulseglow: {
          "0%, 100%": { opacity: "0.45" },
          "50%": { opacity: "0.85" },
        },
      },
    },
  },
  plugins: [],
};
