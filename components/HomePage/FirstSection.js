import React from 'react';
import Box from "@mui/material/Box";
import {Container, Typography} from "@mui/material";

const FirstSection = () => {
    return (
        <Container sx={{
            display: 'flex',
            flexDirection: 'row',
            minWidth: '100%',
            height: '50vh',
            backgroundColor: 'clear',
            // border: '1px solid red',
        }}>
            {/*left box*/}
            <Box sx={{
                // border: '2px solid green',
                minWidth: '50%',
                minHeight: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-evenly',
                alignItems: 'auto',
                padding: '2.5%',
            }}>
                <Typography
                    sx={{
                        fontFamily: 'Poppins, sans-serif',
                        fontSize: {xs: 35, sm: 45, md: 55, lg: 65, xl: 75},
                        // border: '1px solid green',
                        mb: 2,
                        mx: {lg: 20},
                        lineHeight: 1.2,
                    }}>
                    Any waiver.
                </Typography>
                <Typography
                    sx={{
                        fontFamily: 'Poppins, sans-serif',
                        fontSize: {xs: 35, sm: 45, md: 55, lg: 65, xl: 75},
                        // border: '1px solid green',
                        my: 2,
                        mx: {lg: 20},
                        lineHeight: 1.2,
                    }}>
                    All in one place.
                </Typography>
            </Box>

            {/*right box*/}
            <Box
                sx={{
                    // border: '1px solid red',
                    minWidth: '50%',
                    minHeight: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                content here
            </Box>
        </Container>
    );
};

export default FirstSection;
