/**
 * @file /pages/partners/[partnerName].js
 * @author Devin Arena, Logan Bahr
 * @description Pages for each individual [partnerName].
 * @since 3/23/2022
 **/

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
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    email: "",
    addressLine: "",
    addressCity: "",
    addressState: "",
    addressPostal: "",
    phoneNumber: "",
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
          // <TailwindWaiverForm/>
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
    Axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/signWaivers`, {
      partnerId: partnerId,
      signature: signature.split(",")[1],
      initials: initials.includes(",") ? initials.split(",")[1] : undefined,
      userInfo: userInfo,
      waivers: selectedWaivers,
      minorInfo: minorInfo,
    }).then((resp) => {
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
    <div>
      <div className={"flex flex-col max-w-7xl mx-2 xl:mx-auto"}>
        <Head>
          <title>Partner: {props.title}</title>
          <meta />
        </Head>
        <h1
          className={
            "mt-14 text-3xl text-center font-extrabold text-slate-900 sm:text-4xl lg:text-5xl"
          }
        >
          {props.title}
        </h1>

        <div className={"mx-auto w-1/2 mt-8 md:w-1/3"}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 856.385 559.94">
            <g id="Group_47" transform="translate(-171.808 -222.403)">
              <g id="Group_43" transform="translate(-222.485 -67.725)">
                <rect
                  id="Rectangle_113"
                  width="94.644"
                  height="1.803"
                  transform="translate(805.32 327.084)"
                  fill="#ccc"
                />
                <rect
                  id="Rectangle_114"
                  width="300.158"
                  height="1.803"
                  transform="translate(431.249 327.084)"
                  fill="#ccc"
                />
                <circle
                  id="Ellipse_115"
                  cx="36.956"
                  cy="36.956"
                  r="36.956"
                  transform="translate(394.293 291.029)"
                  fill="#7f00ff"
                />
                <circle
                  id="Ellipse_116"
                  cx="36.956"
                  cy="36.956"
                  r="36.956"
                  transform="translate(562.85 291.029)"
                  fill="#3f3d56"
                />
                <path
                  id="Path_748-370"
                  d="M873,259.344a37.858,37.858,0,1,1,37.858-37.858A37.858,37.858,0,0,1,873,259.344Zm0-73.913a36.055,36.055,0,1,0,36.055,36.055A36.055,36.055,0,0,0,873,185.431Z"
                  transform="translate(-104.641 106.5)"
                  fill="#ccc"
                />
                <path
                  id="Path_749-371"
                  d="M1060,259.344a37.858,37.858,0,1,1,37.858-37.858A37.858,37.858,0,0,1,1060,259.344Zm0-73.913a36.055,36.055,0,1,0,36.055,36.055A36.055,36.055,0,0,0,1060,185.431Z"
                  transform="translate(-123.084 106.5)"
                  fill="#ccc"
                />
                <path
                  id="Path_395-372"
                  d="M304.255,236.95a2.993,2.993,0,0,1-1.8-.6l-.032-.024-6.783-5.188a3.014,3.014,0,0,1,3.668-4.784l4.393,3.369,10.381-13.544a3.013,3.013,0,0,1,4.224-.558h0l-.064.089.066-.089a3.016,3.016,0,0,1,.557,4.225l-12.211,15.923a3.015,3.015,0,0,1-2.4,1.175Z"
                  transform="translate(124.149 102.054)"
                  fill="#fff"
                />
              </g>
              <g id="Group_24" transform="translate(808.073 222.403)">
                <path
                  id="Path_552-373"
                  d="M314.19,545.413a14.214,14.214,0,0,1,1.987,1.108l63.154-26.954,2.253-16.636,25.235-.155-1.491,38.158-83.357,22.047a14.939,14.939,0,0,1-.631,1.7,14.411,14.411,0,1,1-7.151-19.265Z"
                  transform="translate(-293.875 -349.453)"
                  fill="#feb8b8"
                />
                <path
                  id="Path_553-374"
                  d="M312.83,797.912H295.567l-8.212-66.584h25.477Z"
                  transform="translate(-190.709 -256.191)"
                  fill="#feb8b8"
                />
                <path
                  id="Path_554-375"
                  d="M305.692,775.115h33.292v20.955H284.73a20.962,20.962,0,0,1,20.962-20.962h0Z"
                  transform="translate(-213.164 -238.326)"
                  fill="#2f2e41"
                />
                <path
                  id="Path_555-376"
                  d="M271.557,794.354l-17.178,1.69-14.7-65.458,25.355-2.491Z"
                  transform="translate(-82.3 -257.51)"
                  fill="#feb8b8"
                />
                <path
                  id="Path_556-377"
                  d="M254.863,774.674l33.126-3.263,2.054,20.857-53.981,5.317a20.958,20.958,0,0,1,18.8-22.911Z"
                  transform="translate(-95.55 -239.834)"
                  fill="#2f2e41"
                />
                <ellipse
                  id="Ellipse_84"
                  cx="34.583"
                  cy="34.583"
                  rx="34.583"
                  ry="34.583"
                  transform="translate(92.343 13.688)"
                  fill="#feb8b8"
                />
                <path
                  id="Path_557-378"
                  d="M281.584,839.584a6.3,6.3,0,0,1-6.217-5.21c-8.929-49.59-38.141-211.772-38.84-216.268a1.991,1.991,0,0,1-.023-.312V605.7a2.1,2.1,0,0,1,.393-1.228l3.858-5.4a2.082,2.082,0,0,1,1.611-.88c22-1.031,94.036-4.054,97.516.294h0c3.495,4.365,2.253,17.611,1.971,20.22l.014.272L374.233,825.96A6.353,6.353,0,0,1,369,833.19l-20.214,3.33a6.366,6.366,0,0,1-7.076-4.355c-6.252-19.978-27.216-87.184-34.482-113.19a.7.7,0,0,0-1.381.2c.363,24.79,1.24,88.036,1.549,109.881l.032,2.353a6.362,6.362,0,0,1-5.763,6.387l-19.492,1.766A5.871,5.871,0,0,1,281.584,839.584Z"
                  transform="translate(-180.584 -311.329)"
                  fill="#2f2e41"
                />
                <path
                  id="Path_99-379"
                  d="M296.727,463.319c-6.035,3.588-9.647,10.18-11.719,16.9a160.072,160.072,0,0,0-6.877,38.242L275.94,557.32,248.827,660.348c23.5,19.883,37.053,15.363,68.686-.9s35.247,5.422,35.247,5.422l6.325-87.663,9.037-95.793a42.485,42.485,0,0,0-6.846-6.581,69.923,69.923,0,0,0-59.761-12.673Z"
                  transform="translate(-191.749 -366.866)"
                  fill="#e6e6e6"
                />
                <path
                  id="Path_558-380"
                  d="M259.825,562.029a14.828,14.828,0,0,1,2.112.986l62.447-31.259,1.036-16.933,25.759-1.776,1.38,38.6-83.45,27.6a14.784,14.784,0,1,1-9.283-17.223Z"
                  transform="translate(-163.653 -345.262)"
                  fill="#feb8b8"
                />
                <path
                  id="Path_101-381"
                  d="M269.34,476.085c15.363,5.422,18.071,64.171,18.071,64.171-18.075-9.941-39.765,6.326-39.765,6.326s-4.518-15.365-9.941-35.246a34.54,34.54,0,0,1,7.229-32.535S253.975,470.66,269.34,476.085Z"
                  transform="translate(-93.417 -361.105)"
                  fill="#e6e6e6"
                />
                <path
                  id="Path_102-382"
                  d="M323.823,451.3c-4.309-3.447-10.187,2.816-10.187,2.816L310.189,423.1s-21.543,2.581-35.334-.862-15.943,12.5-15.943,12.5a110.654,110.654,0,0,1-.431-19.391c.862-7.756,12.064-15.512,31.885-20.683S320.528,411.9,320.528,411.9C334.324,418.789,328.137,454.751,323.823,451.3Z"
                  transform="translate(-165.894 -393.886)"
                  fill="#2f2e41"
                />
              </g>
              <rect
                id="Rectangle_110"
                width="737.385"
                height="2.19"
                transform="translate(290.808 780.153)"
                fill="#e6e6e6"
              />
              <path
                id="Path_438-383"
                d="M265.082,644.111a19.474,19.474,0,0,0,18.806-3.313c6.587-5.528,8.652-14.636,10.332-23.07l4.97-24.945-10.405,7.165c-7.483,5.152-15.134,10.47-20.316,17.933s-7.443,17.651-3.28,25.726"
                transform="translate(96.861 97.368)"
                fill="#e6e6e6"
              />
              <path
                id="Path_439-384"
                d="M267.682,718.34c-1.31-9.542-2.657-19.206-1.738-28.85.816-8.565,3.429-16.93,8.749-23.789a39.574,39.574,0,0,1,10.153-9.2c1.015-.641,1.95.968.939,1.606A37.622,37.622,0,0,0,270.9,676.062c-3.24,8.241-3.76,17.224-3.2,25.977.338,5.294,1.053,10.553,1.774,15.805a.964.964,0,0,1-.65,1.144.936.936,0,0,1-1.144-.65Z"
                transform="translate(95.868 55.076)"
                fill="#f2f2f2"
              />
              <path
                id="Path_442-385"
                d="M289.28,713.477a14.336,14.336,0,0,0,12.491,6.447c6.323-.3,11.595-4.713,16.34-8.9l14.036-12.392-9.289-.444c-6.68-.32-13.533-.618-19.9,1.442s-12.231,7.018-13.394,13.6"
                transform="translate(83.697 44.629)"
                fill="#e6e6e6"
              />
              <path
                id="Path_443-386"
                d="M262.887,747.524c6.3-11.156,13.618-23.555,26.685-27.518a29.779,29.779,0,0,1,11.224-1.159c1.192.1.894,1.94-.3,1.837a27.665,27.665,0,0,0-17.912,4.739c-5.051,3.438-8.983,8.217-12.311,13.286-2.039,3.1-3.865,6.341-5.691,9.573C264,749.314,262.3,748.569,262.887,747.524Z"
                transform="translate(96.961 31.377)"
                fill="#f2f2f2"
              />
              <g id="Group_46" transform="translate(2 7)">
                <path
                  id="Path_138-387"
                  d="M911.208,622.87H595.519a5.853,5.853,0,0,1-5.846-5.846V538.715a5.853,5.853,0,0,1,5.846-5.846H911.208a5.853,5.853,0,0,1,5.846,5.846v78.309A5.853,5.853,0,0,1,911.208,622.87ZM595.519,535.208a3.512,3.512,0,0,0-3.508,3.508v78.309a3.511,3.511,0,0,0,3.508,3.508H911.208a3.511,3.511,0,0,0,3.508-3.508V538.715a3.511,3.511,0,0,0-3.508-3.508Z"
                  transform="translate(-108.981 -172.87)"
                  fill="#e6e6e6"
                />
                <path
                  id="Path_139-388"
                  d="M690.369,556.72a3.969,3.969,0,1,0,0,7.938H877.477a3.969,3.969,0,0,0,0-7.938Z"
                  transform="translate(-99.78 -170.602)"
                  fill="#e6e6e6"
                />
                <path
                  id="Path_140-389"
                  d="M690.369,578.466a3.969,3.969,0,1,0,0,7.938h80.513a3.969,3.969,0,1,0,0-7.938Z"
                  transform="translate(-99.78 -168.533)"
                  fill="#e6e6e6"
                />
                <g id="Group_45">
                  <circle
                    id="Ellipse_18"
                    cx="23.814"
                    cy="23.814"
                    r="23.814"
                    transform="translate(512 378)"
                    fill="#e6e6e6"
                  />
                  <path
                    id="Path_395-2-390"
                    d="M306.53,242.049a3.689,3.689,0,0,1-2.219-.738l-.04-.03-8.358-6.394a3.714,3.714,0,0,1,4.52-5.9l5.414,4.151,12.793-16.69a3.713,3.713,0,0,1,5.205-.688h0l-.079.11.082-.11a3.717,3.717,0,0,1,.687,5.206L309.488,240.6a3.715,3.715,0,0,1-2.954,1.448Z"
                    transform="translate(225.541 173)"
                    fill="#7f00ff"
                  />
                </g>
              </g>
            </g>
          </svg>
        </div>

        <p className="max-w-4xl mx-auto my-4 text-xl text-center text-slate-600 sm:mt-5 sm:text-2xl">
          Select waivers and enter your information.
        </p>

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
                        <button
                          className={"btn-secondary mx-2"}
                          onClick={handlePrev}
                        >
                          Back
                        </button>
                        // <Button
                        //     variant="outlined"
                        //     sx={{mr: 2, backgroundColor: "#f9f9f9"}}
                        //     onClick={handlePrev}
                        // >
                        //     Previous
                        // </Button>
                      )}
                      {step < steps.length - 2 && (
                        <button
                          className={
                            (steps[step] === ENTER_FORM && !formValid) ||
                            (steps[step] === MINOR_FORM &&
                              !formValid &&
                              minorInfo.numberOfMinors > 0) ||
                            (steps[step] === WAIVER_SELECTION &&
                              selectedWaivers.length === 0) ||
                            (steps[step] === INITIALS && !initials)
                              ? "btn-disabled"
                              : "btn-primary"
                          }
                          disabled={
                            (steps[step] === ENTER_FORM && !formValid) ||
                            (steps[step] === MINOR_FORM &&
                              !formValid &&
                              minorInfo.numberOfMinors > 0) ||
                            (steps[step] === WAIVER_SELECTION &&
                              selectedWaivers.length === 0) ||
                            (steps[step] === INITIALS && !initials)
                          }
                          onClick={handleNext}
                        >
                          Next
                        </button>
                        // <Button
                        //     variant="contained"
                        //     sx={{ml: 2,}}
                        //     onClick={handleNext}
                        //     disabled={
                        //         (steps[step] === ENTER_FORM && !formValid)
                        //         ||
                        //         (steps[step] === MINOR_FORM && !formValid && minorInfo.numberOfMinors > 0)
                        //         ||
                        //         (steps[step] === WAIVER_SELECTION && selectedWaivers.length === 0)
                        //         ||
                        //         (steps[step] === INITIALS && !initials)
                        //     }
                        // >
                        //     Continue
                        // </Button>
                      )}
                      {steps[step] === SIGNATURE && (
                        <button
                          className={
                            !signature ? "btn-disabled" : "btn-primary"
                          }
                          onClick={handleNext}
                          disabled={!signature}
                        >
                          Sign Waiver
                        </button>
                        // <Button
                        //     variant="contained"
                        //     sx={{ml: 2}}
                        //     onClick={handleNext}
                        //     disabled={!signature}
                        // >
                        //     Sign Waiver
                        // </Button>
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
      </div>
    </div>
  );
};

export async function getServerSideProps({ req, query }) {
  const partnerId = query.partnerId;
  const res = await Axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/api/company`,
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
