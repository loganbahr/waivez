import React from 'react';
import Box from "@mui/material/Box";
import {Button, List, ListItem, ListItemIcon, ListItemText, Typography} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import {motion} from "framer-motion";

const ProPricingCard = () => {
    return (
            <Box sx={{
                mx: 2,
                mt: {xs: 5, md: 20},
                height: 700,
                width: 350,
                borderRadius: 2,
                // border: '2px solid red',
                display: 'flex',
                flexDirection: 'column',
            }}>
                <Box sx={{
                    height: '10%',
                    // border: '2px solid red',
                    background: '#7f00ff',
                    borderRadius: 3,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <Typography variant={'h3'} color={'text.content'} sx={{textShadow: '0px 0px 10px #FFF'}}>
                        Pro
                    </Typography>
                </Box>


                <Box sx={{
                    height: '90%',
                    border: '2px solid #7f00ff',
                    borderRadius: 3,
                    backgroundColor: '#f9f9f9',
                    flexDirection: 'column',
                    display: 'flex',
                    justifyContent: 'start',
                    alignItems: 'start',
                }}>
                    <Box sx={{
                        height: '30%',
                        width: '100%',
                        borderBottom: '2px solid #7f00ff',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        textAlign: 'center'
                    }}>
                        <Typography variant={'h6'} sx={{mx: 1}}>
                            For businesses with thousands of customers monthly. Has access to all features, including
                            any
                            future features.
                        </Typography>
                    </Box>
                    <Box sx={{
                        height: '70%',
                        width: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        flexDirection: 'column'
                    }}>

                        <Typography sx={{fontSize: 25, fontWeight: 600, mx: 5, my: 1, textAlign: 'center',}}>
                            $99.99/month <br/>+<br/> $0.10/waiver
                        </Typography>

                        <Button size={'large'} variant={'contained'} sx={{my: 2}}>
                            BUY
                        </Button>

                        <List sx={{mx: 1}}>
                            <ListItem disablePadding={true}>
                                <ListItemIcon>
                                    <CheckCircleIcon sx={{color: 'primary.main'}}/>
                                </ListItemIcon>
                                <ListItemText primary={'All Advanced features'}/>
                            </ListItem>

                            <ListItem disablePadding={true}>
                                <ListItemIcon>
                                    <CheckCircleIcon sx={{color: 'primary.main'}}/>
                                </ListItemIcon>
                                <ListItemText primary={'Return Probability Index (RPI)®'}/>
                            </ListItem>

                            <ListItem disablePadding={true}>
                                <ListItemIcon>
                                    <CheckCircleIcon sx={{color: 'primary.main'}}/>
                                </ListItemIcon>
                                <ListItemText primary={'Full customer analytics'}/>
                            </ListItem>

                            <ListItem disablePadding={true}>
                                <ListItemIcon>
                                    <CheckCircleIcon sx={{color: 'primary.main'}}/>
                                </ListItemIcon>
                                <ListItemText primary={'Access to all future features'}/>
                            </ListItem>

                            <ListItem disablePadding={true}>
                                <ListItemIcon>
                                    <CheckCircleIcon sx={{color: 'primary.main'}}/>
                                </ListItemIcon>
                                <ListItemText
                                    primary={'Integration with FareHarbor'}/>
                            </ListItem>
                        </List>
                    </Box>
                </Box>
            </Box>
    );
};

export default ProPricingCard;
