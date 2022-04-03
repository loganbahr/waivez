import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import { Box } from "@mui/material";

const Layout = (props) => {
  return (
    <Box>
      <Header />
      <Box minHeight="100vh">{props.children}</Box>
      <Footer />
    </Box>
  );
};
export default Layout;
