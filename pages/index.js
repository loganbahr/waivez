// www.waivez.com
import React from 'react';
import Head from 'next/head';
import Box from '@mui/material/Box';
import {Container, Typography} from "@mui/material";
import SearchBar from "../components/HomePage/SearchBar";
import HeroSection from "../components/HomePage/HeroSection";


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


            <Container
                maxWidth={'md'}
                disableGutters={true}
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'start',
                    alignItems: 'center',
                    // border: '2px solid red'
                }}>
                <Box sx={{
                    width: '100vw',
                    // border: '2px solid red',
                    height: {xs: 450, sm: 550, md: 650, lg: 700, xl: 750},
                    backgroundColor: 'background.secondary',
                }}>
                </Box>

                <Box sx={{
                    width: '100vw',
                    height: {xs: 450, sm: 550, md: 650, lg: 700, xl: 750},
                    backgroundColor: 'background.default',
                }}>
                </Box>


                {/*<ContentBlockVertical variantTop={'h2'}*/}
                {/*                      lineHeightTop={2}*/}
                {/*                      topText={'Any business. Anywhere.'}*/}
                {/*                      bottomText={'Jet-skiing, parasailing, rock-climbing, skydiving, concerts, events, expos, gyms, shooting ranges, pools, bike shops... the list is endless.'}*/}
                {/*                      lineHeightBottom={1.5}*/}
                {/*                      variantBottom={'h5'}*/}
                {/*/>*/}

                {/*<ContentBlockVertical variantTop={'h2'}*/}
                {/*                      lineHeightTop={1.5}*/}
                {/*                      topText={'Valuable metrics about your customers.'}*/}
                {/*                      bottomText={'Get to know your customers, understand your demographic — where they come from, and when they\'ll be back.'}*/}
                {/*                      lineHeightBottom={1.5}*/}
                {/*                      variantBottom={'h5'}*/}
                {/*/>*/}

            </Container>
        </Box>

    );
};

export default HomePage;