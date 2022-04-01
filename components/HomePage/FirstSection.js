import React from 'react';
import Box from "@mui/material/Box";
import {Typography} from "@mui/material";

const FirstSection = () => {
    return (
        <Box sx={{
            // border: '2px solid blue',
            display: 'flex',
            flexDirection: 'row',
            // border: '2px solid red',
            mt: {xs: 4, xl: 15}

        }}>
            <Box sx={{
                width: '50%',
                // border: '2px solid green',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'start',
                alignItems: 'center',
            }}>
                <Typography variant={'h2'} sx={{mt: 10, ml: 1}}>
                    Any business.
                </Typography>
                <Typography variant={'h2'} color={'text.content'} sx={{mt: 10, ml: 1, pb: 2}}>
                    Anywhere.
                </Typography>
            </Box>


            <Box sx={{
                width: '50%',
                // border: '2px solid green',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-around',
            }}>
                <Typography sx={{
                    fontSize: {xs: 18, sm: 20, md: 25, lg: 38},
                    textAlign: 'center',
                    fontWeight: 500,
                    mt: 5,
                }}>
                    Whether your business is on the water, in the air, or somewhere in between...
                </Typography>

                <Typography color={'text.content'}
                            sx={{
                                fontSize: {xs: 18, sm: 20, md: 26, lg: 38},
                                textAlign: 'center',
                                fontWeight: 500,
                                pt: {xs: 5, lg: 1}
                            }}>
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    We've got you covered!
                </Typography>
            </Box>
        </Box>

    );
};

export default FirstSection;
