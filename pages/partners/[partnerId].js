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
import WaiverSelection from "../../components/PartnerPage/WaiverSelection";
import WaiverTabRenderer from "../../components/Waivers/WaiverTabRenderer";

/**
 * @file [partnerId].js
 * @author Devin Arena, Logan Bahr
 * @description Pages for each individual partner. TODO: are we pulling from a database here?
 * @since 3/23/2022
 **/

const steps = [
  "Select waiver(s) to sign",
  "Read the waiver(s)",
  "Enter your information",
  "Electronically Sign",
  "Review your waiver(s)",
];

const PartnerPage = (props) => {
  const router = useRouter();
  const { partnerId } = router.query;

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
  const [signedWaivers, setSignedWaivers] = useState([]);
  const [selectedWaivers, setSelectedWaivers] = useState([]);

  //TODO: connect <WaiverRenderer> to the state of 'selectedWaivers' and render the appropriate waivers

  const WAIVER_SELECTION = 0;
  const VIEW_WAIVERS = 1;
  const ENTER_FORM = 2;
  const SIGNATURE = 3;
  const REVIEW = 4;

  useEffect(() => console.log(props), []);

  /**
   * Grabs the step based on the active step.
   */
  const getStep = () => {
    switch (step) {
      case WAIVER_SELECTION:
        return (
          <WaiverSelection
            selectedWaivers={selectedWaivers}
            setSelectedWaivers={setSelectedWaivers}
          />
        );
      case VIEW_WAIVERS:
        return (
          <WaiverTabRenderer
            waivers={selectedWaivers}
            waiverData={props.waivers}
          />
        );
      // selectedWaivers.map((val, idx) => {
      //   return (
      //     <WaiverRenderer key={idx} image={props.waivers[val].imagePath} />
      //   );
      // });
      case ENTER_FORM:
        return (
          <WaiverInfoForm
            waiverInfo={waiverInfo}
            setWaiverInfo={setWaiverInfo}
            setFormValid={setFormValid}
          />
        );
      case SIGNATURE:
        return <SignatureEntry setSignature={setSignature} />;
      case REVIEW:
        return (
          <WaiverTabRenderer
            waivers={selectedWaivers}
            waiverData={props.waivers}
            signedWaivers={signedWaivers}
          />
        );
      default:
        return null;
    }
  };

  const handleNext = () => {
    if (step === ENTER_FORM) {
      if (!formValid) return;
    }
    if (step === SIGNATURE) {
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
    Axios.post("http://localhost:5000/signWaivers", {
      partnerId: partnerId,
      signature: signature.split(",")[1],
      waivers: selectedWaivers,
    }).then((resp) => {
      console.log(resp);
      setSignedWaivers(resp.data.signedWaivers);
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
                      {step < REVIEW && step > WAIVER_SELECTION && (
                        <Button
                          variant="outlined"
                          sx={{ mr: 2 }}
                          onClick={handlePrev}
                        >
                          Previous
                        </Button>
                      )}
                      {step < SIGNATURE && (
                        <Button
                          variant="contained"
                          sx={{ ml: 2 }}
                          onClick={handleNext}
                          disabled={
                            (step === ENTER_FORM && !formValid) ||
                            (step === WAIVER_SELECTION &&
                              selectedWaivers.length === 0)
                          }
                        >
                          Continue
                        </Button>
                      )}
                      {step === SIGNATURE && (
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
