import React, {useEffect, useState} from 'react';
import Head from "next/head";
import Box from "@mui/material/Box";
import {Container, Typography} from "@mui/material";


const SignIn = () => {

    const [session, setSession] = useState(null);

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

                <Box sx={{display: 'flex', justifyContent: 'center'}}>
                    <div className="container" style={{padding: '50px 0 100px 0'}}>
                        {/*{!session ? <ExistingUser/> : <h1>You&apos;re already signed in!</h1>}*/}
                    </div>
                </Box>
            </Container>
        </Box>
    );
};

export default SignIn;

