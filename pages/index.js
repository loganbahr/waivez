// www.waivez.com
import React from 'react';
import Head from 'next/head';
import Box from '@mui/material/Box';
import {Container} from "@mui/material";
import SearchBar from "../components/HomePage/SearchBar";
import FirstSection from "../components/HomePage/FirstSection";
import PageTitleText from "../components/PageTitleText";
import SecondSection from "../components/HomePage/SecondSection";
import ThirdSection from "../components/HomePage/ThirdSection";


const HomePage = () => {
    return (
        <Box>
            <Container maxWidth='md'
                       sx={{
                           mb: 15,
                           backgroundColor: 'clear',
                           display: 'flex',
                           flexDirection: 'column',
                           alignItems: 'center',
                           flexGrow: 1,
                       }}>
                <Head>
                    <title>waivez</title>
                    <meta
                        name='description'
                        content='Any waiver, all in one place.'
                    />
                </Head>
                <PageTitleText content='waivez'/>
                <SearchBar/>
            </Container>

            <Container sx={{
                backgroundColor: 'clear',
                // minHeight: '150vh',
                minWidth: '100%',
                display: 'flex',
                flexDirection: 'column',
                padding: {xs: 0, sm: 0, lg: 0, xl: 0} //keeps content to edge of screen
            }}>
                <FirstSection/>
                <SecondSection/>
                <ThirdSection/>
            </Container>
        </Box>

    );
};

export default HomePage;