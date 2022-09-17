import React, { useEffect, useRef, useState } from "react";
import SignatureCanvas from "react-signature-canvas";
import Box from "@mui/material/Box";
import { Button, Typography } from "@mui/material";

const SignatureEntry = (props) => {
  const [isClear, setIsClear] = useState(false);
  const [canvasSize, setCanvasSize] = useState({ width: 0, height: 0 });

  const MAX_SIGNATURE_WIDTH = 700;

  const { setSignature } = props;

  const canvasContainer = useRef();
  const ref = useRef(null);

  const clearedHandler = () => {
    ref.current.clear();
    setIsClear(true);
    //props.setSignature("");
    setSignature("");
  };

  const checkValid = () => {
    const trimmed = ref.current.getTrimmedCanvas();
    setSignature(trimmed.toDataURL("image/png"));
  };

  useEffect(() => {
    setSignature("");
    const updateCanvasSize = () => {
      const width = Math.min(
        canvasContainer.current.getBoundingClientRect().width,
        MAX_SIGNATURE_WIDTH
      );
      setCanvasSize({ width: width, height: width * 0.6 });
    };
    updateCanvasSize();
    window.addEventListener("resize", updateCanvasSize);
    return () => window.removeEventListener("resize", updateCanvasSize);
  }, [setSignature]);

  return (
    <Box
      ref={canvasContainer}
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
      }}
    >
      <Typography component="h1" variant="h5">
        {props.title}
      </Typography>
      <Box
        sx={{
          width: canvasSize.width,
          height: canvasSize.height,
          border: "3px solid",
          borderColor: "primary.main",
          borderRadius: 10,
          backgroundColor: "#f9f9f9",
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
          onEnd={checkValid}
          clearOnResize={false}
        ></SignatureCanvas>
      </Box>

      <button
        className={"btn-secondary mt-2 focus:ring-transparent"}
        onClick={clearedHandler}
      >
        Clear
      </button>

      {/*<Button*/}
      {/*    onClick={clearedHandler}*/}
      {/*    sx={{border: "2px solid #7F00FF", my: 1}}*/}
      {/*>*/}
      {/*    clear*/}
      {/*</Button>*/}
    </Box>
  );
};

export default SignatureEntry;
