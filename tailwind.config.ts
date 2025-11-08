import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lamasky: "#C3EBFA",
        dantiskyLight: "#1EDF9F",
        dantiPurple: "#CFCEFF",
        dantiPurpleLight: "#F1F0FF",
        dantiYellow: "#FAE27C",
        dantiYellowLight: "#FEFCEB",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
    },
  },
  plugins: [],
};

export default config;
