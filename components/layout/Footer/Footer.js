import * as React from 'react';
import Box from '@mui/material/Box';
import {makeStyles} from "@mui/styles";
import {Typography} from "@mui/material";

const useStyles = makeStyles({

    root: {
        backgroundColor: '#7F00FF',
        height: 100,
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
        marginTop:'100%',
    },
    text: {
        color: 'white',
        fontFamily: 'Poppins, sans-serif',
        fontSize: '4em'
    }
});

const Footer = () => {

    const classes = useStyles();

    return (
        <React.Fragment>
            <Box className={classes.root}>
                <Typography className={classes.text}>
                    waivez
                </Typography>
            </Box>
        </React.Fragment>
    );
};

export default Footer;
