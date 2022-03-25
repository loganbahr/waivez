import React, {useState} from 'react';
import Head from "next/head";
import axios from 'axios';
import Box from "@mui/material/Box";
import {Container} from "@mui/material";
import PageTitleText from "../../components/PageTitleText";
import PageSubtitleText from "../../components/PageSubtitleText";
import FormikForm from "../../components/SignIn Page/FormikForm";


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

            <Container maxWidth='xl'
                       sx={{
                           display: 'flex',
                           // border: '2px solid red',
                           height: {xs: '70vh', sm: '65vh', md: '70vh', lg: '90vh'},
                           width: 'auto',
                           justifyContent: 'center',
                           alignItems: 'start',
                           mt: 10,
                           opacity: '1',
                           backgroundColor: 'clear'
                       }}>
                <FormikForm/>
            </Container>

        </Box>
    );
};


export default SignInPage;
