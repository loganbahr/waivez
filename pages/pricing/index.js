// www.waivez.com/pricing
import React from "react";
import Head from "next/head";
import { Container, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import PageTitleText from "../../components/PageTitleText";
import PricingPageCard from "../../components/Cards/PricingPageCard";

const PricingPage = () => {
  return (
    <Box
      sx={{
        backgroundImage:
          "radial-gradient(#7F00FF 2px, transparent 2px), radial-gradient(#7F00FF 2px, #ffffff 2px)",
        backgroundSize: "90px 90px",
        backgroundPosition: "0 0,40px 40px",
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          // backgroundColor: 'red',
        }}
      >
        <Head>
          <title>Pricing</title>
          <meta />
        </Head>
        <PageTitleText content="pricing" />

        <Typography
          sx={{
            fontFamily: "Poppins, sans-serif",
            fontSize: { xs: 15, sm: 22, md: 26, lg: 33, xl: 38 },
            lineHeight: 1.5,
            textAlign: "center",
            mt: 2,
            backgroundColor: "white",
          }}
        >
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          Waivez has price points for any business size. Whether you're small
          family business, large franchise organization, or just getting started
          - we have you covered... literally.
        </Typography>
      </Container>

      <Container
        maxWidth="xl"
        sx={{
          // border: '2px solid red',
          padding: { xs: 1, sm: 1, md: 1, lg: 1, xl: 1 },
          display: "flex",
          alignItems: { xs: "center", sm: "center", md: "start" },
          justifyContent: {
            xs: "space-evenly",
            sm: "space-evenly",
            md: "",
            lg: "",
            xl: "",
          },
          flexDirection: { xs: "column", md: "row" },
          height: {
            xs: "130vh",
            sm: "160vh",
            md: "90vh",
            lg: "110vh",
            xl: "120vh",
          },
          minWidth: "100%",
          backgroundColor: "clear",
          opacity: "0.8",
          // backgroundImage: 'radial-gradient(#7F00FF 2px, transparent 2px), radial-gradient(#7F00FF 2px, #ffffff 2px)',
          // backgroundSize: '90px 90px',
          // backgroundPosition: '0 0,40px 40px',
        }}
      >
        <PricingPageCard
          mx={{ xs: 0, md: 1 }}
          my={{ xs: 0, sm: 1, md: 10 }}
          titleText={"Standard"}
          price={"$9.99 / month + $0.20 / waiver"}
          priceDetails={
            "The best option for businesses that have less than 100 customer a day. Has access to basic features."
          }
        />
        <PricingPageCard
          mx={{ xs: 0, md: 1 }}
          my={{ xs: 0, sm: 1, md: 30 }}
          titleText={"Growing"}
          price={"$19.99 / month + $0.15 / waiver"}
          priceDetails={
            "Generally for business that have less than 1,000 customers a day, but are growing quickly. Has access to most features.  "
          }
        />
        <PricingPageCard
          mx={{ xs: 0, md: 1 }}
          my={{ xs: 0, sm: 1, md: 10 }}
          titleText={"Corporate"}
          price={"$99.99/ month+ $0.10 / waiver"}
          priceDetails={
            "For businesses with thousands of customers daily. Has access to all features, including future features."
          }
        />
      </Container>
    </Box>
  );
};

export default PricingPage;
