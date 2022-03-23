// www.waivez.com/partners

import React from 'react';
import Head from "next/head";
import {Box, Container, Typography} from "@mui/material";
import PageTitleText from "../../components/PageTitleText";
import WaiverPage from "./waiver";
import SearchBar from "../../components/HomePage/SearchBar";
import PartnerDirectory from "../../components/PartnerPage/PartnerDirectory";
import QuickFilteringGrid from "../../components/PartnerPage/QuickFilterDirectory";


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
                {/*<SearchBar/>*/}
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
                {/*<PartnerDirectory/>*/}

            </Container>


        </Box>
    );
};

export default PartnersPage;
