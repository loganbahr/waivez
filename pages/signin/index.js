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


                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4568.0396161472045!2d-81.82432643111218!3d26.25307638382517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88db1f60e2edd825%3A0xbd354293c31a8de1!2sNaples%20Beach%20Water%20Sports!5e1!3m2!1sen!2sus!4v1648673490958!5m2!1sen!2sus"
                    width="600" height="450" allowFullScreen="" loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"/>

                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4583.843851184383!2d-81.72443348451786!3d25.916334758506764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88daee6777083df3%3A0xccbd2af0795678f3!2sMarco%20Island%20Water%20Sports!5e1!3m2!1sen!2sus!4v1648673736708!5m2!1sen!2sus"
                    width="600" height="450" allowFullScreen="" loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"/>

            </Container>

        </Box>
    );
};


export default SignInPage;
