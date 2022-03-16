// www.waivez.com
import React from 'react';
import Head from 'next/head';
import Box from '@mui/material/Box';
import {Container, Typography} from "@mui/material";
import LandingPageSearchBar from "../components/SearchBars/LandingPageSearchBar";
import Card from "@mui/material/Card";
import LandingPageCard from "../components/Cards/LandingPageCard";

const HomePage = () => {
    return (
        <Box>
            <Container maxWidth='md'
                       sx={{
                           mt: '20px', //keeps shadow on header
                           backgroundColor: 'clear',
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
                        mt: 10
                    }}>
                    waivez
                </Typography>

                <LandingPageSearchBar/>

                <Box container sx={{
                    backgroundColor: 'clear',
                    flexGrow: 1,
                    width: '100%',
                    display: 'flex',
                    flexDirection: {xs: 'column', md: 'row'},
                    justifyContent: 'center',
                    my: 15
                }}>
                    <LandingPageCard/>

                    <LandingPageCard/>

                    <LandingPageCard/>

                </Box>
            </Container>
        </Box>

    );
};

// export async function getStaticProps() {
//
// }

export default HomePage;
