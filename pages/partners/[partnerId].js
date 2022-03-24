// dynamic routing for each partner page (www.waivez.com/partners/marcoislandwatersports)
// Okay daddy OwO

import { Box, Container, Typography } from "@mui/material";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";
import PageSubtitleText from "../../components/PageSubtitleText";
import PageTitleText from "../../components/PageTitleText";
import Partners from "../../components/Partners/PartnerListTemp";

/**
 * @file [partnerId].js
 * @author Devin Arena, Logan Bahr
 * @description Pages for each individual partner. TODO: are we pulling from a database here?
 * @since 3/23/2022
 **/

const PartnerPage = (props) => {
  const router = useRouter();
  const { partnerId } = router.query;

  useEffect(() => console.log(Partners), []);

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
          <title>{Partners[partnerId]["title"]}</title>
          <meta />
        </Head>
        <PageTitleText content={Partners[partnerId]["title"]} />
        <PageSubtitleText content={Partners[partnerId]["subtitle"]} />
        <Typography variant="p">{Partners[partnerId]["paragraph"]}</Typography>
      </Container>
    </Box>
  );
};

export default PartnerPage;
