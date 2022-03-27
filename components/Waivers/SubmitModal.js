/**
 * @file SubmitModal.js
 * @author Devin Arena, Logan Bahr
 * @description A confirmation modal for submitting a waiver.
 * @since 3/27/2022
 **/

import { Box, Button, Modal, Paper, Typography } from "@mui/material";
import { useState } from "react";

const SubmitModal = (props) => {
  const handleClose = () => {
    props.setOpen(false);
  };

  return (
    <Modal open={props.open} onClose={handleClose}>
      <Paper
        sx={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          padding: 5,
          outline: "none",
          border: "3px solid",
          borderColor: "primary.main",
          borderRadius: 5,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="h5" component="h1">
          Are you sure you wish to submit this waiver?
        </Typography>
        <Typography sx={{ mt: 2 }}>
          Once you press submit, you cannot go back and edit your information or
          signature.
        </Typography>
        <Box sx={{ mt: 4 }}>
          <Button variant="outlined" sx={{ mr: 2 }} onClick={handleClose}>
            Cancel
          </Button>
          <Button
            variant="contained"
            sx={{ ml: 2 }}
            onClick={() => {
              props.submit();
              handleClose();
            }}
          >
            Confirm
          </Button>
        </Box>
      </Paper>
    </Modal>
  );
};

export default SubmitModal;
