/**
 * @file /pages/index.js
 * @author Logan Bahr, Devin Arena
 * @description Front page of Waivez.
 * @since 2/2/22
 */
// www.waivez.com
import React, {useEffect} from "react";
import Head from "next/head";
import Box from "@mui/material/Box";
import {Container, Typography} from "@mui/material";
import SearchBar from "../components/Pages/Home/SearchBar";
import HeroSection from "../components/Pages/Home/HeroSection";
import ExampleSection from "../components/Pages/Home/ExampleSection";
import FeaturesPricingSection from "../components/Pages/Home/FeaturesPricingSection";
import Axios from "axios";
import WaivezLandingLogo from "../components/Graphics/WaivezLandingLogo";
import WaivezLogo from "../components/Graphics/WaivezLogo";
import {motion} from "framer-motion";
import TailwindHero from "../components/Pages/Home/TailwindHero";
import WaivezLogoCropped from "../components/Graphics/WaivezLogoCropped";
import TailwindFeaturesSection from "../components/Pages/Home/TailwindFeaturesSection";

const HomePage = (props) => {

    useEffect(() => {
        console.log(process.env.NEXT_PUBLIC_API_URL);
    }, []);

    return (
        <div>
            <Head>
                <title>waivez</title>
                <link rel="icon" href="/favicon.ico"/>
                <meta name="description" content="Any waiver, all in one place."/>
            </Head>


            <TailwindHero companies={props}/>
            <TailwindFeaturesSection/>

            <div className="bg-primary">
                <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8 lg:py-20">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl font-extrabold text-secondary sm:text-4xl">A custom dashboard to quickly
                            find your users</h2>
                        <p className="mt-3 text-xl text-secondary sm:mt-4">
                            With interactive graphs and statistical metadata describing your unique customer base.
                        </p>
                    </div>
                    <dl className="mt-10 text-center sm:max-w-3xl sm:mx-auto sm:grid sm:grid-cols-3 sm:gap-8">
                        <div className="flex flex-col">
                            <dt className="order-2 mt-2 text-lg leading-6 font-medium text-secondary">Users</dt>
                            <dd className="order-1 text-5xl font-extrabold text-white">Find</dd>
                        </div>
                        <div className="flex flex-col mt-10 sm:mt-0">
                            <dt className="order-2 mt-2 text-lg leading-6 font-medium text-secondary">Users</dt>
                            <dd className="order-1 text-5xl font-extrabold text-white">Reach</dd>
                        </div>
                        <div className="flex flex-col mt-10 sm:mt-0">
                            <dt className="order-2 mt-2 text-lg leading-6 font-medium text-secondary">Users</dt>
                            <dd className="order-1 text-5xl font-extrabold text-white">Retain</dd>
                        </div>
                    </dl>
                </div>
            </div>


        </div>

    );
};

export async function getServerSideProps({req, query}) {
    const res = await Axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/companies`);

    if (res.data) {
        return {
            props: res.data,
        };
    }

    return {props: {err: "no company"}};
}

export default HomePage;
// <Box>
//   <Container
//     maxWidth="md"
//     sx={{
//       display: "flex",
//       flexDirection: "column",
//       alignItems: "center",
//       mt: 10,
//     }}
//   >
//     <Head>
//       <title>waivez</title>
//       <link rel="icon" href="/public/favicon.ico" />
//       <meta name="description" content="Any waiver, all in one place." />
//     </Head>
//
//     <motion.div whileTap={{ scale: 1.2 }}>
//       <Box
//         sx={{
//           width: { xs: 350, sm: 400, md: 600 },
//           height: { xs: 200, sm: 250, md: 350 },
//         }}
//       >
//         <WaivezLogo width={"100%"} height={"100%"} color={"#7f00ff"} />
//       </Box>
//     </motion.div>
//
//     <SearchBar partners={props} />
//   </Container>
//   <HeroSection />
//   <ExampleSection />
//   <FeaturesPricingSection />
// </Box>