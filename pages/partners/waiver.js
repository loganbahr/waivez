import { Box, Button, Container, TextField } from "@mui/material";
import { useState } from "react";

/**
 * @file WaiverPage.js
 * @author Devin Arena
 * @since 3/13/2022
 * @description Provides the means for users to sign waivers through entering their personal information.
 */
const WaiverPage = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dob, setDOB] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const submit = (e) => {
    e.preventDefault();
  };

  return (
    <Box>
      <Container maxWidth="md" sx={{ mt: 16 }}>
        <Box
          as="form"
          onSubmit={(e) => submit(e)}
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <TextField
            fullWidth
            id="firstName"
            name="firstName"
            label="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            sx={{ my: 2 }}
          />
          <TextField
            fullWidth
            id="lastName"
            name="lastName"
            label="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            sx={{ my: 2 }}
          />
          <TextField
            fullWidth
            id="dob"
            name="dob"
            label="Date of Birth (MM/DD/YYYY)"
            value={dob}
            onChange={(e) => setDOB(e.target.value)}
            sx={{ my: 2 }}
          />
          <TextField
            fullWidth
            id="email"
            name="email"
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            sx={{ my: 2 }}
          />
          <TextField
            fullWidth
            id="address"
            name="address"
            label="Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            sx={{ my: 2 }}
          />
          <TextField
            fullWidth
            id="phoneNumber"
            name="phoneNumber"
            label="Phone Number XXX-XXX-XXXX"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            sx={{ my: 2 }}
          />
          <Button
            color="primary"
            variant="contained"
            fullWidth
            type="submit"
            sx={{ my: 2 }}
          >
            Submit
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default WaiverPage;
