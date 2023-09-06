import { Box, Button, useTheme } from "@mui/material";
import React, { useState } from "react";
import UserHeader from "../../Components/UserComponents/UserHeader";
import UserNavbar from "../../Components/UserComponents/UserNavbar";
import UserDashboardMainContent from "../../Components/UserComponents/UserDashboardMainContent";
import DashboardMessagecontainer from "../../Components/UserComponents/DashboardMessagecontainer";
import DashboardReminderContainer from "../../Components/UserComponents/DashboardReminderContainer";

const EmpDashboard = () => {
  const theme = useTheme();
  const bgColor = theme?.palette?.background?.default;
  const [open,setOpen] = useState(false)

  return (
    <Box width="100%" bgcolor={bgColor} display="flex">
      <Box display="flex">
        <UserNavbar open={open} setOpen={setOpen} />
      </Box>
      <Box ml={36}>
        <UserHeader />
        <Button onClick={() => setOpen(!open)}>
          show
        </Button>
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
