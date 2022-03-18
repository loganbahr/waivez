// www.waivez.com/contact
import React from 'react';
import Head from "next/head";
import {Box, Container} from "@mui/material";
import PageTitleText from "../../components/PageTitleText";


// TODO: practice Formik by creating a custom submission handler with Waivez styling

const ContactPage = () => {
    return (
        <Box>
            <Container maxWidth='lg'
                       sx={{
                           display: 'flex',
                           alignItems: 'center',
                           flexDirection: 'column',
                       }}>
                <Head>
                    <title>
                        Contact Us
                    </title>
                    <meta/>
                </Head>
                <PageTitleText content='contact us'/>
            </Container>

            <Container maxWidth='xl'
            sx={{
                display: 'flex',
                border: '2px solid red',
                height: '100vh',
                width: '100%'
            }}>

            </Container>

        </Box>
    );
};

export default ContactPage;
