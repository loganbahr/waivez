// www.waivez.com
import React from 'react';
import Head from 'next/head';
import Box from '@mui/material/Box';
import SearchComboBox from '../components/layout/SearchComboBox';
import {Typography} from "@mui/material";

const HomePage = () => {
    return (
        <React.Fragment>
            <Head>
                <title>waivez</title>
                <meta
                    name='description'
                    content='Any waiver, all in one spot.'
                />
            </Head>
            <h1>waivez</h1>
            <SearchComboBox/>
            <Box sx={{
                height: '400px',
                width: '40%',
                backgroundColor: '#7F00FF',
                marginTop: '200px',
                borderRadius: '25px 25px 25px 25px',
                display: 'flex',
                justifyContent: 'center',
            }}>
                <Typography sx={{
                    color: 'white',
                    fontFamily: 'Poppins, sans-serif',
                    fontSize: '1.7rem',
                    margin: '20px',
                    textAlign: 'center',
                }}>
                    Waivez is a centralized location for all waivers.
                    <br/>
                    <li/>
                    With the end of COVID-19, we want to make the return to
                    travel and entertainment as easy as possible.
                    <br/>
                    <li/>
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    Simply search for the company you'd like to sign a waiver for,
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    and we'll send you a confirmation e-mail when you're done!
                </Typography>
            </Box>
        </React.Fragment>

    );
};

// export async function getStaticProps() {
//
// }

export default HomePage;
