import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Link from 'next/link';
import ArticleIcon from '@mui/icons-material/Article';

export default function Header() {

    const NavButton = ({link, text}) => {

        return (
            <Link href={link}>
                <IconButton sx={{display: {xs: 'none', sm: 'flex'}}}>
                    <Typography
                        sx={{
                            color: "white",
                            fontSize: {sm: 18, md: 20, lg: 23, xl: 28},
                            fontFamily: "Poppins, sans-serif",
                            display: {xs: 'none', sm: 'flex'},
                        }}>
                        {text}
                    </Typography>
                </IconButton>
            </Link>
        )
    }

    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar sx={{position: 'static', backgroundColor: '#7F00FF'}}>
                    <Toolbar sx={{display: 'flex', justifyContent: 'space-evenly'}}>
                        <NavButton link='/' text='Home'/>
                        <NavButton link='/partners' text='Partners'/>
                        <NavButton link='/pricing' text='Pricing'/>
                        <Box>
                            <Link href='/'>
                                <IconButton sx={{color: 'white'}}>
                                    <ArticleIcon/>
                                </IconButton>
                            </Link>
                        </Box>
                        <NavButton link='/about' text='About'/>
                        <NavButton link='/contact' text='Contact'/>
                        <NavButton link='/signin' text='Sign In'/>
                    </Toolbar>
            </AppBar>
        </Box>
    );
}