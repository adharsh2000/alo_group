import { Box, useTheme } from "@mui/material";
import React from "react";
import UserHeader from "../../Components/UserComponents/UserHeader";
import UserNavbar from "../../Components/UserComponents/UserNavbar";
import UserDashboardMainContent from "../../Components/UserComponents/UserDashboardMainContent";
import DashboardMessagecontainer from "../../Components/UserComponents/DashboardMessagecontainer";
import DashboardReminderContainer from "../../Components/UserComponents/DashboardReminderContainer";

const EmpDashboard = () => {
  const theme = useTheme();
  const bgColor = theme?.palette?.background?.default;

  return (
    <Box width="100%" bgcolor={bgColor} display="flex">
      <Box display="flex">
        <UserNavbar />
      </Box>
      <Box ml={36}>
        <UserHeader />
        <Box display="flex">
          <UserDashboardMainContent />
          <Box display="flex" flexDirection="column">
            <DashboardMessagecontainer />
            <DashboardReminderContainer />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default EmpDashboard;
