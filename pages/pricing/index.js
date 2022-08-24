/**
 * @file /pages/pricing/index.js
 * @author Logan Bahr
 * @description Pricing page. (www.waivez.com/pricing)
 * @since 3/1/2022
 */
import React from "react";
import Head from "next/head";
import { Container, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import StandardPricingCard from "../../components/Cards/PricingCards/StandardPricingCard";
import AdvancedPricingCard from "../../components/Cards/PricingCards/AdvancedPricingCard";
import ProPricingCard from "../../components/Cards/PricingCards/ProPricingCard";
import FAQAccordion from "../../components/Pages/Pricing/FAQAccordion";
import TailwindPricingTiers from "../../components/Pages/Pricing/TailwindPricingTiers";
import TailwindPricingFeatures from "../../components/Pages/Pricing/TailwindPricingFeatures";
import TailwindPricingGraphic from "../../components/Pages/Pricing/TailwindPricingGraphic";

const PricingPage = () => {
  return (
    <div>
      <Head>
        <title>Pricing</title>
        <meta name="description" content="Pricing for Waivez." />
      </Head>
      <div className={""}>
        <TailwindPricingTiers />
        <TailwindPricingFeatures />
        <TailwindPricingGraphic />
      </div>
    </div>
  );
};

export default PricingPage;
