import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'class', // <--- BUNU EKLEMEZSEN TEMA DEĞİŞMEZ
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Light mode için arka planı beyaz, yazı rengini siyah tanımlıyoruz
        // Dark mode zaten css'de tanımlıydı ama burayı özelleştiriyoruz
        background: "var(--background)", 
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
export default config;