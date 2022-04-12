/**
 * @file /pages/pricing/index.js
 * @author Logan Bahr
 * @description Pricing page. (www.waivez.com/pricing)
 * @since 3/1/2022
 */
import React from 'react';
import Head from "next/head";
import {Container, Typography} from "@mui/material";
import Box from "@mui/material/Box";
import StandardPricingCard from "../../components/Cards/StandardPricingCard";
import AdvancedPricingCard from "../../components/Cards/AdvancedPricingCard";
import ProPricingCard from "../../components/Cards/ProPricingCard";
import FAQAccordion from "../../components/Pricing_Page/FAQAccordion";


const PricingPage = () => {
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
                    Waivez has price points for any business size. Whether you&apos;re a small family business, large
                    franchise organization, or just getting started — we have you covered... literally.
                </Typography>
            </Container>

            <Box sx={{
                background: "linear-gradient(180deg, #f9f9f9, #7f00ff, #f9f9f9)",
                minHeight: '100vh',
            }}>
                <Container
                    disableGutters={true}
                    maxWidth={'lg'}
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: {xs: 'column', md: 'row'},
                    }}>
                    <StandardPricingCard/>
                    <AdvancedPricingCard/>
                    <ProPricingCard/>
                </Container>
                <Container disableGutters={true} maxWidth={'lg'}
                           sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <FAQAccordion/>
                </Container>
            </Box>
        </Box>
    );
};

export default PricingPage;
