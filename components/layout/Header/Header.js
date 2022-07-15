import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import PageLinkButton from "./PageLinkButton";
import LogoButton from "./LogoButton";
import PageMenuButton from "./PageMenuButton";
import {Button, Container} from "@mui/material";
import {useEffect, useState} from "react";
import {useSession} from "next-auth/react";
import Image from "next/image";

export default function Header() {

    const {data: session} = useSession();

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
                        <Box sx={{width: {xs: 50, md: 75}, height: {xs: 50, md: 75}}}>
                            <LogoButton/>
                        </Box>
                        <PageLinkButton link="/about" text="About"/>
                        <PageLinkButton link="/contact" text="Contact"/>
                        {session ?
                            (<PageLinkButton link="/partner"
                                             text={session.user.name ? session.user.name : "Logged In"}/>)
                            : (<PageLinkButton link="/auth/signin" text="Sign In"/>)}
                    </Toolbar>
                </AppBar>
            </Container>
        </Box>
    );
}
