/**
 * @file WaiverInfoForm.js
 * @author Devin Arena
 * @description Formik form for entering information regarding waivers.
 * @since 3/26/2022
 **/

import {
  Box,
  Button,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { useFormik } from "formik";
import validator from "validator";
import * as yup from "yup";
import differenceInYears from "date-fns/differenceInYears";
import states from "./States.json";

const WaiverInfoForm = (props) => {
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
      .test("dob", "You must be 18 or older to sign a waiver!", (value) => {
        return differenceInYears(new Date(), new Date(value)) >= 18;
      })
      .test("dob", "That date is too far in the past!", (value) => {
        return differenceInYears(new Date(), new Date(value)) < 120;
      }),
    email: yup
      .string("Please enter your email address.")
      .email()
      .required("Email address is required!"),
    addressLine: yup
      .string("Please enter your address.")
      .required("Address is required!"),
    addressCity: yup
      .string("Please enter your city.")
      .required("City is required!"),
    addressState: yup
      .string("Please enter your state.")
      .required("State is required!"),
    addressPostal: yup
      .number("Please enter your postal code.")
      .required("Postal code is required!")
      .test("addressPostal", "Please enter a valid postal code.", (value) => {
        return value && validator.isPostalCode(value.toString(), "any");
      }),
    phoneNumber: yup
      .string("Please enter your phone number.")
      .required("Phone number is required!")
      .test("phonenumber", "Please enter a valid phone number!", (value) => {
        return value && validator.isMobilePhone(value);
      }),
  });

  const formik = useFormik({
    initialValues: props.waiverInfo,
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const handleChange = (e) => {
    formik.handleChange(e);
    props.waiverInfo[e.target.name] = e.target.value;
    props.setWaiverInfo({ ...props.waiverInfo });
    props.setFormValid(validationSchema.isValidSync(props.waiverInfo));
  };

  const handleDateChange = (e) => {
    handleChange(e);
    if (Number.parseInt(e.target.value.split("-")[0]) < 1900) {
      props.setFormValid(false);
      formik.errors.dateOfBirth = "That date is too far in the past!";
    }
  };

  return (
    <Box
      as="form"
      onSubmit={formik.handleSubmit}
      sx={{
        p: 3,
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        alignItems: "center",
        border: "3px solid",
        borderColor: "primary.main",
        borderRadius: 10,
      }}
    >
      <Typography component="h1" variant="h4">
        Enter your information
      </Typography>
      <TextField
        fullWidth
        id="firstName"
        name="firstName"
        label="First Name"
        value={formik.values.firstName || ""}
        onChange={handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.firstName && Boolean(formik.errors.firstName)}
        helperText={formik.touched.firstName && formik.errors.firstName}
        sx={{ my: 2 }}
      />
      <TextField
        fullWidth
        id="lastName"
        name="lastName"
        label="Last Name"
        value={formik.values.lastName || ""}
        onChange={handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.lastName && Boolean(formik.errors.lastName)}
        helperText={formik.touched.lastName && formik.errors.lastName}
        sx={{ my: 2 }}
      />
      <TextField
        fullWidth
        id="dateOfBirth"
        name="dateOfBirth"
        label="Date of Birth (MM/DD/YYYY)"
        type="date"
        InputLabelProps={{ shrink: true }}
        value={formik.values.dateOfBirth || ""}
        onChange={handleDateChange}
        onBlur={formik.handleBlur}
        error={formik.touched.dateOfBirth && Boolean(formik.errors.dateOfBirth)}
        helperText={formik.touched.dateOfBirth && formik.errors.dateOfBirth}
        sx={{ my: 2 }}
      />
      <TextField
        fullWidth
        id="email"
        name="email"
        label="Email Address"
        value={formik.values.email || ""}
        onChange={handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.email && Boolean(formik.errors.email)}
        helperText={formik.touched.email && formik.errors.email}
        sx={{ my: 2 }}
      />
      <TextField
        fullWidth
        id="addressLine"
        name="addressLine"
        label="Address Line"
        value={formik.values.addressLine || ""}
        onChange={handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.addressLine && Boolean(formik.errors.addressLine)}
        helperText={formik.touched.addressLine && formik.errors.addressLine}
        sx={{ my: 2 }}
      />
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          justifyContent: "space-between",
          alignItems: "center",
          my: 2,
        }}
      >
        <TextField
          fullWidth
          id="addressCity"
          name="addressCity"
          label="City"
          value={formik.values.addressCity || ""}
          onChange={handleChange}
          onBlur={formik.handleBlur}
          error={
            formik.touched.addressCity && Boolean(formik.errors.addressCity)
          }
          helperText={formik.touched.addressCity && formik.errors.addressCity}
          sx={{ mr: { xs: 0, sm: 1 }, my: { xs: 2, sm: 0 } }}
        />
        <TextField
          select
          fullWidth
          id="addressState"
          name="addressState"
          value={formik.values.addressState}
          label="State"
          onChange={handleChange}
          onBlur={formik.handleBlur}
          sx={{ my: { xs: 2, sm: 0 } }}
        >
          {states.map((state, idx) => {
            return (
              <MenuItem key={idx} value={state.State}>
                {state.State}
              </MenuItem>
            );
          })}
        </TextField>
        <TextField
          fullWidth
          id="addressPostal"
          name="addressPostal"
          label="Postal Code"
          value={formik.values.addressPostal || ""}
          onChange={handleChange}
          onBlur={formik.handleBlur}
          error={
            formik.touched.addressPostal && Boolean(formik.errors.addressPostal)
          }
          helperText={
            formik.touched.addressPostal && formik.errors.addressPostal
          }
          sx={{ ml: { xs: 0, sm: 1 }, my: { xs: 2, sm: 0 } }}
        />
      </Box>
      <TextField
        fullWidth
        id="phoneNumber"
        name="phoneNumber"
        label="Phone Number XXX-XXX-XXXX"
        value={formik.values.phoneNumber || ""}
        onChange={handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.phoneNumber && Boolean(formik.errors.phoneNumber)}
        helperText={formik.touched.phoneNumber && formik.errors.phoneNumber}
        sx={{ my: 2 }}
      />
    </Box>
  );
};

export default WaiverInfoForm;
