/**
 * @file theme.js
 * @author Devin Arena
 * @description Theme data for the web application page.
 * @since 3/17/2022
 **/

import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#7F00FF",
    },
  },
});

export default theme;
