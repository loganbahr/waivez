import React from 'react';
import {Container, List, ListItem, ListItemIcon, ListItemText, Typography} from "@mui/material";
import Box from "@mui/material/Box";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import LooksOneIcon from '@mui/icons-material/LooksOne';
import LooksTwoIcon from '@mui/icons-material/LooksTwo';
import Looks3Icon from '@mui/icons-material/Looks3';
import Looks4Icon from '@mui/icons-material/Looks4';
import Looks5Icon from '@mui/icons-material/Looks5';

const FeaturesPricingSection = () => {
    return (
        <Box sx={{
            width: '100vw',
            height: {xs: 1800, sm: 2300, md: 2400, lg: 2700, xl: 2800},
            background: 'linear-gradient(0deg, #f9f9f9, #bc9bde, #7f00ff)',

        }}>
            <Container maxWidth={'lg'}>

                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: 'center',
                }}>
                    <Typography variant={'h2'} color={'text.content'}>
                        The most advanced waiver technology in the industry.
                    </Typography>

                    <Box sx={{display: 'flex', flexDirection: 'row', mt: 5}}>
                        <List sx={{color: 'white',}}>
                            <ListItem>
                                <ListItemIcon>
                                    <CheckCircleIcon fontSize='large' sx={{color: 'white'}}/>
                                </ListItemIcon>
                                <ListItemText primary={'Return Probability Index (RPI)®'}/>
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <CheckCircleIcon fontSize='large' sx={{color: 'white'}}/>
                                </ListItemIcon>
                                <ListItemText primary={'Customer Heat Maps'}/>
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <CheckCircleIcon fontSize='large' sx={{color: 'white'}}/>
                                </ListItemIcon>
                                <ListItemText primary={'Machine Learning & AI Analytics'}/>
                            </ListItem>

                        </List>
                    </Box>
                </Box>

                <Typography color={'text.content'} variant='h3'
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                textAlign: 'center',
                                mt: 15,
                                mb: 2
                            }}>
                    Choose a plan that meets your needs:
                </Typography>

                <Container maxWidth={'md'} sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'start',
                        alignItems: 'center',
                        my: 2,
                        background: 'radial-gradient(ellipse at 101% 72%,#7f00ff, #9833ff, #b266ff, #cb99ff)',
                        boxShadow: '0px 0px 10px 0px rgba(127,0,255,0.75)',
                        height: {xs: 310, sm: 450, md: 500, lg: 550, xl: 600},
                        width: {xs: 340, sm: 490, md: 550, lg: 650, xl: 750},
                        borderRadius: 5,
                    }}>
                        <Typography variant={'h3'} color='text.content'
                                    sx={{mt: 2, textShadow: '0px 0px 10px #FFFFFF'}}>
                            Standard
                        </Typography>

                        <Typography variant={'h6'} color='text.content'
                                    sx={{mt: 2, textShadow: '0px 0px 10px #FFFFFF'}}>
                            $19.99/month + $0.20/waiver
                        </Typography>

                        <Typography color='text.content'
                                    sx={{
                                        fontSize: {xs: 14, sm: 22, md: 25, lg: 30, xl: 34},
                                        mt: 2,
                                        px: 5,
                                        textAlign: 'center'
                                    }}>
                            The best option for businesses that have less than 100 customers per month. Has access to
                            basic features.
                        </Typography>

                        <Box sx={{mt: {xs: 3, sm: 7, md: 10}}}>
                            <List sx={{color: 'white'}}>
                                <ListItem disablePadding={true} disableGutters={true}>
                                    <ListItemIcon>
                                        <LooksOneIcon fontSize='small' sx={{color: 'white'}}/>
                                    </ListItemIcon>
                                    <ListItemText
                                        disableTypography={true}
                                        sx={{
                                            fontSize: {xs: 17, sm: 19, md: 23, lg: 26, xl: 30}
                                        }}

                                        primary={'Ability to search any waiver'}/>
                                </ListItem>
                                <ListItem disablePadding={true} disableGutters={true}>
                                    <ListItemIcon>
                                        <LooksTwoIcon fontSize='small' sx={{color: 'white'}}/>
                                    </ListItemIcon>
                                    <ListItemText
                                        disableTypography={true}
                                        sx={{
                                            fontSize: {xs: 17, sm: 19, md: 23, lg: 26, xl: 30}
                                        }}

                                        primary={'Advertise to your customers'}/>
                                </ListItem>
                            </List>
                        </Box>

                    </Box>

                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'start',
                        alignItems: 'center',
                        my: 2,
                        background: 'radial-gradient(ellipse at 101% 72%,#7f00ff, #9833ff, #b266ff, #cb99ff)',
                        boxShadow: '0px 0px 10px 0px rgba(127,0,255,0.75)',
                        height: {xs: 340, sm: 470, md: 510, lg: 600, xl: 650},
                        width: {xs: 340, sm: 490, md: 550, lg: 650, xl: 750},
                        borderRadius: 5,
                    }}>
                        <Typography variant={'h3'} color='text.content'
                                    sx={{mt: 2, textShadow: '0px 0px 10px #FFFFFF'}}>
                            Growing
                        </Typography>

                        <Typography variant={'h6'} color='text.content'
                                    sx={{mt: 2, textShadow: '0px 0px 10px #FFFFFF'}}>
                            $39.99/month + $0.15/waiver
                        </Typography>

                        <Typography color='text.content'
                                    sx={{
                                        fontSize: {xs: 14, sm: 22, md: 25, lg: 30, xl: 34},
                                        mt: 2,
                                        px: 5,
                                        textAlign: 'center'
                                    }}>
                            For businesses that have less than 1,000 customers per month, but are growing
                            quickly. Has access to most features.
                        </Typography>

                        <Box sx={{mt: {xs: 1, sm: 3, md: 5, lg: 7}}}>
                            <List sx={{color: 'white'}}>
                                <ListItem disablePadding={true} disableGutters={true}>
                                    <ListItemIcon>
                                        <LooksOneIcon fontSize='small' sx={{color: 'white'}}/>
                                    </ListItemIcon>
                                    <ListItemText
                                        disableTypography={true}
                                        sx={{
                                            fontSize: {xs: 17, sm: 19, md: 23, lg: 26, xl: 30}
                                        }}

                                        primary={'Ability to search any waiver'}/>
                                </ListItem>
                                <ListItem disablePadding={true} disableGutters={true}>
                                    <ListItemIcon>
                                        <LooksTwoIcon fontSize='small' sx={{color: 'white'}}/>
                                    </ListItemIcon>
                                    <ListItemText
                                        disableTypography={true}
                                        sx={{
                                            fontSize: {xs: 17, sm: 19, md: 23, lg: 26, xl: 30}
                                        }}

                                        primary={'Advertise to your customers'}/>
                                </ListItem>

                                <ListItem disablePadding={true} disableGutters={true}>
                                    <ListItemIcon>
                                        <Looks3Icon fontSize='small' sx={{color: 'white'}}/>
                                    </ListItemIcon>
                                    <ListItemText
                                        disableTypography={true}
                                        sx={{
                                            fontSize: {xs: 17, sm: 19, md: 23, lg: 26, xl: 30}
                                        }}
                                        primary={'Return Probability Index (RPI)®'}/>
                                </ListItem>
                            </List>
                        </Box>

                    </Box>

                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'start',
                        alignItems: 'center',
                        my: 2,
                        background: 'radial-gradient(ellipse at 101% 72%,#7f00ff, #9833ff, #b266ff, #cb99ff)',
                        boxShadow: '0px 0px 10px 0px rgba(127,0,255,0.75)',
                        height: {xs: 360, sm: 450, md: 550, lg: 600, xl: 650},
                        width: {xs: 340, sm: 490, md: 550, lg: 650, xl: 750},
                        borderRadius: 5,
                    }}>
                        <Typography variant={'h3'} color='text.content'
                                    sx={{mt: 2, textShadow: '0px 0px 10px #FFFFFF'}}>
                            Corporate
                        </Typography>


                        <Typography variant={'h6'} color='text.content'
                                    sx={{mt: 2, textShadow: '0px 0px 10px #FFFFFF'}}>
                            $99.99/month + $0.10/waiver
                        </Typography>

                        <Typography color='text.content'
                                    sx={{
                                        fontSize: {xs: 14, sm: 22, md: 25, lg: 30, xl: 34},
                                        mt: 2,
                                        px: 5,
                                        textAlign: 'center'
                                    }}>
                            For businesses with thousands of customers monthly. Has access to all features, including
                            any future features.
                        </Typography>

                        <Box sx={{mt: {xs: 0, md: 2, lg: 4, xl: 8}}}>
                            <List sx={{color: 'white'}}>
                                <ListItem disablePadding={true} disableGutters={true}>
                                    <ListItemIcon>
                                        <LooksOneIcon fontSize='small' sx={{color: 'white'}}/>
                                    </ListItemIcon>
                                    <ListItemText
                                        disableTypography={true}
                                        sx={{
                                            fontSize: {xs: 17, sm: 19, md: 23, lg: 26, xl: 30}
                                        }}

                                        primary={'Ability to search any waiver'}/>
                                </ListItem>
                                <ListItem disablePadding={true} disableGutters={true}>
                                    <ListItemIcon>
                                        <LooksTwoIcon fontSize='small' sx={{color: 'white'}}/>
                                    </ListItemIcon>
                                    <ListItemText
                                        disableTypography={true}
                                        sx={{
                                            fontSize: {xs: 17, sm: 19, md: 23, lg: 26, xl: 30}
                                        }}

                                        primary={'Advertise to your customers'}/>
                                </ListItem>

                                <ListItem disablePadding={true} disableGutters={true}>
                                    <ListItemIcon>
                                        <Looks3Icon fontSize='small' sx={{color: 'white'}}/>
                                    </ListItemIcon>
                                    <ListItemText
                                        disableTypography={true}
                                        sx={{
                                            fontSize: {xs: 17, sm: 19, md: 23, lg: 26, xl: 30}
                                        }}
                                        primary={'Return Probability Index (RPI)®'}/>
                                </ListItem>

                                <ListItem disablePadding={true} disableGutters={true}>
                                    <ListItemIcon>
                                        <Looks4Icon fontSize='small' sx={{color: 'white'}}/>
                                    </ListItemIcon>
                                    <ListItemText
                                        disableTypography={true}
                                        sx={{
                                            fontSize: {xs: 17, sm: 19, md: 23, lg: 26, xl: 30}
                                        }}
                                        primary={'Customer Heat Maps'}/>
                                </ListItem>
                            </List>
                        </Box>
                    </Box>
                </Container>
            </Container>
        </Box>
    );
};

export default FeaturesPricingSection;
