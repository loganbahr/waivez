// www.waivez.com/pricing
import React from 'react';
import Head from "next/head";
import {Container, Typography} from "@mui/material";
import Box from "@mui/material/Box";
import PageTitleText from "../../components/PageTitleText";
import PricingPageCard from "../../components/Cards/PricingPageCard";

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
                           // border: '2px solid red',
                           padding: {xs: 1, sm: 1, md: 1, lg: 1, xl: 1},
                           display: 'flex',
                           alignItems: {xs: 'center', sm: 'center', md: 'start'},
                           justifyContent: {xs: 'space-evenly', sm: 'space-evenly', md: '', lg: '', xl: ''},
                           flexDirection: {xs: 'column', md: 'row'},
                           height: {xs: '130vh', sm: '160vh', md: '90vh', lg: '110vh', xl: '120vh'},
                           minWidth: '100%',
                           backgroundColor: '#ffffff',
                           opacity: '0.8',
                           backgroundImage: 'radial-gradient(#7F00FF 2px, transparent 2px), radial-gradient(#7F00FF 2px, #ffffff 2px)',
                           backgroundSize: '90px 90px',
                           backgroundPosition: '0 0,40px 40px',
                       }}>

                <PricingPageCard mx={{xs: 0, md: 1}} my={{xs: 0, sm: 1, md: 10}} titleText={"Standard"}/>
                <PricingPageCard mx={{xs: 0, md: 1}} my={{xs: 0, sm: 1, md: 30}} titleText={"Growing"}/>
                <PricingPageCard mx={{xs: 0, md: 1}} my={{xs: 0, sm: 1, md: 10}} titleText={"Corporate"}/>


            </Container>
        </Box>
    );
};

export default PricingPage;
