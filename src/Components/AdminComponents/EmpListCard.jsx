import React from "react";
import { Avatar, Box, IconButton, Typography, useTheme } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const EmpListCard = () => {
  const theme = useTheme();
  const shadow = theme?.shape?.shadow;
  return (
    <Box
      width="100%"
      p
      borderRadius="10px"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      border="1px solid #D9D9D9"
      boxShadow={shadow}
      mb={1}
    >
      <Avatar
        alt="Remy Sharp"
        src="/static/images/avatar/1.jpg"
        sx={{ width: 56, height: 56, borderRadius: 1 }}
      />
      <Box>
        <Typography textAlign="center">Name</Typography>
        <Typography textAlign="center" fontWeight="bold">
          Lorem Ipsum
        </Typography>
      </Box>
      <Box>
        <Typography textAlign="center">Name</Typography>
        <Typography textAlign="center" fontWeight="bold">
          Lorem Ipsum
        </Typography>
      </Box>
      <Box>
        <Typography textAlign="center">Name</Typography>
        <Typography textAlign="center" fontWeight="bold">
          Lorem Ipsum
        </Typography>
      </Box>
      <Box>
        <Typography textAlign="center">Name</Typography>
        <Typography textAlign="center" fontWeight="bold">
          Lorem Ipsum
        </Typography>
      </Box>
      <Box>
        <Typography textAlign="center">Name</Typography>
        <Typography textAlign="center" fontWeight="bold">
          Lorem Ipsum
        </Typography>
      </Box>
      <Box>
        <Typography textAlign="center">Name</Typography>
        <Typography textAlign="center" fontWeight="bold">
          Lorem Ipsum
        </Typography>
      </Box>
      <Box>
        <Typography textAlign="center">Name</Typography>
        <Typography textAlign="center" fontWeight="bold">
          Lorem Ipsum
        </Typography>
      </Box>
      <Box>
        <IconButton>
          <MoreVertIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default EmpListCard;
