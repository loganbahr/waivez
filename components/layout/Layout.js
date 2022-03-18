import Footer from "./Footer/Footer";
import React from "react";
import Header from "./Header/Header";

const Layout = (props) => {
    return (
        <React.Fragment>
            <Header/>
            {props.children}
            <Footer/>
        </React.Fragment>

    );
};
export default Layout;
