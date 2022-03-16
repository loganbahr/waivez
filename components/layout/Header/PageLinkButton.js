import React from 'react';
import Link from "next/link";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

const PageLinkButton = ({link, text}) => {
    return (
        <Link href={link}>
            <IconButton sx={{display: {xs: 'none', sm: 'flex'}}}>
                <Typography
                    sx={{
                        color: "white",
                        fontSize: {sm: 18, md: 20, lg: 23, xl: 28},
                        fontFamily: "Poppins, sans-serif",
                    }}>
                    {text}
                </Typography>
            </IconButton>
        </Link>
    );
};

export default PageLinkButton;
