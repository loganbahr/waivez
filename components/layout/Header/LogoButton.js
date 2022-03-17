import React from 'react';
import Link from "next/link";
import IconButton from "@mui/material/IconButton";
import ArticleIcon from "@mui/icons-material/Article";

const LogoButton = () => {
    return (
        <Link href='/'>
            <IconButton sx={{color: 'white'}}>
                <ArticleIcon/>
            </IconButton>
        </Link>
    );
};

export default LogoButton;
