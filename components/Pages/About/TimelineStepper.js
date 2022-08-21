/**
 * @file /components/About/TimelineStepper.js
 * @author Logan Bahr
 * @description MUI Stepper component to describe phases of Waivez development.
 * @since 4/2/22
 */
import React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {motion} from 'framer-motion';

const TimelineStepper = () => {

    const steps = [
        {
            label: 'Prototype',
            description: `Our completed Prototype already has a lot of the core functionality required for a successful product launch.
                            A user can search for a company, sign that companies waivers, and then view the waiver they signed. In essence,
                            this is the core of what Waivez needs to do. Our next phases will improve on this functionality and allow Partners to
                            interact and make use of this core feature.`,
        },
        {
            label: 'Phase Two',
            description:
                `In Phase Two, we will implement the basic functionality of the Partner Dashboard, which will be accessible through this website, on the 'Sign In' page.
                The dashboard will allow a Partner to interact with their customers records, with the ability to search, sort, and filter through records.`,
        },
        {
            label: 'Phase Three',
            description: `Phase Three will focus on extending the capabilities of the Partner Dashboard, and bringing
                        the Partner Dashboard natively to iOS and Android — available on the iOS App Store and
                        Google Play Store respectively. During this phase we will also consider integrating our
                        services with popular reservation systems like FareHarbor and Checkfront.`,
        },
        {
            label: 'Pre-Deployment',
            description: `Our final months before Deployment will involve rigorous testing, allowing us to
                        determine the necessary infrastructure to support all features at scale. Waivez must
                        retain full functionality under load, and be capable of handling growth — not only
                        in terms of raw data processing — but also capable of future product features.`,
        },
        {
            label: 'Deployment',
            description: `At the start of 2023 we intend to deploy our software into Hoffmann Watersports, which
            encompasses Marco Island Watersports and Naples Beach Watersports. Hoffmann Watersports is one of the
            largest watersports operations in the country, and would potentially use tens of thousands of our waivers annually. 
           
            `,
        },
    ];

    const [activeStep, setActiveStep] = React.useState(0);

    return (
        <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 1.5, delay: 0.5}}>
            <Box sx={{
                mb: 10,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: {xs: 350, sm: 600, md: 750},

            }}>
                <Stepper activeStep={activeStep} orientation="vertical"
                         sx={{
                             width: {xs: 350, sm: 500}
                         }}>
                    {steps.map((step, index) => (
                        <Step key={step.label}>
                            <StepLabel>
                                <Typography variant={'h3'}>
                                    {step.label}
                                </Typography>
                            </StepLabel>
                            <StepContent>
                                <Typography variant={'h6'}>{step.description}</Typography>
                                <Box sx={{mb: 2, display: 'flex', justifyContent: 'center',}}>
                                    <div>
                                        {activeStep > 0 &&
                                            <Button
                                                variant={'outlined'}
                                                onClick={() => {
                                                    setActiveStep(activeStep - 1)
                                                }}
                                                sx={{m: 1}}
                                            >
                                                Back
                                            </Button>}
                                        {activeStep < 4 &&
                                            <Button
                                                variant={'contained'}
                                                onClick={() => {
                                                    setActiveStep(activeStep + 1)
                                                }}
                                                disabled={activeStep === 4}
                                                sx={{m: 1}}
                                            >
                                                next phase
                                            </Button>}

                                        {activeStep === 4 && <Button
                                            variant={'contained'}
                                            onClick={() => {
                                                setActiveStep(0)
                                            }}
                                            sx={{m: 1}}
                                        >
                                            restart
                                        </Button>}

                                    </div>
                                </Box>
                            </StepContent>
                        </Step>
                    ))}
                </Stepper>
            </Box>
        </motion.div>
    );
};

export default TimelineStepper;
