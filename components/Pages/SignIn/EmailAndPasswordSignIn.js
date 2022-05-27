import React, {useState} from 'react';
import {getSession, signIn, useSession} from "next-auth/react";
import Box from "@mui/material/Box";
import {Button, TextField, Typography} from "@mui/material";
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth";
import {auth} from '../../../firebase'

const EmailAndPasswordSignIn = () => {

    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {


    }

    return (
        <Box>
            <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <form onSubmit={async (event) => {
                    // event.preventDefault();
                    await signIn('credentials', {email: email, password: password});
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
