import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      screens: {
        "2xl": "1440px",
      },
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },

        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },

        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },

        dark: {
          DEFAULT: "hsl(var(--dark))",
          foreground: "hsl(var(--dark-foreground))",
        },

        muted: "hsl(var(--muted))",
        "dolphin-gray": "hsl(var(--dolphin-gray))",
        "snow-white": "hsl(var(--snow-white))",
        "mist-gray": "hsl(var(--mist-gray))",
        border: "hsl(var(--border))",
        divider: "hsl(var(--divider))",
        light: "hsl(var(--light))",
      },

      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",

        "gradient-divider":
          "linear-gradient(0deg,rgba(114, 9, 183, 0.00) 0%, rgba(114, 9, 183, 0.20) 50%, rgba(114, 9, 183, 0.00) 100%)",
      },
    },
  },
  plugins: [],
};
export default config;
