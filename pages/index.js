// www.waivez.com
import React from 'react';
import Head from 'next/head';
import Box from '@mui/material/Box';
import SearchComboBox from '../components/layout/SearchComboBox';
import {Container, Typography} from "@mui/material";

const HomePage = () => {
    return (
        <Box>
            <Container maxWidth='md'
                       sx={{
                           mt: '20px', //keeps shadow on header
                           backgroundColor: 'white',
                           display: 'flex',
                           flexDirection: 'column',
                           alignItems: 'center',
                           minHeight: '100vh'
                       }}>
                <Head>
                    <title>waivez</title>
                    <meta
                        name='description'
                        content='Any waiver, all in one spot.'
                    />
                </Head>
                <Typography
                    sx={{
                        fontFamily: 'Poppins, sans-serif',
                        fontSize: {xs: 50, sm: 60, md: 80, lg: 100, xl: 120},

                    }}>
                    waivez
                </Typography>
                {/*<SearchComboBox/>*/}
            </Container>
        </Box>

    );
};

// export async function getStaticProps() {
//
// }

export default HomePage;
