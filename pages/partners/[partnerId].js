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
import {useRouter} from "next/router";
import React, {useEffect, useRef, useState} from "react";
import SubtitleText from "../../components/Text/SubtitleText";
import TitleText from "../../components/Text/TitleText";
import SignatureEntry from "../../components/Waivers/SignatureEntry";
import SubmitModal from "../../components/Waivers/SubmitModal";
import WaiverInfoForm from "../../components/Waivers/WaiverInfoForm";
import WaiverMinorForm from "../../components/Waivers/WaiverMinorForm";
import WaiverSelection from "../../components/Waivers/WaiverSelection";
import WaiverTabRenderer from "../../components/Waivers/WaiverTabRenderer";

/**
 * @file [partnerId].js
 * @author Devin Arena, Logan Bahr
 * @description Pages for each individual partner. TODO: are we pulling from a database here?
 * @since 3/23/2022
 **/

const WAIVER_SELECTION = "Select waiver(s) to sign";
const VIEW_WAIVERS = "Read the waiver(s)";
const ENTER_FORM = "Enter your information";
const MINOR_FORM = "Enter any minor's information";
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
    const {partnerId} = router.query;

    const [step, setStep] = useState(0);
    const [userInfo, setUserInfo] = useState({
        firstName: "John",
        lastName: "Smith",
        dateOfBirth: "",
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

    //TODO: connect <WaiverRenderer> to the state of 'selectedWaivers' and render the appropriate waivers
    const background2 = 'url("data:image/svg+xml,%3Csvg width=\'80\' height=\'80\' viewBox=\'0 0 80 80\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%237f00ff\' fill-opacity=\'0.05\'%3E%3Cpath d=\'M50 50c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10zM10 10c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10S0 25.523 0 20s4.477-10 10-10zm10 8c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zm40 40c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8z\' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E")';

    useEffect(() => {
        setSelectedWaivers(
            Object.keys(props.waivers).map((waiver) => {
                return waiver;
            })
        );
        console.log(props);
    }, []);

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
                return <SignatureEntry title="Sign Here" setSignature={setSignature}/>;
            case INITIALS:
                return (
                    <SignatureEntry title="Initials Here" setSignature={setInitials}/>
                );
            case REVIEW:
                if (signedWaivers.length === 0)
                    return <Skeleton variant="rectangular" sx={{height: 400}}/>;
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
        Axios.post("http://localhost:5000/signWaivers", {
            partnerId: partnerId,
            signature: signature.split(",")[1],
            initials: initials.includes(",") ? initials.split(",")[1] : undefined,
            userInfo: userInfo,
            waivers: selectedWaivers,
            minorInfo: minorInfo,
        }).then((resp) => {
            console.log(resp);
            setSignedWaivers(resp.data.signedWaivers);
        });
        setStep(steps.length - 1);
    };

    return (
        <Box sx={{
            backgroundImage: background2,
        }}>
            <Container
                maxWidth="lg"
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}>
                <Head>
                    <title>{props.title}</title>
                    <meta/>
                </Head>
                <Typography variant={"h2"} sx={{mt: 15}}>{props.title}</Typography>
                {props.logo && (
                    <Box
                        component="img"
                        src={props.logo}
                        sx={{
                            border: "3px solid",
                            borderColor: "primary",
                            borderRadius: 5,
                            maxWidth: "50%"
                        }}
                    />
                )}
                <Typography variant={"h4"} sx={{textAlign: "center", my: 5}}>
                    Please select the waivers below and enter your information to sign.
                </Typography>
                <Box
                    width="100%"
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        backgroundColor: 'clear',
                        mb: 15
                    }}
                >
                    <Stepper
                        activeStep={step}
                        orientation="vertical"
                        sx={{width: "100%"}}
                    >
                        {steps.map((label, idx) => {
                            return (
                                <Step key={idx}>
                                    <StepLabel>
                                        <Typography variant={'h6'}>
                                            {label}
                                        </Typography>
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
                                                    sx={{mr: 2, backgroundColor: '#f9f9f9'}}
                                                    onClick={handlePrev}
                                                >
                                                    Previous
                                                </Button>
                                            )}
                                            {step < steps.length - 2 && (
                                                <Button
                                                    variant="contained"
                                                    sx={{ml: 2}}
                                                    onClick={handleNext}
                                                    disabled={
                                                        (steps[step] === ENTER_FORM && !formValid) ||
                                                        (steps[step] === MINOR_FORM &&
                                                            !formValid &&
                                                            minorInfo.numberOfMinors > 0) ||
                                                        (steps[step] === WAIVER_SELECTION &&
                                                            selectedWaivers.length === 0)
                                                    }
                                                >
                                                    Continue
                                                </Button>
                                            )}
                                            {steps[step] === SIGNATURE && (
                                                <Button
                                                    variant="contained"
                                                    sx={{ml: 2}}
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
                        sx={{color: "#fff", zIndex: 999}}
                        open={signedWaivers.length === 0 && steps[step] === REVIEW}
                    >
                        <CircularProgress color="primary"/>
                    </Backdrop>
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

PartnerPage.getInitialProps = async ({req, query}) => {
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
