import React from "react";
import Box from "@mui/material/Box";
import Snackbar from "@mui/material/Snackbar";
import Slide from "@mui/material/Slide";
import { Alert } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { hideSnackbar } from "../../Store/Slices/alertSlice";

export default function PositionedSnackbar() {
  const { open, message, severity } = useSelector((state) => state.alert);
 
  const dispatch = useDispatch()
  const handleClose = () => {
    dispatch(hideSnackbar())
  };

  function TransitionLeft(props) {
    return <Slide {...props} direction="left" />;
  }

  return (
    <Box sx={{ width: 300 }} position="absolute">
        <Snackbar
          open={open}
          // onClose={handleClose}
          TransitionComponent={TransitionLeft}
          // message="I love snacks"
          key={TransitionLeft}
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        >
          <Alert
            onClose={handleClose}
            severity={severity}
            sx={{ width: "100%" }}
          >
            {message}
          </Alert>
        </Snackbar>
    </Box>
  );
}
