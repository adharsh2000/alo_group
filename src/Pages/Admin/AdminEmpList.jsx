import React from "react";
import { Box, Button, Grid, Typography, useTheme } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import AdminEmpListContainer from "../../Components/AdminComponents/AdminEmpListContainer";
import { Link } from "react-router-dom";

const AdminEmpList = () => {
  const theme = useTheme();
  const bgcolor = theme?.palette?.primary?.main;

  return (
    <>
      <Grid
        container
        item
        xs={12}
        sm={12}
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        {/* Typography */}
        <Grid
          item
          xs={6}
          sm={4}
          sx={{ order: { xs: 1, sm: 1 } }}
          display="flex"
          alignItems="center"
          //   justifyContent="center"
          pl={1}
        >
          <Typography fontWeight="bold" fontSize="20px">
            Employees
          </Typography>
        </Grid>

        {/* Buttons */}
        <Grid
          item
          xs={12}
          sm={4}
          sx={{ order: { xs: 3, sm: 2 } }}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Box display="flex" bgcolor="white" borderRadius="10px">
            <Button
              sx={{
                backgroundColor: bgcolor,
                color: "#fff",
                "&:hover": {
                  backgroundColor: bgcolor,
                },
                "&:focus": {
                  backgroundColor: bgcolor,
                },
                padding: "10px 50px",
              }}
            >
              <Link
                to="/admin/emplist"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                List
              </Link>
            </Button>
            <Button
              sx={{
                backgroundColor: "#fff",
                color: bgcolor,
                padding: "10px 50px",
              }}
            >
              <Link
                to="/admin/tasklist"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Task
              </Link>
            </Button>
          </Box>
        </Grid>

        {/* Add Employee Button */}
        <Grid
          item
          xs={6}
          sm={4}
          sx={{ order: { xs: 2, sm: 3 } }}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Button
            startIcon={<AddIcon />}
            sx={{
              backgroundColor: bgcolor,
              color: "#fff",
              "&:hover": {
                backgroundColor: bgcolor,
              },
              "&:focus": {
                backgroundColor: bgcolor,
              },
              padding: "10px 50px",
              whiteSpace: "nowrap",
            }}
          >
            Add Employee
          </Button>
        </Grid>
      </Grid>
      <AdminEmpListContainer />
    </>
  );
};

export default AdminEmpList;
