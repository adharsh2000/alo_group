import { Box, Button, Typography } from "@mui/material";
import React from "react";
import ReminderIcon from "../../Icons/Reminder.svg";
import AddIcon from '@mui/icons-material/Add';

const DashboardReminderContainer = ({ height }) => {
  return (
    <Box
      ml={!height && 2}
      mt={!height && 2}
      width={height ? "99%" : 300}
      height={height ? height : 350}
      bgcolor="#fff"
      borderRadius="20px"
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      // alignItems="center"
      pb={2}
    >
      <Box display="flex" alignItems="center" flexDirection="column" justifyContent="space-around">
        <Box display="flex" justifyContent="space-around" width="100%">
        <Typography mt={1}>Reminder</Typography>
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
      {/* </Box>
      <Box> */}

      
      {/* reminds */}
      <Box
        width="90%"
        height={60}
        bgcolor="#EEF7FD"
        m={2}
        mb={1}
        display="flex"
        alignItems="center"
      >
        <Box pl={1} width="20%">
          <img src={ReminderIcon} alt="reminder" />
        </Box>
        <Box width="80%" textAlign="center">
          <Typography textAlign="center">Lorem ipsum Birthday</Typography>
        </Box>
      </Box>
      {/* remind end */}
       {/* reminds */}
       <Box
        width="90%"
        height={60}
        bgcolor="#EEF7FD"
        m={2}
        mb={1}
        display="flex"
        alignItems="center"
      >
        <Box pl={1} width="20%">
          <img src={ReminderIcon} alt="reminder" />
        </Box>
        <Box width="80%" textAlign="center">
          <Typography textAlign="center">Lorem ipsum Birthday</Typography>
        </Box>
      </Box>
      {/* remind end */}

       {/* reminds */}
       <Box
        width="90%"
        height={60}
        bgcolor="#EEF7FD"
        m={2}
        mb={1}
        display="flex"
        alignItems="center"
      >
        <Box pl={1} width="20%">
          <img src={ReminderIcon} alt="reminder" />
        </Box>
        <Box width="80%" textAlign="center">
          <Typography textAlign="center">Lorem ipsum Birthday</Typography>
        </Box>
      </Box>
      {/* remind end */}

      </Box>
     
      <Button 
      startIcon={<AddIcon />}
      sx={{
        backgroundColor:'#1272A5',
        color:'#fff',
        width:200,
        marginX:'auto',
        '&:hover':{
          backgroundColor:'#1272A5',
        }
      }}>
          Add Reminder
      </Button>
    </Box>
  );
};

export default DashboardReminderContainer;
