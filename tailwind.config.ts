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
        title: ["Noto Sans KR", "sans-serif"],
      },
      fontSize: {
        "heading-lg": [
          "44px",
          {
            lineHeight: "1.3",
            fontWeight: "700",
          },
        ],
        "heading-md": [
          "32px",
          {
            lineHeight: "1.4",
            fontWeight: "700",
          },
        ],
        "heading-xs": [
          "25px",
          {
            lineHeight: "1.5",
            fontWeight: "700",
          },
        ],
        "heading-s": [
          "20px",
          {
            lineHeight: "1.5",
            fontWeight: "400",
          },
        ],
        "heading-x": [
          "15px",
          {
            lineHeight: "1.6",
            fontWeight: "400",
          },
        ],
        "heading-xxs": [
          "22px",
          {
            lineHeight: "1.4",
            fontWeight: "700",
          },
        ],
        "title-sm": [
          "18px",
          {
            lineHeight: "1.4",
            fontWeight: "500",
          },
        ],
        "title-xs": [
          "15px",
          {
            lineHeight: "1.4",
            fontWeight: "500",
          },
        ],
        "caption-md": [
          "20px",
          {
            lineHeight: "1.6",
            fontWeight: "400",
          },
        ],
        "caption-r": [
          "16px",
          {
            lineHeight: "1.8",
            fontWeight: "400",
          },
        ],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        blue: {},
        grey: {
          50: "#c5c5c5",
          60: "#c8c8c8",
          100: "#f6f6f6",
          800: "#666666",
          900: "#333333",
        },
      },
    },
  },
  plugins: [],
};

export default config;
