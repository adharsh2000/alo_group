import React from "react";
import { Box, Typography } from "@mui/material";
// import UserNavbar from "../../Components/UserComponents/UserNavbar";
// import UserHeader from "../../Components/UserComponents/UserHeader";
import LeaveCalender from "../../Components/Common/LeaveCalender";

const EmpLeave = () => {
  // const theme = useTheme();
  // const bgColor = theme?.palette?.background?.default;
  return (
    // <Box width="100%" bgcolor={bgColor} display="flex">
    //   <Box display="flex">
    //     <UserNavbar />
    //   </Box>
    //   <Box ml={36}>
    //     <UserHeader />
    <Box
      width="97%"
      bgcolor="#fff"
      // ml={1}
      height={600}
      mt={2}
      borderRadius="20px"
      //   display="flex"
      //   alignItems='center'
      //   flexDirection="column"
      overflow="hidden"
      // sx={{
      //   ml:{xs:0,md:6}
      // }}
      mx="auto"
    >
      <Box
        width="100%"
        display="flex"
        height={50}
        alignItems="center"
        justifyContent="space-between"
        px={3}
        pt={2}
      >
        <Typography fontWeight="bold" fontSize="22px">
          Leave Records
        </Typography>
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
      <Box
        height={450}
        width="100%"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Box>
          <LeaveCalender />
          {/* <input type="date" /> */}
        </Box>
      </Box>
    </Box>
    //   </Box>
    // </Box>
  );
};

export default EmpLeave;
