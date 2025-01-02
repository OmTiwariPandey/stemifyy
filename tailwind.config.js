/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#000",
        linen: {
          "100": "#f4f1e7",
          "200": "rgba(244, 241, 231, 0.75)",
        },
        white: "#fff",
        darkviolet: "#991ae3",
        gray: {
          "100": "rgba(255, 255, 255, 0.6)",
          "200": "rgba(255, 255, 255, 0.5)",
          "300": "rgba(255, 255, 255, 0.85)",
          "400": "rgba(255, 255, 255, 0.9)",
          "500": "rgba(255, 255, 255, 0.7)",
        },
      },
      spacing: {},
      fontFamily: {
        inter: "Inter",
        gallery: "Gallery",
      },
    },
    fontSize: {
      xs: "12px",
      "2xs-7": "10.7px",
      "2xs-9": "10.9px",
      "base-9": "15.9px",
      "111xl": "130px",
      "3xl": "22px",
      lg: "18px",
      "9xl": "28px",
      "26xl-4": "45.4px",
      "8xl": "27px",
      "17xl": "36px",
      "176xl-8": "195.8px",
      "30xl": "49px",
      "59xl": "78px",
      "33xl": "52px",
      "13xl": "32px",
      "53xl": "72px",
      "39xl": "58px",
      "24xl": "43px",
      "102xl-8": "121.8px",
      "11xl": "30px",
      "102xl": "121px",
      "29xl": "48px",
      base: "16px",
      "3xl-2": "22.2px",
      sm: "14px",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      mq1100: {
        raw: "screen and (max-width: 1100px)",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq1025: {
        raw: "screen and (max-width: 1025px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
