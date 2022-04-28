// dynamic routing for each partner page (www.waivez.com/partners/marcoislandwatersports)
// Okay daddy OwO

import {
  Backdrop,
  Box,
  Button,
  CircularProgress,
  Container,
  Skeleton,
  Step,
  StepContent,
  StepLabel,
  Stepper,
  Typography,
} from "@mui/material";
import Axios from "axios";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
import SignatureEntry from "../../components/Waivers/SignatureEntry";
import SubmitModal from "../../components/Waivers/SubmitModal";
import WaiverInfoForm from "../../components/Waivers/WaiverInfoForm";
import WaiverMinorForm from "../../components/Waivers/WaiverMinorForm";
import WaiverSelection from "../../components/Waivers/WaiverSelection";
import WaiverTabRenderer from "../../components/Waivers/WaiverTabRenderer";
import { partnerId_background } from "../../components/theme";
import ErrorDialog from "../../components/Waivers/ErrorDialog";

/**
 * @file /pages/partners/[partnerId].js
 * @author Devin Arena, Logan Bahr
 * @description Pages for each individual partner. TODO: are we pulling from a database here?
 * @since 3/23/2022
 **/

const WAIVER_SELECTION = "Select waiver(s) to sign";
const VIEW_WAIVERS = "Read your waiver(s)";
const ENTER_FORM = "Enter your information";
const MINOR_FORM = "Enter minor information";
const INITIALS = "Electronically Initial";
const SIGNATURE = "Electronically Sign";
const REVIEW = "Review your waiver(s)";

const stepsBase = [
  WAIVER_SELECTION,
  VIEW_WAIVERS,
  ENTER_FORM,
  MINOR_FORM,
  SIGNATURE,
  REVIEW,
];

