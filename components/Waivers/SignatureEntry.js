import React, { useEffect, useRef, useState } from "react";
import SignatureCanvas from "react-signature-canvas";
import Box from "@mui/material/Box";
import { Button, Typography } from "@mui/material";

const SignatureEntry = () => {
  const [isClear, setIsClear] = useState(false);
  const [trimURL, setTrimURL] = useState("");
  const [canvasSize, setCanvasSize] = useState({ width: 0, height: 0 });

  const MAX_SIGNATURE_WIDTH = 700;

  const canvasContainer = useRef();
  const ref = useRef(null);

  const clearedHandler = () => {
    console.log("Cleared");
    ref.current.clear();
    setTrimURL("");
    setIsClear(true);
  };

  const trimmedHandler = () => {
    setTrimURL(ref.current.getTrimmedCanvas().toDataURL("image/png"));
  };

  useEffect(() => {
    const updateCanvasSize = () => {
      console.log(canvasContainer.current);
      const width = Math.min(
        canvasContainer.current.getBoundingClientRect().width,
        MAX_SIGNATURE_WIDTH
      );
      setCanvasSize({ width: width, height: width * 0.6 });
    };
    updateCanvasSize();
    window.addEventListener("resize", updateCanvasSize);
    return () => window.removeEventListener("resize", updateCanvasSize);
  }, []);

  return (
    <Box
      ref={canvasContainer}
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "90%",
      }}
    >
      <Typography component="h1" variant="h5">
        Sign Here
      </Typography>
      <Box
        sx={{
          width: canvasSize.width,
          height: canvasSize.height,
          border: "3px solid",
          borderColor: "primary.main",
          borderRadius: 10,
        }}
      >
        <SignatureCanvas
          ref={ref}
          penColor="#000"
          canvasProps={{
            width: canvasSize.width - 6,
            height: canvasSize.height - 6,
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

export default SignatureEntry;
