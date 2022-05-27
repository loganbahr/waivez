/**
 * @file pages\api\auth\CredentialsSignIn.js
 * @author Logan Bahr
 * @description Google Credentials (email and password) sign in page.
 * @since 5/26/22
 */
import React, {useState} from 'react';
import {Container, FormControl, TextField} from "@mui/material";
import Box from "@mui/material/Box";
import {Button} from "@supabase/ui";
import {signInWithEmailAndPassword,} from "firebase/auth";
import {auth} from "../../../firebase";
import {signIn} from "next-auth/react";

const CredentialsSignIn = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const submitHandler = async (event) => {
        event.preventDefault();
        // try {
        //     const user = await signInWithEmailAndPassword(auth, email, password);
        //     setEmail('');
        //     setPassword('');
        //     console.log(user);
        //     alert('Successfully signed in!');
        // } catch (error) {
        //     console.log(error);
        //     alert(error.message.split(':')[1]);
        // }
        try {
            const user = await signIn('credentials', {email, password});
            console.log(user);
        } catch (error) {
            console.log(error);
        }


    }

    return (
        <Container>
            <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 5}}>
                <TextField
                    fullWidth
                    label={'Email'}
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                />

                <TextField
                    fullWidth
                    label={'Password'}
                    type={'password'}
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                />

                <Button
                    variant="contained"
                    type="submit"
                    sx={{my: 1}}
                    onClick={submitHandler}>
                    Sign In
                </Button>
            </Box>
        </Container>
    );
};

export default CredentialsSignIn;
