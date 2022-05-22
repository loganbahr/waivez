import {ThemeProvider} from "@mui/material";
import "../styles/globals.css";
import Layout from "/components/layout/Layout";
import theme from "../components/theme.js";
import {CssBaseline} from "@mui/material";
import {supabase} from '../lib/supabaseClient';
import {Auth} from '@supabase/ui'

const MyApp = ({Component, pageProps: {session, ...pageProps}}) => {
    return (
        <Auth.UserContextProvider supabaseClient={supabase}>
            <ThemeProvider theme={theme}>
                <CssBaseline/>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </ThemeProvider>
        </Auth.UserContextProvider>

    );
}
export default MyApp;
