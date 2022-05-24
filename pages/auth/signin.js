/**
 * @file pages\auth\signin.js
 * @author Logan Bahr
 * @description Sign in page. The file name is not capitalized because it is a page.
 * We don't have an index.js file because we don't want to have a default page.
 * This brings you to www.waivez.com/auth/signin
 * @since 5/22/22
 */

import React, {useState} from 'react';
import {getProviders, signIn, signIn as SignIntoProvider, signOut, useSession} from "next-auth/react";
import {Button} from "@mui/material";
import AdminGoogleSignIn from "../../components/Pages/SignIn/AdminGoogleSignIn";
import Box from "@mui/material/Box";
import EmailAndPasswordSignIn from "../../components/Pages/SignIn/EmailAndPasswordSignIn";

// not sure if it's okay to capitalize 'SignIn', turning it into a component, but it's
// the only way to use hooks.
const SignIn = ({providers}) => {

    const {data: session} = useSession();
    // console.log(providers);

    return (
        <Box>
            <Button onClick={() => signIn("google")}>Sign in with Google</Button>
            {/*<AdminGoogleSignIn providers={providers}/>*/}
            {/*<EmailAndPasswordSignIn providers={providers}/>*/}

            <Button variant={'contained'} onClick={() => signOut()}>Sign Out</Button>
        </Box>
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