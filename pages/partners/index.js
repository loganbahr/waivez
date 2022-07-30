/**
 * @file /pages/partners/index.js
 * @author Logan Bahr, Devin Arena
 * @description Displays the Partner Directory, which is generated from back-end.
 * @since 3/1/22
 */

import React from "react";
import Head from "next/head";
import {Box, Container, Typography} from "@mui/material";
import PartnerDirectory from "../../components/Pages/Partners/PartnerDirectory";
import Axios from "axios";
import {partners_background} from "../../components/theme";
import TailwindPartnerDirectory from "../../components/Pages/Partners/TailwindPartnerDirectory";

const PartnersPage = (props) => {

    console.log(props);

    return (

        <div className={'overflow-hidden'}>
            <div className={'max-w-6xl mx-1 lg:mx-auto mt-16 lg:mt-32'}>
                <TailwindPartnerDirectory partners={props}/>
            </div>


        </div>
    );
};

export async function getServerSideProps({req, query}) {
    const res = await Axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/companies`);

    if (res.data) {
        return {
            props: res.data,
        };
    }

    return {props: {err: "no company"}};
}

export default PartnersPage;

// <Box
//     sx={{
//         height: "100vh",
//         backgroundColor: "#f9f9f9",
//         backgroundImage: partners_background,
//     }}
// >
//     <Container
//         maxWidth="lg"
//         sx={{
//             display: "flex",
//             flexDirection: "column",
//             alignItems: "center",
//             // border: '2px solid orange'
//         }}
//     >
//         <Head>
//             <title>Partners</title>
//             <meta/>
//         </Head>
//         <Typography variant={"h1"} sx={{mt: 15}}>
//             partners
//         </Typography>
//         <Typography variant={"h4"} sx={{my: 5, textAlign: "center"}}>
//             Find the company you want to sign a waiver with.
//         </Typography>
//     </Container>
//
//     <Box>
//         <Container
//             disableGutters={true}
//             maxWidth={"md"}
//             sx={{backgroundColor: "#f9f9f9"}}
//         >
//             <PartnerDirectory partners={props}/>
//         </Container>
//     </Box>
// </Box>