import { Roboto } from "next/font/google";
import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

export const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["Helvetica", "Arial", "sans-serif"],
});

// Create a theme instance.
export default createTheme({
  palette: {
    primary: {
      main: "#FABE19",
    },
    secondary: {
      main: "#19857b",
    },
    error: {
      main: red.A400,
    },
    success: {
      main: "#4CAF50",
    },
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
});
