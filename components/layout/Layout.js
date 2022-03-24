import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import { Box } from "@mui/material";

const Layout = (props) => {
  return (
    <Box minHeight="100vh">
      <Header />
      <Box minHeight="80vh">{props.children}</Box>
      <Footer />
    </Box>
  );
};
export default Layout;
