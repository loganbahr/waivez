import {useEffect, useState} from 'react'
import {supabase} from '../../lib/supabaseClient'
import {Button, TextField, Typography} from "@mui/material";
import {useRouter} from "next/router";
import Box from "@mui/material/Box";

const ExistingUser = () => {
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userNotFound, setUserNotFound] = useState(false);
    const [session, setSession] = useState(null);

    useEffect(() => {
        setSession(supabase.auth.session())

        supabase.auth.onAuthStateChange((_event, session) => {
            setSession(session)
        })
    }, []);

    const router = useRouter();

    const handleLogin = async (email, password) => {

        const {data, error} = await supabase.from('partners').select(`email, password`);

        if (error) {
            throw error;
        }

        // if the email and password are in the database, log in
        if (data.find(user => user.email === email && user.password === password)) {
            const {user, session, error} = await supabase.auth.signIn({email: email, password: password});
            console.log('logged in');
            await router.replace('/partner');
            setLoading(false);
        } else {
            console.log('user not found!');
            setUserNotFound(true);
            setLoading(false);
        }
    }


    return (
        <Box>
            <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <form onSubmit={(event) => {
                    event.preventDefault();
                    handleLogin(email, password);
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
                {userNotFound && <Typography variant={'h6'} sx={{color: 'red'}}>User not found!</Typography>}
            </Box>
        </Box>
    );
};

export default ExistingUser;
