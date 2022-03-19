import React from 'react';
import {Container, Typography} from "@mui/material";
import Box from "@mui/material/Box";

const HalfPageLeft = ({bgColor, largeFontColor, largeTextTop, largeTextBottom, contentColor, contentText}) => {
    return (
        <Container sx={{
            display: 'flex',
            flexDirection: 'row',
            minWidth: '100%',
            height: '50vh',
            backgroundColor: bgColor,
            // border: '1px solid red',
        }}>
            {/*left box*/}
            <Box sx={{
                // border: '2px solid green',
                minWidth: '50%',
                minHeight: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                margin: 0
            }}>
                <Typography
                    sx={{
                        fontFamily: 'Poppins, sans-serif',
                        fontSize: {xs: 28, sm: 35, md: 45, lg: 55, xl: 65},
                        // border: '1px solid green',
                        mb: 2,
                        mx: {lg: 20},
                        lineHeight: 1.3,
                        textAlign: 'center',
                        color: largeFontColor,
                        backgroundColor: 'white',
                    }}>
                    {largeTextTop}
                </Typography>
                <Typography
                    sx={{
                        fontFamily: 'Poppins, sans-serif',
                        fontSize: {xs: 28, sm: 35, md: 45, lg: 55, xl: 65},
                        // border: '1px solid green',
                        my: 2,
                        mx: {lg: 20},
                        lineHeight: 1.3,
                        textAlign: 'center',
                        color: largeFontColor,
                        backgroundColor: 'white',
                    }}>
                    {largeTextBottom}
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
                    color: contentColor,
                    pb: {xs: 3}
                }}>
                <Typography
                    sx={{
                        fontFamily: 'Poppins, sans-serif',
                        fontSize: {xs: '0.8em', sm: '1.3em', md: '1.3em'},
                        textAlign: 'center',
                        backgroundColor: 'white',
                        lineHeight: 2,
                        wordSpacing: 2,
                        px: {xs: 1},
                    }}>
                    {contentText}
                </Typography>

            </Box>
        </Container>
    );
};

export default HalfPageLeft;
