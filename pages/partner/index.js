/**
 * @file pages\partner\index.js
 * @author Logan Bahr
 * @description Temporary page for testing (www.waivez.com/partner)
 * @since 5/22/22
 */
import React, {useEffect, useState} from 'react';
import Box from "@mui/material/Box";
import {useSession} from "next-auth/react";

const PartnerPage = () => {

    const {data: session, status} = useSession();
    console.log(session);

    return (
        <Box sx={{display: 'flex', justifyContent: 'center'}}>
            <h1>Partner Page</h1>
        </Box>

    );
};

export default PartnerPage;
