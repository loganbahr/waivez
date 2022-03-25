import React, {useState} from 'react';
import Head from "next/head";
import axios from 'axios';
import Box from "@mui/material/Box";
import {Container} from "@mui/material";
import PageTitleText from "../../components/PageTitleText";
import PageSubtitleText from "../../components/PageSubtitleText";


const SignInPage = () => {
    return (
        <Box>
            <Container maxWidth='lg'
                       sx={{
                           // border: '2px solid red',
                           display: 'flex',
                           alignItems: 'center',
                           flexDirection: 'column',
                           textAlign: 'center',
                           backgroundColor: 'clear'
                       }}>
                <Head>
                    <title>
                        Partner Sign In
                    </title>
                    <meta/>
                </Head>
                <PageTitleText content='partner sign-in'/>
                <PageSubtitleText content='Log in to access your Partner Dashboard.'/>
            </Container>
        </Box>
    );
};


export default SignInPage;
