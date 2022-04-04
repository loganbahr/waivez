import React from 'react';
import Box from "@mui/material/Box";
import {Button, List, ListItem, ListItemIcon, ListItemText, Typography} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import {motion} from "framer-motion";

const AdvancedPricingCard = () => {
    return (
            <Box sx={{
                mx: 2,
                mt: {xs: 5, md: 0},
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
                        Advanced
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
                            Generally for business that have less than 1,000 customers per month, but are growing
                            quickly.
                            Has access to most features.
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
                            $39.99/month <br/>+<br/> $0.15/waiver
                        </Typography>

                        <motion.div whileHover={{scale: 1.1}}>
                            <Button size={'large'} variant={'contained'} sx={{my: 2}}>
                                BUY
                            </Button>
                        </motion.div>

                        <List sx={{mx: 5}}>

                            <ListItem disablePadding={true}>
                                <ListItemIcon>
                                    <CheckCircleIcon sx={{color: 'primary.main'}}/>
                                </ListItemIcon>
                                <ListItemText primary={'All standard features'}/>
                            </ListItem>

                            <ListItem disablePadding={true}>
                                <ListItemIcon>
                                    <CheckCircleIcon sx={{color: 'primary.main'}}/>
                                </ListItemIcon>
                                <ListItemText primary={'Machine Learning & AI Analytics'}/>
                            </ListItem>

                            <ListItem disablePadding={true}>
                                <ListItemIcon>
                                    <CheckCircleIcon sx={{color: 'primary.main'}}/>
                                </ListItemIcon>
                                <ListItemText primary={'Customer Heat Maps'}/>
                            </ListItem>

                            <ListItem disablePadding={true}>
                                <ListItemIcon>
                                    <CheckCircleIcon sx={{color: 'primary.main'}}/>
                                </ListItemIcon>
                                <ListItemText primary={'Access to Administrator Dashboard'}/>
                            </ListItem>
                        </List>
                    </Box>
                </Box>
            </Box>
    );
};

export default AdvancedPricingCard;
