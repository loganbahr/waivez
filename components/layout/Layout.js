import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import {Box} from "@mui/material";
import {useSession} from "next-auth/react";

const Layout = (props) => {

    const {data: session, status} = useSession();

    return (
        <Box>
            {/*{!session && <Header/>}*/}
            <Header/>
            <Box minHeight="100vh">{props.children}</Box>
            <Footer/>
        </Box>
    );
};
export default Layout;
