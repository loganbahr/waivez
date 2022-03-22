// www.waivez.com/about
import Head from 'next/head';
import React from 'react';
import Box from "@mui/material/Box";
import {Container} from "@mui/material";
import PageTitleText from "../../components/PageTitleText";
import PageSubtitleText from "../../components/PageSubtitleText";

const AboutPage = () => {
    return (
        <Box>
            <Container maxWidth='lg'
                       sx={{
                           display: 'flex',
                           flexDirection: 'column',
                           alignItems: 'center',
                           // border: '2px solid red',
                       }}>
                <Head>
                    <title>
                        About Us
                    </title>
                    <meta/>
                </Head>
                <PageTitleText content='about us'/>
                <PageSubtitleText content=''/>
            </Container>

            <Container maxWidth='xl'
                       sx={{
                           display: 'flex',
                           border: '2px solid red',
                           height: {xs: '70vh', sm: '65vh', md: '70vh', lg: '90vh'},
                           width: 'auto',
                           justifyContent: 'center',
                           alignItems: 'start',
                           mt: 10,
                           opacity: '1',
                           backgroundColor: 'clear'
                       }}>

            </Container>

        </Box>
    );
};

export default AboutPage;
