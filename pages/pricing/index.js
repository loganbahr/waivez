// www.waivez.com/pricing
import React from 'react';
import Head from "next/head";
import {Container, Typography} from "@mui/material";
import Box from "@mui/material/Box";
import PageTitleText from "../../components/PageTitleText";
import PricingPageCard from "../../components/Cards/PricingPageCard";
import Card from "@mui/material/Card";


const PricingPage = () => {
    return (
        <Box>
            <Container maxWidth='lg'
                       sx={{
                           display: 'flex',
                           flexDirection: 'column',
                           alignItems: 'center',
                           // backgroundColor: 'red',
                       }}>
                <Head>
                    <title>
                        Pricing
                    </title>
                    <meta/>
                </Head>
                <PageTitleText content='pricing'/>

                <Typography sx={{
                    fontFamily: 'Poppins, sans-serif',
                    fontSize: {xs: 15, sm: 18, md: 20, lg: 24, xl: 26},
                    lineHeight: 1.5,
                    textAlign: 'center',
                    mt: 2,
                }}>
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    Waivez has price points for any business size. Whether you're small family business,
                    large franchise organization, or just getting started - we have you covered... literally.
                </Typography>
            </Container>

            <Container maxWidth='xl'
                       sx={{
                           border: '2px solid red',
                           padding: {xs: 0, sm: 0, md: 0, lg: 0, xl: 0},
                           display: 'flex',
                           flexDirection: {xs: 'column', md: 'row'},
                           alignItems: 'center',
                       }}>

                <PricingPageCard/>
                <PricingPageCard/>
                <PricingPageCard/>

            </Container>
        </Box>
    );
};

export default PricingPage;
