// www.waivez.com
import React from 'react';
import Head from 'next/head';
import Box from '@mui/material/Box';
import {Container} from "@mui/material";
import SearchBar from "../components/HomePage/SearchBar";
import PageTitleText from "../components/PageTitleText";
import HalfPageLeft from "../components/Section/HalfPageLeft";
import HalfPageRight from "../components/Section/HalfPageRight";


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
                {/*content takes up half the page and the large font is on LEFT*/}
                <HalfPageLeft
                    bgColor={'white'}
                    largeFontColor={'primary'}
                    largeTextTop={'Any waiver.'}
                    largeTextBottom={'All in one place.'}
                    contentColor={'primary'}
                    contentText={'If you need to sign a waiver, just search for the company in the search bar above. Fill out your information and you will instantly receive a confirmation email!'}
                />
                {/*content takes up half the page and the large font is on RIGHT*/}
                <HalfPageRight
                    bgColor={'primary.main'}
                    largeFontColor={'white'}
                    largeTextTop={'Any business.'}
                    largeTextBottom={'Anywhere.'}
                    contentColor={'white'}
                    contentText={'Jetskiing, parasailing, rock-climbing, skydiving, concerts, events, expos, gyms, shooting ranges, pools, bike shops... the list is endless.'}
                />
                <HalfPageLeft
                    bgColor={'white'}
                    largeFontColor={'primary'}
                    largeTextTop={'Valuable metrics about your customers.'}
                    contentColor={'primary'}
                    contentText={'Get to know your customers, understand your demographic — where they come from, and when they\'ll be back.'}
                />
            </Container>
        </Box>

    );
};

export default HomePage;