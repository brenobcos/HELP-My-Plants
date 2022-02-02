import { extendTheme, theme as ChakraTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    green: {
      100: "#EAFBF2",
      400: "#AECD9B",
      500: "#76B436",
      800: "#184A2C",
      1000: "#00210D",
    },
    gray: {
      0: "#FFFFFF",
      1000: "#000000",
    },
    red: {
      400: "#EB5757",
      700: "#E60000",
    },
    lighting: {
      1: "#b0ff00",
      2: "#FAFF00",
      4: "#FFE600",
      6: "#FFCC00",
      8: "#FF9900",
      10: "#FF7A00",
      12: "#FF6400",
      14: "#FF5000",
      16: "#FF3D00",
    },
    temperature: {
      4: "#00fff4",
      6: "#00ff83",
      8: "#b0ff00",
      10: "#FFfa00",
      12: "#FFe600",
      14: "#FFdc00",
      16: "#FFd200",
      18: "#FFc800",
      20: "#FFbe00",
      22: "#FFb400",
      24: "#FFaa00",
      26: "#FFa000",
      28: "#FF9600",
      30: "#FF8c00",
      32: "#FF7800",
      34: "#FF6400",
      36: "#FF5000",
    },
    gradient: {
      background:
        "linear-gradient(135deg, rgba(235,253,242,0.25) 0%, rgba(24,74,44,0.25) 50%, rgba(235,253,242,0.25) 100%)",
      border:
        "linear-gradient(50deg, rgba(191,223,215,0) 0%, rgba(24,74,44,1) 50%, rgba(191,223,215,0) 100%)",
    },
  },
  fonts: {
    heading: "Poppins",
    body: "Poppins",
  },
  fontSizes: {
    xs: "0.75rem",
    sm: "0.875rem",
    md: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
    "3xl": "1.875rem",
    "4xl": "2.25rem",
    "5xl": "3rem",
    "6xl": "3.75rem",
    "7xl": "4.5rem",
    "8xl": "6rem",
    "9xl": "8rem",
  },
  styles: {
    global: {
      body: {
        bg: "gradient.background",
        color: "green.800",
      },
      html:{
        scrollBehavior: "smooth",
      }
    },
  },
});
