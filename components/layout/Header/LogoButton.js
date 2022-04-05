import React from 'react';
import Link from "next/link";
import IconButton from "@mui/material/IconButton";
import ArticleIcon from "@mui/icons-material/Article";
import Logo from "../../Graphics/Logo";

const LogoButton = () => {
    return (
        <Link href='/'>
            <IconButton sx={{color: 'white'}}>
                <Logo width={'100%'} height={'100%'} color={'#f9f9f9'} />
            </IconButton>
        </Link>
    );
};

export default LogoButton;
