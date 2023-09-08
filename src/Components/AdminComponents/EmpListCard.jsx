import React from "react";
import { Avatar, Box, IconButton, Typography, useTheme } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const priorityColor = (priority) => {
    if(priority === "High"){
      return "#FF0000";
    }else if(priority === "Low"){
      return "#00FF1A";
    }else if(priority === "Medium"){
      return "#FFF500";
    }
  }

const EmpListCard = ({ task }) => {
  const theme = useTheme();
  const shadow = theme?.shape?.shadow;
  return (
    <Box
      width="100%"
      p
      borderRadius="10px"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      border="1px solid #D9D9D9"
      boxShadow={shadow}
      mb={1}
    >
      <Avatar
        alt="Remy Sharp"
        src="/static/images/avatar/1.jpg"
        sx={{ width: 56, height: 56, borderRadius: 1 }}
      />
      <Box>
        <Typography textAlign="center">Name</Typography>
        <Typography textAlign="center" fontWeight="bold">
          Lorem Ipsum
        </Typography>
      </Box>
      <Box>
        <Typography textAlign="center">{task ? 'Assigning Date' : 'Gender'}</Typography>
        <Typography textAlign="center" fontWeight="bold">
        {task ? 'jul,23,1995' : 'Male'}
        </Typography>
      </Box>
      <Box>
        <Typography textAlign="center">{task ? 'Project':'D.O.B'}</Typography>
        <Typography textAlign="center" fontWeight="bold">
        {task ? 'Travo':'jul,23,1995'}
        </Typography>
      </Box>
      <Box>
        <Typography textAlign="center">{task ? 'Task Name':'Age'}</Typography>
        <Typography textAlign="center" fontWeight="bold">
        {task ? 'Lorem ipsum':'30'}
        </Typography>
      </Box>
      <Box>
        <Typography textAlign="center">{task ? 'Priority':'Position'}</Typography>
        <Typography textAlign="center" fontWeight="bold" color={task && priorityColor("High")}>
        {task ? 'High':'Front End'}
        </Typography>
      </Box>
      <Box>
        <Typography textAlign="center">{task ? 'Report':'Experience'}</Typography>
        <Typography textAlign="center" fontWeight="bold">
        {task ? 'Completed':'3+'}
        </Typography>
      </Box>
      {!task && (
        <Box>
          <Typography textAlign="center">E-Mail</Typography>
          <Typography textAlign="center" fontWeight="bold">
            LoremIpsum@gmail.com
          </Typography>
        </Box>
      )}
      {!task && (
        <Box>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </Box>
      )}
    </Box>
  );
};

export default EmpListCard;
