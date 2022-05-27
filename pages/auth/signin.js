/**
 * @file pages\auth\signin.js
 * @author Logan Bahr
 * @description Sign in page. The file name is not capitalized because it is a page.
 * We don't have an index.js file because we don't want to have a default page.
 * This brings you to www.waivez.com/auth/signin
 * @since 5/22/22
 */

import React, {useState} from 'react';
import {getProviders, signIn, signOut, useSession} from "next-auth/react";
import {Button, Container} from "@mui/material";
import CredentialsSignIn from "../api/auth/CredentialsSignIn";

const SignIn = ({providers}) => {

    const {data: session} = useSession();
    console.log(session);

    return (
        <Container
            sx={{
                maxWidth: 'md',
                minHeight: '100vh',
                alignItems: 'center',
                justifyContent: 'center',
                display: 'flex',
                flexDirection: 'column',
            }}>

            <CredentialsSignIn/>
            <Button variant={'contained'} onClick={() => signIn("google")}>Sign in with Google</Button>
            <Button variant={'contained'} sx={{mt: 3}} onClick={() => signOut()}>Sign Out</Button>
        </Container>
    );
};


// server side render
export async function getServerSideProps(context) {
    const providers = await getProviders();
    return {
        props: {
            providers,
        }
    }
}

export default SignIn;