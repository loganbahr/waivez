// www.waivez.com/about
import Head from 'next/head';
import React from 'react';
import Box from "@mui/material/Box";
import {Container, Typography} from "@mui/material";
import PageTitleText from "../../components/PageTitleText";
import PageSubtitleText from "../../components/PageSubtitleText";
import HalfPageCenter from "../../components/Section/HalfPageCenter";

const AboutPage = () => {
    return (
        <Box
            sx={{
                // border: '2px solid red',
            }}>
            <Container maxWidth='lg'
                       sx={{
                           display: 'flex',
                           flexDirection: 'column',
                           alignItems: 'center',
                       }}>
                <Head>
                    <title>
                        About Us
                    </title>
                    <meta/>
                </Head>
                <PageTitleText content='about us'/>
                <PageSubtitleText
                    content='Waivez started out as a college project for an old family business. We wanted to develop an online waiver system that operated as a centralized service — a hub where waivers of all kinds could be signed, documented, and analyzed — all in one place.'/>
                <PageTitleText content='the developers:'/>
            </Container>


            <Container sx={{
                backgroundColor: 'clear',
                // border: '2px solid red',
                // minHeight: '150vh',
                minWidth: '100%',
                display: 'flex',
                flexDirection: 'column',
                padding: {xs: 0, sm: 0, lg: 0, xl: 0},//keeps content to edge of screen
                mt: 5,
            }}>

                <HalfPageCenter
                    bgColor={'primary.main'}
                    titleText={'Devin Arena'}
                    titleTextColor={'white'}
                    contentTextColor={'white'}
                    contentText={'My name is Devin Arena, and I\'m currently a student and software engineer based in Naples,' +
                        ' Florida. I currently attend Florida Gulf Coast University pursuing a Bachelor\'s of Science in ' +
                        'Software Engineering. I found my love for programming early, at the age of 9. Ever since, I\'ve ' +
                        'enjoyed designing and building websites, apps, and games. Creating useful software and enjoyable ' +
                        'games are some of my favorite hobbies.'}
                />

                <HalfPageCenter
                    bgColor={'white'}
                    titleText={'Logan Bahr'}
                    titleTextColor={'primary.main'}
                    contentTextColor={'primary.main'}
                    contentText={'My name is Logan Bahr and I\'m currently a student at Florida Gulf Coast University finishing' +
                        ' up my Software Engineering degree. I was born and raised in Southwest Florida, and I currently live in Naples.' +
                        ' Previously I was apart of my family business for about 8 years, helping operate one of largest watersports companies in the country!' +
                        ' I was responsible for our Ritz Carlton location in Naples, Florida.'}
                />
            </Container>


        </Box>
    );
};

export default AboutPage;
