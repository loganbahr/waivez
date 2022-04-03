// import { createTheme } from "@mui/material";
//
// const theme = createTheme({
//   palette: {
//     mode: "light",
//     primary: {
//       main: "#7F00FF",
//     },
//   },
// });
// export default theme;

import {createTheme, responsiveFontSizes} from "@mui/material";

let theme = createTheme({
        palette: {
            mode: 'light',
            primary: {
                main: '#7f00ff',
            },
            error: {
                main: '#d50000',
            },
            background: {
                default: '#f9f9f9',
                secondary: '#7f00ff',
            },
            text: {
                primary: '#7F00FF',
                content: '#FFF',
                disabled: '#5a5a5a',
            },
            warning: {
                main: '#ff5722',
            },
            success: {
                main: '#43a047',
            },
        },
        typography: {
            fontFamily: 'Poppins, sans-serif',
            h1: {
                fontWeight: 600,
            },
            h2: {
                fontWeight: 600,
            },
            h3: {
                fontWeight: 500,
            },
            h4: {
                fontWeight: 500,
            },
            h5: {
                fontWeight: 400,
            },
            h6: {
                fontWeight: 400,
            },
            subtitle1: {
                fontWeight: 400,
            },
        },
    }
);
theme = responsiveFontSizes(theme);
export default theme;