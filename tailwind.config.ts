import type { Config } from "tailwindcss";
export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: { DEFAULT: "#1B2F4E", 2: "#24406A", 3: "#0F2038" },
        teal: { DEFAULT: "#2CC5B4", d: "#0F7F7C", dd: "#0B6B68", soft: "#DDF6F2", line: "#B8E8E2" },
        ink: { DEFAULT: "#16233A", mute: "#5B6B82", line: "#DDE3EC", bg: "#F1F4F8" },
      },
      fontFamily: { sans: ["'IBM Plex Sans Arabic'", "'Segoe UI'", "Tahoma", "sans-serif"] },
    },
  },
  plugins: [],
} satisfies Config;
