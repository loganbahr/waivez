import React from 'react';
import {Typography} from "@mui/material";

const PageSubtitleText = ({content}) => {
    return (
        <Typography sx={{
            fontFamily: 'Poppins, sans-serif',
            fontSize: {xs: 15, sm: 22, md: 26, lg: 33, xl: 38},
            lineHeight: 1.5,
            textAlign: 'center',
            my: 2,
            backgroundColor: 'white'
        }}>
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            {content}
        </Typography>
    );
};

export default PageSubtitleText;
