// www.waivez.com/auth/signin

import React, {useEffect} from 'react';
import {getProviders, getSession, signIn as SignIntoProvider, signOut, useSession} from "next-auth/react";
import {Button} from "@mui/material";
import Box from "@mui/material/Box";
import GoogleSignIn from '../../components/Pages/SignIn/GoogleSignIn'
import EmailAndPasswordSignIn from "../../components/Pages/SignIn/EmailAndPasswordSignIn";
import {getAuth} from "firebase/auth";
import {auth} from "../../firebase";

// browser
const signIn = ({providers}) => {

    return (
        <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>

            <GoogleSignIn providers={providers}/>

            <EmailAndPasswordSignIn providers={providers}/>

            <Button variant={'contained'} onClick={()=>signOut()}>Sign Out</Button>

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

export default signIn;