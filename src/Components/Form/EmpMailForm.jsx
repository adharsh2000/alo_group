import React from "react";
import { Box, TextField, Typography, useTheme } from "@mui/material";
import SendIcon from "../../Icons/SendIcon.svg";

const EmpMailForm = () => {
  const theme = useTheme();
  const mainColor = theme?.palette?.primary?.main;

  return (
    <Box component="form" width="94%" mx={3} my={2}>
      <Box display="flex" justifyContent="space-between">
        <Typography fontWeight="bold" fontSize="22px">
          Mailing
        </Typography>
        <Box
          component="button"
          bgcolor={mainColor}
          display="flex"
          p={1}
          gap={1}
          alignItems="center"
          justifyContent="space-evenly"
          border="none"
          borderRadius="10px"
          sx={{
            cursor:'pointer',
          }}
        >
          <img src={SendIcon} alt="send" width={25} />
          <Typography component="h4" variant="body1" color="#fff">
            Send Mail
          </Typography>
        </Box>
      </Box>
      <Box my={2}>
        <Typography mb={1}>Subject</Typography>
        <TextField fullWidth />
      </Box>
      <Box my={2}>
        <Typography mb={1}>Message</Typography>
        <TextField
          id="outlined-multiline-static"
          fullWidth
          multiline
          rows={15}
        />
      </Box>
    </Box>
  );
};

export default EmpMailForm;
