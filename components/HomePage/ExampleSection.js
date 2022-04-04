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
                height: {xs: 600, sm: 650, md: 600, lg: 650, xl: 700},
                backgroundColor: "background.secondary",
            }}
        >
            <Container disableGutters={true} maxWidth={"md"} sx={{}}>
                <motion.div initial={{opacity: 0}} whileInView={{opacity: 1}} viewport={{once: true}} transition={{duration: 1, delay: 1}}>
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        <List
                            sx={{
                                color: "white",
                            }}
                        >
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

                        <List
                            sx={{
                                color: "white",
                            }}
                        >
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

                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            textAlign: "center",
                            pt: {xs: 10, sm: 12, md: 12, lg: 18},
                            px: 3,
                        }}
                    >
                        <Typography variant={"h4"} color={"text.content"}>
                            Get to know your customers, understand your demographic —
                            {/* eslint-disable-next-line react/no-unescaped-entities */}
                            where they come from, and when they'll be back.
                        </Typography>
                    </Box>
                </motion.div>
            </Container>
        </Box>
    );
};

export default ExampleSection;
