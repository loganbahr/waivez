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
import {useFormik} from "formik";
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
        },
    });

    const handleChange = (e) => {
        formik.handleChange(e);
        props.waiverInfo[e.target.name] = e.target.value;
        props.setWaiverInfo({...props.waiverInfo});
        props.setFormValid(validationSchema.isValidSync(props.waiverInfo));
    };

    return (
        <Box
            as="form"
            sx={{
                p: 3,
                width: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-evenly",
                alignItems: "center",
                border: "2px solid",
                borderColor: "primary.main",
                borderRadius: 5,
                backgroundColor: '#f9f9f9'
            }}>
            <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: {xs: 'column', md: 'row'},
                width: '100%',
            }}>
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
                    sx={{
                        input: {color: "#000"},
                        flex: 1,
                        mx: 1,
                        my: 2,
                    }}
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
                    sx={{
                        input: {color: "#000"},
                        flex: 1,
                        mx: 1,
                        my: 2,

                    }}
                />
                <TextField
                    fullWidth
                    id="dateOfBirth"
                    name="dateOfBirth"
                    label="Date of Birth (MM/DD/YYYY)"
                    type="date"
                    InputLabelProps={{shrink: true}}
                    value={formik.values.dateOfBirth || ""}
                    onChange={handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.dateOfBirth && Boolean(formik.errors.dateOfBirth)}
                    helperText={formik.touched.dateOfBirth && formik.errors.dateOfBirth}
                    sx={{
                        input: {color: "#000"},
                        flex: 1,
                        mx: 1,
                        my: 2,
                    }}
                />
            </Box>

            <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: {xs: 'column', md: 'row'},
                width: '100%',
            }}>
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
                    sx={{
                        input: {color: "#000"},
                        flex: 1,
                        mx: 1,
                        my: 2,

                    }}
                />

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
                    sx={{
                        input: {color: "#000"},
                        flex: 1,
                        mx: 1,
                        my: 2,
                    }}
                />
            </Box>

            <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: {xs: 'column', md: 'row'},
                width: '100%',
            }}>
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
                    sx={{
                        input: {color: "#000"},
                        flex: 1,
                        mx: 1,
                        my: 2,
                    }}
                />
            </Box>

            <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: {xs: 'column', md: 'row'},
                width: '100%',
            }}>
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
                    sx={{
                        input: {color: "#000"},
                        flex: 1,
                        mx: 1,
                        my: 2,
                    }}
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
                    sx={{
                        "& .MuiSelect-select": {color: "#000000"},
                        flex: 1,
                        mx: 1,
                        my: 2,
                    }}
                >
                    {states.map((state, idx) => {
                        return (
                            <MenuItem key={idx} value={state.State} sx={{color: "#000"}}>
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
                    sx={{
                        input: {color: "#000"},
                        flex: 1,
                        mx: 1,
                        my: 2,
                    }}
                />
            </Box>

        </Box>
    );
};

export default WaiverInfoForm;