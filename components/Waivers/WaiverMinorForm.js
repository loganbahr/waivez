/**
 * @file WaiverMinorForm.js
 * @author Devin Arena, Logan Bahr
 * @description Allows user to enter information regarding minors for their waiver.
 * @since 4/2/2022
 **/

import {
    Box,
    circularProgressClasses,
    MenuItem,
    TextField,
    Typography,
} from "@mui/material";
import {useFormik} from "formik";
import * as yup from "yup";
import differenceInYears from "date-fns/differenceInYears";
import {useEffect} from "react";

const WaiverMinorForm = (props) => {
    const dropdownOptions = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    const validationSchema = yup.object({
        minors: yup.array().of(
            yup.object({
                firstName: yup
                    .string("Please enter the minor's first name.")
                    .required("Minor's first name is required!"),
                lastName: yup
                    .string("Please enter the minor's first name.")
                    .required("Minor's first name is required!"),
                dateOfBirth: yup
                    .date("Please enter the minor's date of birth.")
                    .required("Minor's date of birth is required!")
                    .test("dob", "You cannot pick a date in the future!", (value) => {
                        return new Date() > new Date(value);
                    })
                    .test("dob", "Adults cannot be considered minors.", (value) => {
                        return differenceInYears(new Date(), new Date(value)) < 18;
                    }),
            })
        ),
    });

    useEffect(() => {
        props.setFormValid(validationSchema.isValidSync(props.minorInfo));
    }, [props.minorInfo]);

    const formik = useFormik({
        initialValues: props.minorInfo,
        validationSchema: validationSchema,
    });

    const handleChange = (e) => {
        formik.handleChange(e);
        props.minorInfo[e.target.name] = e.target.value;
        props.setMinorInfo({...props.minorInfo});
    };

    const handleDropdown = (e) => {
        formik.handleChange(e);
        props.minorInfo[e.target.name] = e.target.value;
        props.setMinorInfo({...props.minorInfo});
        if (props.minorInfo.minors.length < props.minorInfo.numberOfMinors) {
            const newMinors = [];
            for (
                let i = 0;
                i < props.minorInfo.numberOfMinors - props.minorInfo.minors.length;
                i++
            ) {
                newMinors.push({
                    firstName: "",
                    lastName: "",
                    dateOfBirth: "",
                });
            }
            props.setMinorInfo({
                ...props.minorInfo,
                minors: props.minorInfo.minors.concat(newMinors),
            });
            formik.setValues({
                ...formik.values,
                minors: props.minorInfo.minors.concat(newMinors),
            });
            const mtouched = formik.touched.minors || [];
            formik.setTouched({
                ...formik.touched,
                minors: mtouched.concat(
                    Object.keys(newMinors).map(() => {
                        return {firstName: false, lastName: false, dateOfBirth: false};
                    })
                ),
            });
        } else if (props.minorInfo.minors.length > props.minorInfo.numberOfMinors) {
            props.setMinorInfo({
                ...props.minorInfo,
                minors: props.minorInfo.minors.filter(
                    (_val, idx) => idx < props.minorInfo.numberOfMinors
                ),
            });
            formik.setTouched({
                ...formik.touched,
                minors: formik.touched.minors.filter(
                    (_, idx) => idx < props.minorInfo.numberOfMinors
                ),
            });
        }
    };

    const minorFormSection = (minorInfo, idx) => {
        const handleChange = (e) => {
            const minors = props.minorInfo.minors;
            minors[idx][e.target.name] = e.target.value;
            props.setMinorInfo({
                ...props.minorInfo,
                minors: minors,
            });
            formik.setValues({...formik.values, minors: minors});
        };

        const handleBlur = (e) => {
            const minors = formik.touched.minors;
            console.log(minors);
            if (minors === undefined) {
                minors = Object.keys(props.minorInfo.minors).map(() => {
                    return {firstName: false, lastName: false, dateOfBirth: false};
                });
            }
            minors[idx][e.target.name] = true;
            formik.setTouched({...formik.touched, minors: minors});
        };

        return (
            <Box key={idx} sx={{
                border: '3px solid #7f00ff',
                borderRadius: 5,
                p: 2,
                m: 1,
                width: 350,

            }}>
                <TextField
                    fullWidth
                    id="firstName"
                    name="firstName"
                    label="First Name"
                    value={minorInfo.firstName || ""}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={
                        formik.touched.minors !== undefined &&
                        formik.touched.minors[idx].firstName &&
                        formik.errors.minors !== undefined &&
                        formik.errors.minors[idx] !== undefined &&
                        Boolean(formik.errors.minors[idx].firstName)
                    }
                    helperText={
                        formik.touched.minors !== undefined &&
                        formik.touched.minors[idx].firstName &&
                        formik.errors.minors !== undefined &&
                        formik.errors.minors[idx] !== undefined &&
                        formik.errors.minors[idx].firstName
                    }
                    sx={{my: 1, input: {color: "#000"}}}
                />
                <TextField
                    fullWidth
                    id="lastName"
                    name="lastName"
                    label="Last Name"
                    value={minorInfo.lastName || ""}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={
                        formik.touched.minors !== undefined &&
                        formik.touched.minors[idx].lastName &&
                        formik.errors.minors !== undefined &&
                        formik.errors.minors[idx] !== undefined &&
                        Boolean(formik.errors.minors[idx].lastName)
                    }
                    helperText={
                        formik.touched.minors !== undefined &&
                        formik.touched.minors[idx].lastName &&
                        formik.errors.minors !== undefined &&
                        formik.errors.minors[idx] !== undefined &&
                        formik.errors.minors[idx].lastName
                    }
                    sx={{my: 1, input: {color: "#000"}}}
                />
                <TextField
                    fullWidth
                    id="dateOfBirth"
                    name="dateOfBirth"
                    label="Date of Birth (MM/DD/YYYY)"
                    type="date"
                    InputLabelProps={{shrink: true}}
                    value={minorInfo.dateOfBirth || ""}
                    onChange={handleChange}
                    onBlur={formik.handleBlur}
                    error={
                        formik.touched.minors !== undefined &&
                        formik.touched.minors[idx].dateOfBirth &&
                        formik.errors.minors !== undefined &&
                        formik.errors.minors[idx] !== undefined &&
                        Boolean(formik.errors.minors[idx].dateOfBirth)
                    }
                    helperText={
                        formik.touched.minors !== undefined &&
                        formik.touched.minors[idx].dateOfBirth &&
                        formik.errors.minors !== undefined &&
                        formik.errors.minors[idx] !== undefined &&
                        formik.errors.minors[idx].dateOfBirth
                    }
                    sx={{my: 1, input: {color: "#000"}}}
                />
            </Box>
        );
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
                border: "3px solid",
                borderColor: "primary.main",
                borderRadius: 10,
            }}
        >
            <Typography component="h1" variant="h4">
                Any minors?
            </Typography>
            <TextField
                select
                id="numberOfMinors"
                name="numberOfMinors"
                value={formik.values.numberOfMinors}
                label="Number of Minors"
                onChange={handleDropdown}
                onBlur={formik.handleBlur}
                sx={{
                    minWidth: 200,
                    my: 1,
                    "& .MuiSelect-select": {color: "#000000"},
                }}
            >
                {dropdownOptions.map((number, idx) => {
                    return (
                        <MenuItem key={idx} value={number} sx={{color: "#000"}}>
                            {number}
                        </MenuItem>
                    );
                })}
            </TextField>

            <Box sx={{
                display: "flex",
                flexDirection: 'row',
                flexWrap: 'wrap',
                width: '100%',
                justifyContent:'center',
                alignItems: "center",

            }}>


            {props.minorInfo.minors.map((minorInfo, idx) => {
                return minorFormSection(minorInfo, idx);
            })}
            </Box>
        </Box>
    );
};

export default WaiverMinorForm;
