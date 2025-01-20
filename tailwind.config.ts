import type { Config } from "tailwindcss";



export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Inter",
          "sans-serif",
          "geistSans", // Added Geist Sans
          "roboto",    // Added Roboto
        ],
        mono: [
          "JetBrains Mono",
          "monospace",
          "geistMono", // Added Geist Mono
        ],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
} satisfies Config;
