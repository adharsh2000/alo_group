import { Box, IconButton, InputBase } from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import NotificatioIcon from "../../Icons/Notification.svg";
import ChatIcon from "../../Icons/Chat.svg";

const UserHeader = () => {
  return (
    <Box
      width={1250}
      height={100}
      display="flex"
      borderBottom="1px solid black"
    >
      <Box
        width="70%"
        height="100%"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Box component="form" bgcolor="white" width={300} borderRadius="15px">
          <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
            <SearchIcon />
          </IconButton>
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Search"
            inputProps={{ "aria-label": "search" }}
          />
        </Box>
      </Box>
      <Box
        width="30%"
        height="100%"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Box
          bgcolor="white"
          display="flex"
          borderRadius="10px"
          width="40px"
          height="40px"
          alignItems="center"
          justifyContent="center"
          mr={5}
        >
          <img src={NotificatioIcon} alt="notification" />
        </Box>
        <Box
          bgcolor="white"
          display="flex"
          borderRadius="10px"
          width="40px"
          height="40px"
          alignItems="center"
          justifyContent="center"
        >
          <img src={ChatIcon} alt="chat" />
        </Box>
      </Box>
    </Box>
  );
};

export default UserHeader;
