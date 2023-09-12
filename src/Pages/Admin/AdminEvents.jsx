import React from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import addIcon from "../../Icons/AddIcon.svg";
import Calender from "../../Icons/AdminIcons/EventCalender.svg";
import AdminEventCard from "../../Components/AdminComponents/AdminEventCard";

const AdminEvents = () => {
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
          Events
        </Typography>
        <Box
          display="flex"
          alignItems="center"
          bgcolor="#fff"
          borderRadius="10px"
          p={1}
        >
          <img src={Calender} alt="event" />
          <Typography px={3}>jul,04,23 - jul,11,23</Typography>
        </Box>
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
        >
          <img src={addIcon} width={20} alt="add" />
          Add Events
        </Button>
      </Box>
      <Box height={800}>
      <Grid container xs={12} sm={12} maxheight={300}>
        <Grid item xs={12} sm={6} display="flex" justifyContent="center" mb={2}>
          <AdminEventCard />
        </Grid>
        <Grid item xs={12} sm={6} display="flex" justifyContent="center" mb={2}>
          <AdminEventCard />
        </Grid>
        <Grid item xs={12} sm={6} display="flex" justifyContent="center" mb={2}>
          <AdminEventCard meeting={true} />
        </Grid>
        <Grid item xs={12} sm={6} display="flex" justifyContent="center" mb={2}>
          <AdminEventCard />
        </Grid>
        <Grid item xs={12} sm={6} display="flex" justifyContent="center" mb={2}>
          <AdminEventCard />
        </Grid>
        <Grid item xs={12} sm={6} display="flex" justifyContent="center" mb={2}>
          <AdminEventCard />
        </Grid>
        <Grid item xs={12} sm={6} display="flex" justifyContent="center" mb={2}>
          <AdminEventCard />
        </Grid>
      </Grid>
      </Box>
    </>
  );
};

export default AdminEvents;
