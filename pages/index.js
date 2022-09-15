/**
 * @file /pages/index.js
 * @author Logan Bahr, Devin Arena
 * @description Front page of Waivez.
 * @since 2/2/22
 */
// www.waivez.com
import React, { useEffect } from "react";
import Head from "next/head";
import Axios from "axios";
import TailwindHero from "../components/Pages/Home/TailwindHero";
import TailwindFeaturesSection from "../components/Pages/Home/TailwindFeaturesSection";
import TailwindPotentialCompanies from "../components/Pages/Home/TailwindPotentialCompanies";

const HomePage = (props) => {
  useEffect(() => {
    console.log(process.env.NEXT_PUBLIC_API_URL);
  }, []);

  return (
    <div>
      <Head>
        <title>Waivez.com. Any waiver, anywhere.</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Any waiver, anywhere." />
      </Head>

      <TailwindHero companies={props} />
      <TailwindPotentialCompanies />
      <TailwindFeaturesSection />
    </div>
  );
};

export async function getStaticProps({ req, query }) {
  const res = await Axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/api/companies`
  );

  if (res.data) {
    return {
      props: res.data,
    };
  }

  return { props: { err: "no company" } };
}

export default HomePage;
