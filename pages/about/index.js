// www.waivez.com/about
import Head from "next/head";
import React from "react";
import AboutHero from "../../components/Pages/About/AboutHero";
import AboutStepper from "../../components/Pages/About/AboutStepper";
import AboutFaq from "../../components/Pages/About/AboutFaq";
import AboutTeam from "../../components/Pages/About/AboutTeam";

const AboutPage = () => {
  return (
    <div>
      <Head>
        <title>About</title>
        <meta name="description" content="About Waivez." />
      </Head>
      <div className={""}>
        <AboutHero />
        <AboutStepper />
        <AboutFaq />
        <AboutTeam />
      </div>
    </div>
  );
};

export default AboutPage;
