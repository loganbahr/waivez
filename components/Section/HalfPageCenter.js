import React from 'react';
import {Container, Typography} from "@mui/material";
import Box from "@mui/material/Box";

const HalfPageCenter = ({bgColor, titleText, titleTextColor, contentText, contentTextColor}) => {
    return (

        <Container
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                minWidth: '100%',
                height: 'auto',
                backgroundColor: bgColor,
                // padding: {xs: 0, md: 0},
                padding: {xs: 5, sm: 8, md: 10, lg: 12, xl: 15}
                // border: '2px solid red',

            }}>

            <Box
                sx={{
                    width: '100%',
                    height: '20%',
                    // border: '2px solid green',
                }}>
                <Typography sx={{
                    fontFamily: 'Poppins, sans-serif',
                    fontSize: {xs: 28, sm: 35, md: 45, lg: 55, xl: 65},
                    mb: 2,
                    mx: {lg: 20},
                    lineHeight: 1.3,
                    textAlign: 'center',
                    color: titleTextColor,
                    backgroundColor: 'clear',
                }}>
                    {titleText}
                </Typography>
            </Box>
            <Box
                sx={{
                    width: {xs: '95%', sm: '95%', md: '85%', lg: '70%'},
                    height: '70%',
                    // border: '2px solid orange'
                }}>
                <Typography
                    sx={{
                        textAlign: 'center',
                        fontFamily: 'Poppins, sans-serif',
                        fontSize: {xs: 14, sm: 22, md: 26, lg: 28, xl: 30},
                        color: contentTextColor,
                        letterSpacing: 1.2,

                    }}>
                    {contentText}
                </Typography>
            </Box>
        </Container>
    );
};

export default HalfPageCenter;
