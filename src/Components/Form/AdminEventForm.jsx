import {
    Box,
    Button,
    Typography,
  } from "@mui/material";
  import React from "react";
  import FormClose from "../../Icons/FormClose.svg";
  import addIcon from "../../Icons/AddIcon.svg";

const AdminEventForm = ({open,setOpen}) => {
  return (
    <Box display="flex" flexDirection="column" height="100%">
    {/* form Header */}
    <Box display="flex" alignItems="center" mt={1}>
      <Typography flex={5} variant="h6" textAlign="center">
        Add Events
      </Typography>
      <Box flex={0.5} mr={1}>
        <Box
          component="button"
          sx={{
            width: 20,
            backgroundColor: "inherit",
            border: "none",
            cursor: "pointer",
          }}
          onClick={() => setOpen(!open)}
        >
          <img src={FormClose} width={30} alt="close" />
        </Box>
      </Box>
    </Box>
    {/* form content */}
    <Box
      height="100%"
      display="flex"
      alignItems="center"
      // justifyContent="center"
      flexDirection="column"
      component="form"
    >
      <Box width={200} mt={2}>
        <Typography fontSize="14px" fontWeight="bold" marginBottom="8px">
          Event Name
        </Typography>
        <input
          type="text"
          placeholder="Event Name"
          style={{
            width: "100%",
            padding: "10px",
            borderRadius: "10px",
            outline: "none",
          }}
        />
      </Box>
      <Box width={200} mt={2}>
        <Typography fontSize="14px" fontWeight="bold" marginBottom="8px">
          Event Type
        </Typography>
        <input
          type="text"
          placeholder="Birthday"
          style={{
            width: "100%",
            padding: "10px",
            borderRadius: "10px",
            outline: "none",
          }}
        />
      </Box>
      <Box width={200} mt={2}>
        <Typography fontSize="14px" fontWeight="bold" marginBottom="8px">
          Date of the event
        </Typography>
        <input
            type="date"
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "10px",
              outline: "none",
            }}
          />
      </Box>
      <Box width={200} mt={2}>
        <Typography fontSize="14px" fontWeight="bold" marginBottom="8px">
          Time of the event
        </Typography>
        <input
          type="time"
          style={{
            width: "100%",
            padding: "10px",
            borderRadius: "10px",
            outline: "none",
          }}
        />
      </Box>
      
      <Box width={200} mt={1} display="flex" alignItems="center" justifyContent="center">
        <Button  sx={{
          backgroundColor:'#1272A5',
          color:'#fff',
          gap:2,
          '&:hover':{
              backgroundColor:"#1272A5"
          },
        //   marginBottom:2
        mt:4
        }}>
          <img src={addIcon} width={20} alt="add" />
          Add Task
        </Button>
      </Box>
    </Box>
  </Box>
  )
}

export default AdminEventForm