/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        shrink: {
          from: { transform: "scale(1)" },
          to: { transform: "scale(0)" },
        },
        twinkle: {
          from: { opacity: "0%" },
          to: { opacity: "100%" },
        },
        ascend: {
          from: { transform: "translateY(42px)" },
          to: { transform: "translateY(0)" },
        },
        "original-title": {
          to: {
            position: "static",
            left: "auto",
            top: "auto",
            "font-size": "30px",
            "font-height": "36px",
            "justify-content": "start",
            transform: "scale(1)",
            width: "auto",
          },
        },
      },
      animation: {
        title:
          "shrink 250ms ease 4000ms forwards, original-title 0ms ease 4000ms forwards",
        twinkle: "twinkle 750ms ease 750ms infinite",
      },
    },
  },
  plugins: [],
};
