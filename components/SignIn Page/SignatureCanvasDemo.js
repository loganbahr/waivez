import React from 'react';
import SignatureCanvas from 'react-signature-canvas';
import Box from "@mui/material/Box";
import {Button} from "@mui/material";

const SignatureCanvasDemo = () => {


    return (
        <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',}}>
            <Box>
                <SignatureCanvas
                    penColor='#000'
                    canvasProps=
                        {{
                            height: '240px',
                            width: '490px',
                        }}>
                </SignatureCanvas>
            </Box>

            <Box>
                <Button sx={{border: '2px solid #7F00FF'}}>
                    clear
                </Button>
            </Box>

            <Box>
                <Button sx={{border: '2px solid #7F00FF'}}>
                    trim
                </Button>
            </Box>

        </Box>
    );
};

export default SignatureCanvasDemo;
