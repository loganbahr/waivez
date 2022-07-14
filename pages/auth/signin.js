/**
 * @file pages\auth\signin.js
 * @author Logan Bahr
 * @description Sign in page. The file name is not capitalized because it is a page.
 * We don't have an index.js file because we don't want to have a default page.
 * This brings you to www.waivez.com/auth/signin
 * @since 5/22/22
 */

import React, {useEffect, useState} from 'react';
import {useSession} from "next-auth/react";
import {Button, Container, TextField} from "@mui/material";
import PartnerPasswordSignIn from "../../components/Pages/Auth/PartnerPasswordSignIn";

const SignIn = () => {

    const {data: session, status} = useSession();


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

            <PartnerPasswordSignIn/>

        </Container>
    );
};


export default SignIn;