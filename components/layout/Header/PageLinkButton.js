import React from "react";
import Typography from "@mui/material/Typography";
import NextLink from "next/link";
import {Button, Link} from "@mui/material";

const PageLinkButton = ({link, text}) => {
    return (
        <NextLink href={link} passHref>
            <Link>
                <Button
                    sx={{display: {xs: "none", sm: "flex", textTransform: "none"}}}
                >
                    <Typography
                        sx={{
                            color: 'text.content',
                            fontSize: {sm: 18, md: 20, lg: 23, xl: 28},
                            fontWeight: 500,
                        }}>
                        {text}
                    </Typography>
                </Button>
            </Link>
        </NextLink>
    );
};

export default PageLinkButton;
