/**
 * @file /pages/index.js
 * @author Logan Bahr, Devin Arena
 * @description Front page of Waivez.
 * @since 2/2/22
 */
// www.waivez.com
import React from "react";
import Head from "next/head";
import Box from "@mui/material/Box";
import {Container, Typography} from "@mui/material";
import SearchBar from "../components/HomePage/SearchBar";
import HeroSection from "../components/HomePage/HeroSection";
import ExampleSection from "../components/HomePage/ExampleSection";
import FeaturesPricingSection from "../components/HomePage/PricingSection/FeaturesPricingSection";
import Axios from "axios";
import {motion} from 'framer-motion';
import Logo from "../components/Graphics/Logo";
import WaivezLandingLogo from "../components/Graphics/WaivezLandingLogo";


const HomePage = (props) => {
    return (
        <Box>
            <Container
                maxWidth="md"
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    mt: 10
                }}
            >
                <Head>
                    <title>waivez</title>
                    <meta name="description" content="Any waiver, all in one place."/>
                </Head>

                {/*<motion.div whileTap={{scale: 1.2}}>*/}
                {/*    <Typography variant={"h1"}>waivez</Typography>*/}
                {/*</motion.div>*/}
                <Box sx={{
                    width: {xs: 300, sm: 400, md: 500},
                    height: {xs: 150, sm: 200, md: 250}
                }}>
                    <WaivezLandingLogo width={'100%'} height={'100%'} color={'#7f00ff'}/>
                </Box>

                <SearchBar partners={props}/>
            </Container>
            <HeroSection/>
            <ExampleSection/>
            <FeaturesPricingSection/>
        </Box>
    );
};

HomePage.getInitialProps = async () => {
    const res = await Axios.get("http://localhost:5000/companies");

    if (res.data) {
        return res.data;
    }

    return {err: "no company"};
};

export default HomePage;
