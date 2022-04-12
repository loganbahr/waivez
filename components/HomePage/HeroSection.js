import React from "react";
import Box from "@mui/material/Box";
import { Container,Typography} from "@mui/material";
import {motion} from "framer-motion";
import PhonePaperFlow from "../Graphics/PhonePaperFlow";

const HeroSection = () => {

    return (
        <Box
            sx={{
                height: {xs: 800, sm: 900, md: 1000, lg: 1100},
                background: "linear-gradient(180deg, #f9f9f9, #bc9bde, #7f00ff)",
                justifyContent: "center",
            }}
        >
            <Container maxWidth={"md"}>
                <Box
                    sx={{
                        mt: 15,
                        height: {xs: 400, sm: 400, md: 600},
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-evenly",
                        alignItems: "center",
                        textAlign: "center",
                    }}>
                    <motion.div initial={{opacity: 0}} whileInView={{opacity: 1}}
                                transition={{duration: 1, delay: 0.5}}>
                        <Typography variant={"h2"}>
                            Any waiver.
                        </Typography>
                    </motion.div>

                    <motion.div initial={{opacity: 0}} whileInView={{opacity: 1}}
                                transition={{duration: 1, delay: 1}}>
                        <Typography variant={"h2"}>All in one place.</Typography>
                    </motion.div>

                    <Box sx={{
                        width: {xs: 250, sm: 300, md: 350},
                        height: {xs: 250, sm: 300, md: 350},
                        my: 3,
                        mr: 8,
                    }}>
                        <PhonePaperFlow width={'100%'} height={'100%'} color={'#7f00ff'} />
                    </Box>


                    <motion.div initial={{opacity: 0}} whileInView={{opacity: 1}}
                                transition={{duration: 1, delay: 0.5}}>
                        <Typography variant={"h2"} sx={{}}>
                            Any business.
                        </Typography>
                    </motion.div>


                    <motion.div whileHover={{scale: 1.4}} initial={{opacity: 0}} whileInView={{opacity: 1}}
                                transition={{opacity: {duration: 1, delay: 0.5}, scale: {duration: 0.2}}}>
                        <Typography variant={"h2"} color={"text.content"} sx={{mt: 0}}>
                            Anywhere.
                        </Typography>
                    </motion.div>
                </Box>

                <motion.div initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration: 1, delay: 0.5}}>
                    <Typography
                        variant={"h2"}
                        color={"text.content"}
                        sx={{
                            textAlign: "center",
                            mt: 20
                        }}>
                        On the water, in the air, and anywhere between — Waivez has it covered.
                    </Typography>
                </motion.div>
            </Container>
        </Box>
    );
};

export default HeroSection;
