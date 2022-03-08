// www.waivez.com
import React from 'react';
import Head from 'next/head';
import Header from '../components/layout/Header/NavBar';
import Footer from '../components/layout/Footer/Footer';

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
            <h1>WAIVEZ</h1>
            <Footer/>
        </React.Fragment>

    );
};

// export async function getStaticProps() {
//
// }

export default HomePage;
