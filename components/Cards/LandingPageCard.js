import React from 'react';
import Card from "@mui/material/Card";

const LandingPageCard = () => {
    return (
        <Card sx={{
            backgroundColor: '#7F00FF',
            height: {xs: '250px', sm: '350px', md: '550px', lg: '650px', xl: '750px'},
            minWidth: {md: '33%', lg: '42%', xl: '55%'},
            mx: 1,
            my: 1,
            boxShadow: 2
        }}>
        </Card>
    );
};

export default LandingPageCard;
