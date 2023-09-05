import { Box, Typography } from '@mui/material'
import React from 'react'
import ReminderIcon from "../../Icons/Reminder.svg"

const DashboardReminderContainer = () => {
  return (
    <Box
      ml={2}
      mt={2}
      width={300}
      height={350}
      bgcolor="#fff"
      borderRadius="20px"
    >
       <Box display="flex" alignItems="center" justifyContent="space-around" >
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
       {/* reminds */}
       <Box width="90%" height={60} bgcolor="#EEF7FD" m={2} mb={1} display="flex" alignItems="center" justifyContent="space-evenly">
        <img src={ReminderIcon} alt="reminder" />
        <Typography>
          Lorem ipsum Birthday
        </Typography>
       </Box>
       {/* remind end */}
       <Box width="90%" height={60} bgcolor="#EEF7FD" m={2} mb={1} display="flex" alignItems="center" justifyContent="space-evenly">
        <img src={ReminderIcon} alt="reminder" />
        <Typography>
          Lorem ipsum Birthday
        </Typography>
       </Box>
       <Box width="90%" height={60} bgcolor="#EEF7FD" m={2} mb={1} display="flex" alignItems="center" justifyContent="space-evenly">
        <img src={ReminderIcon} alt="reminder" />
        <Typography>
          Lorem ipsum Birthday
        </Typography>
       </Box>
    </Box>
  )
}

export default DashboardReminderContainer