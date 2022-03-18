import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import { Typography } from "@mui/material";
import Link from "next/link";

const NavBar = () => {
  const MenuButton = ({ link, text }) => {
    return (
      <Link href={link}>
        <IconButton>
          <Typography
            sx={{
              color: "white",
              fontSize: { xs: 12, sm: 16, md: 20 },
              fontFamily: "Poppins, sans-serif",
            }}
          >
            {text}
          </Typography>
        </IconButton>
      </Link>
    );
  };

  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "white",
        opacity: "1",
        display: "flex",
        alignItems: "end",
        justifyContent: "center",
        position: "fixed",
        top: 0
      }}
    >
      <AppBar
        sx={{
          height: 80,
          display: "flex",
          position: "absolute",
          flexDirection: "row",
          justifyContent: "space-between",
          backgroundColor: "primary",
          zIndex: 1100,
        }}
      >
        <Toolbar
          sx={{
            backgroundColor: "primary",
            display: "flex",
            justifyContent: "space-between",
            zIndex: 1101,
            width: "40%",
            marginLeft: "1.5%",
            marginRight: "1.5%",
          }}
        >
          <MenuButton link="/" text="Home" />
          <MenuButton link="/partners" text="Partners" />
          <MenuButton link="/pricing" text="Pricing" />
        </Toolbar>
        <Box
          sx={{
            width: "20%",
            height: "8vw",
            mt: 3,
            borderRadius: "50%",
            backgroundColor: "white",
            zIndex: 1102,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
        </Box>
        <Toolbar
          sx={{
            backgroundColor: "primary",
            display: "flex",
            justifyContent: "space-between",
            zIndex: 1101,
            width: "40%",
            marginLeft: "1.5%",
            marginRight: "1.5%",
          }}
        >
          <MenuButton link="/about" text="About" />
          <MenuButton link="/contact" text="Contact" />
          <MenuButton link="/signin" text="Sign In" />
        </Toolbar>
      </AppBar>
    </Box>
  );
};
export default NavBar;
