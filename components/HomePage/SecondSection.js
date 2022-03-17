import React from 'react';
import Box from "@mui/material/Box";
import {Container, Typography} from "@mui/material";

const SecondSection = () => {
    return (
        <Container
            sx={{
                minWidth: '100%',
                height: '50vh',
                display: 'flex',
                flexDirection: 'row',
                backgroundColor: '#7F00FF'
            }}>
            <Box sx={{
                // border: '1px solid red',
                minWidth: '50%',
                minHeight: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                color: 'white'
            }}>
                content here
            </Box>

            <Box sx={{
                // border: '2px solid orange',
                minWidth: '50%',
                minHeight: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-evenly',
                alignItems: 'auto',
            }}>

                <Typography
                    sx={{
                        fontFamily: 'Poppins, sans-serif',
                        color: 'white',
                        fontSize: {xs: 30, sm: 45, md: 55, lg: 65, xl: 75},
                        // border: '1px solid green',
                        mb: 2,
                        mx: {lg: 20},
                        lineHeight: 1.2
                    }}>
                    Any business.
                </Typography>
                <Typography
                    sx={{
                        fontFamily: 'Poppins, sans-serif',
                        color: 'white',
                        fontSize: {xs: 30, sm: 45, md: 55, lg: 65, xl: 75},
                        // border: '1px solid green',
                        my: 2,
                        mx: {lg: 20},
                        lineHeight: 1.2
                    }}>
                    Anywhere.
                </Typography>
            </Box>


        </Container>
    );
};

export default SecondSection;
