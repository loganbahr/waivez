import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import PageLinkButton from './PageLinkButton'
import LogoButton from './LogoButton'
import PageMenuButton from "./PageMenuButton";

export default function Header() {

    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar sx={{position: {xs: 'fixed', sm: 'static'}, backgroundColor: '#7F00FF'}}>
                    <Toolbar sx={{display: 'flex', justifyContent: 'space-evenly'}}>
                        <PageMenuButton />
                        <PageLinkButton link='/' text='Home'/>
                        <PageLinkButton link='/partners' text='Partners'/>
                        <PageLinkButton link='/pricing' text='Pricing'/>
                        <Box>
                            <LogoButton/>
                        </Box>
                        <PageLinkButton link='/about' text='About'/>
                        <PageLinkButton link='/contact' text='Contact'/>
                        <PageLinkButton link='/signin' text='Sign In'/>
                    </Toolbar>
            </AppBar>
        </Box>
    );
}