import {ThemeProvider} from "@mui/material";
import "../styles/globals.css";
import Layout from "/components/layout/Layout";
import theme from "../components/theme.js";
import {CssBaseline} from "@mui/material";
import {SessionProvider} from "next-auth/react";

const MyApp = ({Component, pageProps: {session, ...pageProps}}) => {

    return (
        <>
            <SessionProvider session={session}>
                <ThemeProvider theme={theme}>
                    <CssBaseline/>
                    <Layout>
                        <Component {...pageProps} />
                    </Layout>
                </ThemeProvider>
            </SessionProvider>
        </>
    );
}
export default MyApp;
