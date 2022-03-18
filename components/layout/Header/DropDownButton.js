import React from "react";
import Typography from "@mui/material/Typography";
import NextLink from "next/link";
import { Button, Link } from "@mui/material";

const DropDownButton = ({ link, text }) => {
  return (
    <NextLink href={link} passHref>
      <Link>
        <Typography
          sx={{
            fontSize: { sm: 18, md: 20, lg: 23, xl: 28 },
            fontFamily: "Poppins, sans-serif",
          }}
        >
          {text}
        </Typography>
      </Link>
    </NextLink>
  );
};

export default DropDownButton;
