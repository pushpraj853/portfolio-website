import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#a855f7",
          secondary: "#3b82f6"
        },
        "brand-dark": "#050509"
      }
    }
  },
  plugins: []
};

export default config;