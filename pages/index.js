/**
 * @file /pages/index.js
 * @author Logan Bahr, Devin Arena
 * @description Front page of Waivez.
 * @since 2/2/22
 */
// www.waivez.com
import React, { useEffect } from "react";
import Head from "next/head";
import Box from "@mui/material/Box";
import { Container, Typography } from "@mui/material";
import SearchBar from "../components/Home_Page/SearchBar";
import HeroSection from "../components/Home_Page/HeroSection";
import ExampleSection from "../components/Home_Page/ExampleSection";
import FeaturesPricingSection from "../components/Home_Page/FeaturesPricingSection";
import Axios from "axios";
import WaivezLandingLogo from "../components/Graphics/WaivezLandingLogo";
import WaivezLogo from "../components/Graphics/WaivezLogo";
import { motion } from "framer-motion";

const HomePage = (props) => {

  useEffect(() => {
    console.log(proces.env.API_URL);
  }, []);

  return (
    <Box>
      <Container
        maxWidth="md"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          mt: 10,
        }}
      >
        <Head>
          <title>waivez</title>
          <link rel="icon" href="/public/favicon.ico" />
          <meta name="description" content="Any waiver, all in one place." />
        </Head>

        <motion.div whileTap={{ scale: 1.2 }}>
          <Box
            sx={{
              width: { xs: 350, sm: 400, md: 600 },
              height: { xs: 200, sm: 250, md: 350 },
            }}
          >
            <WaivezLogo width={"100%"} height={"100%"} color={"#7f00ff"} />
          </Box>
        </motion.div>

        <SearchBar partners={props} />
      </Container>
      <HeroSection />
      <ExampleSection />
      <FeaturesPricingSection />
    </Box>
  );
};

export async function getServerSideProps({ req, query }) {
  const res = await Axios.get(`${process.env.API_URL}/api/companies`);

  if (res.data) {
    return {
      props: res.data,
    };
  }

  return { props: { err: "no company" } };
}

export default HomePage;
