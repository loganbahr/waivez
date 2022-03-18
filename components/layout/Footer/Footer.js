import * as React from "react";
import Box from "@mui/material/Box";
import { makeStyles } from "@mui/styles";
import { Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "primary",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        bottom: 0
      }}
    >
      <Typography
        sx={{
          color: "white",
          fontFamily: "Poppins, sans-serif",
          fontSize: "4em",
        }}
      >
        waivez
      </Typography>
    </Box>
  );
};

export default Footer;
