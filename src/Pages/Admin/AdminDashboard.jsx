import { Box, Grid, Stack, Typography, useTheme } from "@mui/material";
import React from "react";
import AdminNavbar from "../../Components/AdminComponents/AdminNavbar";
import AdminHeader from "../../Components/AdminComponents/AdminHeader";
import TaskUpdatesContainer from "../../Components/AdminComponents/TaskUpdatesContainer";
import DashboardReminderContainer from "../../Components/Common/DashboardReminderContainer";
import CurrentProjects from "../../Components/AdminComponents/CurrentProjects";

function AdminDashboard() {
  const theme = useTheme();
  const bgColor = theme?.palette?.background?.default;
  return (
    <Grid container bgcolor={bgColor} spacing={1}>
      <Grid
        item
        sx={{
          display: { xs: "none", sm: "block" },
          borderRadius: "0px 30px 30px 0px",
          // backgroundColor: "red",
          position:{xs:'static', sm:'fixed'}
        }}
        md={2}
        sm={2}
      >
        <AdminNavbar />
      </Grid>

      <Grid container item xs={12} sm={10} sx={{marginLeft:{xs:0,sm:30}}}>
        <Box sx={{ width: "100%" }}>
          <Stack rowGap={1} columnGap={1}>
            <Grid item xs={12}>
              <AdminHeader />
            </Grid>
            <Grid container item xs={12} sm={12} p={1}>
              <Grid item xs={12}>
                <Typography fontWeight="bold" fontSize="22px">
                  Dashboard
                </Typography>
              </Grid>
              <Grid item xs={12} sm={8} md={8}>
                {/* <Box>First Container (3x)</Box> */}
                <TaskUpdatesContainer />
              </Grid>

              <Grid
                item
                xs={12}
                sm={4}
                md={4}
                // style={{ backgroundColor: "red", height: 20 }}
              >
                <DashboardReminderContainer height={"100%"} />
              </Grid>
            </Grid>
            <Grid container item xs={12} sm={12} p={1}>
              <Grid item xs={12} sm={12} >
                
                  <CurrentProjects />
                {/* </Box> */}
              </Grid>
            </Grid>
          </Stack>
        </Box>
      </Grid>
    </Grid>
  );
}

export default AdminDashboard;
