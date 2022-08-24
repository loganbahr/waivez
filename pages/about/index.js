// www.waivez.com/about
import Head from "next/head";
import React from "react";
import Box from "@mui/material/Box";
import { Container, Typography } from "@mui/material";
import TimelineStepper from "../../components/Pages/About/TimelineStepper";
import PhaseTimelineGraphic from "../../components/Pages/About/PhaseTimelineGraphic";
import DeveloperAccordion from "../../components/Pages/About/DeveloperAccordion";
import { motion } from "framer-motion";
import { about_background } from "../../components/theme";
import TailwindAbout from "../../components/Pages/About/TailwindAbout";

const AboutPage = () => {
  return (
    <div>
      <Head>
        <title>About</title>
        <meta name="description" content="About Waivez." />
      </Head>
      <div className={""}>
        <TailwindAbout />
      </div>
    </div>
  );
};

export default AboutPage;
