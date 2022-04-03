// www.waivez.com/pricing
import React from 'react';
import Head from "next/head";
import {Container, Typography} from "@mui/material";
import Box from "@mui/material/Box";
import StandardPricingCard from "../../components/HomePage/PricingSection/StandardPricingCard";
import AdvancedPricingCard from "../../components/HomePage/PricingSection/AdvancedPricingCard";
import ProPricingCard from "../../components/HomePage/PricingSection/ProPricingCard";
import FeaturesTimeline from "../../components/PricingPage/FeaturesTimeline";

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
            <Box sx={{background: "linear-gradient(0deg, #f9f9f9, #bc9bde, #7f00ff)",}}>
                <Container maxWidth={'md'} sx={{border: '2px solid red', pb: 50}}>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <Typography variant={'h2'} color={'text.content'}>
                            Features Timeline
                        </Typography>
                        <FeaturesTimeline/>

                        <Typography variant={'h2'} color={'text.content'} sx={{mt: 5}}>
                            4/15 - 6/1
                        </Typography>

                    </Box>


                </Container>
            </Box>


        </Box>
    );
};

export default PricingPage;
{/*<ContentBlockHorizontal leftContent={'Effectively advertise with a few clicks.'}*/
}
{/*                        rightContent={'Integrate with popular mass mailing services to effectively target the audience you intended.'}/>*/
}

{/*<ContentBlockHorizontal/>*/
}

{/*<PricingPageCard mx={{xs: 0, md: 1}} my={{xs: 1, sm: 1, md: 10}} titleText={"Standard"}*/
}
{/*                 price={'$9.99 / month + $0.20 / waiver'}*/
}
{/*                 priceDetails={"The best option for businesses that have less than 100 customers per month. Has access to basic features."}/>*/
}
{/*<PricingPageCard mx={{xs: 0, md: 1}} my={{xs: 1, sm: 1, md: 30}} titleText={"Growing"}*/
}
{/*                 price={'$19.99 / month + $0.15 / waiver'}*/
}
{/*                 priceDetails={"Generally for business that have less than 1,000 customers per month, but are growing quickly. Has access to most features.  "}/>*/
}
{/*<PricingPageCard mx={{xs: 0, md: 1}} my={{xs: 1, sm: 1, md: 10}} titleText={"Corporate"}*/
}
{/*                 price={'$99.99/ month+ $0.10 / waiver'}*/
}
{/*                 priceDetails={"For businesses with thousands of customers monthly. Has access to all features, including any future features."}/>*/
}
