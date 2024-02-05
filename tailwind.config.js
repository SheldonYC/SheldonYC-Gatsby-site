/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    extend: {
      colors: {
        primary_color: "#31264E",
        banner_text: "#FBFFF1",
        
        card_bg: "#B4C5E4",
        card_text: "#31264E",
        btn_bg: "#FF7F11",
        btn_text: "#31264E",

        lightmode_bg: "#FBFFF1",
        lightmode_text: "#FFFFFF",
      },
      textUnderlineOffset: ['hover'],
    },
  },
  plugins: [],
};
