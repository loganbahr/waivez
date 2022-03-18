import React from "react";
import Card from "@mui/material/Card";
import {Box, Typography} from "@mui/material";

const PricingPageCard = ({mx, my, titleText}) => {
    return (
        <Card
            sx={{
                height: {
                    xs: "250px",
                    sm: "380px",
                    md: "450px",
                    lg: "500px",
                    xl: "600px",
                },
                width: {
                    xs: "350px",
                    sm: "550px",
                    md: "300px",
                    lg: "370px",
                    xl: "450px",
                },
                backgroundColor: 'primary.main',
                mx: mx,
                my: my,
                display: 'flex',
                flexDirection: {xs: 'row', sm: 'row', md: 'column'},
                alignItems: 'center',

            }}>

            <Box sx={{
                border: '2px solid red',
                mt: 2
            }}>
                <Typography sx={{color: 'white', fontFamily: 'Poppins, sans-serif', fontSize: '3rem'}}>
                    {titleText}
                </Typography>
            </Box>

        </Card>
    );
};

export default PricingPageCard;
