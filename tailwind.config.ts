import type { Config } from "tailwindcss";

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
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        textPrimary: "var(--text-primary)",
        textSecondary: "var(--text-secondary)",
      },
      backgroundImage: {
        "text-gradient":
          "linear-gradient(92deg, #F8605E 0.72%, #FA8C16 99.81%);",
        "background-gradient":
          "linear-gradient(180deg, #F8605E 0%, #FF9921 100%);",
        "image-gradient":
          "linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(20, 19, 19, 0.5) 100%);",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        quicksand: ["Quicksand", "sans-serif"],
        lato: ["Lato", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
      screens: {
        xs: "325px",
      },
      keyframes: {
        slideIn: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },
        slideOut: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
        carausel: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      animation: {
        slideIn: "slideIn 0.3s ease-in-out",
        slideOut: "slideOut 0.3s ease-in-out",
        carausel: "carausel 3s infinite",
      },
    },
  },
  plugins: [],
} satisfies Config;
