import React from 'react';
import {Button, TextField} from "@mui/material";
import {useFormik} from 'formik';
import * as yup from 'yup';
import Box from "@mui/material/Box";

const validationSchema = yup.object({
    firstName: yup
        .string('Enter your first name.')
        .required('A first name is required.'),
    lastName: yup
        .string('Enter your last name.')
        .required('A last name is required.'),
    email: yup
        .string('Enter your email.')
        .email('Enter a valid email')
        .required('An Email is required.'),
    message: yup
        .string('Enter a message.')
        .required('A message is required')
});

const FormikForm = () => {

    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            message: '',
        },

        validationSchema: validationSchema,
        onSubmit: (values) => {
            // alert(JSON.stringify(values, null, 2));
            formik.handleReset(values);
        },
    });

    return (
        <Box sx={{backgroundColor: '#f9f9f9', opacity: '1', width: '100%',}}>
            <form onSubmit={formik.handleSubmit}>
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
                        value={formik.values.firstName}
                        onChange={formik.handleChange}
                        error={formik.touched.firstName && Boolean(formik.errors.firstName)}
                        helperText={formik.touched.firstName && formik.errors.firstName}
                        sx={{mr: {xs: 0, md: 1}, my: 1}}
                    />
                    <TextField
                        fullWidth
                        id="lastName"
                        name="lastName"
                        label="Last Name"
                        value={formik.values.lastName}
                        onChange={formik.handleChange}
                        error={formik.touched.lastName && Boolean(formik.errors.lastName)}
                        helperText={formik.touched.lastName && formik.errors.lastName}
                        sx={{ml: {xs: 0, md: 1}, my: 1}}
                    />
                </Box>

                <TextField
                    fullWidth
                    id="email"
                    name="email"
                    label="Email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                    sx={{my: 1,}}
                />
                <TextField
                    multiline={true}
                    rows={8}
                    fullWidth
                    size='400px'
                    maxRows={8}
                    id="message"
                    name="message"
                    label="Message"
                    value={formik.values.message}
                    onChange={formik.handleChange}
                    error={formik.touched.message && Boolean(formik.errors.message)}
                    helperText={formik.touched.message && formik.errors.message}
                    sx={{my: 1}}
                />
                <Button color="primary" variant="contained" fullWidth type="submit" sx={{mt: 1}}>
                    Submit
                </Button>
            </form>
        </Box>
    );
};

export default FormikForm;