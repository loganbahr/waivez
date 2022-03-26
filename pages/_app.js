import { ThemeProvider } from "@mui/material";
import "../styles/globals.css";
import Layout from "/components/layout/Layout";
import theme from "../components/theme.js";
import { CssBaseline } from "@mui/material";

const MyApp = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}
export default MyApp;
