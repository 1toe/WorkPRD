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
          50: "#e6f2ff",
          100: "#cce5ff",
          200: "#99caff",
          300: "#66afff",
          400: "#3394ff",
          500: "#3b82f6",
          600: "#2563eb",
          700: "#1d4ed8",
          800: "#1e40af",
          900: "#1e3a8a",
        },
        secondary: {
          DEFAULT: "var(--color-secondary)",
          50: "#ecfdf5",
          100: "#d1fae5",
          200: "#a7f3d0",
          300: "#6ee7b7",
          400: "#34d399",
          500: "#10b981",
          600: "#059669",
          700: "#047857",
          800: "#065f46",
          900: "#064e3b",
        },
        accent: {
          DEFAULT: "var(--color-accent)",
          50: "#fff1f2",
          100: "#ffe4e6",
          200: "#fecdd3",
          300: "#fda4af",
          400: "#fb7185",
          500: "#f43f5e",
          600: "#e11d48",
          700: "#be123c",
          800: "#9f1239",
          900: "#881337",
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
        elevated: "var(--box-shadow-elevated)",
        glass: "0 8px 32px 0 rgba(31, 38, 135, 0.17)",
      },
      borderRadius: {
        sm: "var(--border-radius-sm)",
        md: "var(--border-radius-md)",
        lg: "var(--border-radius-lg)",
        full: "var(--border-radius-full)",
      },
      spacing: {
        xs: "var(--spacing-xs)",
        sm: "var(--spacing-sm)",
        md: "var(--spacing-md)",
        lg: "var(--spacing-lg)",
        xl: "var(--spacing-xl)",
        xxl: "var(--spacing-xxl)",
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'grid-pattern': "url(\"data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 0V20M0 1H20' stroke='%23E5E7EB' stroke-width='0.5'/%3E%3C/svg%3E\")",
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulse: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.5 },
        },
        fadeIn: {
          from: { opacity: 0, transform: 'translateY(10px)' },
          to: { opacity: 1, transform: 'translateY(0)' },
        },
        slideRight: {
          from: { transform: 'translateX(-100%)' },
          to: { transform: 'translateX(0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        scale: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
        },
      },
      animation: {
        float: 'float 5s ease-in-out infinite',
        pulse: 'pulse 3s ease-in-out infinite',
        fadeIn: 'fadeIn 0.5s ease-out forwards',
        slideRight: 'slideRight 0.5s ease-out',
        shimmer: 'shimmer 3s linear infinite',
        scale: 'scale 4s ease-in-out infinite',
      },
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
