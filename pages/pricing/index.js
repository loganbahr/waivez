// www.waivez.com/pricing
import React from 'react';
import Head from "next/head";
import {Container, Typography} from "@mui/material";
import Box from "@mui/material/Box";
import TitleText from "../../components/Text/TitleText";
import PricingPageCard from "../../components/Cards/PricingPageCard";
import HalfPageLeft from "../../components/Section/HalfPageLeft";
import SubtitleText from "../../components/Text/SubtitleText";

import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ContentBlockHorizontal from "../../components/Section/ContentBlockHorizontal";
import ContentBlockVertical from "../../components/Section/ContentBlockVertical";

const PricingPage = () => {
    return (
        <Box sx={{}}>
            <Container maxWidth='md'
                       sx={{
                           display: 'flex',
                           flexDirection: 'column',
                           alignItems: 'center',
                           mt: 15
                           // backgroundColor: 'red',
                       }}>
                <Head>
                    <title>
                        Pricing
                    </title>
                    <meta/>
                </Head>
                <Typography variant={'h1'} sx={{}}>
                    pricing
                </Typography>

                <Typography variant={'h4'} sx={{my: 5, textAlign: 'center',}}>
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    Waivez has price points for any business size. Whether you're a small family business, large
                    franchise organization, or just getting started — we have you covered... literally.
                </Typography>
            </Container>

            <Container maxWidth='md'
                       disableGutters={true}
                       sx={{
                           // border: '2px solid red',
                           display: 'flex',
                           alignItems: {xs: 'center', sm: 'center', md: 'start'},
                           justifyContent: {xs: 'space-between', sm: 'space-evenly', md: '', lg: '', xl: ''},
                           flexDirection: {xs: 'column', md: 'row'},
                           // height: {xs: '120vh', sm: '140vh', md: '80vh', lg: '100vh', xl: '90vh'},
                           minWidth: '100%',
                           backgroundColor: 'clear',
                       }}>

                <PricingPageCard mx={{xs: 0, md: 1}} my={{xs: 1, sm: 1, md: 10}} titleText={"Standard"}
                                 price={'$9.99 / month + $0.20 / waiver'}
                                 priceDetails={"The best option for businesses that have less than 100 customers per month. Has access to basic features."}/>
                <PricingPageCard mx={{xs: 0, md: 1}} my={{xs: 1, sm: 1, md: 30}} titleText={"Growing"}
                                 price={'$19.99 / month + $0.15 / waiver'}
                                 priceDetails={"Generally for business that have less than 1,000 customers per month, but are growing quickly. Has access to most features.  "}/>
                <PricingPageCard mx={{xs: 0, md: 1}} my={{xs: 1, sm: 1, md: 10}} titleText={"Corporate"}
                                 price={'$99.99/ month+ $0.10 / waiver'}
                                 priceDetails={"For businesses with thousands of customers monthly. Has access to all features, including any future features."}/>

            </Container>

            <Container
                disableGutters={true}
                maxWidth={'xl'}
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column',
                }}>

                <Box sx={{
                    height: {xs: 450, sm: 550, md: 650, lg: 700, xl: 750},
                    width: {xs: 350, sm: 750, md: 800, lg: 1000, xl: 1200},
                    boxShadow: '0px 0px 15px 0px rgba(127,0,255,0.75)',
                    background: 'radial-gradient(ellipse at 101% 72%,#7f00ff, #9833ff, #b266ff, #cb99ff)',
                    borderRadius: 5,
                    my: 1,
                    display: 'flex',
                    flexDirection: 'row',

                }}>
                    <Box sx={{
                        width: '50%',
                        height: '100%',
                        // border: '2px solid green',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        // textAlign: 'center',
                        mx: 3
                    }}>

                        <Typography variant={'h3'} color={'text.content'}>
                            Get to know your customer.
                        </Typography>
                    </Box>


                    <Box sx={{
                        width: '50%',
                        height: '100%',
                        // border: '2px solid red',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-evenly',
                        alignItems: 'center',
                        textAlign: 'center',
                    }}>
                        <Typography color={'text.content'}
                                    sx={{fontSize: {xs: 14, sm: 20, md: 25, lg: 30, xl: 32}, mx: 2}}
                        >
                            Our Partner Dashboard features cutting-edge analytics:
                        </Typography>

                        <Box sx={{px: 2}}>
                            <Typography color={'text.content'}
                                        sx={{
                                            fontSize: {xs: 13, sm: 20, md: 25, lg: 25, xl: 30},
                                            display: 'flex',
                                            flexDirection: 'row',
                                            alignItems: 'center',
                                            justifyContent: 'start',
                                            my: 2,
                                        }}>
                                <CheckCircleOutlineIcon sx={{mx: 1}}/>
                                Return Probability Index (RPI)®
                            </Typography>

                            <Typography color={'text.content'}
                                        sx={{
                                            fontSize: {xs: 13, sm: 20, md: 25, lg: 25, xl: 32},
                                            display: 'flex',
                                            flexDirection: 'row',
                                            alignItems: 'center',
                                            my: 2
                                        }}>
                                <CheckCircleOutlineIcon sx={{mx: 1}}/>
                                Customer Heat Maps
                            </Typography>

                            <Typography color={'text.content'}
                                        sx={{
                                            fontSize: {xs: 13, sm: 20, md: 25, lg: 25, xl: 32},
                                            display: 'flex',
                                            flexDirection: 'row',
                                            alignItems: 'center',
                                            my: 2
                                        }}>
                                <CheckCircleOutlineIcon sx={{mx: 1}}/>
                                Machine Learning & AI
                            </Typography>
                        </Box>

                    </Box>

                </Box>

                <ContentBlockHorizontal leftContent={'Effectively advertise with a few clicks.'}
                                        rightContent={'Integrate with popular mass mailing services to effectively target the audience you intended.'}/>

                <ContentBlockHorizontal/>

            </Container>

        </Box>
    );
};

export default PricingPage;
