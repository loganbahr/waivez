// dynamic routing for each partner page (www.waivez.com/partners/marcoislandwatersports)
// Okay daddy OwO

import {
  Box,
  Button,
  Container,
  Step,
  StepContent,
  StepLabel,
  Stepper,
  Typography,
} from "@mui/material";
import Axios from "axios";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import PageSubtitleText from "../../components/PageSubtitleText";
import PageTitleText from "../../components/PageTitleText";
import SignatureEntry from "../../components/Waivers/SignatureEntry";
import WaiverInfoForm from "../../components/Waivers/WaiverInfoForm";
import WaiverRenderer from "../../components/Waivers/WaiverRenderer";

/**
 * @file [partnerId].js
 * @author Devin Arena, Logan Bahr
 * @description Pages for each individual partner. TODO: are we pulling from a database here?
 * @since 3/23/2022
 **/

const steps = [
  "Read the waiver",
  "Enter your information",
  "Electronically Sign",
];

const PartnerPage = (props) => {
  const router = useRouter();

  const [step, setStep] = useState(2);

  /**
   * Grabs the step based on the active step.
   */
  const getStep = () => {
    switch (step) {
      case 0:
        return <WaiverRenderer />;
      case 1:
        return <WaiverInfoForm />;
      case 2:
        return <SignatureEntry />;
      default:
        return null;
    }
  };

  const handleNext = () => {
    setStep(step => step + 1);
  }

  const handlePrev = () => {
    setStep(step => step - 1);
  }

  useEffect(() => console.log(step), []);

  return (
    <Box>
      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          pb: 10,
        }}
      >
        <Head>
          <title>{props.title}</title>
          <meta />
        </Head>
        <PageTitleText content={props.title} />
        <PageSubtitleText content="Please read the waiver below and enter your information to sign." />
        <Box
          width="100%"
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Stepper activeStep={step} orientation="vertical" sx={{width: "100%"}}>
            {steps.map((label, idx) => {
              return (
                <Step key={idx}>
                  <StepLabel>{label}</StepLabel>
                  <StepContent>
                    {getStep()}
                    <Box sx={{display: "flex", justifyContent: "center", alignItems: "center", mt: 1}}>
                      {step > 0 && <Button variant="outlined" sx={{mr: 2}} onClick={handlePrev}>Previous</Button>}
                      {step < steps.length - 1 && <Button variant="contained" sx={{ml: 2}} onClick={handleNext}>Continue</Button>}
                    </Box>
                  </StepContent>
                </Step>
              );
            })}
          </Stepper>
        </Box>
      </Container>
    </Box>
  );
};

PartnerPage.getInitialProps = async ({ req, query }) => {
  const partnerId = query.partnerId;

  const res = await Axios.get("http://localhost:5000/company", {
    params: {
      company: partnerId,
    },
  });

  if (res.data) {
    return res.data;
  }

  return {};
};

export default PartnerPage;
