/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        black: "#000",
        indigo: {
          "100": "#4e1d9a",
          "200": "rgba(78, 29, 154, 0.01)",
          "300": "rgba(78, 29, 154, 0.13)",
          "400": "rgba(78, 29, 154, 0.09)",
          "500": "rgba(78, 29, 154, 0.06)",
          "600": "rgba(78, 29, 154, 0.1)",
        },
        gray: {
          "100": "#777",
          "200": "#2c272e",
        },
        forestgreen: "#54b435",
        palegreen: "#67e776",
        lightgray: "#d0d0d0",
        royalblue: "rgba(63, 110, 236, 0.13)",
      },
      spacing: {},
      fontFamily: {
        poppins: "Poppins",
        "hind-madurai": "'Hind Madurai'",
      },
      borderRadius: {
        "8xs": "5px",
        "3xs": "10px",
        "12xs-8": "0.8px",
        "8xs-5": "4.5px",
      },
    },
    fontSize: {
      smi: "13px",
      base: "16px",
      sm: "14px",
      lg: "18px",
      "21xl": "40px",
      "5xl": "24px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
