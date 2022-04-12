// www.waivez.com/contact
import React from 'react';
import Head from "next/head";
import {Box, Container, Typography} from "@mui/material";
import TitleText from "../../components/Text/TitleText";
import FormikForm from "../../components/Contact_Page/FormikForm";
import SubtitleText from "../../components/Text/SubtitleText";


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
