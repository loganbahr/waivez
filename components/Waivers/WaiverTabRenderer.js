/**
 * @file WaiverTabRenderer.js
 * @author Devin Arena, Logan Bahr
 * @description Renders a set of waivers in a group of tabs.
 * @since 3/30/2022
 **/

import { Box } from "@mui/material";
import WaiverRenderer from "./WaiverRenderer";

const WaiverTabRenderer = (props) => {
  // one waiver -> no need for tabs
  if (props.waivers.length == 1) {
    return (
      <WaiverRenderer image={props.waiverData[props.waivers[0]].imagePath} />
    );
  }

  return (
    <Box
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <TabContent></TabContent>
    </Box>
  );
};

export default WaiverTabRenderer;
