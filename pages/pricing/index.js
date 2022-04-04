// www.waivez.com/pricing
import React from 'react';
import Head from "next/head";
import {Container, List, ListItem, Typography} from "@mui/material";
import Box from "@mui/material/Box";
import StandardPricingCard from "../../components/HomePage/PricingSection/StandardPricingCard";
import AdvancedPricingCard from "../../components/HomePage/PricingSection/AdvancedPricingCard";
import ProPricingCard from "../../components/HomePage/PricingSection/ProPricingCard";
import PhaseTimelineGraphic from "../../components/AboutPage/PhaseTimelineGraphic";
import ProductTimeline from "../../components/AboutPage/ProductTimeline";

const PricingPage = () => {
    // background: "linear-gradient(0deg, #f9f9f9, #bc9bde, #7f00ff)"
    return (
        <Box sx={{}}>
            <Container maxWidth='lg'
                       sx={{
                           display: 'flex',
                           flexDirection: 'column',
                           alignItems: 'center',
                       }}>
                <Head>
                    <title>
                        Pricing
                    </title>
                    <meta/>
                </Head>
                <Typography variant={'h1'} sx={{mt: 15}}>
                    pricing
                </Typography>

                <Typography variant={'h4'} sx={{my: 5, textAlign: 'center',}}>
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    Waivez has price points for any business size. Whether you're a small family business, large
                    franchise organization, or just getting started — we have you covered... literally.
                </Typography>
            </Container>

            <Box sx={{
                background: "linear-gradient(180deg, #f9f9f9, #bc9bde, #7f00ff)",
                height: {xs: 2300, sm: 2300, md: 1000,},
                // border: "2px solid green"
            }}>
                <Container
                    disableGutters={true}
                    maxWidth={'lg'}
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: {xs: 'column', md: 'row'},
                        // border: '2px solid red',
                    }}>
                    <StandardPricingCard/>
                    <AdvancedPricingCard/>
                    <ProPricingCard/>
                </Container>
            </Box>

            <Box sx={{
                background: "linear-gradient(0deg, #f9f9f9, #bc9bde, #7f00ff)",
                height: 1500
            }}>
                <Container maxWidth={'lg'} disableGutters={true} sx={{border: '2px solid red'}}>
                    <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>


                        <Typography variant={'h2'} color={'text.content'} sx={{mx: 5, textAlign: 'center',}}>
                            Everything you need. <br/> <br/>
                            All in one place.
                        </Typography>


                    </Box>
                </Container>

            </Box>


        </Box>
    );
};

export default PricingPage;
