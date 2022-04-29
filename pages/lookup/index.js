/**
 * @file lookup/index.js
 * @author Devin Arena, Logan Bahr
 * @description Provides a temporary lookup form for grabbing waivers from the backend.
 * @since 4/3/2022
 **/

import {
  Backdrop,
  Box,
  Button,
  CircularProgress,
  Container,
  Skeleton,
  TextField,
  Typography,
} from "@mui/material";
import { differenceInYears } from "date-fns";
import { useFormik } from "formik";
import * as yup from "yup";
import Axios from "axios";
import { useState } from "react";
import WaiverTabRenderer from "../../components/Waivers/WaiverTabRenderer";
import Head from "next/head";

const LookupPage = (props) => {
  const [waiverData, setWaiverData] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validationSchema = yup.object({
    firstName: yup
      .string("Please enter your first name.")
      .required("First name is required!"),
    lastName: yup
      .string("Please enter your last name.")
      .required("Last name is required!"),
    dateOfBirth: yup
      .date("Please enter your date of birth.")
      .required("Date of birth is required!")
      .test("dob", "You cannot pick a date in the future!", (value) => {
        return new Date() > new Date(value);
      })
      .test("dob", "That date is too far in the past!", (value) => {
        return differenceInYears(new Date(), new Date(value)) < 120;
      }),
  });

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      dateOfBirth: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      setSubmitted(true);
      Axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/lookupWaivers`, {
        params: {
          firstName: values.firstName,
          lastName: values.lastName,
          dateOfBirth: values.dateOfBirth,
        },
      }).then((resp) => {
        if (resp.data.err) {
          console.log(resp.data.err);
        }
        setWaiverData(resp.data.signedWaivers);
        setSubmitted(false);
      });
    },
  });

  const submit = (e) => {
    e.preventDefault();
    formik.submitForm();
  };

  return (
    <Box pt={10}>
      <Head>
        <title>Lookup User</title>
        <meta />
      </Head>
      <Container
        maxWidth="md"
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="h2">Lookup Waiver</Typography>
        <Box
          as="form"
          onSubmit={submit}
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            border: "3px solid",
            borderColor: "primary.main",
            borderRadius: 10,
            p: 5,
          }}
        >
          <TextField
            fullWidth
            id="firstName"
            name="firstName"
            label="First Name"
            value={formik.values.firstName || ""}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.firstName && Boolean(formik.errors.firstName)}
            helperText={formik.touched.firstName && formik.errors.firstName}
            sx={{ my: 2, input: { color: "#000" } }}
          />
          <TextField
            fullWidth
            id="lastName"
            name="lastName"
            label="Last Name"
            value={formik.values.lastName || ""}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.lastName && Boolean(formik.errors.lastName)}
            helperText={formik.touched.lastName && formik.errors.lastName}
            sx={{ my: 2, input: { color: "#000" } }}
          />
          <TextField
            fullWidth
            id="dateOfBirth"
            name="dateOfBirth"
            label="Date of Birth (MM/DD/YYYY)"
            type="date"
            InputLabelProps={{ shrink: true }}
            value={formik.values.dateOfBirth || ""}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.touched.dateOfBirth && Boolean(formik.errors.dateOfBirth)
            }
            helperText={formik.touched.dateOfBirth && formik.errors.dateOfBirth}
            sx={{ my: 2, input: { color: "#000" } }}
          />
          <Button variant="contained" type="submit">
            Search Waivers
          </Button>
        </Box>
        <Backdrop sx={{ color: "#fff", zIndex: 999 }} open={submitted}>
          <CircularProgress color="primary" />
        </Backdrop>
        {submitted && (
          <Skeleton
            variant="rectangular"
            sx={{ width: "100%", height: 800, my: 4 }}
          />
        )}
        {!submitted &&
          Object.keys(waiverData).length > 0 &&
          Object.keys(waiverData).map((partner) => {
            return (
              <Box key={partner} sx={{ my: 10 }}>
                <Typography
                  variant="h2"
                  sx={{ fontSize: { xs: 24, sm: 32, md: 48 } }}
                >
                  {partner}
                </Typography>
                <WaiverTabRenderer
                  waivers={waiverData[partner].map((waiver) => {
                    return waiver.partnerWaiverId;
                  })}
                  waiverData={waiverData[partner].reduce(
                    (prev, key) => ({
                      ...prev,
                      [key.partnerWaiverId]: {
                        metadata: {
                          name: key.name,
                        },
                      },
                    }),
                    {}
                  )}
                  signedWaivers={waiverData[partner].map((waiver) => {
                    return waiver.signed;
                  })}
                />
              </Box>
            );
          })}
      </Container>
    </Box>
  );
};

export default LookupPage;
