import { Box, ThemeProvider, createTheme } from "@mui/material";
import EmployeeLogin from "./Pages/Employee/EmployeeLogin";
import { defaultTheme } from "./Theme/CustomTheme";
import { Outlet, Route, Routes } from "react-router-dom";
import AdminLogin from "./Pages/Admin/AdminLogin";
import EmpDashboard from "./Pages/Employee/EmpDashboard";
import EmpProject from "./Pages/Employee/EmpProject";
import EmpTasks from "./Pages/Employee/EmpTasks";
import EmpMail from "./Pages/Employee/EmpMail";
import EmpAllMail from "./Pages/Employee/EmpAllMail";
import EmpNotifications from "./Pages/Employee/EmpNotifications";
import EmpMessages from "./Pages/Employee/EmpMessages";
import EmpLeave from "./Pages/Employee/EmpLeave";
import AdminDashboard from "./Pages/Admin/AdminDashboard";
import AdminLayout from "./Pages/Admin/AdminLayout";
import AdminEmpList from "./Pages/Admin/AdminEmpList";
import AdminTaskList from "./Pages/Admin/AdminTaskList";
import AdminEvents from "./Pages/Admin/AdminEvents";
import AdminProjects from "./Pages/Admin/AdminProjects";
import AdminLeaveReq from "./Pages/Admin/AdminLeaveReq";
import AdminEmpWorkSheetTable from "./Pages/Admin/AdminEmpWorkSheetTable";
import AdminEmpLeaveRecords from "./Pages/Admin/AdminEmpLeaveRecords";
import EmpLayout from "./Pages/Employee/EmpLayout";


function App() {
  const theme = createTheme(defaultTheme());
  return (
    <ThemeProvider theme={theme} >
      <Box sx={{
        width: '100%',
        // height:'80vh',
      }}>
        <Routes>
          {/* employee */}
          <Route path="/" element={<EmployeeLogin />} />
          <Route path="/*"
            element={
              <EmpLayout>
                <Outlet />
              </EmpLayout>
            }
          >
            <Route path="dashboard" element={<EmpDashboard />} />
            <Route path="projects" element={<EmpProject />} />
            <Route path="mytasks" element={<EmpTasks />} />
            <Route path="mailing" element={<EmpMail />} />
            <Route path="allmails" element={<EmpAllMail />} />
            <Route path="notifications" element={<EmpNotifications />} />
            <Route path="messages" element={<EmpMessages />} />
            <Route path="leaverecords" element={<EmpLeave />} />
          </Route>

          {/* admin */}
          {/* <Route element={<AdminLayout></AdminLayout>} >
            
              <Route path="/admin" element={<AdminLogin />} />
              <Route path="/admin/dashboard" element={<AdminDashboard />} />
              <Route path="/admin/emplist" element={<AdminEmpList /> }/>
            
          </Route> */}
          <Route path="/admin" element={<AdminLogin />} />
          <Route
            path="/admin/*"
            element={
              <AdminLayout>
                <Outlet />
              </AdminLayout>
            }
          >
            {/* <Route index element={<AdminLogin />} /> */}
            <Route path="dashboard" element={<AdminDashboard />} />
            <Route path="emplist" element={<AdminEmpList />} />
            <Route path="tasklist" element={<AdminTaskList />} />
            <Route path="events" element={<AdminEvents />} />
            <Route path="projects" element={<AdminProjects />} />
            <Route path="leaves" element={<AdminLeaveReq />} />
            <Route path="emp/worksheet" element={<AdminEmpWorkSheetTable />} />
            <Route path="emp/leaverecordes" element={<AdminEmpLeaveRecords />} />
          </Route>
        </Routes>
      </Box>
    </ThemeProvider>
  );
}

export default App;
