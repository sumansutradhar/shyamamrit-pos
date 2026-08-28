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
        shyam: {
          dark: "#84B179",
          base: "#A2CB8B",
          light: "#C7EABB",
          pale: "#E8F5BD",
          text: "#292524",
          paper: "#FDFCF8",
        },
      },
      fontFamily: {
        sans: ['var(--font-outfit)', 'sans-serif'],
        cursive: ['var(--font-reenie-beanie)', 'cursive'],
      },
      animation: {
        'blob-float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(10px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
};
export default config;