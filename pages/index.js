// www.waivez.com

import React from 'react';
import Head from 'next/head';

const HomePage = () => {
    return (
        <React.Fragment>
            <Head>
                <title>Waivez</title>
                <meta
                    name='description'
                    content='Find any waiver, all in one spot.'
                />
            </Head>
            <h1 className='centered'>WAIVEZ HOME PAGE</h1>
        </React.Fragment>

    );
};

export async function getStaticProps() {

}

export default HomePage;
