/**
 * @file /pages/contact/index.js
 * @author Logan Bahr
 * @description The contact page. (www.waivez.com/contact)
 * @since 3/1/2022
 */
import React, {useEffect, useState} from 'react';
import Head from "next/head";
import {Box, Container, Typography} from "@mui/material";
import FormikForm from "../../components/Pages/Contact/FormikForm";
import {supabase} from "../../lib/supabaseClient";

const ContactPage = () => {
    return (
        <Box>
            <Container maxWidth='md'
                       sx={{
                           // border: '2px solid red',
                           display: 'flex',
                           alignItems: 'center',
                           flexDirection: 'column',
                           textAlign: 'center',
                           mt: 15,
                       }}>
                <Head>
                    <title>
                        Contact Us
                    </title>
                    <meta/>
                </Head>
                <Typography variant={'h1'}>
                    contact us
                </Typography>
                <Typography variant={'h4'} sx={{mt: 5}}>
                    If you have any questions, concerns, or ideas for improvements — please let us know!
                </Typography>
            </Container>


            <Container maxWidth='md'
                       sx={{
                           display: 'flex',
                           // border: '2px solid red',
                           // height: {xs: '70vh', sm: '65vh', md: '70vh', lg: '50vh', xl: '30vh'},
                           width: 'auto',
                           justifyContent: 'center',
                           alignItems: 'start',
                           my: 10,
                           pb: 10,
                           opacity: '1',
                           backgroundColor: 'clear'
                       }}>
                <FormikForm/>
            </Container>
        </Box>
    );
};

export default ContactPage;
