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


// NEXT_PUBLIC_SUPABASE_URL=https://vhccbizrxcacyjzpssod.supabase.co
// NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZoY2NiaXpyeGNhY3lqenBzc29kIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTMwNTcwMjIsImV4cCI6MTk2ODYzMzAyMn0.p_8j4fbENcdQvhlFwSgvLWnLuWxArzDISwba1STiOv8
//
