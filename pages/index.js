// www.waivez.com
import React from 'react';
import Head from 'next/head';
import Box from '@mui/material/Box';
import {Container, Typography} from "@mui/material";
import SearchBar from "../components/HomePage/SearchBar";
import HeroSection from "../components/HomePage/HeroSection";
import ExampleSection from "../components/HomePage/ExampleSection";

const HomePage = () => {
    return (
        <Box>
            <Container maxWidth='md'
                       sx={{
                           display: 'flex',
                           flexDirection: 'column',
                           alignItems: 'center',
                           mt: 15
                       }}>
                <Head>
                    <title>waivez</title>
                    <meta
                        name='description'
                        content='Any waiver, all in one place.'
                    />
                </Head>
                <Typography variant={'h1'}>
                    waivez
                </Typography>
                <SearchBar/>
            </Container>
            <HeroSection/>
            <ExampleSection/>


            <Box sx={{
                width: '100vw',
                height: {xs: 450, sm: 550, md: 650, lg: 700, xl: 750},
                backgroundColor: 'background.default',
                border: '2px solid red',
            }}>
            </Box>


        </Box>

    );
};

export default HomePage;