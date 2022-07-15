import React from 'react';
import Box from "@mui/material/Box";
import {getSession, signOut, useSession} from "next-auth/react";
import {Button, Container, Typography} from "@mui/material";

const Dashboard = () => {

    const {data: session, status} = useSession();

    console.log(session);



    return (
        <Container maxWidth={'md'}>

            <Box
                sx={{display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', mt: 50}}>

                <Typography>
                    {"username: " + session?.user?.name}
                </Typography>

                {session &&
                    <Button
                        variant={'contained'}
                        onClick={() => signOut({redirect: true, callbackUrl: '/auth/signin'})}>
                        Sign Out
                    </Button>
                }

            </Box>
        </Container>

    );
};

export default Dashboard;

