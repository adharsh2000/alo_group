import React, { useState } from "react";
import { Box, Grid, Typography, useTheme } from "@mui/material";
import filterIcon from "../../Icons/AdminIcons/FilterIcon.svg";
import AdminLeaveCard from "../../Components/AdminComponents/AdminLeaveCard";

const AdminLeaveReq = () => {
  const theme = useTheme();
  const shadow = theme?.shape?.shadow;
  const [type, setType] = useState("newReq");

  const handleSelectChange = (e) => {
    const newValue = e.target.value;
    setType(newValue);
    console.log(newValue);
  };
  return (
    <>
      <Box
        p={1}
        // width="60%"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        // bgcolor="red"
        sx={{
          width: { xs: "99%", md: "60%" },
        }}
      >
        <Typography fontWeight="bold" fontSize="22px">
          Leave Requests
        </Typography>
        <Box
          sx={{
            display: "flex",
            gap: 2,
            backgroundColor: "#fff",
            py: 1,
            px: 2,
            borderRadius: "10px",
            boxShadow: shadow,
          }}
        >
          <img src={filterIcon} alt="filter" width={20} />
          <select
            name=""
            id=""
            style={{ outline: "none", border: "none" }}
            onChange={handleSelectChange}
            value={type}
          >
            <option value="newReq">New</option>
            <option value="accepted">Accepted</option>
            <option value="declined">Declined</option>
          </select>
        </Box>
      </Box>
      <Box bgcolor="#fff" borderRadius="10px">
        <Grid container xs={12} sm={12}>
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            display="flex"
            justifyContent="center"
            mb={2}
            p={2}
            // bgcolor="red"
          >
            <AdminLeaveCard type={type} />
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            display="flex"
            justifyContent="center"
            mb={2}
            p={2}
            // bgcolor="yellow"
          >
            <AdminLeaveCard type={type} />
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            display="flex"
            justifyContent="center"
            mb={2}
            p={2}
            // bgcolor="red"
          >
            <AdminLeaveCard type={type} />
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            display="flex"
            justifyContent="center"
            mb={2}
            p={2}
            // bgcolor="yellow"
          >
            <AdminLeaveCard type={type} />
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            display="flex"
            justifyContent="center"
            mb={2}
            p={2}
            // bgcolor="red"
          >
            <AdminLeaveCard type={type} />
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            display="flex"
            justifyContent="center"
            mb={2}
            p={2}
            // bgcolor="yellow"
          >
            <AdminLeaveCard type={type} />
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            display="flex"
            justifyContent="center"
            mb={2}
            p={2}
            // bgcolor="red"
          >
            <AdminLeaveCard type={type} />
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            display="flex"
            justifyContent="center"
            mb={2}
            p={2}
            // bgcolor="yellow"
          >
            <AdminLeaveCard type={type} />
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            display="flex"
            justifyContent="center"
            mb={2}
            p={2}
            // bgcolor="red"
          >
            <AdminLeaveCard type={type} />
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            display="flex"
            justifyContent="center"
            mb={2}
            p={2}
            // bgcolor="yellow"
          >
            <AdminLeaveCard type={type} />
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            display="flex"
            justifyContent="center"
            mb={2}
            p={2}
            // bgcolor="red"
          >
            <AdminLeaveCard type={type} />
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            display="flex"
            justifyContent="center"
            mb={2}
            p={2}
            // bgcolor="yellow"
          >
            <AdminLeaveCard type={type} />
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            display="flex"
            justifyContent="center"
            mb={2}
            p={2}
            // bgcolor="red"
          >
            <AdminLeaveCard type={type} />
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            display="flex"
            justifyContent="center"
            mb={2}
            p={2}
            // bgcolor="yellow"
          >
            <AdminLeaveCard type={type} />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default AdminLeaveReq;
