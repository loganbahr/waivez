import React, {useState} from 'react';
import Head from "next/head";
import axios from 'axios';
import Box from "@mui/material/Box";
import {Container, Typography} from "@mui/material";
import TitleText from "../../components/Text/TitleText";
import SubtitleText from "../../components/Text/SubtitleText";
import FormikForm from "../../components/SignIn_Page/FormikForm";


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
                           mt: 15
                       }}>
                <Head>
                    <title>
                        Partner Sign In
                    </title>
                    <meta/>
                </Head>
                <Typography variant={'h1'}>
                    partner sign-in
                </Typography>
                <Typography variant={'h4'} sx={{mt: 5}}>
                    Log in to access your Partner Dashboard!
                </Typography>
            </Container>

            <Container maxWidth='xl'
                       sx={{
                           display: 'flex',
                           flexDirection: 'column',
                           width: 'auto',
                           justifyContent: 'start',
                           alignItems: 'center',
                           my: 10,
                           opacity: '1',
                           backgroundColor: 'clear'
                       }}>
                <FormikForm/>
            </Container>

        </Box>
    );
};


export default SignInPage;
