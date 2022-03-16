import NavBar from "./Header/NavBar";
import Footer from "./Footer/Footer";
import React from "react";
import {Box} from "@mui/material";
import Header from "./Header/Header";

const Layout = (props) => {
    return (
        <React.Fragment>
            {/*<NavBar/>*/}
            <Header/>
            {props.children}
            <Footer/>
        </React.Fragment>

    );
};
export default Layout;
