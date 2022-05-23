import React from "react";
import Box from "@mui/material/Box";
import {
    Container,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Typography,
} from "@mui/material";
import FeedOutlinedIcon from "@mui/icons-material/FeedOutlined";
import {motion} from "framer-motion";

const ExampleSection = () => {
    return (
        <Box
            sx={{
                // height: {xs: 600, sm: 650, md: 600, lg: 650, xl: 700},
                backgroundColor: "background.secondary",
            }}
        >
            <Container disableGutters={true} maxWidth={"md"} sx={{}}>


                <motion.div initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration: 1, delay: 1}}>
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                        }}>
                        <List disablePadding={true}
                            sx={{
                                color: "white",
                                pt: 5,
                            }}>
                            <ListItem>
                                <ListItemIcon>
                                    <FeedOutlinedIcon fontSize="large" sx={{color: "white"}}/>
                                </ListItemIcon>
                                <ListItemText primary="Parasailing"/>
                            </ListItem>

                            <ListItem>
                                <ListItemIcon>
                                    <FeedOutlinedIcon fontSize="large" sx={{color: "white"}}/>
                                </ListItemIcon>
                                <ListItemText primary="Jet-skiing"/>
                            </ListItem>

                            <ListItem>
                                <ListItemIcon>
                                    <FeedOutlinedIcon fontSize="large" sx={{color: "white"}}/>
                                </ListItemIcon>
                                <ListItemText primary="Rock-climbing"/>
                            </ListItem>

                            <ListItem>
                                <ListItemIcon>
                                    <FeedOutlinedIcon fontSize="large" sx={{color: "white"}}/>
                                </ListItemIcon>
                                <ListItemText primary="Skydiving"/>
                            </ListItem>

                            <ListItem>
                                <ListItemIcon>
                                    <FeedOutlinedIcon fontSize="large" sx={{color: "white"}}/>
                                </ListItemIcon>
                                <ListItemText primary="Concerts"/>
                            </ListItem>
                        </List>

                        <List disablePadding={true}
                            sx={{
                                color: "white",
                                pt: 5
                            }}>
                            <ListItem>
                                <ListItemIcon>
                                    <FeedOutlinedIcon fontSize="large" sx={{color: "white"}}/>
                                </ListItemIcon>
                                <ListItemText primary="Events"/>
                            </ListItem>

                            <ListItem>
                                <ListItemIcon>
                                    <FeedOutlinedIcon fontSize="large" sx={{color: "white"}}/>
                                </ListItemIcon>
                                <ListItemText primary="Expos"/>
                            </ListItem>

                            <ListItem>
                                <ListItemIcon>
                                    <FeedOutlinedIcon fontSize="large" sx={{color: "white"}}/>
                                </ListItemIcon>
                                <ListItemText primary="Gyms"/>
                            </ListItem>

                            <ListItem>
                                <ListItemIcon>
                                    <FeedOutlinedIcon fontSize="large" sx={{color: "white"}}/>
                                </ListItemIcon>
                                <ListItemText primary="Gun ranges"/>
                            </ListItem>

                            <ListItem>
                                <ListItemIcon>
                                    <FeedOutlinedIcon fontSize="large" sx={{color: "white"}}/>
                                </ListItemIcon>
                                <ListItemText primary="Many more!"/>
                            </ListItem>
                        </List>

                    </Box>
                </motion.div>

                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        textAlign: "center",
                        py: {xs: 10, sm: 12, md: 12, lg: 18},
                        px: 3,
                    }}>
                    <motion.div initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration: 1}}>
                        <Typography variant={"h4"} color={"text.content"}>
                            Get to know your customers, understand your demographic —
                            where they come from, and when they&apos;ll be back.
                        </Typography>

                    </motion.div>
                </Box>
            </Container>
        </Box>
    );
};

export default ExampleSection;
