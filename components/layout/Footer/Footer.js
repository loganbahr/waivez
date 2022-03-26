import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import MoreIcon from "@mui/icons-material/MoreVert";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Box, Button } from "@mui/material";

const Footer = () => {
  return (
    <AppBar
      sx={{
        backgroundColor: "primary",
        position: "static",
        // border: '2px solid black',
        height: { xs: "70px", sm: "85px", md: "90px", xl: "120px" },
        minHeight: "10vh",
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          // border: '2px solid red',
          padding: { xs: 0, md: 0 },
          height: "100%",
        }}
      >
        <Box
          sx={{
            height: "100%",
            width: "40%",
            // border: '2px solid red',
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              fontSize: {
                xs: "0.45rem",
                sm: "0.7rem",
                md: "0.9rem",
                lg: "1rem",
              },
            }}
          >
            Conditions of Use
          </Typography>
          <Typography
            sx={{
              fontSize: {
                xs: "0.45rem",
                sm: "0.7rem",
                md: "0.9rem",
                lg: "1rem",
              },
            }}
          >
            Privacy Notice
          </Typography>
          <Typography
            sx={{
              fontSize: {
                xs: "0.45rem",
                sm: "0.7rem",
                md: "0.9rem",
                lg: "1rem",
              },
            }}
          >
            © 2022, Waivez.com, Inc.
          </Typography>
        </Box>

        <Box
          sx={{
            height: "100%",
            width: "30%",
            // border: '2px solid black',
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              color: "white",
              fontSize: { xs: 25, sm: 35, md: 50, lg: 60 },
              fontFamily: "Poppins, sans-serif",
            }}
          >
            waivez
          </Typography>
        </Box>

        <Box
          sx={{
            height: "100%",
            width: "40%",
            // border: '2px solid black',
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <FacebookIcon fontSize={"small"} />
          <TwitterIcon fontSize="small" />
          <GitHubIcon fontSize="small" />
          <InstagramIcon fontSize="small" />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Footer;

//const Footer = () => {
//     return (
//         <Box>
//             <AppBar
//                 sx={{
//                     backgroundColor: "primary",
//                     top: "auto",
//                     bottom: "0",
//                     position: "static",
//                 }}>
//                 <Toolbar sx={{
//                     display: "flex",
//                     justifyContent: 'space-between',
//                     border: '2px solid red'
//                 }}>
//                     <IconButton color="inherit">
//                         <SearchIcon/>
//                     </IconButton>
//                     <Typography
//                         sx={{
//                             color: "white",
//                             fontSize: {xs: 25, sm: 35, md: 50, lg: 60},
//                             fontFamily: "Poppins, sans-serif",
//                         }}>
//                         waivez
//                     </Typography>
//                     <IconButton color="inherit">
//                         <MoreIcon/>
//                     </IconButton>
//                 </Toolbar>
//             </AppBar>
//         </Box>
//     );
// };