import type { Config } from "tailwindcss"

const config = {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "#0B0C10",
        foreground: "#EDEDED",
        // New light color palette
        primary: "#A6D1E6", // Soft sky blue
        secondary: "#FEFBF6", // Light cream
        accent: "#F5C6EC", // Soft pink
        highlight: "#FFDEB4", // Light peach
        muted: "#1A1E2E", // Dark blue-gray for backgrounds
<<<<<<< HEAD
        // Additional colors for the chatbot
        purple: {
          600: "#9333EA",
          700: "#7E22CE",
        },
        gray: {
          700: "#374151",
          800: "#1F2937",
          900: "#111827",
        },
=======
>>>>>>> 1c817cc5d90674d7f8d64f927442a0a07b139eda
      },
      borderRadius: {
        lg: "0.5rem",
        md: "calc(0.5rem - 2px)",
        sm: "calc(0.5rem - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(calc(-100% - 2rem))" },
        },
        marquee2: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        marquee: "marquee 25s linear infinite",
        marquee2: "marquee2 25s linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
