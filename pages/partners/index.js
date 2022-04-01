// www.waivez.com/partners

import React from "react";
import Head from "next/head";
import { Box, Container } from "@mui/material";
import PageTitleText from "../../components/PageTitleText";
import PageSubtitleText from "../../components/PageSubtitleText";
import PartnerDirectory from "../../components/PartnerPage/PartnerDirectory";
import WaiverSelection from "../../components/Waivers/WaiverSelection";
import Axios from "axios";

const PartnersPage = (props) => {
  return (
    <Box
      sx={
        {
          // border: '4px solid green'
        }
      }
    >
      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          pb: 10,
          // border: '2px solid orange'
        }}
      >
        <Head>
          <title>Partners</title>
          <meta />
        </Head>
        <PageTitleText content="partners" />
        <PageSubtitleText content="Find the company you want to sign a waiver with." />
      </Container>

      <Container
        sx={{
          backgroundColor: "clear",
          // border: '2px solid black',
          // minHeight: '100vh',
          display: "flex",
          flexDirection: "column",
          padding: { xs: 0, sm: 0, lg: 0, xl: 0 }, //keeps content to edge of screen
          mb: 10,
        }}
      >
        <PartnerDirectory partners={props} />
      </Container>
    </Box>
  );
};

PartnersPage.getInitialProps = async () => {
  const res = await Axios.get("http://localhost:5000/companies");

  if (res.data) {
    return res.data;
  }

  return { err: "no company" };
};

export default PartnersPage;
