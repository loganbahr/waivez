import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import MoreIcon from '@mui/icons-material/MoreVert';


const Footer = () => {
    return (
        <Box>
            <AppBar sx={{
                backgroundColor: 'primary',
                top: 'auto',
                bottom: '0',
                position: 'static',
            }}>
                <Toolbar sx={{display: 'flex', justifyContent: 'space-between'}}>
                    <IconButton color="inherit">
                        <SearchIcon/>
                    </IconButton>
                    <Typography
                        sx={{
                            color: "white",
                            fontSize: {xs: 25, sm: 35, md: 50, lg: 60},
                            fontFamily: "Poppins, sans-serif",
                        }}>
                        waivez
                    </Typography>
                    <IconButton color="inherit">
                        <MoreIcon/>
                    </IconButton>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default Footer;