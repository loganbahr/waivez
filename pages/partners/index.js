/**
 * @file /pages/partners/index.js
 * @author Logan Bahr, Devin Arena
 * @description Displays the Partner Directory, which is generated from back-end.
 * @since 3/1/22
 */

import React from "react";
import Axios from "axios";
import TailwindPartnerDirectory from "../../components/Pages/Partners/TailwindPartnerDirectory";
import DirectoryHero from "../../components/Pages/Partners/DirectoryHero";
import Head from "next/head";

const PartnersPage = (props) => {
  return (
    <div>
      <Head>
        <title>Partners</title>
        <meta
          name="description"
          content="Find a partner to sign a waiver with."
        />
      </Head>
      <div className={"overflow-hidden"}>
        <DirectoryHero />
        <div className={"max-w-6xl mx-1 lg:mx-auto my-16"}>
          <TailwindPartnerDirectory partners={props} />
        </div>
      </div>
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

export default PartnersPage;
