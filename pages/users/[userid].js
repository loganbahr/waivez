/**
 * NOTE THIS FILE IS TEMPORARY AND JUST TO TEST SOME THINGS
 */

import Axios from "axios";
import { Box, Container, Typography } from "@mui/material";
import Layout from "../../components/layout/Layout";
import { QueryBuilder } from "@mui/icons-material";

const UserPage = (props) => {
  return (
    <Box>
      <Container maxWidth="md" sx={{ mt: 16 }}>
        <Box
          sx={{
            width: "100%",
          }}
        >
          <Typography component="h1" variant="h4">
            First Name: {props.user.first_name}
          </Typography>
          <Typography component="h1" variant="h4">
            Last Name: {props.user.last_name}
          </Typography>
          <Typography component="h1" variant="h4">
            Date of Birth: {props.user.date_of_birth}
          </Typography>
          <Typography component="h1" variant="h4">
            Address: {props.user.address}
          </Typography>
          <Typography component="h1" variant="h4">
            Email: {props.user.email}
          </Typography>
          <Typography component="h1" variant="h4">
            Phone Number: {props.user.phone_number}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

UserPage.getInitialProps = async ({ req, query }) => {
  const res = await Axios.get("http://localhost:5000/user", {
    params: {
      id: 1,
    },
  });

  if (res.data) {
    return {
      user: res.data,
    };
  }

  return {};
};

export default UserPage;
