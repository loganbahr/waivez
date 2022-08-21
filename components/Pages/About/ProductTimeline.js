import React from 'react';
import {Container, Typography} from "@mui/material";
import Box from "@mui/material/Box";
import PhaseTimelineGraphic from "./PhaseTimelineGraphic";

const ProductTimeline = () => {
    return (
        <Box sx={{}}>
            <Container maxWidth={'lg'} sx={{}}>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Typography variant={'h1'} sx={{textAlign: 'center'}}>
                        Product Timeline
                    </Typography>
                    <PhaseTimelineGraphic/>

                    <Typography variant={'h2'} sx={{}}>
                        Phase Two
                    </Typography>
                    <Typography variant={'h5'}
                                sx={{mt: 1, mx: 1, textAlign: 'center', lineHeight: 1.5}}>
                        In Phase Two, we will implement the basic functionality of the Partner Dashboard, accessible
                        through the website. This will allow a Partner to log-in to their unique Partner Dashboard,
                        with the ability to search, filter, and export customer records.
                    </Typography>

                    <Typography variant={'h2'} sx={{mt: 10}}>
                        Phase Three
                    </Typography>

                    <Typography variant={'h5'}
                                sx={{mt: 1, mx: 1, textAlign: 'center', lineHeight: 1.5}}>
                        Phase Three will focus on extending the capabilities of the Partner Dashboard, and bringing
                        the Partner Dashboard natively to iOS and Android — available on the iOS App Store and
                        Google Play Store respectively. During this phase we will also consider integration of our
                        services with popular reservation systems like FareHarbor and Checkfront.
                    </Typography>

                    <Typography variant={'h2'} sx={{mt: 10}}>
                        Pre-Deployment
                    </Typography>

                    <Typography variant={'h5'}
                                sx={{mt: 1, textAlign: 'center', lineHeight: 1.5}}>
                        Our final phase before Deployment will involve rigorous testing, allowing us to
                        determine the necessary infrastructure to support all features at scale. Waivez must
                        retain full functionality under load, and be capable of handling growth — not only
                        in terms of raw data processing — but also the headroom to accommodate future
                        capabilities of the software.
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
};

export default ProductTimeline;
