import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import {makeStyles} from '@mui/styles';
import {Typography} from "@mui/material";
import Link from 'next/link';

// need to figure out how to change heights/widths of everything to scale properly,
// could scale to each screen size with css selectors
const useStyles = makeStyles({
    // Box for entire header, includes logo
    root: {
        width: '100%',
        height: 175,
        backgroundColor: 'white',
        opacity: '1',
        display: 'flex',
        alignItems: 'end',
        justifyContent: 'center',
    },
    taskbar: {
        height: 80,
        display: 'flex',
        position: 'absolute',
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#7F00FF',
        zIndex: 1100,
    },
    toolbar: {
        backgroundColor: '#7F00FF',
        display: 'flex',
        justifyContent: 'space-between',
        zIndex: 1101,
        width: '35%',
        marginLeft: '1.5%',
        marginRight: '1.5%',
    },
    oval: {
        width: 350,
        height: 170,
        borderRadius: '50%',
        backgroundColor: 'white',
        position: 'absolute',
        zIndex: 1102,
        display: 'flex'
    },
    button: {
        color: 'white',
        fontSize: '1.25em',
        fontFamily: 'Poppins, sans-serif',
    },
    logo: {
        fontSize: '2em',
        color: '#7F00FF',
        zIndex: 1103,
        marginBottom: 50,
    }
});

const NavBar = () => {

    const classes = useStyles();

    return (
        <Box className={classes.root}>
            <Box className={classes.oval}/>
            <h1 className={classes.logo}>LOGO HERE</h1>
            <AppBar className={classes.taskbar}>

                <Toolbar className={classes.toolbar}>
                    <Link href='/'>
                        <IconButton>
                            <Typography className={classes.button}>
                                Home
                            </Typography>
                        </IconButton>
                    </Link>
                    <Link href='/partners'>
                        <IconButton>
                            <Typography className={classes.button}>
                                Partners
                            </Typography>
                        </IconButton>
                    </Link>
                    <Link href='/pricing'>
                        <IconButton>
                            <Typography className={classes.button}>
                                Pricing
                            </Typography>
                        </IconButton>
                    </Link>
                </Toolbar>
                <Toolbar className={classes.toolbar}>
                    <Link href='/about'>
                        <IconButton>
                            <Typography className={classes.button}>
                                About Us
                            </Typography>
                        </IconButton>
                    </Link>
                    <Link href='/contact'>
                        <IconButton>
                            <Typography className={classes.button}>
                                Contact
                            </Typography>
                        </IconButton>
                    </Link>
                    <Link href='/signin'>
                        <IconButton>
                            <Typography className={classes.button}>
                                Sign In
                            </Typography>
                        </IconButton>
                    </Link>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
export default NavBar;


// old styling
/*
const useStyles = makeStyles({
    // Box for entire header, includes logo
    root: {
        width: '100%',
        height: 300,
        backgroundColor: 'white',
        display: 'flex',
        alignItems: 'end',
        justifyContent: 'center',
    },
    taskbar: {
        height: 150,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#7F00FF',
        zIndex: 1100,
    },
    toolbar: {
        backgroundColor: '#7F00FF',
        display: 'flex',
        justifyContent: 'space-between',
        zIndex: 1101,
        width: '35%',
        marginLeft: '1.5%',
        marginRight: '1.5%'
    },
    oval: {
        width: 500,
        height: 275,
        borderRadius: '50%',
        backgroundColor: 'white',
        position: 'absolute',
        zIndex: 1102
    },
    button: {
        color: 'white',
        fontSize: '1.5em',
        fontFamily: 'Raleway, Arial',
    },
    logo: {
        fontSize: '2em',
        color: '#7F00FF',
        zIndex: 1103,
        marginBottom: 100,
    }
});
 */