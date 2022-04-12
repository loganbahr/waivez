/**
 * @file /components/AboutPage/DeveloperAccordion.js
 * @author Logan Bahr
 * @description Short bio of the developers.
 * @since 4/2/22
 */

import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Box from "@mui/material/Box";

const DeveloperAccordion = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box sx={{ width: { xs: 350, sm: 500, md: 600 }, my: 5 }}>
      <Accordion
        sx={{}}
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ flexGrow: 1 }}>Logan Bahr</Typography>
          <Typography sx={{ color: "text.secondary", flexShrink: 1 }}>
            Software Engineer — Front End
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            I&apos;m currently a student at Florida Gulf Coast University
            finishing up my Software Engineering degree. I was born and raised
            in Southwest Florida, and I live in Naples. Previously I was apart
            of my family business for about 8 years, helping operate one of
            largest watersports companies in the country! I was responsible for
            our Ritz Carlton location in Naples, Florida.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography sx={{ flexGrow: 1 }}>Devin Arena</Typography>
          <Typography sx={{ color: "text.secondary", flexShrink: 1 }}>
            Software Engineer — Back End
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            My name is Devin Arena, and I&apos;m currently a student and software
            engineer based in Naples, Florida. I currently attend Florida Gulf
            Coast University pursuing a Bachelor&apos;s of Science in Software
            Engineering. I found my love for programming early, at the age of 9.
            Ever since, I&apos;ve enjoyed designing and building websites, apps, and
            games. Creating useful software and enjoyable games are some of my
            favorite hobbies.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default DeveloperAccordion;
