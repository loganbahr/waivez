import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import {Typography} from "@mui/material";
import Link from "next/link";

const NavBar = () => {
    const MenuButton = ({link, text}) => {
        return (
            <Link href={link}>
                <IconButton>
                    <Typography
                        sx={{
                            color: "white",
                            fontSize: {xs: 13, sm: 17, md: 21,},
                            fontFamily: "Poppins, sans-serif",
                        }}
                    >
                        {text}
                    </Typography>
                </IconButton>
            </Link>
        );
    };

    return (
        <Box
            sx={{
                width: "100%",
                backgroundColor: "white",
                opacity: "1",
                display: "flex",
                alignItems: "end",
                justifyContent: "center",
                position: "static",
                top: 0,
                flexGrow: 1,
            }}
        >
            <AppBar
                sx={{
                    height: 80,
                    display: "flex",
                    position: "absolute",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    backgroundColor: "#7F00FF",
                    zIndex: 1100,
                }}
            >
                <Toolbar
                    sx={{
                        backgroundColor: "#7F00FF",
                        display: "flex",
                        justifyContent: "space-between",
                        zIndex: 1101,
                        width: "40%",
                        marginLeft: "1.5%",
                        marginRight: "1.5%",
                    }}
                >
                    <MenuButton link="/" text="Home"/>
                    <MenuButton link="/partners" text="Partners"/>
                    <MenuButton link="/pricing" text="Pricing"/>
                </Toolbar>

                <Toolbar
                    sx={{
                        backgroundColor: "#7F00FF",
                        display: "flex",
                        justifyContent: "space-between",
                        zIndex: 1101,
                        width: "40%",
                        marginLeft: "1.5%",
                        marginRight: "1.5%",
                    }}
                >
                    <MenuButton link="/about" text="About"/>
                    <MenuButton link="/contact" text="Contact"/>
                    <MenuButton link="/signin" text="Sign In"/>
                </Toolbar>
            </AppBar>
        </Box>
    );
};
export default NavBar;
