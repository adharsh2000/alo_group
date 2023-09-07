import { Box, useTheme } from "@mui/material";
import React, { useState } from "react";
import UserHeader from "../../Components/UserComponents/UserHeader";
import UserNavbar from "../../Components/UserComponents/UserNavbar";
import UserDashboardMainContent from "../../Components/UserComponents/UserDashboardMainContent";
import DashboardMessagecontainer from "../../Components/UserComponents/DashboardMessagecontainer";
import DashboardReminderContainer from "../../Components/Common/DashboardReminderContainer";

const EmpDashboard = () => {
  const theme = useTheme();
  const bgColor = theme?.palette?.background?.default;
  const [open,setOpen] = useState(false)

  return (
    <Box width="100%" bgcolor={bgColor} display="flex">
      <Box display="flex">
        <UserNavbar open={open} setOpen={setOpen} />
      </Box>
      <Box sx={{
        ml:36,
        '@media (max-width: 600px)' :{
          ml:0,
          width:'100%',
        }
      }}
      // ml={36}
      >
        <UserHeader open={open} setOpen={setOpen} />
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
