// www.waivez.com/about
import Head from "next/head";
import React from "react";
import Box from "@mui/material/Box";
import {Container, Typography} from "@mui/material";
import TimelineStepper from "../../components/AboutPage/TimelineStepper";
import PhaseTimelineGraphic from "../../components/AboutPage/PhaseTimelineGraphic";
import DeveloperAccordion from "../../components/AboutPage/DeveloperAccordion";
import {motion} from 'framer-motion';
import {about_background} from '../../components/theme'

const AboutPage = () => {
    return (
        <Box
            sx={{
                backgroundColor: "#f9f9f9",
                backgroundImage: about_background,
            }}
        >
            <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 1}}>
                <Container
                    maxWidth="lg"
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}
                >
                    <Head>
                        <title>About Us</title>
                        <meta/>
                    </Head>

                    <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 1.5}}>
                        <Typography variant={"h1"} sx={{textAlign: "center", mt: 15}}>
                            Product Roadmap
                        </Typography>
                        <Typography
                            variant={"h5"}
                            sx={{my: 5, lineHeight: 1.4, textAlign: "center"}}
                        >
                            Waivez started out as a college project for an old family business. We
                            wanted to develop an online waiver system that operated as a
                            centralized service — a hub where waivers could be signed, documented,
                            and analyzed — all in one place.
                        </Typography>
                    </motion.div>

                    <PhaseTimelineGraphic/>
                    <TimelineStepper/>
                    <Typography variant={"h2"} textAlign="center">
                        the developers of waivez
                    </Typography>
                    <DeveloperAccordion/>
                </Container>
            </motion.div>
        </Box>
    );
};

export default AboutPage;
