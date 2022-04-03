// www.waivez.com
import React from "react";
import Head from "next/head";
import Box from "@mui/material/Box";
import {
  Container,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import SearchBar from "../components/HomePage/SearchBar";
import HeroSection from "../components/HomePage/HeroSection";
import ExampleSection from "../components/HomePage/ExampleSection";

import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import FeaturesPricingSection from "../components/HomePage/PricingSection/FeaturesPricingSection";
import Axios from "axios";

const HomePage = (props) => {
  return (
    <Box>
      <Container
        maxWidth="md"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          mt: 15,
        }}
      >
        <Head>
          <title>waivez</title>
          <meta name="description" content="Any waiver, all in one place." />
        </Head>
        <Typography variant={"h1"}>waivez</Typography>
        <SearchBar partners={props} />
      </Container>
      <HeroSection />
      <ExampleSection />
      <FeaturesPricingSection />
    </Box>
  );
};

HomePage.getInitialProps = async () => {
  const res = await Axios.get("http://localhost:5000/companies");

  if (res.data) {
    return res.data;
  }

  return { err: "no company" };
};

export default HomePage;
