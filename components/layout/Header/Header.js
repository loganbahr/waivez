import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import PageLinkButton from "./PageLinkButton";
import LogoButton from "./LogoButton";
import PageMenuButton from "./PageMenuButton";
import {Container} from "@mui/material";

export default function Header() {
    return (
        <Box sx={{flexGrow: 1, backgroundColor: ""}}>
            <Container maxWidth={"xl"} sx={{}}>
                <AppBar
                    sx={{
                        position: {xs: "fixed", sm: "static"},
                        display: "flex",
                        justifyContent: "center",
                        backgroundColor: "primary",
                        borderBottomLeftRadius: {xs: 30, md: 20},
                        borderBottomRightRadius: {xs: 30, md: 20},
                        // height: {xs: "70px", sm: "85px", md: "90px", xl: "120px"},
                        height: {xs: 60, sm: 70},
                    }}
                >
                    <Toolbar
                        sx={{
                            display: "flex",
                            justifyContent: "space-evenly",
                            alignItems: "center",
                        }}
                    >
                        <PageMenuButton/>
                        <PageLinkButton link="/" text="Home"/>
                        <PageLinkButton link="/partners" text="Partners"/>
                        <PageLinkButton link="/pricing" text="Pricing"/>
                        <Box sx={{ width: 75, height: 75}}>
                            <LogoButton/>
                        </Box>
                        <PageLinkButton link="/about" text="About"/>
                        <PageLinkButton link="/contact" text="Contact"/>
                        <PageLinkButton link="/lookup" text="Lookup"/>
                    </Toolbar>
                </AppBar>
            </Container>
        </Box>
    );
}
