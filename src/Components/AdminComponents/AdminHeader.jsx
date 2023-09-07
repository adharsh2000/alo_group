import React from "react";
import { Box, IconButton, InputBase, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import CreateMail from "../../Icons/AdminIcons/CreateMail.svg";
import AdminAvatar from "../../Icons/AdminIcons/AdminAvatarIcon.svg";

const AdminHeader = () => {
  return (
    <Box
      width="100%"
      //   bgcolor="orangered"
      height="5rem"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
    >
      <Box
        bgcolor="white"
        height="3rem"
        width="3rem"
        borderRadius="10px"
        sx={{
          display: { xs: "block", sm: "none" },
        }}
      >
        X
      </Box>
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
      <Box bgcolor="white" height="3rem" width="3rem" borderRadius="10px">
        <img src={CreateMail} alt="mail" />
      </Box>
      <Box
        bgcolor="white"
        height="100%"
        width="15rem"
        borderRadius="20px 0px 0px 20px"
        sx={{
          display: { xs: "none", sm: "flex" },
        }}
        boxShadow="0 10px 10px -10px rgba(0, 0, 0, 0.5)"
        // display="flex"
        alignItems="center"
        justifyContent="space-evenly"
      >
        <Box>
          <Typography
            fontWeight="bold"
            color="#1272A5"
            fontSize="22px"
          >
            Admin
          </Typography>
          <Typography fontSize="12px">Edit Profile</Typography>
        </Box>
        <Box>
          <img src={AdminAvatar} alt="avatar" width={70} />
        </Box>
      </Box>
    </Box>
  );
};

export default AdminHeader;
