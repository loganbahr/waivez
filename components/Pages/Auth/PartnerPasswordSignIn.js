/**
 * @file components/Pages/Auth/PartnerPasswordSignIn.js
 * @author Logan Bahr
 * @description Form component that handles the sign-in process for partners.
 * @since 7/10/22
 */
import React, {useEffect, useState} from 'react';
import {signIn, signOut, useSession} from "next-auth/react";
import Box from "@mui/material/Box";
import {Button, Container, TextField, Typography} from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";


const PartnerPasswordSignIn = () => {

    const [loading, setLoading] = useState(false);
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [partnerNamesArray, setPartnerNamesArray] = useState([]);
    const [selectedPartnerName, setSelectedPartnerName] = useState('');

    const {data: session, status} = useSession();

    // useEffect to fetch partner names from the api and set them to the state
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('/api/partners/fetchPartnerNames', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            // destructuring the response to get the partner names
            const {partnerNames} = await response.json();

            setPartnerNamesArray(partnerNames);
        }
        // call the fetchData function
        fetchData().catch(error => console.log(error));
    }, [partnerNamesArray]);

    const submitHandler = async (event) => {

        event.preventDefault();

        setLoading(true);

        // make selectedPartnerName lowercase and remove spaces
        const selectedPartnerNameUrl = selectedPartnerName.toLowerCase().replace(/\s/g, '');

        try {
            const result = await signIn('credentials', {
                name: selectedPartnerName,
                password: password,
                callbackUrl: `/partner/${selectedPartnerNameUrl}/dashboard`,
            });
            setError(result.error);
        } catch (error) {
            console.log(error);
        }
        setLoading(false);
        setPassword('');
    }


    return (
        <Container maxWidth={'lg'}>
            <Box>

                {loading && <Typography variant={'h6'} sx={{textAlign: 'center'}}>Loading...</Typography>}

                {/*<Typography variant={'h6'} sx={{textAlign: 'center'}}>*/}
                {/*    {status}*/}
                {/*</Typography>*/}

                {/*<h2 className={'text-xl text-center pb-4'}>*/}
                {/*    {status}*/}
                {/*</h2>*/}

                <form onSubmit={submitHandler}>

                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}>
                        <Autocomplete
                            fullWidth
                            options={partnerNamesArray}
                            renderInput={(params) => <TextField {...params} label="Partner Name" variant="outlined"/>}
                            sx={{width: {md: '50%'}}}
                            onSelect={(event) => setSelectedPartnerName(event.target.value)}
                        />

                        <TextField
                            fullWidth
                            label={'Password'}
                            type={'password'}
                            value={password}
                            onChange={(event) => setPassword(event.target.value)}
                            sx={{my: 1, width: {md: '50%'}}}
                        />
                        <Button
                            color="primary"
                            variant="contained"
                            type="submit"
                            sx={{my: 1}}
                        >
                            Sign In
                        </Button>
                    </Box>
                </form>


                {session && <Button fullWidth variant={'contained'} onClick={() => signOut()}> Sign Out </Button>}

                <Typography sx={{color: 'red', textAlign: 'center'}}>
                    {error && <span>{error}</span>}
                </Typography>

            </Box>
        </Container>
    );
};

export default PartnerPasswordSignIn;
