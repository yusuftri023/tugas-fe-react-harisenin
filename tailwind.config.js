/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      android: ["Android"],
      poppins: ["Poppins"],
    },
    extend: {
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 100 },
        },
        fadeInToBottom: {
          "0%": { opacity: 0, transform: "translateY(-10px)" },

          "100%": { opacity: 100, transform: "translateY(0)" },
        },
        fadeOutToTop: {
          "0%": { opacity: 100, transform: "translateY(0)" },
          "100%": { opacity: 0, transform: "translateY(-10px)" },
        },
        slideToRight: {
          "0%": { transform: "translateX(38px)" },
          "10%": { transform: "translateX(34px)" },
          "20%": { transform: "translateX(30px)" },
          "30%": { transform: "translateX(26px)" },
          "40%": { transform: "translateX(22px)" },
          "50%": { transform: "translateX(18px)" },
          "60%": { transform: "translateX(14px)" },
          "70%": { transform: "translateX(10px)" },
          "80%": { transform: "translateX(7px)" },
          "90%": { transform: "translateX(4x)" },
          "100%": { transform: "translateX(0)" },
        },
        slideToLeft: {
          "0%": { transform: "translateX(-38px)" },
          "10%": { transform: "translateX(-34px)" },
          "20%": { transform: "translateX(-30px)" },
          "30%": { transform: "translateX(-26px)" },
          "40%": { transform: "translateX(-22px)" },
          "50%": { transform: "translateX(-18px)" },
          "60%": { transform: "translateX(-14px)" },
          "70%": { transform: "translateX(-10px)" },
          "80%": { transform: "translateX(-7px)" },
          "90%": { transform: "translateX(-4x)" },
          "100%": { transform: "translateX(0)" },
        },
      },
      animation: {
        "fade-in": "fadeIn 1s ease-in",
        "fade-in-drop": "fadeInToBottom 0.4s ease-in",
        "fade-out-top": "fadeOutToTop 0.4s ease-out",
        "slide-right": "slideToRight 0.1s",
        "slide-left": "slideToLeft 0.1s",
      },
    },
  },
  plugins: [],
};
