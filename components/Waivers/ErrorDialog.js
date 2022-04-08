/**
 * @file ErrorDialog.js
 * @author Devin Arena, Logan Bahr
 * @description A confirmation modal for error messages.
 * @since 3/27/2022
 **/

import { Box, Button, Modal, Paper, Typography } from "@mui/material";

const ErrorDialog = (props) => {
  const handleClose = () => {
    props.setErrorMessage("");
  };

  return (
    <Modal open={props.error.length > 0} onClose={handleClose}>
      <Paper
        sx={{
          width: { sm: "80%", md: "auto" },
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
          The following error has occurred.
        </Typography>
        <Typography sx={{ mt: 2, whiteSpace: "pre-line" }}>
          {props.error}
        </Typography>
        <Box sx={{ mt: 4, display: "flex" }}>
          <Button variant="outlined" sx={{ mr: 2 }} onClick={handleClose}>
            Cancel
          </Button>
          <Button
            variant="contained"
            sx={{ ml: 2 }}
            onClick={() => {
              handleClose();
            }}
          >
            Okay
          </Button>
        </Box>
      </Paper>
    </Modal>
  );
};

export default ErrorDialog;
