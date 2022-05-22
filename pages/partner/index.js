// www.waivez.com/partner
import React, {useEffect, useState} from 'react';
import Box from "@mui/material/Box";
import {Button, Typography} from "@mui/material";
import {supabase} from "../../lib/supabaseClient";
import {router} from "next/client";

const PartnerPage = () => {

    const [session, setSession] = useState(null);
    useEffect(() => {
        setSession(supabase.auth.session());

        supabase.auth.onAuthStateChange((_event, session) => {
            setSession(session)
        })
    }, [])

    // handler for signing out
    const handleLogout = async () => {
        await supabase.auth.signOut();
        setSession(null);
        await router.replace('/signin');
    }

    return (
        <Box sx={{display: 'flex', justifyContent: 'center'}}>
            {session ? <h1>{session.user.email}</h1> : <h1>No session</h1>}
            <Button onClick={handleLogout} variant={'contained'}>Logout</Button>
        </Box>

    );
};

export default PartnerPage;
