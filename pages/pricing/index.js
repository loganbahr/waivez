/**
 * @file /pages/pricing/index.js
 * @author Logan Bahr
 * @description Pricing page. (www.waivez.com/pricing)
 * @since 3/1/2022
 */
import React from 'react';
import Head from "next/head";
import {Container, Typography} from "@mui/material";
import Box from "@mui/material/Box";
import StandardPricingCard from "../../components/Cards/PricingCards/StandardPricingCard";
import AdvancedPricingCard from "../../components/Cards/PricingCards/AdvancedPricingCard";
import ProPricingCard from "../../components/Cards/PricingCards/ProPricingCard";
import FAQAccordion from "../../components/Pages/Pricing/FAQAccordion";
import TailwindPricingTiers from "../../components/Pages/Pricing/TailwindPricingTiers";


const PricingPage = () => {
    return (
        <div>
            <TailwindPricingTiers/>
        </div>
    );
};

export default PricingPage;