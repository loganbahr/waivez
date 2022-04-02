import React from 'react';
import {Typography} from "@mui/material";

const TitleText = ({content}) => {
    return (
        <Typography
            sx={{
                fontFamily: 'Poppins, sans-serif',
                fontSize: {xs: 55, sm: 60, md: 80, lg: 90, xl: 100},
                mt: 8,
                backgroundColor: 'white'
            }}>
            {content}
        </Typography>
    );
};

export default TitleText;
