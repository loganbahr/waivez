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
import { useEffect, useRef, useState } from "react";
import PageSubtitleText from "../../components/PageSubtitleText";
import PageTitleText from "../../components/PageTitleText";
import SignatureEntry from "../../components/Waivers/SignatureEntry";
import SubmitModal from "../../components/Waivers/SubmitModal";
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
  "Review your waiver",
];

const PartnerPage = (props) => {
  const router = useRouter();

  const [step, setStep] = useState(0);
  const [waiverInfo, setWaiverInfo] = useState({
    firstname: "",
    lastname: "",
    dob: "",
    email: "",
    addressLine: "",
    addressCity: "",
    addressState: "",
    addressPostal: "",
    phonenumber: "",
  });
  const [formValid, setFormValid] = useState(false);
  const [signature, setSignature] = useState("");
  const [dialogOpen, setDialogOpen] = useState(false);

  /**
   * Grabs the step based on the active step.
   */
  const getStep = () => {
    switch (step) {
      case 0:
        return <WaiverRenderer />;
      case 1:
        return (
          <WaiverInfoForm
            waiverInfo={waiverInfo}
            setWaiverInfo={setWaiverInfo}
            setFormValid={setFormValid}
          />
        );
      case 2:
        return <SignatureEntry setSignature={setSignature} />;
      default:
        return null;
    }
  };

  const handleNext = () => {
    if (step === 1) {
      if (!formValid) return;
    }
    if (step === 2) {
      if (!signature) return;
      setDialogOpen(true);
      return;
    }
    setStep((step) => step + 1);
  };

  const handlePrev = () => {
    setStep((step) => step - 1);
  };

  const submit = () => {
    console.log(signature.split(",")[1]);
    Axios.post("http://localhost:5000/signWaiver", {
      signature: signature.split(",")[1],
    }).then((resp) => {
      console.log(resp);
    });
    setStep(steps.length - 1);
  };

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
          <Stepper
            activeStep={step}
            orientation="vertical"
            sx={{ width: "100%" }}
          >
            {steps.map((label, idx) => {
              return (
                <Step key={idx}>
                  <StepLabel>{label}</StepLabel>
                  <StepContent>
                    {getStep()}
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        mt: 1,
                      }}
                    >
                      {step < 3 && (
                        <Button
                          variant="outlined"
                          sx={{ mr: 2 }}
                          onClick={handlePrev}
                        >
                          Previous
                        </Button>
                      )}
                      {step < 2 && (
                        <Button
                          variant="contained"
                          sx={{ ml: 2 }}
                          onClick={handleNext}
                          disabled={step === 1 && !formValid}
                        >
                          Continue
                        </Button>
                      )}
                      {step === 2 && (
                        <Button
                          variant="contained"
                          sx={{ ml: 2 }}
                          onClick={handleNext}
                          disabled={!signature}
                        >
                          Sign Waiver
                        </Button>
                      )}
                    </Box>
                  </StepContent>
                </Step>
              );
            })}
          </Stepper>
          <SubmitModal
            open={dialogOpen}
            setOpen={setDialogOpen}
            submit={submit}
          />
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
