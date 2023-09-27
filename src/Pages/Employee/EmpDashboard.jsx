import React from "react";
import { Box } from "@mui/material";
// import UserHeader from "../../Components/UserComponents/UserHeader";
// import UserNavbar from "../../Components/UserComponents/UserNavbar";
import UserDashboardMainContent from "../../Components/UserComponents/UserDashboardMainContent";
import DashboardMessagecontainer from "../../Components/UserComponents/DashboardMessagecontainer";
import DashboardReminderContainer from "../../Components/Common/DashboardReminderContainer";
import EmpLayout from "./EmpLayout";

const EmpDashboard = () => {
  // const theme = useTheme();
  // const bgColor = theme?.palette?.background?.default;
  // const [open,setOpen] = useState(false)

  return (
    <EmpLayout>
      <Box
        display="flex"
        sx={{
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        <UserDashboardMainContent />
        <Box display="flex" flexDirection="column">
          <DashboardMessagecontainer />
          <DashboardReminderContainer />
        </Box>
      </Box>
    </EmpLayout>
  );
};

export default EmpDashboard;
