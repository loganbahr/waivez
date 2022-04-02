import React from 'react';
import {Typography} from "@mui/material";

const ContentText = ({content, color}) => {
    return (
        <Typography sx={{
            fontFamily: 'Poppins, sans-serif',
            fontSize: {xs: 13, sm: 19, md: 22, lg: 28, xl: 32},
            lineHeight: 1.5,
            textAlign: 'center',
            my: 2,
            backgroundColor: 'white',
            color: color,
        }}>
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            {content}
        </Typography>
    );
};

export default ContentText;
