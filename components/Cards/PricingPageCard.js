import React from "react";
import Card from "@mui/material/Card";
import {Box, Button, Typography} from "@mui/material";

const PricingPageCard = ({mx, my, titleText, price, priceDetails}) => {
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
                boxShadow: '5px 5px 15px 5px #7f00ff',
                // border: '2px solid orange',
                padding: 0.8,
                mx: mx,
                my: my,
                display: 'flex',
                flexDirection: {xs: 'row', sm: 'row', md: 'column'},
                alignItems: {xs: 'center', md: 'center'},
                justifyContent: {xs: 'start', md: 'start'},

            }}>
            <Box
                sx={{
                    width: {xs: '50%', md: '100%'},
                    height: {xs: '100%', md: '50%'},
                    // border: '4px solid black',
                    display: 'flex',
                    flexDirection: 'column',
                }}>

                <Box
                    sx={{
                        width: '100%',
                        height: '50%',
                        // border: '2px solid yellow',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                    <Typography sx={{
                        color: 'white',
                        fontFamily: 'Poppins, sans-serif',
                        fontSize: {xs: '1.75em', sm: '2.5em', md: '2.5em'},
                    }}>
                        {titleText}
                    </Typography>
                </Box>


                <Box
                    sx={{
                        width: '100%',
                        height: '50%',
                        // border: '2px solid orange',
                        backgroundColor: 'white',
                        display: 'flex',
                        flexDirection: {xs: 'column', md: 'row'},
                        textAlign: 'center',
                        justifyContent: 'center',
                        alignItems: {xs: 'center', md: 'center'},
                        boxShadow: '1px 1px 10px 1px #fff',
                        borderRadius: '1%',
                    }}>
                    <Typography sx={{
                        color: 'primary.main',
                        fontFamily: 'Poppins, sans-serif',
                        fontSize: {xs: '1em', sm: '1.6em', md: '1em', lg: '1.4em', xl: '1.6em'},
                        mt: 1
                    }}>
                        {price}
                    </Typography>

                    <Box
                        sx={{
                            width: {xs: '100%', md: '70%'},
                            height: {xs: '50%', md: '60%'},
                            // border: '2px solid blue',
                            mx: 1,
                            my: 1,
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                        <Button variant="contained" sx={{
                            height: '75%',
                            width: '75%',
                            boxShadow: '1px 1px 10px 1px #7f00ff',
                            fontSize: {xs: '1rem', sm: '1.5rem', md: '1rem', lg: '1.1rem', xl: '1.3rem'}
                        }}>Purchase
                        </Button>
                    </Box>
                </Box>

            </Box>

            <Box
                sx={{
                    width: {xs: '50%', md: '100%'},
                    height: {xs: '100%', md: '50%'},
                    // border: '4px solid green',
                    padding: 3,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>

                <Typography sx={{
                    color: 'white',
                    fontFamily: 'Poppins, sans-serif',
                    fontSize: {xs: '0.92em', sm: '1.5em', md: '1.3em'},
                    textAlign: 'center',
                }}>
                    {priceDetails}
                </Typography>
            </Box>

        </Card>
    );
};

export default PricingPageCard;
