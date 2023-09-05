import { Box, Typography } from "@mui/material";
import React from "react";
import CalenderHalf from "../../Icons/CalenderHalf.svg";
import CalenderFull from "../../Icons/CalenderFull.svg";
import TimerFull from "../../Icons/TimerFull.svg";
import TimerHalf from "../../Icons/TimerHalf.svg";
import CheckedFull from "../../Icons/ChekedFull.svg";
import CheckedHalf from "../../Icons/CheckedHalf.svg";
import UserTaskCard from "./UserTaskCard";
// import DashboardDatePicker from "./DashboardDatePicker";

const overviewCardData = [
  {
    id: 1,
    smallIcon: CalenderFull,
    largeIcon: CalenderHalf,
    content: "Task To Do",
    count: 4,
    backGroundColor: "#B4FFE8",
    color: "#21C392",
  },
  {
    id: 2,
    smallIcon: TimerFull,
    largeIcon: TimerHalf,
    content: "In-progress",
    count: 2,
    backGroundColor: "#CABDFF",
    color: "#4B32AF",
  },
  {
    id: 3,
    smallIcon: CheckedFull,
    largeIcon: CheckedHalf,
    content: "Completed",
    count: 11,
    backGroundColor: "#FFDEDE",
    color: "#D97070",
  },
];

const UserDashboardMainContent = () => {
  return (
    <Box
      ml={1}
      mt={1}
      width={900}
      bgcolor="#fff"
    //   height="500px"
    height="auto"
      p={1}
      borderRadius="20px"
      
    >
      <Typography
        component="h5"
        sx={{
          fontWeight: "bold",
          fontSize: "20px",
          mt: 2,
          ml: 1,
        }}
      >
        Overview
      </Typography>
      <Box
        width="100%"
        height="100px"
        display="flex"
        justifyContent="space-between"
        px={4}
        mt={2}
      >
        {overviewCardData?.map((data) => (
          <Box
            width={200}
            height="100%"
            borderRadius="20px"
            bgcolor={data.backGroundColor}
            overflow="hidden"
            border="1px solid black"
          >
            <Box display="flex" alignItems="center" px={3} height="50%">
              <img src={data.smallIcon} alt="" />
              <Typography ml={1}>{data.content}</Typography>
            </Box>
            <Box
              display="flex"
              width="100%"
              alignItems="center"
              justifyContent="flex-end"
              mr={1}
              height="50%"
            >
              <Typography
                mr={3}
                sx={{
                  fontWeight: "bold",
                  fontSize: "30px",
                }}
              >
                {data.count}
              </Typography>
              <img
                src={data.largeIcon}
                alt=""
                style={{
                  bottom: 2,
                  right: 2,
                  color: data.color,
                }}
              />
            </Box>
          </Box>
        ))}
      </Box>
      {/* table start */}
      <Box display="flex" alignItems="center" mt={2}>
        <Typography
          component="h5"
          display="block"
          sx={{
            fontWeight: "bold",
            fontSize: "19px",
            mt: 2,
            ml: 1,
          }}
        >
          Work Sheet
        </Typography>
        {/* <DashboardDatePicker/> */}
        <input
          type="date"
          name="date"
          id="date"
          style={{
            marginTop: "10px",
            marginLeft: "10px",
            width: "150px",
            height: "30px",
            border: "1px solid #ccc",
            borderRadius: "5px",
            padding: "5px",
          }}
        />
      </Box>
      <Box mt={2}>
        <table style={{width:"100%",borderCollapse: 'collapse'}} border='2px solid black'>
          <tr style={{backgroundColor:'#1272A5',color:'#fff',padding:"10px"}}>
            <th>Login</th>
            <th>10am-12pm</th>
            <th>12pm-1.15pm</th>
            <th>2pm-4pm</th>
            <th>4pm-7pm</th>
            <th>Logout</th>
          </tr>
          <tr>
            <td>10.00 am</td>
            <td>lorem ipsum</td>
            <td>lorem ipsum</td>
            <td>lorem ipsum</td>
            <td>lorem ipsum</td>
            <td>7.30 pm</td>
          </tr>
        </table>
      </Box>
      {/* active task */}
      <Box display='flex' justifyContent="space-between" mt={4} mb={1} px={3}>
        <Typography sx={{
            fontSize: '20px',
            fontWeight: 'bold',
        }}>Active tasks</Typography>
        <Typography color="#1272A5">View all</Typography>
      </Box>
      <Box display="flex" flexWrap="wrap" gap={2} alignItems="center" justifyContent="space-evenly">
       <UserTaskCard width={400}/>
       <UserTaskCard width={400}/>
      </Box>
      {/* new task */}
      <Box display='flex' justifyContent="space-between" mt={4} mb={1} px={3}>
        <Typography sx={{
            fontSize: '20px',
            fontWeight: 'bold',
        }}>New tasks</Typography>
        <Typography color="#1272A5">View all</Typography>
      </Box>
      <Box display="flex" flexWrap="wrap" gap={2} alignItems="center" justifyContent="space-evenly">
       <UserTaskCard width={400}/>
       <UserTaskCard width={400}/>
      </Box>
    </Box>
  );
};

export default UserDashboardMainContent;
