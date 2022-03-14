import NavBar from "./Header/NavBar";
import Footer from "./Footer/Footer";
import classes from "./Layout.module.css";
import { Box } from "@mui/material";

const Layout = (props) => {
  return (
    <Box>
      <NavBar />
      {props.children}
      <Footer />
    </Box>
  );
};
export default Layout;
