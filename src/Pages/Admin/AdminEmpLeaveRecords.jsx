import React from "react";
import { Box, Divider, Grid, Typography } from "@mui/material";
import LeftArrowIcon from "../../Icons/LeftArrowIcon.svg";
import LeaveCalender from "../../Components/Common/LeaveCalender";

const AdminEmpLeaveRecords = () => {
  return (
    <>
      <Box height={600} bgcolor="#fff" borderRadius="20px">
        <Box
          display="flex"
          alignItems="center"
          px={2}
          justifyContent="space-between"
        >
          <Box display="flex" alignItems="center">
            <img src={LeftArrowIcon} alt="back" />
            <Typography py={2} fontWeight="bold">
              Lorem Ipsum’s Leave Records
            </Typography>
          </Box>
          <Box display="flex" alignItems="center" gap={1}>
            <Box
              bgcolor="#FF7070"
              width={20}
              height={20}
              borderRadius="50%"
            ></Box>
            <Typography>Denotes leave</Typography>
          </Box>
        </Box>
        <Divider />
        <Grid container xs={12} sm={12}>
          <Grid
            item
            xs={12}
            //   sm={6}
            display="flex"
            justifyContent="center"
            mb={2}
            p={2}
          >
            {/* <AdminProjectCard open={open} setOpen={setOpen}  /> */}
            <LeaveCalender />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default AdminEmpLeaveRecords;
