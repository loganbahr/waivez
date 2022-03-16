// www.waivez.com
import React from 'react';
import Head from 'next/head';
import Box from '@mui/material/Box';
import {Container, Typography} from "@mui/material";
import LandingPageSearchBar from "../components/SearchBars/LandingPageSearchBar";

const HomePage = () => {
    return (
        <Box>
            <Container maxWidth='md'
                       sx={{
                           mt: '20px', //keeps shadow on header
                           backgroundColor: 'white',
                           display: 'flex',
                           flexDirection: 'column',
                           alignItems: 'center',
                           minHeight: '100vh'
                       }}>
                <Head>
                    <title>waivez</title>
                    <meta
                        name='description'
                        content='Any waiver, all in one spot.'
                    />
                </Head>
                <Typography
                    sx={{
                        fontFamily: 'Poppins, sans-serif',
                        fontSize: {xs: 55, sm: 60, md: 80, lg: 100, xl: 120},
                    }}>
                    waivez
                </Typography>
                <LandingPageSearchBar />
            </Container>
        </Box>

    );
};

// export async function getStaticProps() {
//
// }

export default HomePage;
