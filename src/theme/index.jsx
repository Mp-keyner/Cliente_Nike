import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#406b95",
    //   main: "#2d4a72",
    },
    secondary: {
      main: "#f50057",
    },
    light: {
        main: "#fff"
    }
  },
});

export default theme;