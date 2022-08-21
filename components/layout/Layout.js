import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import { Box } from "@mui/material";
import Head from "next/head";

const Layout = (props) => {
  return (
    <Box>
      <Header />
      <Head>
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      </Head>
      <Box minHeight="100vh">{props.children}</Box>
      <Footer />
    </Box>
  );
};
export default Layout;
