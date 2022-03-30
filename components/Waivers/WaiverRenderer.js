/**
 * @file WaiverRenderer.js
 * @author Devin Arena
 * @description Renders the PDF waiver on the React DOM.
 * @since 3/26/2022
 **/

import { Box } from "@mui/material";

const WaiverRenderer = (props) => {
  return (
    <Box
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <Box component="img" src={`${props.image}`} sx={{maxWidth: "100%"}} />
    </Box>
  );
};

export default WaiverRenderer;
