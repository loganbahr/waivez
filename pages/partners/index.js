// www.waivez.com/partners

import React from 'react';
import Head from "next/head";
import {Box, Container} from "@mui/material";
import PageTitleText from "../../components/PageTitleText";
import QuickFilteringGrid from "../../components/PartnerPage/QuickFilterPartnerDirectory";
import PageSubtitleText from "../../components/PageSubtitleText";


const PartnersPage = () => {
    return (
        <Box>
            <Container maxWidth='lg'
                       sx={{
                           display: 'flex',
                           flexDirection: 'column',
                           alignItems: 'center',
                           pb: 10
                       }}>
                <Head>
                    <title>
                        Partners
                    </title>
                    <meta/>
                </Head>
                <PageTitleText content='partners'/>
                <PageSubtitleText content='Find the company you want to sign a waiver with.'/>
            </Container>

            <Container sx={{
                backgroundColor: 'clear',
                // border: '2px solid red',
                minHeight: '100vh',
                // minWidth: '100%',
                display: 'flex',
                flexDirection: 'column',
                padding: {xs: 0, sm: 0, lg: 0, xl: 0},//keeps content to edge of screen
                mb: 10,
            }}>
                <QuickFilteringGrid/>

            </Container>


        </Box>
    );
};

export default PartnersPage;
