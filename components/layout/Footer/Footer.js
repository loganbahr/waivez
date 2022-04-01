import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import {Box, Button, Link} from "@mui/material";
import NextLink from "next/link";

const Footer = () => {
    return (
        <AppBar
            sx={{
                backgroundColor: "primary",
                position: "static",
                // border: '2px solid black',
                height: {xs: "70px", sm: "85px", md: "90px", xl: "120px"},
                minHeight: "10vh",
            }}
        >
            <Toolbar
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    // border: '2px solid red',
                    padding: {xs: 0, md: 0},
                    height: "100%",
                }}
            >
                <Box
                    sx={{
                        height: "100%",
                        width: "40%",
                        // border: '2px solid red',
                        display: "flex",
                        justifyContent: "center",
                        flexDirection: "column",
                        alignItems: "center",
                    }}>

                    <NextLink href="/privacy">
                        <Link>
                            <Typography color={'text.content'} sx={{
                                fontSize: {
                                    xs: "0.45rem",
                                    sm: "0.7rem",
                                    md: "0.9rem",
                                    lg: "1rem",
                                },
                                textDecoration: 'underline'
                            }}>
                                Privacy Policy
                            </Typography>
                        </Link>
                    </NextLink>

                    <NextLink href="/tos">
                        <Link>
                            <Typography color={'text.content'} sx={{
                                fontSize: {
                                    xs: "0.45rem",
                                    sm: "0.7rem",
                                    md: "0.9rem",
                                    lg: "1rem",
                                },
                                textDecoration: 'underline'
                            }}>
                                Terms of Service
                            </Typography>
                        </Link>
                    </NextLink>
                    <Typography color={'text.content'} sx={{
                        fontSize: {
                            xs: "0.45rem",
                            sm: "0.7rem",
                            md: "0.9rem",
                            lg: "1rem",
                        }
                    }}>
                        © 2022, Waivez.com, Inc.
                    </Typography>
                </Box>

                <Box
                    sx={{
                        height: "100%",
                        width: "30%",
                        // border: '2px solid black',
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <Typography variant={'h2'}>
                        waivez
                    </Typography>
                </Box>

                <Box
                    sx={{
                        height: "100%",
                        width: "40%",
                        // border: '2px solid black',
                        display: "flex",
                        justifyContent: "space-evenly",
                        alignItems: "center",
                    }}
                >
                    <FacebookIcon fontSize={"small"}/>
                    <TwitterIcon fontSize="small"/>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Footer;