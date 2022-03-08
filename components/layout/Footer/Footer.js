import * as React from 'react';
import Box from '@mui/material/Box';
import {makeStyles} from "@mui/styles";

const useStyles = makeStyles({

    root: {
        backgroundColor: '#7F00FF',
        height: 90,
        bottom: 0,
        position: 'sticky',
    }
});

const Footer = () => {

    const classes = useStyles();

    return (
        <React.Fragment>
            <Box className={classes.root}/>
        </React.Fragment>
    );
};

export default Footer;
