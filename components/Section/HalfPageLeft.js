import React from 'react';
import {Container, Typography} from "@mui/material";
import Box from "@mui/material/Box";

const HalfPageLeft = ({largeFontColor, largeTextTop, largeTextBottom, contentColor, contentText}) => {
    return (
        <Container sx={{
            display: 'flex',
            flexDirection: 'row',
            width: '100%',
            height: '50vh',
            padding: 0,
            // border: '1px solid red',
        }}>
            {/*left box*/}
            <Box sx={{
                // border: '2px solid green',
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

            {/*right box*/}
            <Box
                sx={{
                    // border: '1px solid red',
                    width: '50%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    color: contentColor,
                }}>
                <Typography variant={'h5'} sx={{textAlign: 'center', mx: 1}}>
                    {contentText}
                </Typography>

            </Box>
        </Container>
    );
};

export default HalfPageLeft;
