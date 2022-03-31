import React from 'react';
import Box from "@mui/material/Box";
import {Container} from "@mui/material";
import Head from "next/head";
import TitleText from "../../components/Text/TitleText";

const TermsOfService = () => {
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
                    border: '2px solid blue'
                }}>
                <Head>
                    <title>
                        Terms Of Service
                    </title>
                    <meta/>
                </Head>
                <TitleText content={'Terms of Service'}/>
            </Container>

            <Container
                sx={{
                    border: '2px solid green',
                    height: '99%'
                }}>

            </Container>

        </Box>
    );
};

export default TermsOfService;
