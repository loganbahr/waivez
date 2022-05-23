import React from 'react';
import {Button} from "@mui/material";
import {signIn as SignIntoProvider} from "next-auth/react";

const GoogleSignIn = ({providers}) => {
    return (
        <>
            {Object.values(providers).map((provider) => (
                <div key={provider.name}>
                    <Button variant={'contained'}
                            onClick={() => SignIntoProvider(provider.id, {callbackUrl: '/partner'})}>
                        Sign in with {provider.name}
                    </Button>
                </div>
            ))}
        </>
    );
};

export default GoogleSignIn;
