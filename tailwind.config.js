/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#0a0e12",
        "bg-alt": "#0d1218",
        surface: "#10161d",
        "surface-hover": "#141b23",
        border: "#1e2830",
        text: "#dbe4ec",
        "text-dim": "#8b9ba8",
        "text-faint": "#5b6b78",
        accent: "#34d399",
        "accent-dim": "#1f6f56",
      },
      fontFamily: {
        mono: ["'JetBrains Mono'", "ui-monospace", "SFMono-Regular", "monospace"],
        sans: ["Inter", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 24px rgba(52, 211, 153, 0.18)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0) rotate(0deg)" },
          "50%": { transform: "translateY(-24px) rotate(4deg)" },
        },
        scrollDot: {
          "0%": { opacity: 1, top: "6px" },
          "100%": { opacity: 0, top: "18px" },
        },
      },
      animation: {
        float: "float 12s ease-in-out infinite",
        scrollDot: "scrollDot 1.6s ease infinite",
      },
    },
  },
  plugins: [],
};
