import { Box, ThemeProvider, createTheme } from "@mui/material";
import EmployeeLogin from "./Pages/Employee/EmployeeLogin";
import { defaultTheme } from "./Theme/CustomTheme";
import { Route, Routes } from "react-router-dom";
import AdminLogin from "./Pages/Admin/AdminLogin";
import EmpDashboard from "./Pages/Employee/EmpDashboard";
import EmpProject from "./Pages/Employee/EmpProject";
import EmpTasks from "./Pages/Employee/EmpTasks";


function App() {
  const theme = createTheme(defaultTheme());
  return (
    <ThemeProvider theme={theme} >
    <Box sx={{
      width:'100%',
      // height:'80vh',
    }}>
      <Routes>
        <Route path="/" element={<EmployeeLogin /> } />
        <Route path="/admin" element={<AdminLogin /> } />
        <Route path="/dashboard" element={<EmpDashboard /> } />
        <Route path="/projects" element={<EmpProject /> } />
        <Route path="/mytasks" element={<EmpTasks /> } />
      </Routes>
    </Box>
    </ThemeProvider>
  );
}

export default App;
