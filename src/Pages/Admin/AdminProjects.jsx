import React from "react";
import { Box, Button, Divider, Grid, Typography } from "@mui/material";
import addIcon from "../../Icons/AddIcon.svg";
import AdminProjectCard from "../../Components/AdminComponents/AdminProjectCard";

const AdminProjects = () => {
  return (
    <>
      <Box
        p={1}
        width="100%"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <Typography fontWeight="bold" fontSize="22px">
          Projects
        </Typography>

        <Button
          type="submit"
          sx={{
            backgroundColor: "#1272A5",
            color: "#fff",
            gap: 2,
            "&:hover": {
              backgroundColor: "#1272A5",
            },
          }}
          //   onClick={() => setOpen(!open)}
        >
          <img src={addIcon} width={20} alt="add" />
          New Project
        </Button>
      </Box>
      <Box height={800} bgcolor="#fff" borderRadius="20px">
        <Typography p={2} fontWeight="bold">
          On Going Projects
        </Typography>
        <Divider />
        <Grid container xs={12} sm={12}>
          <Grid
            item
            xs={12}
            sm={6}
            display="flex"
            justifyContent="center"
            mb={2}
            p={2}
          >
            <AdminProjectCard />
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            display="flex"
            justifyContent="center"
            mb={2}
            p={2}
          >
            <AdminProjectCard />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default AdminProjects;
