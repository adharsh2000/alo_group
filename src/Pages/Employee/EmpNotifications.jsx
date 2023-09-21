import React from "react";
import { Box, Typography, useTheme } from "@mui/material";
import UserNavbar from "../../Components/UserComponents/UserNavbar";
import UserHeader from "../../Components/UserComponents/UserHeader";
import UserNotificationCard from "../../Components/UserComponents/UserNotificationCard";

const EmpNotifications = () => {
  const theme = useTheme();
  const bgColor = theme?.palette?.background?.default;
  return (
    // <Box width="100%" bgcolor={bgColor} display="flex">
    //   <Box display="flex">
    //     <UserNavbar />
    //   </Box>
    //   <Box ml={36}>
    //     <UserHeader />
    <Box
      width="97%"
      // height={600}
      bgcolor="#fff"
      ml={1}
      mt={1}
      borderRadius="20px"
      sx={{
        height: { xs: 800, md: 600 },
        maxHeight: { xs: 800, md: 600 },
        overflowY: "auto",
        boxSizing: "border-box",
        "&::-webkit-scrollbar": {
          display: "none",
        },
        scrollbarWidth: "none",
        // ml: { xs: 0, md: 6 },
      }}
    >
      <Typography py={1} pl={4} fontWeight="bold" fontSize="22px">
        Notifications
      </Typography>
      <UserNotificationCard value="Accepted" />
      <UserNotificationCard value="Declined" />
      <UserNotificationCard value="Accepted" />
      <UserNotificationCard value="Declined" />
      <UserNotificationCard value="Accepted" />
      <UserNotificationCard value="Declined" />
      <UserNotificationCard value="Accepted" />
      <UserNotificationCard value="Declined" />
      <UserNotificationCard value="Accepted" />
      <UserNotificationCard value="Declined" />
    </Box>
    //   </Box>
    // </Box>
  );
};

export default EmpNotifications;
