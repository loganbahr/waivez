import React from 'react';
import Box from "@mui/material/Box";
import {Container, Typography} from "@mui/material";

const ThirdSection = () => {
    return (
        <Container sx={{
            minWidth: '100%',
            height: '50vh',
            backgroundColor: 'clear',
            display: 'flex',
            flexDirection: 'row',
            // border: '1px solid red'
        }}>
            {/*left box*/}
            <Box sx={{
                // border: '2px solid red',
                minWidth: '50%',
                minHeight: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'auto',
            }}>
                <Typography
                    sx={{
                        fontFamily: 'Poppins, sans-serif',
                        color: 'primary.main',
                        fontSize: {xs: 30, sm: 45, md: 55, lg: 65, xl: 75},
                        // border: '1px solid green',
                        mb: 2,
                        mx: {lg: 20},
                        lineHeight: 1.2
                    }}>
                    With valuable metrics about your customers.
                </Typography>

            </Box>

            {/*right box*/}
            <Box sx={{
                // border: '2px solid orange',
                minWidth: '50%',
                minHeight: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-evenly',
                alignItems: 'center',
            }}>
                content here
            </Box>

        </Container>
    );
};

export default ThirdSection;
