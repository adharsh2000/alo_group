import { Box, useTheme } from "@mui/material";
import React, { useState } from "react";
import UserHeader from "../../Components/UserComponents/UserHeader";
import UserNavbar from "../../Components/UserComponents/UserNavbar";
import UserDashboardMainContent from "../../Components/UserComponents/UserDashboardMainContent";
import DashboardMessagecontainer from "../../Components/UserComponents/DashboardMessagecontainer";
import DashboardReminderContainer from "../../Components/Common/DashboardReminderContainer";

const EmpDashboard = () => {
  // const theme = useTheme();
  // const bgColor = theme?.palette?.background?.default;
  // const [open,setOpen] = useState(false)

  return (
        <Box display="flex" sx={{
          flexDirection:{xs:"column",md:"row"}
        }}>
          <UserDashboardMainContent />
          <Box display="flex" flexDirection="column">
            <DashboardMessagecontainer />
            <DashboardReminderContainer />
          </Box>
        </Box>
      
  );
};

export default EmpDashboard;
