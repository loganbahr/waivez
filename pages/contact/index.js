// www.waivez.com/contact
import React from 'react';
import Head from "next/head";
import {Box, Container} from "@mui/material";
import PageTitleText from "../../components/PageTitleText";
import FormikForm from "../../components/Contact Page/FormikForm";


const ContactPage = () => {

    return (
        <Box
            sx={{}}>
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
                           height: '80vh',
                           width: '100%',
                           justifyContent: 'center',
                           alignItems: 'start',
                       }}>
                <FormikForm/>
            </Container>

        </Box>
    );
};

export default ContactPage;
