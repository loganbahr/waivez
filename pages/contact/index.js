// www.waivez.com/contact
import React from 'react';
import Head from "next/head";
import {Box, Container} from "@mui/material";
import PageTitleText from "../../components/PageTitleText";
import FormikForm from "../../components/Contact Page/FormikForm";
import PageSubtitleText from "../../components/PageSubtitleText";


const ContactPage = () => {
    return (
        <Box
            sx={{
                backgroundImage: 'radial-gradient(#7F00FF 2px, transparent 2px), radial-gradient(#7F00FF 2px, #ffffff 2px)',
                backgroundSize: '90px 90px',
                backgroundPosition: '0 0,40px 40px',

            }}>
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
                        Contact Us
                    </title>
                    <meta/>
                </Head>
                <PageTitleText content='contact us'/>
                <PageSubtitleText
                    content={'If you have any questions, concerns, or ideas for improvements — please let us know!'}/>
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

export default ContactPage;
