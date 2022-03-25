import React, {useEffect, useRef, useState} from 'react';
import SignatureCanvas from 'react-signature-canvas';
import Box from "@mui/material/Box";
import {Button} from "@mui/material";

const SignatureCanvasDemo = () => {

    const [isClear, setIsClear] = useState(false);
    const [isTrimmed, setIsTrimmed] = useState(false);

    const clearedHandler = () => {
        console.log('Cleared');
        ref.current.clear();
        setIsClear(true);
    };
    const trimmedHandler = () => {
        console.log('Trimmed');
        console.log(ref.current.getTrimmedCanvas());
        trimmedImage();
        setIsTrimmed(true);
    };
    const trimmedImage = () => {

        return (
            <canvas>
                {ref.current.getTrimmedCanvas()};
            </canvas>
        )
    }
    const ref = useRef(null);

    return (
        <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',}}>
            <Box>
                <SignatureCanvas
                    ref={ref}
                    penColor='#000'
                    canvasProps=
                        {{
                            height: '240px',
                            width: '490px',
                            className: 'sigCanvas'
                        }}>
                </SignatureCanvas>
            </Box>

            <Button onClick={clearedHandler} sx={{border: '2px solid #7F00FF', my: 1}}>
                clear
            </Button>

            <Button onClick={trimmedHandler} sx={{border: '2px solid #7F00FF'}}>
                trim
            </Button>


        </Box>
    );
};

export default SignatureCanvasDemo;