const PartnerPage = (props) => {
  const router = useRouter();
  const { partnerId } = router.query;

  const [step, setStep] = useState(0);
  const [userInfo, setUserInfo] = useState({
    firstName: "John",
    lastName: "Smith",
    dateOfBirth: "2000-06-26",
    email: "john.smith@gmail.com",
    addressLine: "123 example street",
    addressCity: "Naples",
    addressState: "Florida",
    addressPostal: "34156",
    phoneNumber: "2394445555",
  });
  const [minorInfo, setMinorInfo] = useState({
    numberOfMinors: 0,
    minors: [],
  });
  const [formValid, setFormValid] = useState(false);
  const [signature, setSignature] = useState("");
  const [dialogOpen, setDialogOpen] = useState(false);
  const [signedWaivers, setSignedWaivers] = useState([]);
  const [selectedWaivers, setSelectedWaivers] = useState([]);
  const [initials, setInitials] = useState("");
  const [steps, setSteps] = useState(stepsBase);
  const [errorMessage, setErrorMessage] = useState("");

  //TODO: connect <WaiverRenderer> to the state of 'selectedWaivers' and render the appropriate waivers

  useEffect(() => {
    setSelectedWaivers(
      Object.keys(props.waivers).map((waiver) => {
        return waiver;
      })
    );
  }, [props.waivers]);

  /**
   * Grabs the step based on the active step.
   */
  const getStep = () => {
    switch (steps[step]) {
      case WAIVER_SELECTION:
        return (
          <WaiverSelection
            waivers={props.waivers}
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
            waiverInfo={userInfo}
            setWaiverInfo={setUserInfo}
            setFormValid={setFormValid}
          />
        );
      case MINOR_FORM:
        return (
          <WaiverMinorForm
            minorInfo={minorInfo}
            setMinorInfo={setMinorInfo}
            setFormValid={setFormValid}
          />
        );
      case SIGNATURE:
        return <SignatureEntry title="Sign Here" setSignature={setSignature} />;
      case INITIALS:
        return (
          <SignatureEntry title="Initials Here" setSignature={setInitials} />
        );
      case REVIEW:
        if (signedWaivers.length === 0)
          return <Skeleton variant="rectangular" sx={{ height: 400 }} />;
        return (
          <WaiverTabRenderer
            waivers={selectedWaivers}
            waiverData={props.waivers}
            signedWaivers={signedWaivers}
            minorInfo={minorInfo}
          />
        );
      default:
        return null;
    }
  };

  const handleNext = () => {
    if (steps[step] === ENTER_FORM) {
      if (!formValid) return;
    }
    if (steps[step] === SIGNATURE) {
      if (!signature) return;
      setDialogOpen(true);
      return;
    }
    if (steps[step] === WAIVER_SELECTION) {
      for (const waiverId in props.waivers) {
        if (
          selectedWaivers.includes(waiverId) &&
          props.waivers[waiverId].metadata["requiresInitials"]
        ) {
          setSteps((steps) => [
            ...steps.slice(0, steps.length - 2),
            INITIALS,
            SIGNATURE,
            REVIEW,
          ]);
          break;
        }
      }
    }
    setStep((step) => step + 1);
  };

  const handlePrev = () => {
    setStep((step) => step - 1);
  };

  const submit = () => {
    Axios.post(`${process.env.API_URL}/api/signWaivers`, {
      partnerId: partnerId,
      signature: signature.split(",")[1],
      initials: initials.includes(",") ? initials.split(",")[1] : undefined,
      userInfo: userInfo,
      waivers: selectedWaivers,
      minorInfo: minorInfo,
    }).then((resp) => {
      console.log(resp);
      if (resp.data.alreadySigned) {
        let message = "You have already signed the following waivers:\n";
        for (const waiver of resp.data.alreadySigned) message += waiver + "\n";
        setErrorMessage(message);
        setStep(steps.length - 2);
      }
      if (resp.data.signedWaivers) setSignedWaivers(resp.data.signedWaivers);
    });
    setStep(steps.length - 1);
  };

  return (
    <Box
      sx={{
        backgroundImage: partnerId_background,
        minHeight: "100vh",
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Head>
          <title>{props.title}</title>
          <meta />
        </Head>
        <Typography variant={"h2"} sx={{ mt: 15 }}>
          {props.title}
        </Typography>
        <Typography variant={"h4"} sx={{ textAlign: "center", my: 5 }}>
          Please select the waivers below and enter your information to sign.
        </Typography>
        <Box
          width="100%"
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            backgroundColor: "clear",
            mb: 15,
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
                  <StepLabel>
                    <Typography variant={"h6"}>{label}</Typography>
                  </StepLabel>
                  <StepContent>
                    {getStep()}
                    <Box
                      width="100%"
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        mt: 1,
                      }}
                    >
                      {step < steps.length - 1 && step > 0 && (
                        <Button
                          variant="outlined"
                          sx={{ mr: 2, backgroundColor: "#f9f9f9" }}
                          onClick={handlePrev}
                        >
                          Previous
                        </Button>
                      )}
                      {step < steps.length - 2 && (
                        <Button
                          variant="contained"
                          sx={{ ml: 2 }}
                          onClick={handleNext}
                          disabled={
                            (steps[step] === ENTER_FORM && !formValid) ||
                            (steps[step] === MINOR_FORM &&
                              !formValid &&
                              minorInfo.numberOfMinors > 0) ||
                            (steps[step] === WAIVER_SELECTION &&
                              selectedWaivers.length === 0) ||
                            (steps[step] === INITIALS && !initials)
                          }
                        >
                          Continue
                        </Button>
                      )}
                      {steps[step] === SIGNATURE && (
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
          <Backdrop
            sx={{ color: "#fff", zIndex: 999 }}
            open={signedWaivers.length === 0 && steps[step] === REVIEW}
          >
            <CircularProgress color="primary" />
          </Backdrop>
          <SubmitModal
            open={dialogOpen}
            setOpen={setDialogOpen}
            submit={submit}
          />
          <ErrorDialog error={errorMessage} setErrorMessage={setErrorMessage} />
        </Box>
      </Container>
    </Box>
  );
};

export async function getServerSideProps({ req, query }) {
  const partnerId = query.partnerId;
  const res = await Axios.get(
    `${process.env.API_URL}/api/company`,
    {
      params: {
        company: partnerId,
      },
    }
  );

  if (res.data) {
    return {
      props: res.data,
    };
  }

  return {};
}

export default PartnerPage;
