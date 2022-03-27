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
                           flexDirection: 'column',
                           // border: '2px solid red',
                           // height: {xs: '50vh', sm: '30vh', md: '30vh', lg: '20vh'},
                           height: '100vh',
                           width: 'auto',
                           justifyContent: 'start',
                           alignItems: 'center',
                           my: 10,
                           opacity: '1',
                           backgroundColor: 'clear'
                       }}>
                <FormikForm/>

                {/*<Box*/}
                {/*    sx={{*/}
                {/*        mt: 10,*/}
                {/*        height: '250px',*/}
                {/*        width: '500px',*/}
                {/*        border: '4px solid #7F00FF',*/}
                {/*        borderRadius: '25px'*/}
                {/*    }}>*/}
                {/*</Box>*/}


            </Container>

        </Box>
    );
};


export default SignInPage;
