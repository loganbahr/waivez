import React from 'react';
import Box from "@mui/material/Box";
import {Container, Typography} from "@mui/material";
import Head from "next/head";
import TitleText from "../../components/Text/TitleText";
import SubtitleText from "../../components/Text/SubtitleText";
import ContentText from "../../components/Text/ContentText";

const PrivacyPolicy = () => {
    return (
        <Box
            sx={{
                border: '2px solid red',
                height: '2000vh',
            }}>
            <Container
                maxWidth={'lg'}
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: 'center',
                    border: '2px solid blue',
                    my: 20,
                }}>
                <Head>
                    <title>
                        Privacy Policy
                    </title>
                    <meta/>
                </Head>
                <Typography variant={'h1'}>
                    Privacy Policy
                </Typography>
            </Container>

            <Container
                sx={{
                    border: '2px solid green',
                    height: '99%',
                    display: 'flex',
                    alignItems: 'start',
                    flexDirection: 'column'
                }}>
                <Typography variant={'subtitle1'} sx={{color: 'black'}}>
                    SW Development LLC (“Smartwaiver”, “we,” “us,” “our”) is dedicated to protecting your privacy and
                    the privacy of your customers. This policy explains what data we collect, why we collect it, and
                    what we do with it. We take privacy issues very seriously, and never sell lists, personal
                    information or email addresses. Please read the following to learn more about our Privacy Policy.
                </Typography>

            </Container>
        </Box>
    );
};

export default PrivacyPolicy;
