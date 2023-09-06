import React from "react";
import { Avatar, Box, Typography, useTheme } from "@mui/material";

const UserChatCard = ({ me }) => {
    const theme = useTheme();
    const boxShadow = theme?.shape?.shadow;
    
  return (
    <Box
      display="flex"
      width="100%"
      gap={2}
      my={2}
      alignItems="center"
      sx={me && { flexDirection: "row-reverse" }}
    >
      <Avatar sx={{ width: 56, height: 56 }} />
      <Box
        border="1px solid #000"
        borderRadius="10px"
        p={1}
        width="87%"
        sx={me ?{backgroundColor:'#A3D8FF'} : {backgroundColor:'#EEEEEE'}}
        boxShadow={boxShadow}
      >
        <Typography fontWeight="bold">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque,
          blanditiis aspernatur Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Eum quis consequuntur, deleniti quidem in
          necessitatibus animi iste! Nesciunt repellendus quos nihil numquam
          ipsam unde, quod iste nulla molestias placeat tempore.
        </Typography>
      </Box>
    </Box>
  );
};

export default UserChatCard;
