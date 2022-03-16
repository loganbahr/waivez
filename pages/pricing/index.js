// www.waivez.com/pricing
import React from 'react';
import Head from "next/head";
import {Typography} from "@mui/material";
import WaivezPricingCard from '../../components/pricing/PricingCard';
import Box from "@mui/material/Box";


// TODO: reformat page for mobile, add proper pricing structure

const PricingPage = () => {
    return (
        <Box>
            <Head>
                <title>
                    Pricing
                </title>
                <meta/>
            </Head>
            <h1>pricing</h1>
            <Typography sx={{
                fontFamily: 'Poppins, sans-serif',
                fontSize: '1.5rem',
                lineHeight: '2.5rem',
                textAlign: 'center',
                marginBottom: '100px',
            }}>
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                Waivez has price points for any business size. Whether you're small family business,
                <br/>
                large franchise organization, or just getting started - we have you covered... literally.
            </Typography>
            <Box sx={{
                display: 'flex',
                flexDirection: 'row',
            }}>
                <WaivezPricingCard
                    cardContent={"$15 / month"}
                    title='Basic Plan'
                    subheader='100 Waivers /month'
                    cardDetails={"Up to 100 new signed waivers per month."}
                />
                <WaivezPricingCard
                    cardContent={"$150 / month"}
                    title='Growth Plan'
                    subheader='1000 Waivers /month'
                    cardDetails={"Up to 1000 new signed waivers per month."}
                />
                <WaivezPricingCard
                    cardContent={"$500 / month"}
                    title='Enterprise Plan'
                    subheader='10,000 Waivers /month'
                    cardDetails={"Up to 10,000 new signed waivers per month."}
                />
            </Box>


        </Box>
    );
};

export default PricingPage;
