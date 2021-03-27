module.exports = {
  purge: {
    content: ["./components/**/*.js", "./pages/**/*.js"],
    options: {
      safelist: [],
    },
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: "transparent",

      white: "#FFFFFF",
      black: "#000000",
      green: "#95F2C3",
      greenBackground: "#A9E5BB",

      link: "#1F90F8",
      secondary: "#FF7171",

      primary: {
        base: "#2270FD",
      },

      gray: {
        base: "#9A9A9A",
        light: "#E2E2E2",
        lighter: "#F5F5F5",
      },

      neutral: {
        200: "#F6F2FF",
        400: "#D2D7E0",
        700: "#65597F",
        800: "#3F305F",
      },

      primaryGradient: {
        start: "#FF7171",
        end: "#FF4588",
      },

      successGradient: {
        start: "#39DCAB",
        end: "#49DED5",
      },

      bgGradient: {
        start: "#FFFFFF",
        end: "#F6F2FF",
      },

      neutralGradient: {
        start: "#34215C",
        end: "#3F305F",
      },
    },

    extend: {
      fontFamily: {
        sans:
          'Acto, Georgia, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
      },

      boxShadow: {
        default: "0px 0px 4px rgba(54, 44, 73, 0.03)",
        md: "0px 4px 12px rgba(25, 30, 51, 0.06)",
        lg: "0px 4px 12px rgba(214, 210, 234, 0.33)",
        button: "0px 8px 12px rgba(55, 53, 145, 0.13)",
      },

      borderRadius: {
        default: "0.5rem",
        lg: "1rem",
      },

      backgroundOpacity: {
        20: "0.2",
      },

      animation: {
        "spinner-dot": "spinner-dot 1.4s infinite ease-in-out both",
      },

      keyframes: {
        "spinner-dot": {
          "0%, 80%, 100%": {
            transform: "scale(0)",
          },
          "40%": {
            transform: "scale(1)",
          },
        },
      },

      spacing: {
        14: "3.5rem",
        55: "13.75rem",
        94: "23.5rem",
      },

      maxHeight: {
        94: "23.5rem",
      },
      minHeight: {
        16: "4rem",
        24: "6rem",
      },
      minWidth: {
        12: "3rem",
      },
    },
    screens: {
      xs: "380px",
      // => @media (min-width: 380px) { ... }
      sm: "640px",
      // => @media (min-width: 640px) { ... }
      md: "768px",
      // => @media (min-width: 768px) { ... }
      lg: "1024px",
      // => @media (min-width: 1024px) { ... }
      xl: "1280px",
      // => @media (min-width: 1280px) { ... }
      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
  },

  variants: [
    "responsive",
    "group-hover",
    "first",
    "last",
    "odd",
    "even",
    "hover",
    "focus",
    "active",
    "visited",
    "disabled",
    "focus-within",
  ],
};
