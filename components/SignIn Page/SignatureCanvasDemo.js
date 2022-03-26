import React, { useEffect, useRef, useState } from "react";
import SignatureCanvas from "react-signature-canvas";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";

const SignatureCanvasDemo = () => {
  const [isClear, setIsClear] = useState(false);
  const [trimURL, setTrimURL] = useState("");

  const clearedHandler = () => {
    console.log("Cleared");
    ref.current.clear();
    setTrimURL("");
    setIsClear(true);
  };

  const trimmedHandler = () => {
    console.log(ref.current.getTrimmedCanvas());
    setTrimURL(ref.current.getTrimmedCanvas().toDataURL("image/png"));
  };

  const ref = useRef(null);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box>
        <SignatureCanvas
          ref={ref}
          penColor="#000"
          canvasProps={{
            height: "240px",
            width: "490px",
            className: "sigCanvas",
          }}
        ></SignatureCanvas>
      </Box>

      <Button
        onClick={clearedHandler}
        sx={{ border: "2px solid #7F00FF", my: 1 }}
      >
        clear
      </Button>

      <Button onClick={trimmedHandler} sx={{ border: "2px solid #7F00FF" }}>
        trim
      </Button>

      {trimURL && <img src={trimURL} />}
    </Box>
  );
};

export default SignatureCanvasDemo;
