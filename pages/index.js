// www.waivez.com
import React from 'react';
import Head from 'next/head';
import Footer from '../components/layout/Footer/Footer';

const HomePage = () => {
    return (
        <React.Fragment>
            <Head>
                <title>Waivez</title>
                <meta
                    name='description'
                    content='Any waiver, all in one spot.'
                />
            </Head>
            <h1>waivez</h1>
        </React.Fragment>

    );
};

// export async function getStaticProps() {
//
// }

export default HomePage;
