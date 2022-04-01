import React from 'react';
import Box from "@mui/material/Box";
import {Typography} from "@mui/material";

const ContentBlockHorizontal = ({leftContent, rightContent}) => {
    return (
        <Box sx={{
            height: {xs: 450, sm: 550, md: 650, lg: 700, xl: 750},
            width: {xs: 350, sm: 750, md: 800, lg: 1000, xl: 1200},
            boxShadow: '0px 0px 10px 0px rgba(127,0,255,0.75)',
            background: 'radial-gradient(ellipse at 101% 72%,#7f00ff, #9833ff, #b266ff, #cb99ff)',
            borderRadius: 5,
            my: 3,
            display: 'flex',
            flexDirection: 'row',
        }}>
            {/*left content*/}
            <Box
                sx={{
                    width: '50%',
                    height: '100%',
                    // border: '2px solid green',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    // textAlign: 'center',
                }}>

                <Typography variant={'h3'} color={'text.content'} sx={{mx: 3}}>
                    {leftContent}
                </Typography>
            </Box>

            {/*right content*/}
            <Box
                sx={{
                    width: '50%',
                    height: '100%',
                    // border: '2px solid red',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-evenly',
                    alignItems: 'center',
                    // textAlign: 'center',
                }}>
                <Typography color={'text.content'} variant={'h6'} sx={{mx: 3}}>
                    {rightContent}
                </Typography>
            </Box>
        </Box>
    );
};

export default ContentBlockHorizontal;
