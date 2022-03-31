import React from 'react';
import {Container, Typography} from "@mui/material";
import Box from "@mui/material/Box";

const HalfPageRight = ({bgColor, largeFontColor, largeTextTop, largeTextBottom, contentColor, contentText}) => {
    return (
        <Container sx={{
            display: 'flex',
            flexDirection: 'row',
            height: '50vh',
            width: '100%',
            backgroundColor: bgColor,
            border: '1px solid red',
            padding: 0
        }}>
            {/*left box*/}
            <Box
                sx={{
                    border: '1px solid red',
                    width: '50%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    color: contentColor,
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
            {/*right box*/}
            <Box sx={{
                width: '50%',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-evenly',
                textAlign: 'center',
                margin: 0,
                color: largeFontColor,
            }}>
                <Typography variant={'h2'}>
                    {largeTextTop}
                </Typography>
                <Typography variant={'h2'}>
                    {largeTextBottom}
                </Typography>
            </Box>

        </Container>
    );
};

export default HalfPageRight;
