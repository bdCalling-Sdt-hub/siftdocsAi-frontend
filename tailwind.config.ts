import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "20px",
      screens: {
        "2xl": "1300px",
      },
    },
    extend: {
      colors: {
        primary: "#12A3E1",
        secondary: "#54A7C3",
        base: "#5C5C5C",
      },
    },
  },
  plugins: [],
} satisfies Config;
