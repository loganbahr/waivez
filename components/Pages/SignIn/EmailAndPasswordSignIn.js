import React, {useState} from 'react';
import {getSession, signIn, useSession} from "next-auth/react";
import Box from "@mui/material/Box";
import {Button, TextField, Typography} from "@mui/material";
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth";
import {auth} from '../../../firebase'

const EmailAndPasswordSignIn = ({providers}) => {

    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {

        // await createUserWithEmailAndPassword(auth, email, password).then((userCredentials) => {
        //     const user = userCredentials.user;
        //     console.log(user);
        // }).catch((error) => {
        //     const errorCode = error.code;
        //     const errorMessage = error.message;
        //     console.log(errorCode, errorMessage);
        // });

        // const response = await signInWithEmailAndPassword(auth, email, password).then((userCredentials) => {
        //     const user = userCredentials.user;
        //     console.log(response, user);
        // }).catch((error) => {
        //     const errorCode = error.code;
        //     const errorMessage = error.message;
        //     console.log(errorCode, errorMessage);
        // });

    }

    return (
        <Box>
            <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <form onSubmit={(event) => {
                    event.preventDefault();
                    signIn('credentials', {email, password}).then(r => console.log(r.error));
                }}>
                    <TextField
                        fullWidth
                        label={'Email'}
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        sx={{my: 1}}
                    />
                    <TextField
                        fullWidth
                        label={'Password'}
                        type={'password'}
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    />
                    <Button
                        color="primary"
                        variant="contained"
                        fullWidth
                        type="submit"
                        sx={{my: 1}}>
                        Sign In
                    </Button>
                </form>
            </Box>
        </Box>
    );
};

export default EmailAndPasswordSignIn;
