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
          to: { transform: "scale(0)", display: "none" },
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
            opacity: "0%",
          },
        },
        "to-display-static": {
          to: { display: "static" },
        },
        "header-original": {
          to: {
            display: "flex",
            position: "sticky",
          },
        },
      },
      animation: {
        title:
          "shrink 250ms ease 4000ms forwards, original-title 0ms ease 4300ms forwards",
        "intro-ascend":
          "ascend 500ms ease 4500ms forwards, twinkle 500ms ease 4500ms forwards",
        "intro-ascend-content":
          "ascend 500ms ease 4500ms forwards, twinkle 500ms ease 4500ms forwards, to-display-static 0ms ease 4300ms forwards",
        headers: "header-original 0ms 4400ms forwards",
        twinkle: "twinkle 500ms ease 500ms infinite",
      },
    },
  },
  plugins: [],
};
