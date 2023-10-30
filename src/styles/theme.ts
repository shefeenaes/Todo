import { red } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

// Create a theme instance.
const theme = createTheme({
  components: {
    MuiUseMediaQuery: {
      defaultProps: {
        noSsr: true,
      },
    },
  },
  palette: {
    primary: {
      main: "#1A4742",
      light: "#54BDC2",
    },
    secondary: {
      main: "#F4CA40",
    },
    error: {
      main: red.A400,
    },
    warning: {
      main: "#F4CA40 !important",
    },
    info: {
      main: "#ebebeb",
    },
    grey: {
      100: "#F5F5F7",
      200: "#EBEBEB",
    },
  },
  typography: {
    fontFamily: "GiloryBold,GilorySemiBold, GiloryMedium, GiloryRegular",
    h2: {
      fontSize: "3.75rem",
      lineHeight: "3.75rem",
      fontWeight: 100,
      fontFamily: "GiloryBold",
    },
    h3: {
      fontSize: "2rem",
      lineHeight: "3rem",
      fontFamily: "GiloryBold",
    },
    h4: {
      fontSize: "1.5rem",
      fontFamily: "GiloryBold",
    },
    h5: {
      fontSize: "1.25rem",
      fontWeight: 300,
      lineHeight: "2rem",
      fontFamily: "GiloryMedium",
    },
    subtitle1: {
      fontSize: "1.5rem",
      fontWeight: 300,
      lineHeight: "2rem",
      fontFamily: "GiloryMedium",
    },
    subtitle2: {
      fontSize: "1.5rem",
      fontWeight: 100,
      lineHeight: "2rem",
      fontFamily: "GiloryMedium",
    },
    body1: {
      fontSize: "1rem",
      fontFamily: "GiloryMedium",
    },
    body2: {
      fontSize: "0.9rem",
      fontFamily: "GiloryMedium",
    },
  },
});

export default theme;
