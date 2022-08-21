/**
 * @file Pricing/FAQAccordion.js
 * @author Logan Bahr
 * @description This file contains the FAQ Accordion component.
 * @since 4/12/2022
 */
import React from 'react';
import Box from "@mui/material/Box";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Typography from "@mui/material/Typography";
import AccordionDetails from "@mui/material/AccordionDetails";

const FAQAccordion = () => {

    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };
    return (
        <Box sx={{
            width: {xs: 350, sm: 500, md: 600},
            my: 5,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column'
        }}>
            <Typography variant='h2' color='text.content' sx={{textAlign: 'center', my: 5}}>
                Frequently Asked Questions
            </Typography>
            <Accordion
                sx={{}}
                expanded={expanded === "panel1"}
                onChange={handleChange("panel1")}
            >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon/>}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <Typography sx={{flexGrow: 1}}>Are these waivers legally valid?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography sx={{color: 'text.secondary'}}>
                        Currently, no. These waivers are NOT legally binding. They are for demonstration purposes only.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion
                sx={{}}
                expanded={expanded === "panel2"}
                onChange={handleChange("panel2")}
            >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon/>}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <Typography sx={{flexGrow: 1}}>Are the prices subject to change?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography sx={{color: 'text.secondary'}}>
                        Yes, the current prices are placeholders for the moment. The capabilities of Waivez will be
                        expanded
                        significantly in the future, and will offer services that are not currently available in the
                        marketplace.
                        As time goes on, we will reevaluate the pricing of our services to be competitive but
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion
                sx={{}}
                expanded={expanded === "panel3"}
                onChange={handleChange("panel3")}
            >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon/>}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <Typography sx={{flexGrow: 1}}>When will the Partner Dashboard be available?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography sx={{color: 'text.secondary'}}>
                        We plan on having the web-accessible Partner Dashboard available by the end of June. The
                        mobile-friendly
                        iOS and Android versions of the Partner Dashboard will be available by the end of 2022.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion
                sx={{}}
                expanded={expanded === "panel4"}
                onChange={handleChange("panel4")}
            >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon/>}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <Typography sx={{flexGrow: 1}}>Do you need to have your own waivers before joining?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography sx={{color: 'text.secondary'}}>
                        Yes, currently we turn physical paper waivers into digital waivers. It is possible that we may
                        offer some boilerplate waivers in the future that you can use to get started, but this is yet to
                        be decided.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion
                sx={{}}
                expanded={expanded === "panel5"}
                onChange={handleChange("panel5")}
            >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon/>}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <Typography sx={{flexGrow: 1}}>Does Waivez sell your personal information to third
                        parties?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography sx={{color: 'text.secondary'}}>
                        No, we do not sell your personal information to third parties. We perform analytics on our users
                        and their
                        data with in-house tools.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion
                sx={{}}
                expanded={expanded === "panel6"}
                onChange={handleChange("panel6")}
            >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon/>}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <Typography sx={{flexGrow: 1}}>Is Waivez secure?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography sx={{color: 'text.secondary'}}>
                        Waivez uses AWS (Amazon Web Services) to host our platform, our data, and our
                        analytics. We use SSL (Secure Sockets Layer) to ensure that your data is encrypted and
                        not accessible to anyone else besides us, and our registered Partners.
                    </Typography>
                </AccordionDetails>
            </Accordion>

        </Box>
    );
};

export default FAQAccordion;
