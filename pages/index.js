// www.waivez.com
import React from 'react';
import Head from 'next/head';
import Box from '@mui/material/Box';
import {Container, Typography} from "@mui/material";
import SearchBar from "../components/HomePage/SearchBar";
import TitleText from "../components/Text/TitleText";
import HalfPageLeft from "../components/Section/HalfPageLeft";
import HalfPageRight from "../components/Section/HalfPageRight";
import ContentBlock from "../components/Section/ContentBlock";


const HomePage = () => {
    return (
        <Box>
            <Container maxWidth='md'
                       sx={{
                           display: 'flex',
                           flexDirection: 'column',
                           alignItems: 'center',
                           my: 2,
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

            <Container
                maxWidth={'xl'}
                disableGutters={true}
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'start',
                    alignItems: 'center',
                }}>

                <ContentBlock variantTop={'h2'}
                              lineHeightTop={2}
                              topText={'Any waiver. Anytime.'}
                              bottomText={'Search for a company, sign their wavier(s), and look for a confirmation email!'}
                              lineHeightBottom={2}
                              variantBottom={'h5'}
                />

                <ContentBlock variantTop={'h2'}
                              lineHeightTop={2}
                              topText={'Any business. Anywhere.'}
                              bottomText={'Jet-skiing, parasailing, rock-climbing, skydiving, concerts, events, expos, gyms, shooting ranges, pools, bike shops... the list is endless.'}
                              lineHeightBottom={1.5}
                              variantBottom={'h5'}
                />

                <ContentBlock variantTop={'h3'}
                              lineHeightTop={1.5}
                              topText={'Valuable metrics about your customers.'}
                              bottomText={'Get to know your customers, understand your demographic — where they come from, and when they\'ll be back.'}
                              lineHeightBottom={2}
                              variantBottom={'h5'}
                />
            </Container>
        </Box>

    );
};

export default HomePage;