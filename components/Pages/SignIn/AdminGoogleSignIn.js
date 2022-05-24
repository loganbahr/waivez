/**
 * @file /components/Pages/SignIn/AdminGoogleSignIn.js
 * @author Logan Bahr
 * @description This is a Google Sign In for admins only (have waivez.com domains). Google sign-on for any Google accounts
 * can be toggled in the Google Cloud Platform Console, under APIs & Services > OAuth Consent Screen > User type.
 * @since 5/24/22
 */
import React from 'react';
import {Button} from "@mui/material";
import {signIn as SignIntoProvider, useSession} from "next-auth/react";

const AdminGoogleSignIn = ({providers}) => {

    return (
        <>
            {Object.values(providers).map((provider) => (
                <div key={provider.name}>
                    <Button variant={'contained'}
                            onClick={() => SignIntoProvider(provider.id, {callbackUrl: '/partner'})}>
                        Admin Sign on with {provider.name}
                    </Button>

                </div>
            ))}
        </>
    );
};
export default AdminGoogleSignIn;
