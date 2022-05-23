import React, {useState} from 'react';
import {useFormik} from 'formik';
import * as yup from 'yup';
import {Button, TextField} from "@mui/material";
import {useRouter} from "next/router";

const FormikSignIn = () => {

    const validationSchema = yup.object({
        email: yup
            .string('Enter your email.')
            .email('Enter a valid email.')
            .required('Email is required.'),
        password: yup
            .string('Enter your password.')
            .min(8, 'Minimum 8 characters.')
            .required('Password is required.'),
    });

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: validationSchema,
        onSubmit: async (values, event) => {
            values.email = '';
            values.password = '';
            event.preventDefault();
        },
    });


    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <TextField
                    fullWidth
                    id="email"
                    name="email"
                    label="Email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                    sx={{mb: 1}}
                />
                <TextField
                    fullWidth
                    id="password"
                    name="password"
                    label="Password"
                    type="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    error={formik.touched.password && Boolean(formik.errors.password)}
                    helperText={formik.touched.password && formik.errors.password}
                />
                <div>
                    <Button color="primary" variant="contained" fullWidth type="submit" sx={{mt: 1}}>
                        Sign In
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default FormikSignIn;
