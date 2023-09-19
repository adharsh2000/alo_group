import React from "react";
import { Avatar, Box, Button, Typography, useTheme } from "@mui/material";

const AdminLeaveCard = () => {
  const theme = useTheme();
  const shadow = theme?.shape?.shadow;
  return (
    <Box
      p={2}
      bgcolor="#fff"
      width="95%"
      borderRadius="15px"
      border="1px solid rgba(0, 0, 0, 0.50)"
      boxShadow={shadow}
    >
      <Box
        width="100%"
        bgcolor="#D9D9D9"
        borderRadius="15px"
        display="flex"
        flexDirection="column"
        alignItems="center"
        p={1}
      >
        <Avatar
          sx={{
            width: 80,
            height: 80,
          }}
        />
        <Typography fontWeight="bold">Admin</Typography>
        <Typography fontSize="medium">Ui/Ux Designer</Typography>
      </Box>
      <Box p={1}>
        <Typography mt={1} fontWeight="bold">
          Subject
        </Typography>
        <Typography>Leave request on Jul 11,2023</Typography>
        <Typography mt={1} fontWeight="bold">
          Message
        </Typography>
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed .....
        </Typography>
      </Box>
      <Box display="flex" justifyContent="space-between">
        <Button
          sx={{
            backgroundColor: "#A5FF9D",
            color: "#000",
            width: "45%",
            "&:hover": {
              backgroundColor: "#A5FF9D",
            },
          }}
        >
          Accept
        </Button>
        <Button
          sx={{
            backgroundColor: "#FF7070",
            color: "#000",
            width: "45%",
            "&:hover": {
              backgroundColor: "#FF7070",
            },
          }}
        >
          Decline
        </Button>
      </Box>
    </Box>
  );
};

export default AdminLeaveCard;
