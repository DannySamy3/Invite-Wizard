import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        vidaloka: ["Vidaloka", "san-serif"],
        rubik: ["Rubik", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        inter: ["Inter", "sans-serif"],

        playfair: ["Playfair Display", "serif"],
        lora: ["Lora", "serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },

      fontSize: {
        "14p": " 0.9375rem",
      },
      colors: {
        "placeholder-color": "#000",
      },
      spacing: {
        "53%": "53%", // Add the custom value here
        "46%": "42%", // Add the custom value here
        "36%": "36%", // Add the custom value here
        "20%": "-9%", // Add the custom value here
        "82%": "82%", // Add the custom value here
        "86%": "86%", // Add the custom value here
        "88%": "88%", // Add the custom value here
      },
      gridTemplateColumns: {
        "custom-mine": "128px 100px",
      },

      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", backgroundColor: "transparent" },
          "100%": { opacity: "1" },
        },
        slideDown: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(0)" },
        },

        slideInFromLeft: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },
        slideInFromRight: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
      },

      slideUp: {
        "0%": { transform: "translateY(100%)", opacity: "0" },
        "100%": { transform: "translateY(0)", opacity: "1" },
      },
      animation: {
        fadeIn: "fadeIn 2s ease-in-out",
        slideUp: "slideUp 5s ease-in-out",
        slideDown: "slideDown 2s ease-in-out",
        slideInFromLeft: "slideInFromLeft 3s ease-out forwards",
        slideInFromRight: "slideInFromRight 3s ease-out forwards",
      },
      translate: {
        "10": "10rem",
      },
      gridTemplateColumns: {
        custom: "550px 1fr",
      },

      width: {
        "66.3p": "71%", // Custom width of 60 percent
      },
      gap: { "6p": "0.375rem" },

      backgroundImage: (theme) => ({
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-linear": "linear-gradient(180deg, var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(var(--tw-gradient-stops))",
        "hero-pattern-1": "url('/images/right.jpg')", // Add the custom image here
      }),
    },
  },
  variants: {
    extend: {
      textColor: ["placeholder"],
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: false,
    darkTheme: "light",
    base: true,
    styled: true,
    utils: true,
    prefix: "",
    logs: true,
    // themeRoot: ":root",
  },
};
export default config;
