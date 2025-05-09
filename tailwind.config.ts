import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "var(--color-primary)",
        },
        secondary: {
          DEFAULT: "var(--color-secondary)",
        },
        accent: {
          DEFAULT: "var(--color-accent)",
        },
        dark: {
          DEFAULT: "var(--color-dark)",
        },
        light: {
          DEFAULT: "var(--color-light)",
        },
      },
      backgroundColor: {
        light: "var(--bg-light)",
        alt: "var(--bg-alt)",
        dark: "var(--bg-dark)",
      },
      textColor: {
        dark: "var(--text-dark)",
        medium: "var(--text-medium)",
        light: "var(--text-light)",
      },
      boxShadow: {
        DEFAULT: "var(--box-shadow)",
        hover: "var(--box-shadow-hover)",
      },
      borderRadius: {
        sm: "var(--border-radius-sm)",
        md: "var(--border-radius-md)",
        lg: "var(--border-radius-lg)",
      },
      spacing: {
        xs: "var(--spacing-xs)",
        sm: "var(--spacing-sm)",
        md: "var(--spacing-md)",
        lg: "var(--spacing-lg)",
        xl: "var(--spacing-xl)",
      },
      fontFamily: {
        primary: ["var(--font-primary)"],
      },
      fontSize: {
        xs: "var(--font-size-xs)",
        sm: "var(--font-size-sm)",
        md: "var(--font-size-md)",
        lg: "var(--font-size-lg)",
        xl: "var(--font-size-xl)",
        xxl: "var(--font-size-xxl)",
      },
      transitionProperty: {
        DEFAULT: "var(--transition-normal)",
        fast: "var(--transition-fast)",
        slow: "var(--transition-slow)",
      },
    },
  },
  plugins: [],
};
export default config;
