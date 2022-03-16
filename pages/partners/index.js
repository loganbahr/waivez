// www.waivez.com/partners

import React from 'react';
import Head from "next/head";
import {Box, Typography} from "@mui/material";


const PartnersPage = () => {
    return (
        <React.Fragment>
            <Head>
                <title>
                    Partners
                </title>
                <meta/>
            </Head>
            <Box mt='300px'>
                <Typography
                    sx={{
                        fontFamily: 'Poppins, sans-serif',
                        fontSize: {xs: 50, sm: 60, md: 70},
                        color: '#7F00FF'
                    }}>
                    partners
                </Typography>
            </Box>



        </React.Fragment>
    );
};

export default PartnersPage;
