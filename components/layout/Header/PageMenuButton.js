import React from 'react';
import IconButton from "@mui/material/IconButton";
import {Box, Menu, MenuItem, Typography} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import PageLinkButton from "./PageLinkButton";
import Link from "next/link";

const pages = [
    {
        name: 'Home',
        link: '/'
    },
    {
        name: 'Partners',
        link: '/partners'
    },
    {
        name: 'Pricing',
        link: '/Cards'
    },
    {
        name: 'About',
        link: '/about'
    },
    {
        name: 'Contact',
        link: '/contact'
    },
    {
        name: 'Sign In',
        link: '/signin'
    },
];

const PageMenuButton = () => {
    const [navAnchor, setNavAnchor] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setNavAnchor(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setNavAnchor(null);
    };
    return (
        <Box sx={{flexGrow: 1, display: {xs: 'flex', sm: 'none'}}}>
            <IconButton
                size="large"
                onClick={handleOpenNavMenu}
                sx={{color: 'white'}}
            >
                <MenuIcon/>
            </IconButton>
            <Menu
                id="menu-appbar"
                anchorEl={navAnchor}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                open={Boolean(navAnchor)}
                onClose={handleCloseNavMenu}
                sx={{
                    display: {xs: 'flex', md: 'none'},
                }}
            >
                {/*{pages.map((page) => (*/}
                {/*    <MenuItem key={page} onClick={handleCloseNavMenu}>*/}
                {/*        <Typography textAlign="center">{page}</Typography>*/}
                {/*    </MenuItem>*/}
                {/*))}*/}

                {pages.map((page) => (
                    <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                        <Typography textAlign="center">{page.name}</Typography>
                        {/*
                          * TODO: find a way to get a <Link> into this function without throwing an error. Throwing an error because there are multiple children calling a <Link>, one from the normal header and one from the mobile menu
                          */}
                    </MenuItem>
                ))}

            </Menu>
        </Box>
    );
};

export default PageMenuButton;
