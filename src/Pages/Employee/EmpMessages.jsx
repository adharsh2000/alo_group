import React from "react";
import { Box, Divider, TextField, Typography, useTheme } from "@mui/material";
import UserNavbar from "../../Components/UserComponents/UserNavbar";
import UserHeader from "../../Components/UserComponents/UserHeader";
import UserChatCard from "../../Components/UserComponents/UserChatCard";

const EmpMessages = () => {
  const theme = useTheme();
  const bgColor = theme?.palette?.background?.default;
  const boxShadow = theme?.shape?.shadow;
  return (
    <Box width="100%" bgcolor={bgColor} display="flex">
      <Box display="flex">
        <UserNavbar />
      </Box>
      <Box ml={36}>
        <UserHeader />
        <Box
          width="97%"
          height={600}
          bgcolor="#fff"
          ml={1}
          mt={1}
          borderRadius="20px"
          
        >
          <Typography fontWeight="bold" fontSize="22px" py={2} pl={4}>
            Messages
          </Typography>
          <Divider />
          <Box width="90%" mx="auto">
            <Box height={470}
            sx={{
            maxHeight: 470,
            overflowY: "auto",
            boxSizing: "border-box",
            "&::-webkit-scrollbar": {
              display: "none",
            },
            scrollbarWidth: "none",
          }}
            >
                <UserChatCard me={true}/>
                <UserChatCard />
                <UserChatCard />
                <UserChatCard me={true}/>
                <UserChatCard me={true}/>
                <UserChatCard />
                <UserChatCard />
                <UserChatCard me={true}/>
                <UserChatCard me={true}/>
                <UserChatCard />
                <UserChatCard />
                <UserChatCard me={true}/>
            </Box>
            <TextField placeholder="Write a message" fullWidth sx={{
                boxShadow:boxShadow,
                overflow:'hidden',
            }}/>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default EmpMessages;
