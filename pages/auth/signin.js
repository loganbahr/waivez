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
import TailwindSignIn from "../../components/Pages/Auth/TailwindSignIn";

const SignIn = () => {

    const {data: session, status} = useSession();


    return (
        <div className="max-w-6xl mx-auto h-screen flex items-center justify-center">
            <div className={'flex flex-col items-center flex-auto'}>
                {status === 'unauthenticated' ?
                    <button className={'inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-red-500 my-5'}>
                        {status}
                    </button> :
                    <button
                        type="button"
                        className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-[#7f00ff] focus:outline-none focus:shadow-outline-red-600 my-5">
                        {status}
                    </button>}
                <TailwindSignIn/>
            </div>
        </div>
    );
};


export default SignIn;