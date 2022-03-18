import React from "react";
import Card from "@mui/material/Card";

const PricingPageCard = () => {
  return (
    <Card
      sx={{
        height: {
          xs: "19rem",
          sm: "27rem",
          md: "25rem",
          lg: "35rem",
          xl: "40rem",
        },
        width: {
          xs: "21rem",
          sm: "37rem",
          md: "25rem",
          lg: "30rem",
          xl: "35rem",
        },
        backgroundColor: "green",
        mx: 1,
        my: 1,
      }}
    ></Card>
  );
};

export default PricingPageCard;
