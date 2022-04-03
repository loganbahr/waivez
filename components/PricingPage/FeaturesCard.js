import React from 'react';
import Box from "@mui/material/Box";
import {Typography} from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

const FeaturesCard = () => {
    return (
        <Box sx={{
            height: {xs: 450, sm: 550, md: 650, lg: 700, xl: 750},
            width: {xs: 350, sm: 750, md: 800, lg: 1000, xl: 1200},
            boxShadow: '0px 0px 15px 0px rgba(127,0,255,0.75)',
            background: 'radial-gradient(ellipse at 101% 72%,#7f00ff, #9833ff, #b266ff, #cb99ff)',
            borderRadius: 5,
            my: 1,
            display: 'flex',
            flexDirection: 'row',

        }}>
            <Box sx={{
                width: '50%',
                height: '100%',
                // border: '2px solid green',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                // textAlign: 'center',
                mx: 3
            }}>

                <Typography variant={'h3'} color={'text.content'}>
                    Get to know your customer.
                </Typography>
            </Box>

            <Box sx={{
                width: '50%',
                height: '100%',
                border: '2px solid red',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-evenly',
                alignItems: 'center',
                textAlign: 'center',
            }}>
                <Typography color={'text.content'}
                            sx={{fontSize: {xs: 14, sm: 20, md: 25, lg: 30, xl: 32}, mx: 2}}
                >
                    Our Partner Dashboard features cutting-edge analytics:
                </Typography>

                <Box sx={{px: 2}}>
                    <Typography color={'text.content'}
                                sx={{
                                    fontSize: {xs: 13, sm: 20, md: 25, lg: 25, xl: 30},
                                    display: 'flex',
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    justifyContent: 'start',
                                    my: 2,
                                }}>
                        <CheckCircleOutlineIcon sx={{mx: 1}}/>
                        Return Probability Index (RPI)®
                    </Typography>

                    <Typography color={'text.content'}
                                sx={{
                                    fontSize: {xs: 13, sm: 20, md: 25, lg: 25, xl: 32},
                                    display: 'flex',
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    my: 2
                                }}>
                        <CheckCircleOutlineIcon sx={{mx: 1}}/>
                        Customer Heat Maps
                    </Typography>

                    <Typography color={'text.content'}
                                sx={{
                                    fontSize: {xs: 13, sm: 20, md: 25, lg: 25, xl: 32},
                                    display: 'flex',
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    my: 2
                                }}>
                        <CheckCircleOutlineIcon sx={{mx: 1}}/>
                        Machine Learning & AI
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
};

export default MyComponent;
