import React from "react";
import { Box, Typography, useTheme } from "@mui/material";

const UserNotificationCard = ({ value }) => {
  const theme = useTheme();
  const boxShadow = theme?.shape?.shadow;

  const colorGenerate = (value) => {
    if (value === "Accepted") {
      return "#A5FF9D";
    } else {
      return "#FF7070";
    }
  };
  return (
    <Box
      width="90%"
      mx="auto"
      bgcolor={colorGenerate(value)}
      pb={3}
      mb={2}
      borderRadius="20px"
      boxShadow={boxShadow}
    >
      <Typography textAlign="end" pt={1} pr={2}>
        jul 09, 2023
      </Typography>
      <Typography
        textAlign="center"
        fontWeight="bold"
        fontSize="22px"
      >{`Your Request has been ${value}`}</Typography>
    </Box>
  );
};

export default UserNotificationCard;
