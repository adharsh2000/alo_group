import { Box, IconButton, InputBase } from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import NotificatioIcon from "../../Icons/Notification.svg";
import ChatIcon from "../../Icons/Chat.svg";
import { Link } from "react-router-dom";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";

const UserHeader = ({open, setOpen}) => {
  return (
    <Box
      width={1250}
      height={100}
      display="flex"
      borderBottom="1px solid black"
    >
      <IconButton aria-label="navbar" sx={{
        "&:hover": {
          backgroundColor: "transparent",
        },
        '@media (min-width: 600px)':{
        display: 'none',
        width:400,
      }}}
      onClick={()=>setOpen(!open)}
      >
        <MenuOutlinedIcon  sx={{
          backgroundColor:'#fff',
          color:'#1272A5',
          fontSize:'33px',
          borderRadius:'5px'
        }}/>
      </IconButton>
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
          <Link to="/notifications">
            <img src={NotificatioIcon} alt="notification" />
          </Link>
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
          <Link to="/messages">
            <img src={ChatIcon} alt="chat" />
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default UserHeader;

