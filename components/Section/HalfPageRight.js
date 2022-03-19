import React from 'react';
import {Container, Typography} from "@mui/material";
import Box from "@mui/material/Box";

const HalfPageRight = ({bgColor, largeFontColor, largeTextTop, largeTextBottom, contentColor, contentText}) => {
    return (
        <Container sx={{
            display: 'flex',
            flexDirection: 'row',
            minWidth: '100%',
            height: '50vh',
            backgroundColor: bgColor,
            // border: '1px solid red',
        }}>
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
                    padding: 2
                }}>
                <Typography
                    sx={{
                        fontFamily: 'Poppins, sans-serif',
                        fontSize: {xs: '0.8em', sm: '1.3em', md: '1.3em'},
                        textAlign: 'center',
                        lineHeight: 2,
                        wordSpacing: 2,
                        px: {xs: 1},
                    }}>
                    {contentText}
                </Typography>
            </Box>
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
                        lineHeight: 1.2,
                        textAlign: 'center',
                        color: largeFontColor,
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
                        lineHeight: 1.2,
                        textAlign: 'center',
                        color: largeFontColor,
                    }}>
                    {largeTextBottom}
                </Typography>
            </Box>

        </Container>
    );
};

export default HalfPageRight;
