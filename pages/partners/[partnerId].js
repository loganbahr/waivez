// dynamic routing for each partner page (www.waivez.com/partners/marcoislandwatersports)
// Okay daddy OwO

import { Box, Container, Typography } from "@mui/material";
import Axios from "axios";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";
import PageSubtitleText from "../../components/PageSubtitleText";
import PageTitleText from "../../components/PageTitleText";

/**
 * @file [partnerId].js
 * @author Devin Arena, Logan Bahr
 * @description Pages for each individual partner. TODO: are we pulling from a database here?
 * @since 3/23/2022
 **/

const PartnerPage = (props) => {
  const router = useRouter();

  useEffect(() => console.log(props), []);

  return (
    <Box>
      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          pb: 10,
        }}
      >
        <Head>
          <title>{props.title}</title>
          <meta />
        </Head>
        <PageTitleText content={props.title} />
        <PageSubtitleText content={props.subtitle} />
        <Typography variant="p">{props.paragraph}</Typography>
      </Container>
    </Box>
  );
};

PartnerPage.getInitialProps = async ({ req, query }) => {
  const partnerId = query.partnerId;

  const res = await Axios.get("http://localhost:5000/company", {
    params: {
      company: partnerId,
    },
  });

  if (res.data) {
    return res.data;
  }

  return {};
};

export default PartnerPage;
