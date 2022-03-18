import IconButton from "@mui/material/IconButton";
import {Box, Menu, MenuItem, Typography} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import PageLinkButton from "./PageLinkButton";
import NextLink from "next/link";
import {useState} from "react";
import DropDownButton from "./DropDownButton";

const pages = [
    {
        name: "Home",
        link: "/",
    },
    {
        name: "Partners",
        link: "/partners",
    },
    {
        name: "Pricing",
        link: "/pricing",
    },
    {
        name: "About",
        link: "/about",
    },
    {
        name: "Contact",
        link: "/contact",
    },
    {
        name: "Sign In",
        link: "/signin",
    },
];

const PageMenuButton = () => {
    const [navAnchor, setNavAnchor] = useState(null);

    const handleOpenNavMenu = (event) => {
        setNavAnchor(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setNavAnchor(null);
    };

    return (
        <Box sx={{flexGrow: 1, display: {xs: "flex", sm: "none"}}}>
            <IconButton
                size="large"
                onClick={handleOpenNavMenu}
                sx={{color: "white"}}
            >
                <MenuIcon/>
            </IconButton>
            <Menu
                id="menu-appbar"
                anchorEl={navAnchor}
                anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                }}
                open={Boolean(navAnchor)}
                onClose={handleCloseNavMenu}
                sx={{
                    display: {xs: "flex", md: "none"},
                }}
            >
                {/*{pages.map((page) => (*/}
                {/*    <MenuItem key={page} onClick={handleCloseNavMenu}>*/}
                {/*        <Typography textAlign="center">{page}</Typography>*/}
                {/*    </MenuItem>*/}
                {/*))}*/}

                {pages.map((page, idx) => {
                    return (
                        <MenuItem key={idx} onClick={handleCloseNavMenu}>
                            <DropDownButton link={page.link} text={page.name} smallButton/>
                        </MenuItem>
                    );
                })}
            </Menu>
        </Box>
    );
};

export default PageMenuButton;
