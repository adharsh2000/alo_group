import React from "react";
import { Avatar, Box, Typography } from "@mui/material";
import adminClock from "../../Icons/AdminIcons/AdminClock.svg";

const AdminEventCard = ({ meeting }) => {
  return (
    <Box
      px={2}
      py={1}
      // width="80%"
      bgcolor="#fff"
      display="flex"
      borderRadius="20px"
      sx={{
        width:{xs:'98%',md:'80%'}
      }}
    >
      <Avatar
      src="https://img.freepik.com/free-vector/about-me-concept-with-interests-hobbies_23-2148889455.jpg?w=2000"
        sx={{
          borderRadius: 1,
          width: 60,
          height: 60,
          mr:{xs:1,md:8}
        }}
      />
      <Box
        width="100%"
        display="flex"
        flexDirection="column"
        justifyContent="space-evenly"
      >
        <Typography fontWeight="bold">Lorem ipsum Birthday</Typography>
        <Box display="flex" justifyContent="space-between">
          <Typography>Today</Typography>
          {meeting && (
            <Box display="flex" alignItems="center">
              <img src={adminClock} alt="clock" />
              <Typography>10.00 am</Typography>
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default AdminEventCard;
